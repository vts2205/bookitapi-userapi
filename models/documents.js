
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    document_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    driver_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'drivers',
        key: 'driver_id'
      }
    },
    national_id_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pan_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    license_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    national_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pan_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    license_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expiry_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
    tableName: 'documents',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "document_id" },
        ]
      },
      {
        name: "index",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "driver_id",
        using: "BTREE",
        fields: [
          { name: "driver_id" },
        ]
      },
    ]
  });
};
