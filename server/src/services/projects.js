import {
  deleteOneProject,
  getAllProjects,
  getProjectsByUserID as gpbui,
  storeProject,
  updateOneProject
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
  return await getAllProjects()
}

/**
 * @param {Number} userID
 * @returns
 */
const getProjectsByUserID = async userID => {
  return await gpbui(userID)
}

/**
 * @param {Number} projectID
 * @param {Object} projectData
 * @param {String|undefined} projectData.project_name
 * @param {Number|undefined} projectData.project_price
 * @param {String|undefined} projectData.project_url
 * @param {String|undefined} projectData.project_description
 * @param {String|undefined} projectData.user_id
 * @param {String|undefined} path
 */
const updateProject = async (projectID, projectData, path) => {
  let imageUrl = ''

  if (path) imageUrl = await uploadImage(path)

  return await updateOneProject(projectID, {
    projectData,
    ...(imageUrl && { project_image_url: imageUrl })
  })
}

/**
 * @param {Number} projectID
 */
const deleteProject = async projectID => {
  return await deleteOneProject(projectID)
}

export {
  uploadProject,
  getProjects,
  getProjectsByUserID,
  updateProject,
  deleteProject
}
