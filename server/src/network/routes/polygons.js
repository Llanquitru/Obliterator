/* eslint-disable camelcase */
import {
  deletePolygons,
  getPolygons,
  updatePolygons,
  uploadPolygons
} from '../../services/polygons.js'
import { response } from '../response.js'

/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const apiPolygonsRouter = (router, prefix = '/polygons') => {
  router.post(`${prefix}/`, async (req, res) => {
    try {
      const {
        body: { polygons_name: polygonsQuantity, polygonsType }
      } = req
      const polygons = await uploadPolygons({
        polygonsType,

        polygonsQuantity: parseInt(polygonsQuantity)
      })

      response({
        res,
        error: false,
        message: polygons,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: polygons.js ~ line 33 ~ router.post ~ error',
        error
      )
      response({ res })
    }
  })
  router.get(`${prefix}/`, async (req, res) => {
    try {
      const polygons = await getPolygons()

      response({
        res,
        error: false,
        message: polygons,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: polygons.js ~ line 51 ~ router.get ~ error',
        error
      )
      response({ res })
    }
  })

  router.patch(`${prefix}/:polygonsID`, async (req, res) => {
    try {
      const {
        body: { polygons_type, polygons_quantity },
        params: { polygonsID }
      } = req
      const polygonsUpdated = await updatePolygons(parseInt(polygonsID), {
        polygons_type,
        polygons_quantity
      })

      response({
        res,
        error: false,
        message: polygonsUpdated,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: polygons.js ~ line 77 ~ router.patch ~ error',
        error
      )
      response({ res })
    }
  })

  router.delete(`${prefix}/:polygonsID`, async (req, res) => {
    try {
      const {
        params: { polygonsID }
      } = req
      const deleteResult = await deletePolygons(polygonsID)

      response({
        res,
        error: false,
        message: deleteResult,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: polygons.js ~ line 99 ~ router.delete ~ error',
        error
      )
      response({ res })
    }
  })
}

export { apiPolygonsRouter }
