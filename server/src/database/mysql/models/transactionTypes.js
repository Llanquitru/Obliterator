import { DataTypes } from 'sequelize'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @returns
 */
const TransactionType = sequelize => {
  return sequelize.define(
    'TransactionType',
    {
      type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      transaction_type: DataTypes.STRING
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'transactionTypes'
    }
  )
}

export { TransactionType }
