import { getModels, sequelize, updateOneAccount } from '../index.js'

/**
 * @param {Object} args
 * @param {String} args.userName
 * @param {String} args.userDescription
 * @param {String} args.userImageUrl
 * @param {Number} args.accountID
 * @returns User model
 */
const storeUser = async ({
  userName,
  userDescription,
  userImageUrl,
  accountID
}) => {
  const transaction = await sequelize.transaction()
  const { UserModel } = getModels()

  try {
    const user = await UserModel.create(
      {
        user_name: userName,
        user_description: userDescription,
        user_image_url: userImageUrl,
        account_id: accountID
      },
      { transaction }
    )

    await updateOneAccount(accountID, { user_id: accountID }, transaction)
    await transaction.commit()

    return user.get()
  } catch (error) {
    await transaction.rollback()
    console.log('🚀 ~ file: user.js ~ line 28 ~ storeUser ~ error', error)

    throw new Error('Store user process failed')
  }
}

const getAllUsers = async () => {
  const { UserModel } = getModels()
  const user = await UserModel.findAll()

  return user.map(user => user.get())
}

/**
 * @param {Number} userID
 * @returns User model
 */
const getUserByID = async userID => {
  const { UserModel } = getModels()
  const user = await UserModel.findByPk(userID)

  return user.get()
}

/**
 * @param {Number} userID
 * @param {Object} userData
 * @param {String|undefined} userData.user_name
 * @param {String|undefined} userData.user_description
 * @param {String|undefined} userData.user_image_url
 * @param {String|undefined} userData.location_id
 */
const updateOneUser = async (userID, userData) => {
  const { UserModel } = getModels()

  await UserModel.update(userData, {
    where: { user_id: userID },
    limit: 1
  })

  const userUpdated = await UserModel.findByPk(userID)

  return userUpdated.get()
}

/**
 * @param {Number} userID
 */
const deleteOneUser = async userID => {
  const { UserModel } = getModels()

  await UserModel.destroy({
    where: {
      account_id: userID
    }
  })

  return 'La cuenta fue borrada correctamente'
}

export { storeUser, getAllUsers, getUserByID, updateOneUser, deleteOneUser }
