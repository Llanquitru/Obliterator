import {
  deleteOneModel,
  getAllModels,
  storeProjects,
  updateOneModel
} from '../database/queries/index.js'
import { uploadImage } from '../utils/index.js'

/**
 * @param {Object} args
 * @param {String} args.path
 * @param {String} args.ProjectName
 * @param {Number} args.projectPrice
 * @param {String} args.projectUrl
 * @param {String} args.projectDescription
 *
 *
 *
 * @returns Model object
 */

const uploadProject = async ({
  path,
  ProjectName,
  projectPrice,
  projectDescription
}) => {
  const imageUrl = await uploadImage(path)

  return await storeProjects({
    ProjectName,
    projectPrice,
    imageUrl,
    projectDescription
  })
}

const getProjects = async () => {
  return await getAllModels()
}
/**
 * @param {Number} ProjectID
 * @param {Object} ProjectData
 * @param {String|undefined} ProjectData.project_name
 * @param {Number|undefined} ProjectData.project_price
 * @param {String|undefined} ProjectData.project_url
 * @param {String|undefined} ProjectData.project_description
 * @param {String|undefined} ProjectData.user_id
 */

const updateProjects = async (ProjectID, ProjectData) => {
  return await updateOneModel(ProjectID, ProjectData)
}

/**
 * @param {Number} ProjectID
 */
const deleteProject = async ProjectID => {
  return await deleteOneModel(ProjectID)
}

export { uploadProject, getProjects, updateProjects, deleteProject }
