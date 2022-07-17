import {
  deleteOneAccount,
  updateOneAccount,
  storeAccount,
  getAccountByName as gabn,
  getAccountByID as gabi
} from '../database/queries/index.js'

/**
 * @param {Object} args
 * @param {String} args.accountName
 * @param {String} args.email
 * @param {String} args.password
 * @param {String} args.artist
 */
const createAccount = async ({ accountName, email, password, artist }) => {
  return await storeAccount({
    accountName,
    email,
    password,
    artist
  })
}

const getAccountByName = async () => {
  return await gabn()
}

const getAccountByID = async () => {
  return await gabi()
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
const updateAccount = async (accountID, accountData) => {
  return await updateOneAccount(accountID, accountData)
}

/**
 * @param {Number} accountID
 */
const deleteAccount = async accountID => {
  return await deleteOneAccount(accountID)
}

export {
  createAccount,
  updateAccount,
  deleteAccount,
  getAccountByName,
  getAccountByID
}
