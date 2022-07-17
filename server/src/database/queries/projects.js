
import { getModels } from '../index.js'



/**
 * @param {Object} args
 * @param {String} args.projectName
 * @param {String} args.imageUrl
 * @param {String} args.projectDescription
 * @param {Number} args.projectPrice
 */

 const storeProjects = async ({ projectName, imageUrl, projectDescription, projectPrice  }) => {
    const { ProjectModel } = getModels()
    const project = await ProjectModel.create({
        project_name: projectName,
        project_url: imageUrl,
        project_description:projectDescription,
      project_price:projectPrice
    })
  
    return project.get()
  }
  const getAllProjects = async () => {
    const { ProjectModel } = getModels()
    const project = await ProjectModel.findAll()
  
    return project.map(project => project.get())
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



   const updateOneProject= async (projectsID, projectsData) => {
    const { ProjectModel } = getModels()
  
    await ProjectModel.update(projectsData, {
      where: { project_id: projectsID },
      limit: 1
    })
  
    const projectUpdated = await ProjectModel.findByPk(projectsID)
  
    return projectUpdated.get()
  }


  
/**
 * @param {Number} projectsID
 */
const deleteOneProject = async modelID => {
    const { ProjectModel } = getModels()
  
    await ProjectModel.destroy({
      where: {
        project_id: projectsID
      }
    })
  
    return 'El proyecto fue borrado correctamente'
  }
  
  export { storeProjects, getAllProjects, updateOneProject, deleteOneProject }
