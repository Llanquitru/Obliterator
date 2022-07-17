import {
    deleteOneAccounts,
    getAllAccounts,
    updateOneAccounts,
    storeAccounts
  } from '../database/queries/index.js'
  




/**
 * @param {Object} args
 * @param {String} args.accountName
 * @param {String} args.email
 * @param {String} args.password
 * @param {String} args.artist
 */

 const uploadAccount = async ({ accountName, email, password,artist}) => {
   
  
    return await storeAccounts({
    accountName,
    email,
    password,
    artist
    })
  }
  
  const getAccount = async () => {
    return await getAllAccounts()
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
    return await updateOneAccounts(accountID, accountData)
  }
  
  /**
   * @param {Number} accountID
   */
  const deleteAccount = async accountID => {
    return await deleteOneAccounts(accountID)
  }
  

  export { uploadAccount, getAccount, updateAccount, deleteAccount }