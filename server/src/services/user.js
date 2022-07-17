

import {
    deleteOneUser,
    getAllUser,
    storeUser,
    updateOneUsers
  } from '../database/queries/index.js'
  import { uploadImage } from '../utils/index.js'

/**
 * @param {Object} args
 * @param {String} args.path
 * @param {String} args.userName
 * @param {String} args.description
 * @returns Model object
 */


 const uploadUser = async ({ path, userName,description }) => {
    const imageUrl = await uploadImage(path)
  
    return await storeUser({
        userName,
      imageUrl,
      description
    })
  }
  
  
const getUser = async () => {
    return await getAllUser()
  }
  

  /**
 * @param {Number} userID
 * @param {Object} userData
 * @param {String|undefined} userData.user_name
 * @param {String|undefined} userData.user_description
 * @param {String|undefined} userData.img_url
 * @param {String|undefined} userData.location_id
 */


   const updateUser = async (userID, userData) => {
    return await updateOneUsers(userID, userData)
  }

  /**
 * @param {Number} userID
 */
const deleteUser = async userID => {
    return await deleteOneUser(userID)
  }

  export { uploadUser, getUser, updateUser, deleteUser }