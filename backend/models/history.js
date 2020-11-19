module.exports = (sequelize, DataTypes) => {

  const History = sequelize.define('history', {
    searchTerms : {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    createdAt: {
      type: DataTypes.DATEONLY
    }
  });

  return History
}