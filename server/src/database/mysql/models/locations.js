import { DataTypes } from 'sequelize'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @returns
 */
const Location = sequelize => {
  return sequelize.define(
    'Location',
    {
      location_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      location_name: DataTypes.STRING
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'locations'
    }
  )
}

export { Location }
