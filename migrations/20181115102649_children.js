
exports.up = function (knex, Promise) {
    return knex.schema.createTable('children', (table) => {
        table.increments('id').primary(),
        table.string('Name'),
        table.string('Location'),
        table.string('Subject')
    })
}
  


exports.down = function (knex, Promise) {
    return knex.schema.dropTable('children')
};
