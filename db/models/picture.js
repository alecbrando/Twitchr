'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    tags: DataTypes.STRING,
    urlRef: DataTypes.STRING
  }, {});
  Picture.associate = function(models) {
    Picture.belongsTo(models.User, {foreignKey: "userId"});
    Picture.hasMany(models.Comment, {foreignKey: "pictureId"})
  };
  return Picture;
};