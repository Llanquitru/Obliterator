import {
    deleteProject,
    getProjects,
    updateProjects,
    uploadProject
  } from '../../services/projects.js'
  import { multerInstance as multer } from '../../utils/index.js'
  import { response } from '../response.js'
  
  /**
   * @param {import('express').Router} router
   * @param {String} prefix
   */
  const api3dProjectsRouter = (router, prefix = '/projects') => {
    // Upload models
    router.post(`${prefix}/`, multer.single('file'), async (req, res) => {
      try {
        const {
          body: { project_name: ProjectName, projectPrice,projectDescription},
          file: { path }
        } = req
        const project = await uploadProject({
          path,
          ProjectName,
          projectPrice: parseInt(projectPrice),
          projectDescription
        })
  
        response({
          res,
          error: false,
          message: project,
          status: 200
        })
      } catch (error) {
        console.log(
          '🚀 ~ file: project.js ~ line 28 ~ router.post ~ error',
          error
        )
        response({ res })
      }
    })
  
    // Get models
    router.get(`${prefix}/`, async (req, res) => {
      try {
        const project = await getProjects()
  
        response({
          res,
          error: false,
          message: project,
          status: 200
        })
      } catch (error) {
        console.log(
          '🚀 ~ file: projects.js ~ line 48 ~ router.get ~ error',
          error
        )
        response({ res })
      }
    })
  
    // Update model
    router.patch(`${prefix}/:ProjectID`, async (req, res) => {
      try {
        const {
          body: { project_name, project_price, project_url, project_description, user_id },
          params: { ProjectID }
        } = req
        const projectUpdated = await updateProjects(parseInt(ProjectID), {
            project_name,
            project_price,
            project_url,
            project_description,
            user_id
        })
  
        response({
          res,
          error: false,
          message: projectUpdated,
          status: 200
        })
      } catch (error) {
        console.log(
          '🚀 ~ file: project.js ~ line 62 ~ router.patch ~ error',
          error
        )
        response({ res })
      }
    })
  
    // Delete model
    router.delete(`${prefix}/:ProjectID`, async (req, res) => {
      try {
        const {
          params: { modelID }
        } = req
        const deleteResult = await deleteProject(ProjectID)
  
        response({
          res,
          error: false,
          message: deleteResult,
          status: 200
        })
      } catch (error) {
        console.log(
          '🚀 ~ file: 3dModels.js ~ line 97 ~ router.delete ~ error',
          error
        )
        response({ res })
      }
    })
  }
  
  export { api3dProjectsRouter }
  