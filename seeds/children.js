
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        {id: 1, Name: 'Jadon', Date:"16/06/2015", Location:"home", Subject:"1st birthday party"},
        {id: 2, Name: 'Jadon',  Date:"16/06/2016", Location:"home", Subject:"2nd birthday party"},
        
      ]);
    });
};
