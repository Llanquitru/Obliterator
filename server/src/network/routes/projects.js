/* eslint-disable camelcase */
import {
  deleteProject,
  getProjects,
  updateProject,
  uploadProject,
  getProjectsByUserID
} from '../../services/projects.js'
import { multerInstance as multer } from '../../utils/index.js'
import { response } from '../response.js'

/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const api3dProjectsRouter = (router, prefix = '/projects') => {
  router.post(`${prefix}/`, multer.single('file'), async (req, res) => {
    try {
      const {
        body: {
          projectName,
          projectPrice,
          projectDescription,
          projectUrl,
          userID
        },
        file: { path }
      } = req
      const project = await uploadProject({
        path,
        projectName,
        projectPrice: parseInt(projectPrice),
        projectDescription,
        projectUrl,
        userID: parseInt(userID)
      })

      response({
        res,
        error: false,
        message: project,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: projects.js ~ line 45 ~ router.post ~ error',
        error
      )
      response({ res })
    }
  })

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
        '🚀 ~ file: projects.js ~ line 64 ~ router.get ~ error',
        error
      )
      response({ res })
    }
  })

  router.get(`${prefix}/byUserID/:userID`, async (req, res) => {
    try {
      const {
        params: { userID }
      } = req
      const projects = await getProjectsByUserID(parseInt(userID))

      response({
        res,
        error: false,
        message: projects,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: projects.js ~ line 86 ~ router.get ~ error',
        error
      )
      response({ res })
    }
  })

  router.patch(
    `${prefix}/:projectID`,
    multer.single('file'),
    async (req, res) => {
      try {
        const {
          body: {
            project_name,
            project_price,
            project_url,
            project_description,
            user_id
          },
          params: { projectID },
          file: { path }
        } = req
        const projectUpdated = await updateProject(parseInt(projectID), {
          path,
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
          '🚀 ~ file: projects.js ~ line 126 ~ router.patch ~ error',
          error
        )
        response({ res })
      }
    }
  )

  router.delete(`${prefix}/:projectID`, async (req, res) => {
    try {
      const {
        params: { projectID }
      } = req
      const deleteResult = await deleteProject(projectID)

      response({
        res,
        error: false,
        message: deleteResult,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: projects.js ~ line 149 ~ router.delete ~ error',
        error
      )

      response({ res })
    }
  })
}

export { api3dProjectsRouter }
