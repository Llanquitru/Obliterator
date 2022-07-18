import { createHash } from 'crypto'

import {
  deleteOneAccount,
  updateOneAccount,
  storeAccount,
  getAccountByName as gabn,
  getAccountByID as gabi,
  getAccountByEmail
} from '../database/index.js'

/**
 * @param {Object} args
 * @param {String} args.accountName
 * @param {String} args.email
 * @param {String} args.password
 * @param {String} args.artist
 */
const createAccount = async ({ accountName, email, password, artist }) => {
  const hash = createHash('sha256')

  return await storeAccount({
    accountName,
    email,
    password: hash.update(password).digest('hex'),
    artist
  })
}

/**
 * @param {String} accountName
 * @returns
 */
const getAccountByName = async accountName => {
  return await gabn(accountName)
}

/**
 * @param {Number} accountID
 */
const getAccountByID = async accountID => {
  return await gabi(accountID)
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
  const hash = createHash('sha256')

  return await updateOneAccount(accountID, {
    ...accountData,
    ...(accountData.account_password && {
      account_password: hash.update(accountData.account_password).digest('hex')
    })
  })
}

/**
 * @param {Number} accountID
 */
const deleteAccount = async accountID => {
  return await deleteOneAccount(accountID)
}

/**
 * @param {String} email
 * @param {String} password
 */
const login = async (email, password) => {
  const hash = createHash('sha256')
  const hashedPassword = hash.update(password).digest('hex')
  const account = await getAccountByEmail(email)

  if (!account) throw new Error('El email no está registrado')

  if (account.account_password !== hashedPassword)
    throw new Error('Contraseña incorrecta')

  return account.user_id
}

export {
  createAccount,
  updateAccount,
  deleteAccount,
  getAccountByName,
  getAccountByID,
  login
}
