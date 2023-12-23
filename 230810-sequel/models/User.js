// 이건 필요없음
// const { sequelize } = require(".");

const { DataTypes } = require("sequelize");

const UserModel = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //NOT NULL
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return User;
};

module.exports = UserModel;
