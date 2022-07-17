import {
    deletePaymentMethod,
    getAllPaymentMethods,
    updateOnePaymentMethod,
    storepaymentMethods
  } from '../database/queries/index.js'
  




/**
 * @param {Object} args
 * @param {String} args.methodName
 */

 const uploadPaymentMethods= async ({ methodName}) => {
   
  
    return await storepaymentMethods({
        methodName,
 
    })
  }
  
  const getPaymentMethods = async () => {
    return await getAllPaymentMethods()
  }
  
/**
 * @param {Number} PaymentMethodsID
 * @param {Object} PaymentMethodData
 * @param {String|undefined} PaymentMethodData.method_name
 */

  const updatePaymentMethods = async (PaymentMethodsID, PaymentMethodData) => {
    return await updateOnePaymentMethod(PaymentMethodsID, PaymentMethodData)
  }
  
  /**
   * @param {Number} PaymentMethodsID
   */
  const deletePaymentMethods = async PaymentMethodsID => {
    return await deletePaymentMethod(PaymentMethodsID)
  }
  

  export { uploadPaymentMethods, getPaymentMethods, updatePaymentMethods, deletePaymentMethods }