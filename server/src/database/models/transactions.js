import { DataTypes } from 'sequelize'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @returns
 */
const Transaction = sequelize => {
  return sequelize.define(
    'Transaction',
    {
      transaction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      transaction_date: DataTypes.DATE,
      transaction_amount: DataTypes.INTEGER,
      transaction_type: DataTypes.INTEGER,
      user_buyer: DataTypes.INTEGER,
      user_seller: DataTypes.INTEGER
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'transactions'
    }
  )
}

export { Transaction }
