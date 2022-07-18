import {
  deleteOneModel,
  getAllModels,
  storeProject,
  updateOneModel
} from '../database/queries/index.js'
import { uploadImage } from '../utils/index.js'

/**
 * @param {Object} args
 * @param {String} args.path
 * @param {String} args.projectName
 * @param {Number} args.projectPrice
 * @param {String} args.projectDescription
 * @param {String} args.projectUrl
 * @param {Number} args.userID
 * @returns Project object
 */
const uploadProject = async ({
  path,
  projectName,
  projectPrice,
  projectDescription,
  projectUrl,
  userID
}) => {
  const imageUrl = await uploadImage(path)

  return await storeProject({
    projectName,
    projectPrice,
    projectDescription,
    projectUrl,
    imageUrl,
    userID
  })
}

const getProjects = async () => {
  return await getAllModels()
}

/**
 * @param {Number} projectID
 * @param {Object} projectData
 * @param {String|undefined} projectData.project_name
 * @param {Number|undefined} projectData.project_price
 * @param {String|undefined} projectData.project_url
 * @param {String|undefined} projectData.project_description
 * @param {String|undefined} projectData.user_id
 */
const updateProject = async (projectID, projectData) => {
  return await updateOneModel(projectID, projectData)
}

/**
 * @param {Number} projectID
 */
const deleteProject = async projectID => {
  return await deleteOneModel(projectID)
}

export { uploadProject, getProjects, updateProject, deleteProject }
