
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    payment_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "cc,dd,upi,nb"
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Success, Failed"
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
    tableName: 'payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_id" },
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
