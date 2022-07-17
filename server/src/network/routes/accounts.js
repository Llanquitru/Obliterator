import {
  deleteAccount,
  getAccount,
  updateAccount,
  uploadAccount
} from '../../services/accounts.js'

import { response } from '../response.js'

/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */

const apiAccountsRouter = (router, prefix = '/accounts') => {
  router.post(`${prefix}/`, async (req, res) => {
    try {
      const {
        body: { account_name: accountName, email, password, artist }
      } = req
      const account = await uploadAccount({
        accountName,
        email,
        password,
        artist
      })

      response({
        res,
        error: false,
        message: account,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: accounts.js ~ line 28 ~ router.post ~ error',
        error
      )
      response({ res })
    }
  })
  router.get(`${prefix}/`, async (req, res) => {
    try {
      const account = await getAccount()

      response({
        res,
        error: false,
        message: account,
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

  router.get(`${prefix}/:accountName`, async (req, res) => {
    try {
      const {
        params: { accountName }
      } = req
      const account = await getAccount(accountName)
      response({
        res,
        error: false,
        message: account,
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
  router.patch(`${prefix}/:accountID`, async (req, res) => {
    try {
      const {
        body: {
          account_name,
          account_password,
          is_artist,
          account_email,
          user_id
        },
        params: { accountID }
      } = req
      const accountUpdated = await updateAccount(parseInt(accountID), {
        account_name,
        account_password,
        is_artist,
        account_email,
        user_id
      })

      response({
        res,
        error: false,
        message: accountUpdated,
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

  router.delete(`${prefix}/:accountID`, async (req, res) => {
    try {
      const {
        params: { accountID }
      } = req
      const deleteResult = await deleteAccount(accountID)

      response({
        res,
        error: false,
        message: deleteResult,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: accounts.js ~ line 97 ~ router.delete ~ error',
        error
      )
      response({ res })
    }
  })
}

export { apiAccountsRouter }
