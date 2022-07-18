import { getModels } from '../index.js'

/**
 * @param {Object} args
 * @param {String} args.accountName
 * @param {String} args.email
 * @param {String} args.password
 * @param {String} args.artist
 */
const storeAccount = async ({ accountName, password, email, artist }) => {
  const { AccountModel } = getModels()
  const account = await AccountModel.create({
    account_name: accountName,
    account_password: password,
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
 * @param {import('sequelize').Transaction|undefined} transaction
 */
const updateOneAccount = async (accountID, accountData, transaction) => {
  const { AccountModel } = getModels()

  await AccountModel.update(accountData, {
    where: { account_id: accountID },
    limit: 1,
    transaction
  })

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

/**
 * @param {String} email
 * @returns
 */
const getAccountByEmail = async email => {
  const { AccountModel } = getModels()
  const users = await AccountModel.findAll({
    where: { account_email: email },
    limit: 1
  })

  return users.map(user => user.get())[0]
}

export {
  storeAccount,
  updateOneAccount,
  deleteOneAccount,
  getAccountByName,
  getAccountByID,
  getAccountByEmail
}
