const fs = require('fs');
const knex = require('knex');
const fileName = './app/files/gamesResult.txt';
const databaseController = require('./pgDatabaseController');
exports.finishGame = function finishGame(req, res) {
    const body = req.body;
    // const gameResultFile = fs.readFileSync(fileName).toString();
    // console.log(gameResultFile)
    // let gameNumber;
    // if (gameResultFile.length - 1 < 0) {
    //     gameNumber = 1;
    // } else {
    //     gameNumber = gameResultFile.split('\n').length
    // }
    // fs.appendFile(fileName,
    //     JSON.stringify({
    //         id: gameNumber,
    //         winnerId: body.winnerId,
    //         loserId: body.loserId,
    //     }) + '\n',
    //     (err) => {
    //         if (err) throw err;
    //         console.log(`Game № ${gameNumber} saved!`);
    //         res.send({
    //             id: gameNumber
    //         });
    //     })
    databaseController.queryDatabase(`INSERT INTO game_results (winner_id, loser_id) VALUES (${body.winnerId}, ${body.loserId})`);
}

exports.gamesResult = function (req, res) {
    databaseController.queryDatabase('SELECT gr.id as game_id, winner."nickName" as winner_nickname, loser."nickName" as loser_nickname, date ' +
            'FROM game_results gr ' +
            'left join players winner on gr.winner_id = winner.id ' +
            'left join players loser on gr.loser_id = loser.id')
        .then(rows => {
            res.send(rows);
    });
}
exports.gamesResultKnex = function (req, res) {
    databaseController.getGameResultsKnex().then(rows => {res.send(rows)});
}

exports.finishGameKnex = function finishGameKnex(req, res) {
    const body = req.body;
    databaseController.insertKnex('game_results', {winner_id: body.winnerId, loser_id: body.loserId}).then(result => {
        res.send(result)
    })
}

