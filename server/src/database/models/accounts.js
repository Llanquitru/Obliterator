import { DataTypes } from 'sequelize'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @returns
 */
const Account = sequelize => {
  return sequelize.define(
    'Account',
    {
      account_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      account_name: DataTypes.STRING,
      account_password: DataTypes.STRING,
      account_email: DataTypes.STRING,
      is_artist: DataTypes.STRING,
      user_id: DataTypes.INTEGER
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'Accounts'
    }
  )
}

export { Account }
