'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Picture, { foreignKey: 'pictureId'})
    Comment.belongsTo(models.User, { foreignKey: "userId"})
  };
  return Comment;
};