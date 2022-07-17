import { getModels } from '../index.js'




/**
 * @param {Object} args
 * @param {Number} args.polygonsQuantity
 * @param {String} args.polygonsType
 * 
 */


 const storePolygons = async ({ polygonsQuantity, polygonsType }) => {
    const { ModelPolygons} = getModels()
    const polygons = await ModelPolygons.create({
        polygons_quantity: polygonsQuantity,
        polygons_type: polygonsType,
    
    })
  
    return polygons.get()
  }
  

  const getAllPolygons= async () => {
    const { PolygonModel } = getModels()
    const polygons = await PolygonModel.findAll()
  
    return polygons.map(polygons => polygons.get())
  }
  

  /**
 * @param {Number} polygonsID
 * @param {Object} polygonsData
 * @param {String|undefined} polygonsData.polygons_type
 * @param {number|undefined} polygonsData.polygons_quantity
 */

   const updateOnePolygons = async (polygonsID, polygonsData) => {
    const { PolygonModel } = getModels()
  
    await PolygonModel.update(polygonsData, {
      where: { polygons_id: polygonsID },
      limit: 1
    })
  
    const polygonsUpdated = await ModelPolygons.findByPk(polygonsID)
  
    return polygonsUpdated.get()
  }


  const deleteOnePolygons = async polygonsID => {
    const { PolygonModel } = getModels()
  
    await PolygonModel.destroy({
      where: {
        polygons_id: polygonsID
      }
    })
  
    return 'El polygono fue borrado correctamente'
  }
  
  export { storePolygons, getAllPolygons, updateOnePolygons, deleteOnePolygons }
