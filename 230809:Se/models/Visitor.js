// const { sequelize } = require("Sequelize");

// visitor에 대한 테이블 정의
const Visitor = function (sequelize, DataTypes) {
  // Sequelize는 models/index.js에 있는 sequelize
  // DataTypes는 models/index.js에 있는 Sequelize
  const model = sequelize.define(
    "visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncreament: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return model;
};

module.exports = Visitor;
