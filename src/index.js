import config from 'config'
import { Server } from './app'

// create http server
export const app = Server.bootstrap().app
// ignore coverage
export const server = app.listen(config.get('port'))
