import {
  deletePaymentMethods,
  getPaymentMethods,
  updatePaymentMethods,
  uploadPaymentMethods
} from '../../services/paymentMethods.js'

import { response } from '../response.js'

/**
 * @param {import('express').Router} router
 * @param {String} prefix
 */

const apipaymentMethodsRouter = (router, prefix = '/paymentMethods') => {
  router.post(`${prefix}/`, async (req, res) => {
    try {
      const {
        body: { paymentMethods: methodName }
      } = req
      const paymentMethods = await uploadPaymentMethods({
        methodName
      })

      response({
        res,
        error: false,
        message: paymentMethods,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: paymentMethods.js ~ line 28 ~ router.post ~ error',
        error
      )
      response({ res })
    }
  })
  router.get(`${prefix}/`, async (req, res) => {
    try {
      const paymentMethods = await getPaymentMethods()

      response({
        res,
        error: false,
        message: paymentMethods,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: paymentMethods.js ~ line 48 ~ router.get ~ error',
        error
      )
      response({ res })
    }
  })
  // Update model
  router.patch(`${prefix}/:PaymentMethodsID`, async (req, res) => {
    try {
      const {
        body: { method_name },
        params: { PaymentMethodsID }
      } = req
      const accountUpdated = await updatePaymentMethods(
        parseInt(PaymentMethodsID),
        {
          method_name
        }
      )

      response({
        res,
        error: false,
        message: paymentMethods,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: paymentMethods.js ~ line 62 ~ router.patch ~ error',
        error
      )
      response({ res })
    }
  })

  router.delete(`${prefix}/:PaymentMethodsID`, async (req, res) => {
    try {
      const {
        params: { PaymentMethodsID }
      } = req
      const deleteResult = await deletePaymentMethods(PaymentMethodsID)

      response({
        res,
        error: false,
        message: deleteResult,
        status: 200
      })
    } catch (error) {
      console.log(
        '🚀 ~ file: paymentMethods.js ~ line 97 ~ router.delete ~ error',
        error
      )
      response({ res })
    }
  })
}

export { apipaymentMethodsRouter }
