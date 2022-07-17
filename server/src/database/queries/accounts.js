import { createHash } from 'crypto'

import { getModels } from '../index.js'

/**
 * @param {Object} args
 * @param {String} args.accountName
 * @param {String} args.email
 * @param {String} args.password
 * @param {String} args.artist
 */
const storeAccount = async ({ accountName, password, email, artist }) => {
  const hash = createHash('sha256')
  const { AccountModel } = getModels()
  const account = await AccountModel.create({
    account_name: accountName,
    account_password: hash.update(password).digest('hex'),
    account_email: email,
    is_artist: artist
  })

  return account.get()
}

/**
 * @param {Number} accountID
 * @param {Object} accountData
 * @param {String|undefined} accountData.account_name
 * @param {Number|undefined} accountData.account_password
 * @param {Number|undefined} accountData.is_artist
 * @param {String|undefined} accountData.account_email
 * @param {String|undefined} accountData.user_id
 */
const updateOneAccount = async (accountID, accountData) => {
  const hash = createHash('sha256')
  const { AccountModel } = getModels()

  await AccountModel.update(
    {
      ...accountData,
      account_password: hash.update(accountData.account_password).digest('hex')
    },
    {
      where: { account_id: accountID },
      limit: 1
    }
  )

  const accountUpdated = await AccountModel.findByPk(accountID)

  return accountUpdated.get()
}

/**
 * @param {Number} accountID
 */
const deleteOneAccount = async accountID => {
  const { AccountModel } = getModels()

  await AccountModel.destroy({
    where: {
      account_id: accountID
    }
  })

  return 'La cuenta fue borrada correctamente'
}

const getAccountByName = async accountName => {
  const { AccountModel } = getModels()
  const accounts = await AccountModel.findAll({
    where: { account_name: accountName }
  })

  return accounts.map(account => account.get())
}

const getAccountByID = async accountID => {
  const { AccountModel } = getModels()
  const account = await AccountModel.findByPk(accountID)

  return account.get()
}

export {
  storeAccount,
  updateOneAccount,
  deleteOneAccount,
  getAccountByName,
  getAccountByID
}
