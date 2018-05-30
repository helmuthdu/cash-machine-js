import { BAD_REQUEST, NOT_FOUND, OK } from 'http-status'
import { logger } from '../../services'
import { BaseRoute } from '../route'
import { atmService } from './atm.service'

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

  /**
   * @class ATMRoute
   * @constructor
   */
  constructor () {
    super()
    this.getMoney = this.getMoney.bind(this)
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

    this.router.get('/withdraw/:amount', this.getMoney)
  }

  /**
   * @class ATMRoute
   * @method get
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   */
  getMoney (req, res) {
    try {
      const notes = atmService.withdraw(req.params.amount)
      res.status(notes.length ? OK : NOT_FOUND).json(notes)
    } catch (err) {
      res.status(BAD_REQUEST).json(err)
    }
  }
}
