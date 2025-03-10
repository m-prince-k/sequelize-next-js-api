'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
     
    }
  }
  User.init({
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    description	: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
  });
  return User;
};