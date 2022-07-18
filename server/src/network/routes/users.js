/* eslint-disable camelcase */
import {
  deleteUser,
  getUsers,
  updateUser,
  createUser,
  getUserByID
} from '../../services/user.js'
import { multerInstance as multer } from '../../utils/index.js'
import { response } from '../response.js'

/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */
const apiUserRouter = (router, prefix = '/users') => {
  router.post(`${prefix}/`, multer.single('file'), async (req, res) => {
    try {
      const {
        body: { userName, userDescription, accountID },
        file: { path }
      } = req
      const user = await createUser({
        path,
        userName,
        userDescription,
        accountID: parseInt(accountID)
      })

      response({
        res,
        error: false,
        message: user,
        status: 200
      })
    } catch (error) {
      console.log('🚀 ~ file: users.js ~ line 36 ~ router.post ~ error', error)
      response({ res })
    }
  })

  router.get(`${prefix}/`, async (req, res) => {
    try {
      const users = await getUsers()

      response({
        res,
        error: false,
        message: users,
        status: 200
      })
    } catch (error) {
      console.log('🚀 ~ file: users.js ~ line 53 ~ router.get ~ error', error)
      response({ res })
    }
  })

  router.get(`${prefix}/byID/:userID`, async (req, res) => {
    try {
      const {
        params: { userID }
      } = req
      const user = await getUserByID(parseInt(userID))

      response({
        res,
        error: false,
        message: user,
        status: 200
      })
    } catch (error) {
      console.log('🚀 ~ file: users.js ~ line 60 ~ router.get ~ error', error)
      response({ res })
    }
  })

  router.patch(`${prefix}/:userID`, async (req, res) => {
    try {
      const {
        body: { user_name, user_description, user_image_url, location_id },
        params: { userID }
      } = req
      const userUpdated = await updateUser(parseInt(userID), {
        user_name,
        user_description,
        user_image_url,
        location_id
      })

      response({
        res,
        error: false,
        message: userUpdated,
        status: 200
      })
    } catch (error) {
      console.log('🚀 ~ file: users.js ~ line 97 ~ router.patch ~ error', error)
      response({ res })
    }
  })

  router.delete(`${prefix}/:userID`, async (req, res) => {
    try {
      const {
        params: { userID }
      } = req
      const deleteResult = await deleteUser(userID)

      response({
        res,
        error: false,
        message: deleteResult,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: users.js ~ line 116 ~ router.delete ~ error',
        error
      )
      response({ res })
    }
  })
}

export { apiUserRouter }
