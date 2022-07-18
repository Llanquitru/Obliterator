import {
  deleteOneUser,
  getAllUsers,
  getUserByID as gubi,
  storeUser,
  updateOneUser
} from '../database/queries/index.js'
import { uploadImage } from '../utils/index.js'

/**
 * @param {Object} args
 * @param {String} args.path
 * @param {String} args.userName
 * @param {String} args.userDescription
 * @param {Number} args.accountID
 * @returns User object
 */
const createUser = async ({ path, userName, userDescription, accountID }) => {
  const imageUrl = await uploadImage(path)
  const user = await storeUser({
    userName,
    userDescription,
    userImageUrl: imageUrl,
    accountID
  })

  return user
}

const getUsers = async () => {
  return await getAllUsers()
}

/**
 * @param {Number} userID
 * @returns
 */
const getUserByID = async userID => {
  return await gubi(userID)
}

/**
 * @param {Number} userID
 * @param {Object} userData
 * @param {String|undefined} userData.user_name
 * @param {String|undefined} userData.user_description
 * @param {String|undefined} userData.user_image_url
 * @param {String|undefined} userData.location_id
 */

const updateUser = async (userID, userData) => {
  return await updateOneUser(userID, userData)
}

/**
 * @param {Number} userID
 */
const deleteUser = async userID => {
  return await deleteOneUser(userID)
}

export { createUser, getUsers, getUserByID, updateUser, deleteUser }
