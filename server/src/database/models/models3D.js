import { DataTypes } from 'sequelize'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @returns
 */
const Model3D = sequelize => {
  return sequelize.define(
    'Model3D',
    {
      model_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      model_name: DataTypes.STRING,
      image_url: DataTypes.STRING,
      price: DataTypes.INTEGER,
      project_id: DataTypes.INTEGER,
      polygons_id: DataTypes.INTEGER
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'models3D'
    }
  )
}

export { Model3D }
