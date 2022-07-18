import { DataTypes } from 'sequelize'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @returns
 */
const Project = sequelize => {
  return sequelize.define(
    'Project',
    {
      project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      project_name: DataTypes.STRING,
      project_price: DataTypes.INTEGER,
      project_description: DataTypes.STRING,
      project_url: DataTypes.STRING,
      project_image_url: DataTypes.STRING,
      user_id: DataTypes.INTEGER
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'projects'
    }
  )
}

export { Project }
