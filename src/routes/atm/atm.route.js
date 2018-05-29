import { logger } from '../../services/index'
import { BaseRoute } from '../route'
import { ATMController } from './atm.controller'

/**
 * @api {get} /atm ATM endpoint
 * @apiName ATM
 * @apiGroup ATM
 *
 * @apiSuccess {String} type Json Type.
 */
export class ATMRoute extends BaseRoute {
  static path = '/atm'
  static instance
  controller = new ATMController()

  /**
   * @class ATMRoute
   * @constructor
   */
  constructor () {
    super()
    this.getNotes = this.getNotes.bind(this)
    this.init()
  }

  static get router () {
    if (!ATMRoute.instance) {
      ATMRoute.instance = new ATMRoute()
    }
    return ATMRoute.instance.router
  }

  init () {
    // log
    logger.info('[ATMRoute] Creating atm route.')

    // add index page route
    this.router.get('/withdraw/:value', this.getNotes)
  }

  /**
   * @class ATMRoute
   * @method get
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @param next {NextFunction} Execute the next method.
   */
  async getNotes (req, res, next) {
    res.json(this.controller.withdraw(req.params.value))
    next()
  }
}
