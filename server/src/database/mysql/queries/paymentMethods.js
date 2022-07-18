import { getModels } from '../index.js'

/**
 * @param {Object} args
 * @param {String} args.methodName
 */

const storepaymentMethods = async ({ methodName }) => {
  const { PaymentMethodModel } = getModels()
  const PaymentMethod = await PaymentMethodModel.create({
    method_name: methodName
  })

  return PaymentMethod.get()
}

const getAllPaymentMethods = async () => {
  const { PaymentMethodModel } = getModels()
  const PaymentMethod = await PaymentMethodModel.findAll()

  // return account.map(account => account.get())
  return PaymentMethod.map(PaymentMethod => PaymentMethod.get())
}

/**
 * @param {Number} PaymentMethodID
 * @param {Object} PaymentMethodData
 * @param {String|undefined} PaymentMethodData.method_name
 */

const updateOnePaymentMethod = async (PaymentMethodID, PaymentMethodData) => {
  const { PaymentMethodModel } = getModels()

  await PaymentMethodModel.update(PaymentMethodData, {
    where: { method_id: PaymentMethodID },
    limit: 1
  })

  const paymentMethodUpdated = await PaymentMethodModel.findByPk(
    PaymentMethodID
  )

  return paymentMethodUpdated.get()
}
/**
 * @param {Number} PaymentMethodID
 */

const deletePaymentMethod = async PaymentMethodID => {
  const { PaymentMethodModel } = getModels()

  await PaymentMethodModel.destroy({
    where: {
      method_id: PaymentMethodID
    }
  })

  return 'El metodo de pago fue borrado correctamente'
}

export {
  storepaymentMethods,
  getAllPaymentMethods,
  updateOnePaymentMethod,
  deletePaymentMethod
}
