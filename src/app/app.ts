
import server from './server'
import { filter } from './api/auth-filter'
import authApi from './api/auth-api'
import supportApi from './api/support-api'

import * as express from 'express'
import * as session from 'express-session';

/* TODO avaliar se vai precisar de sessao mesmo, acredito que nao
const createSession = server => server.use(
    session({
        cookie: {},
        secret: 'simple-api-express',
        resave: true,
        saveUninitialized: true,
}))
*/

const authFilter = server => server.use(filter)

export default server(express())
    .map(authFilter)
    .map(supportApi)
    .map(authApi)
