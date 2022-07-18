/* eslint-disable camelcase */
import {
  deleteAccount,
  getAccountByName,
  updateAccount,
  createAccount,
  getAccountByID,
  login
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
      const account = await createAccount({
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
        '🚀 ~ file: accounts.js ~ line 37 ~ router.post ~ error',
        error
      )
      response({ res })
    }
  })

  router.get(`${prefix}/byName/:accountName`, async (req, res) => {
    try {
      const {
        params: { accountName }
      } = req
      const accounts = await getAccountByName(accountName)

      response({
        res,
        error: false,
        message: accounts,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: accounts.js ~ line 59 ~ router.get ~ error',
        error
      )
      response({ res })
    }
  })

  router.get(`${prefix}/byID/:accountID`, async (req, res) => {
    try {
      const {
        params: { accountID }
      } = req
      const account = await getAccountByID(parseInt(accountID))

      response({
        res,
        error: false,
        message: account,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: accounts.js ~ line 81 ~ router.get ~ error',
        error
      )
      response({ res })
    }
  })

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
        '🚀 ~ file: accounts.js ~ line 116 ~ router.patch ~ error',
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
        '🚀 ~ file: accounts.js ~ line 138 ~ router.delete ~ error',
        error
      )
      response({ res })
    }
  })

  router
    .route(`${prefix}/login`)
    .get((req, res) => {
      if (req.session.user && req.session.user.id)
        return response({
          res,
          error: false,
          message: 'User is logged',
          status: 200
        })

      response({ res })
    })
    .post(async (req, res) => {
      try {
        const {
          body: { email, password }
        } = req
        const userID = await login(email, password)

        req.session.user = { id: userID }
        response({
          res,
          error: false,
          message: '¡Login successful!',
          status: 200
        })
      } catch (error) {
        console.log('🚀 ~ file: accounts.js ~ line 173 ~ .post ~ error', error)
        response({ res, message: 'Wrong email or password' })
      }
    })

  router.get(`${prefix}/logout`, (req, res, next) => {
    req.session.destroy(err => {
      if (err) return response({ res })

      response({
        res,
        error: false,
        message: 'Ok',
        status: 200
      })
    })
  })
}

export { apiAccountsRouter }
