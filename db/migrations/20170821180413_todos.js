
exports.up = function (knex, Promise) {
  return knex.schema.createTable('todos', (t) => {
    t.increments('id')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
    t.string('title').notNullable()
    t.boolean('completed').notNullable().defaultTo(false)
    t.integer('user_id').references('id').inTable('users')
}) 

};

exports.down = function (knex, Promise) {
  return knex.schema.fropTable('todos')
};
