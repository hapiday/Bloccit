'use strict';
const faker = require("faker");

let advertisements = [];
for(let i = 1 ; i <= 15 ; i++){
  advertisements.push({
    title: faker.hacker.noun(),
    description: faker.hacker.phrase(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('Advertisements', advertisements, {});
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:*/
      return queryInterface.bulkDelete('People', null, {});
  }
};
