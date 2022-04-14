const pg = require('pg');
const {dbConfig, knexDbConfig} = require('../config/index')
const knex = require('knex')(knexDbConfig);
const client = new pg.Client(dbConfig);
client.connect(err => {
    if (err) throw err;
});
exports.queryDatabase = function (query) {
    return client
        .query(query)
        .then(result => {
            console.log(result.rows);
            console.log(`Rows affected: ${result.rowCount}`);
            return result.rows;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}
/*
SELECT gr.id as gameId, winner."nickName" as winnerNickname, loser."nickName" as loserNickname, date FROM game_results gr
left join players winner on gr.winner_id = winner.id
left join players loser on gr.loser_id = loser.id
*/
exports.getGameResultsKnex = function () {
    return knex.select({
        gameId: 'gr.id',
        winner_nickName: 'winner.nickName',
        loser_nickName: 'loser.nickName',
        date: 'gr.date',
    })
        .from({gr: 'game_results'})
        .leftJoin({winner: 'players'}, 'gr.winner_id', 'winner.id')
        .leftJoin({loser: 'players'}, 'gr.loser_id', 'loser.id');
}
exports.insertKnex = function (table, data) {
    return knex(table).insert(data).returning('id').then(id => {
        return id[0]
    })
}


