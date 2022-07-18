import { DataTypes } from 'sequelize'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @returns
 */
const User = sequelize => {
  return sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_name: DataTypes.STRING,
      user_description: DataTypes.STRING,
      user_image_url: DataTypes.STRING,
      location_id: DataTypes.INTEGER,
      account_id: DataTypes.INTEGER
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'users'
    }
  )
}

export { User }
