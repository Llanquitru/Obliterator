import { DataTypes } from 'sequelize'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @returns
 */
const Polygon = sequelize => {
  return sequelize.define(
    'Polygon',
    {
      polygons_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      polygons_quantity: DataTypes.INTEGER,
      polygons_type: DataTypes.STRING
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'polygons'
    }
  )
}

export { Polygon }
