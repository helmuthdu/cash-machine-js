import { logger } from '../services/index'
import { ATMRoute } from './atm/index'
import { BaseRoute } from './route'

/**
 * / route
 *
 * @class User
 */
export class ApiRoutes extends BaseRoute {
  static path = '/api'
  static instance

  /**
   * @class ApiRoutes
   * @constructor
   */
  constructor () {
    super()
    this.get = this.get.bind(this)
    this.init()
  }

  /**
   * @class ApiRoute
   * @method getRouter
   * @returns {Router}
   */
  static get router () {
    if (!ApiRoutes.instance) {
      ApiRoutes.instance = new ApiRoutes()
    }
    return ApiRoutes.instance.router
  }

  /**
   * @class ApiRoute
   * @method init
   */
  init () {
    // log
    logger.info('[ApiRoute] Creating api routes.')

    // add index page route
    this.router.get('/', this.get)
    this.router.use(ATMRoute.path, ATMRoute.router)
  }

  /**
   * @class ApiRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   */
  async get (req, res) {
    res.status(200).json({ online: true })
  }
}
