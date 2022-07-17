/* eslint-disable camelcase */
import {
  deleteModel,
  getModels,
  updateModel,
  uploadModel
} from '../../services/models3D.js'
import { multerInstance as multer } from '../../utils/index.js'
import { response } from '../response.js'

/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const api3dModelsRouter = (router, prefix = '/models') => {
  // Upload models
  router.post(`${prefix}/`, multer.single('file'), async (req, res) => {
    try {
      const {
        body: { model_name: modelName, price },
        file: { path }
      } = req
      const model = await uploadModel({
        path,
        modelName,
        price: parseInt(price)
      })

      response({
        res,
        error: false,
        message: model,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: 3dModels.js ~ line 28 ~ router.post ~ error',
        error
      )
      response({ res })
    }
  })

  // Get models
  router.get(`${prefix}/`, async (req, res) => {
    try {
      const models = await getModels()

      response({
        res,
        error: false,
        message: models,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: 3dModels.js ~ line 48 ~ router.get ~ error',
        error
      )
      response({ res })
    }
  })

  // Update model
  router.patch(`${prefix}/:modelID`, async (req, res) => {
    try {
      const {
        body: { user_name, image_url, price, project_id, polygons_id },
        params: { modelID }
      } = req
      const modelUpdated = await updateModel(parseInt(modelID), {
        user_name,
        image_url,
        price,
        project_id,
        polygons_id
      })

      response({
        res,
        error: false,
        message: modelUpdated,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: 3dModels.js ~ line 62 ~ router.patch ~ error',
        error
      )
      response({ res })
    }
  })

  // Delete model
  router.delete(`${prefix}/:modelID`, async (req, res) => {
    try {
      const {
        params: { modelID }
      } = req
      const deleteResult = await deleteModel(modelID)

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

export { api3dModelsRouter }
