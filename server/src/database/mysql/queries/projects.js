import { getModels } from '../index.js'

/**
 * @param {Object} args
 * @param {String} args.projectName
 * @param {Number} args.projectPrice
 * @param {String} args.projectDescription
 * @param {String} args.projectUrl
 * @param {String} args.imageUrl
 * @param {Number} args.userID
 *  * @returns Project object
 */
const storeProject = async ({
  projectName,
  projectPrice,
  projectDescription,
  projectUrl,
  imageUrl,
  userID
}) => {
  const { ProjectModel } = getModels()
  const project = await ProjectModel.create({
    project_name: projectName,
    project_price: projectPrice,
    project_description: projectDescription,
    project_image_url: imageUrl,
    project_url: projectUrl,
    user_id: userID
  })

  return project.get()
}

const getAllProjects = async () => {
  const { ProjectModel } = getModels()
  const projects = await ProjectModel.findAll()

  return projects.map(project => project.get())
}

/**
 * @param {Number} userID
 */
const getProjectsByUserID = async userID => {
  const { ProjectModel } = getModels()
  const projects = await ProjectModel.findAll({
    where: {
      user_id: userID
    }
  })

  return projects.map(project => project.get())
}

/**
 * @param {Number} projectsID
 * @param {Object} projectsData
 * @param {String|undefined} projectsData.project_name
 * @param {String|undefined} projectsData.project_url
 * @param {Number|undefined} projectsData.project_price
 * @param {String|undefined} projectsData.project_description
 * @param {String|undefined} projectsData.user_id
 */
const updateOneProject = async (projectsID, projectsData) => {
  const { ProjectModel } = getModels()

  await ProjectModel.update(projectsData, {
    where: { project_id: projectsID },
    limit: 1
  })

  const projectUpdated = await ProjectModel.findByPk(projectsID)

  return projectUpdated.get()
}

/**
 * @param {Number} projectID
 */
const deleteOneProject = async projectID => {
  const { ProjectModel } = getModels()

  await ProjectModel.destroy({
    where: {
      project_id: projectID
    },
    limit: 1
  })

  return 'El proyecto fue borrado correctamente'
}

export {
  storeProject,
  getAllProjects,
  getProjectsByUserID,
  updateOneProject,
  deleteOneProject
}
