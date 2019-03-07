'use strict';
module.exports = (sequelize, DataTypes) => {
  const Advertisements = sequelize.define('Advertisements', {
    source: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Advertisements.associate = function(models) {
    // associations can be defined here
  };
  return Advertisements;
};