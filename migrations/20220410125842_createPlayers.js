exports.up = function(knex) {
    return knex.schema
        .createTable('players', function (table) {
            table.increments('id');
            table.string('nickName', 255).notNullable();
        });
};
exports.down = function(knex) {
    return knex.schema
        .dropTable("players")
};
