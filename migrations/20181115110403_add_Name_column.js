
exports.up = function(knex, Promise) {
    return knex.schema.table('children', (table) => {
        table.string('Date')
    })
};

exports.down = function(knex, Promise) {
    return  knex.schema.table('children', (table) => {
    table.dropColumn('Date')
    })
};
