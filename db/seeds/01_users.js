
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Ali', email: 'ali@email.com'},
        {id: 2, name: 'Suhair', email: 'suhair@email.com'},
        {id: 3, name: 'Mahmood', email: 'mahmood@email.com'}
      ]);
    });
};
