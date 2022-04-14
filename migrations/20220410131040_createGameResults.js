exports.up = function(knex) {
    return knex.schema
        .createTable('game_results', function (table) {
            table.increments('id');
            table.integer('winner_id', 255).notNullable();
            table.integer('loser_id', 255).notNullable();
            table.datetime('date').notNullable().defaultTo(knex.fn.now());
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable("game_results")
};
