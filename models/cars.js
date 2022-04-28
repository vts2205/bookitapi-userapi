
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cars', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    car_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    car_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "0-sedan,1-mini,2-rental,3-outstation"
    },
    car_register_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    car_model: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    base_rate: {
      type: DataTypes.INTEGER,
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
    tableName: 'cars',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "car_id" },
        ]
      },
      {
        name: "index",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
