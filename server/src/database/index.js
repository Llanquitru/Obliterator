import { Sequelize } from 'sequelize'

import {
  Account,
  Location,
  Model3D,
  PaymentMethod,
  Polygon,
  Project,
  Transaction,
  TransactionType,
  User
} from './models/index.js'

const DB_DIALECT = process.env.DB_DIALECT
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

/**
 * @type {Sequelize}
 */
let sequelize
/**
 * @type {import('sequelize').ModelCtor<Model<any, any>>}
 */
let Model3DModel
/**
 * @type {import('sequelize').ModelCtor<Model<any, any>>}
 */
let AccountModel
/**
 * @type {import('sequelize').ModelCtor<Model<any, any>>}
 */
let LocationModel
/**
 * @type {import('sequelize').ModelCtor<Model<any, any>>}
 */
let PaymentMethodModel
/**
 * @type {import('sequelize').ModelCtor<Model<any, any>>}
 */
let PolygonModel
/**
 * @type {import('sequelize').ModelCtor<Model<any, any>>}
 */
let ProjectModel
/**
 * @type {import('sequelize').ModelCtor<Model<any, any>>}
 */
let TransactionModel
/**
 * @type {import('sequelize').ModelCtor<Model<any, any>>}
 */
let TransactionTypeModel
/**
 * @type {import('sequelize').ModelCtor<Model<any, any>>}
 */
let UserModel

const dbConnection = async () => {
  return {
    connect: () => {
      if (!sequelize) {
        sequelize = new Sequelize(
          `${DB_DIALECT}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
        )
        UserModel = User(sequelize)
        Model3DModel = Model3D(sequelize)
        AccountModel = Account(sequelize)
        LocationModel = Location(sequelize)
        PaymentMethodModel = PaymentMethod(sequelize)
        PolygonModel = Polygon(sequelize)
        ProjectModel = Project(sequelize)
        TransactionModel = Transaction(sequelize)
        TransactionTypeModel = TransactionType(sequelize)

        sequelize.sync({ force: true })
        AccountModel.belongsTo(UserModel, { as: 'User', foreignKey: 'user_id' })
        ProjectModel.belongsTo(UserModel, { as: 'User', foreignKey: 'user_id' })
        TransactionModel.belongsTo(UserModel, {
          through: 'Transaction_has_buyer',
          as: 'UserBuyer',
          foreignKey: 'user_buyer'
        })
        TransactionModel.belongsTo(UserModel, {
          through: 'Transaction_has_seller',
          as: 'UserSeller',
          foreignKey: 'user_seller'
        })
        TransactionModel.belongsTo(TransactionTypeModel, {
          as: 'TransactionType',
          foreignKey: 'transaction_type'
        })
        LocationModel.hasMany(UserModel, {
          as: 'Location',
          foreignKey: 'location_id'
        })
        ProjectModel.belongsToMany(Model3DModel, {
          through: 'Projects_has_3dModels',
          as: 'Model3D',
          foreignKey: 'project_id'
        })
        PolygonModel.hasOne(Model3DModel, {
          as: 'Model3D',
          foreignKey: 'polygons_id'
        })

        console.log('Mysql connection established.')
      }

      return sequelize
    },
    disconnect: () => {
      console.log('Mysql connection closed.')

      return sequelize?.close()
    }
  }
}

const getModels = () => ({
  Model3DModel,
  AccountModel,
  LocationModel,
  PaymentMethodModel,
  PolygonModel,
  ProjectModel,
  TransactionModel,
  TransactionTypeModel,
  UserModel
})

export { sequelize, dbConnection, getModels }
export * from './queries/index.js'
