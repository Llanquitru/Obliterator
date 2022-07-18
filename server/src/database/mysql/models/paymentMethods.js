import { DataTypes } from 'sequelize'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @returns
 */
const PaymentMethod = sequelize => {
  return sequelize.define(
    'PaymentMethod',
    {
      method_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      method_name: DataTypes.STRING
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'paymentMethods'
    }
  )
}

export { PaymentMethod }
