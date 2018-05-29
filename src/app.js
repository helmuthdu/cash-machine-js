import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import errorHandler from 'errorhandler'
import express from 'express'
import expressStatusMonitor from 'express-status-monitor'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'
import path from 'path'

import { ApiRoutes } from './routes/index'
import { logger } from './services/index'

/**
 * The server.
 *
 * @class Server
 */
export class Server {
  app

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   */
  static bootstrap () {
    return new Server()
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor () {
    // create express application
    this.app = express()

    // configure application
    this.config()

    // add routes
    this.routes()
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  config () {
    // add static paths
    this.app.use(express.static(path.join(__dirname, 'public')))

    // mount logger
    this.app.use(morgan('tiny', {
      stream: {
        write: (message) => logger.info(message.trim())
      }
    }))

    // mount json form parser
    this.app.use(bodyParser.json({ limit: '50mb' }))

    // mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }))

    // mount override?
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(compression())
    this.app.use(methodOverride())
    this.app.use(expressStatusMonitor())

    // catch 404 and forward to error handler
    this.app.use((err, req, res, next) => {
      err.status = 404
      next(err)
    })

    // error handling
    this.app.use(errorHandler())
  }

  /**
   * Create and return Router.
   *
   * @class Server
   * @method routes
   * @return void
   */
  routes () {
    // use router middleware
    this.app.use(ApiRoutes.path, ApiRoutes.router)
  }
}
