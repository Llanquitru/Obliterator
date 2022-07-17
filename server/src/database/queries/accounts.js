import { getModels } from '../index.js'

/**
 * @param {Object} args
 * @param {String} args.accountName
 * @param {String} args.email
 * @param {String} args.password
 * @param {String} args.artist
 */

const storeAccounts = async ({ accountName, password, email, artist }) => {
  const { AccountModel } = getModels()
  const account = await AccountModel.create({
    account_name: accountName,
    account_password: password,
    account_email: email,
    is_artist: artist
  })

  return account.get()
}

const getAllAccounts = async () => {
  const { AccountModel } = getModels()
  const accounts = await AccountModel.findAll()

  return accounts.map(account => account.get())
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

const updateOneAccounts = async (accountID, accountData) => {
  const { AccountModel } = getModels()

  await AccountModel.update(accountData, {
    where: { account_id: accountID },
    limit: 1
  })

  const accountUpdated = await AccountModel.findByPk(accountID)

  return accountUpdated.get()
}
/**
 * @param {Number} accountID
 */

const deleteOneAccounts = async accountID => {
  const { AccountModel } = getModels()

  await AccountModel.destroy({
    where: {
      account_id: accountID
    }
  })

  return 'La cuenta fue borrado correctamente'
}

export { storeAccounts, getAllAccounts, updateOneAccounts, deleteOneAccounts }
