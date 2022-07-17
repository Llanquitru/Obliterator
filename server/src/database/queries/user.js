import { getModels } from '../index.js'

/**
 * @param {Object} args
 * @param {String} args.user_name
 * @param {String} args.user_description
 * @param {string} args.img_url
 */

const storeUser = async ({ userName, description, imgurl }) => {
  const { UserModel } = getModels()
  const user = await UserModel.create({
    user_name: userName,
    user_description: description,
    img_url: imgurl
  })

  return user.get()
}

const getAllUser = async () => {
  const { UserModel } = getModels()
  const user = await UserModel.findAll()

  return user.map(user => user.get())
}

/**
 * @param {Number} userID
 * @param {Object} userData
 * @param {String|undefined} userData.user_name
 * @param {String|undefined} userData.user_description
 * @param {String|undefined} userData.img_url
 * @param {String|undefined} userData.location_id
 *
 */

const updateOneUsers = async (userID, userData) => {
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

  return 'La cuenta fue borrado correctamente'
}

export { storeUser, getAllUser, updateOneUsers, deleteOneUser }
