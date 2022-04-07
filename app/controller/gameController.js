const fs = require('fs');
const fileName = './app/files/gamesResult.txt';

exports.finishGame = function finishGame(req, res) {
    const body = req.body;
    const gameResultFile = fs.readFileSync(fileName).toString();
    console.log(gameResultFile)
    let gameNumber;
    if (gameResultFile.length - 1 < 0) {
        gameNumber = 1;
    } else {
        gameNumber = gameResultFile.split('\n').length
    }
    fs.appendFile(fileName,
        JSON.stringify({
            id: gameNumber,
            winnerId: body.winnerId,
            loserId: body.loserId,
        }) + '\n',
        (err) => {
            if (err) throw err;
            console.log(`Game № ${gameNumber} saved!`);
            res.send({
                id: gameNumber
            });
        })
}

exports.gamesResult = function (req, res) {
    const resultFileArray = fs.readFileSync(fileName).toString().split('\n').filter(el => el !== '');
    console.log(5555);
    res.send(resultFileArray.map(row => {
        if (row !== '') {return JSON.parse(row);}
    }))
}
