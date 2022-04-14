/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('players').del()
  await knex('players').insert([
    {id: 1, nickName: 'Ivan'},
    {id: 2, nickName: 'Gibby'},
    {id: 3, nickName: 'Ray'},
    {id: 4, nickName: 'bloodHunter'},
    {id: 5, nickName: 'Petya'},
    {id: 6, nickName: 'Jon'}
  ]);
};
