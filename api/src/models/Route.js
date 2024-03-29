const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "route",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      originName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destinyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origin: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      destiny: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      points: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allownull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hours: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      place: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      restriction: {
        type: DataTypes.STRING,
      },
      manejante: {
        type: DataTypes.STRING,
      },
      km: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.STRING,
      },
      center: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      timestamps: false,
    }
  );
};
