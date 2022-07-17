/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */

 import {
  deleteUser,
  getUser,
  updateUser,
  uploadUser
} from '../../services/user.js'
import { multerInstance as multer } from '../../utils/index.js'
import { response } from '../response.js'





const apiUserRouter = (router, prefix = '/users') => {
  



  router.post(`${prefix}/`,multer.single('file'), async (req, res) => {
    

    try {
      const {
        body: { user_name: userName, description },
        file: { path }
      } = req
      const user = await uploadUser({
        path,
        userName,
        description,
        
      })

      response({
        res,
        error: false,
        message: user,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: user.js ~ line 28 ~ router.post ~ error',
        error
      )
      response({ res })
    }



  })

  router.get(`${prefix}/`, async (req, res) => {
    try {
      const user = await getUser()

      response({
        res,
        error: false,
        message: user,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: user.js ~ line 48 ~ router.get ~ error',
        error
      )
      response({ res })
    }
  })

  router.patch(`${prefix}/:userID`, async (req, res) => {
    try {
      const {
        body: { user_name, user_description, img_url, location_id},
        params: { userID }
      } = req
      const userUpdated = await updateUser(parseInt(userID), {
        user_name,
        user_description,
        img_url,
        location_id,
      
      })

      response({
        res,
        error: false,
        message: userUpdated,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: user.js ~ line 62 ~ router.patch ~ error',
        error
      )
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
        '🚀 ~ file: user.js ~ line 97 ~ router.delete ~ error',
        error
      )
      response({ res })
    }
  })


}

export { apiUserRouter }
