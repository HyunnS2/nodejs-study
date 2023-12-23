// const { sequelize } = require(".");
const { DataTypes } = require("sequelize");

const studentModel = (sequelize) => {
  const Student = sequelize.define("Student", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    userid: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(63),
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });

  return Student;
};

module.exports = studentModel;
