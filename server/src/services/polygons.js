import {
  deleteOnePolygons,
  getAllPolygons,
  storePolygons,
  updateOnePolygons
} from '../database/queries/index.js'

/**
 * @param {Object} args
 * @param {String} args.polygonsType
 * @param {Number} args.polygonsQuantity
 * @returns Polygons object
 */

const uploadPolygons = async ({ polygonsQuantity, polygonsType }) => {
  return await storePolygons({
    polygonsType,
    polygonsQuantity
  })
}

const getPolygons = async () => {
  return await getAllPolygons()
}

/**
 * @param {Number} polygonsID
 * @param {Object} polygonsData
 * @param {String|undefined} polygonsData.polygons_type
 * @param {Number|undefined} polygonsData.polygons_quantity
 */
const updatePolygons = async (polygonsID, polygonsData) => {
  return await updateOnePolygons(polygonsID, polygonsData)
}

/**
 * @param {Number} polygonsID
 */
const deletePolygons = async polygonsID => {
  return await deleteOnePolygons(polygonsID)
}

export { uploadPolygons, getPolygons, updatePolygons, deletePolygons }
