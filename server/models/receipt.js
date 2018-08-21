'use strict';
export default (sequelize, DataTypes) => {
  const Receipt = sequelize.define('Receipt', {
    donor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email_id: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true
      }
    },
    mobile: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    getterMethods: {
      ReceiptNumber() {
        return 'TUFRCPT' + this.id
      }
    }
  });
  Receipt.associate = (models) => {
    // associations can be defined here
  };
  return Receipt;
};