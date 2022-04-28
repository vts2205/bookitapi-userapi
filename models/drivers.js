
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drivers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    driver_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    current_car_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'cars',
        key: 'car_id'
      }
    },
    document_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'documents',
        key: 'document_id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'drivers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "driver_id" },
        ]
      },
      {
        name: "Index",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "current_car_id",
        using: "BTREE",
        fields: [
          { name: "current_car_id" },
        ]
      },
      {
        name: "document_id",
        using: "BTREE",
        fields: [
          { name: "document_id" },
        ]
      },
    ]
  });
};
