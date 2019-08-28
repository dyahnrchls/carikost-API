'use strict';
module.exports = (sequelize, DataTypes) => {
  const dorm = sequelize.define('dorm', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    photo: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.STRING,
    owner_phone: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  dorm.associate = function(models) {
    // associations can be defined here
    dorm.belongsTo(models.user, {
      foreignKey: 'created_by',
      as: 'createdBy'
    })
  };
  return dorm;
};