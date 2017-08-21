
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'go to the gym', user_id: 1},
        {id: 2, title: 'get the mail', user_id: 2},
        {id: 3, title: 'bring some food', user_id: 3}
      ]);
    });
};
