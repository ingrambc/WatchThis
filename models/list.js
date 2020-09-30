module.exports = function(sequelize, DataTypes) {
    var List = sequelize.define("List", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      service: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      watched: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [0, 500]
        }
      }
    });
  
    List.associate = function(models) {
      // We're saying that a List should belong to an User
      // A List can't be created without a User due to the foreign key constraint
      List.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return List;
  };