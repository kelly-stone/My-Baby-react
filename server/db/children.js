const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getChildren() {
    return db('children'). select()
}




module.exports = {
    getChildren
}