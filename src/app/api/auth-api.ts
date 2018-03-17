
import Api from '.'
import option from '../utils/option'
import logger from '../log'
import * as authService from '../service/auth-service'
import { sendHttpResponse } from '../utils/errors'
import { decodedToken } from './auth-filter'

import * as express from 'express'

const URI = '/auth'

const newUser = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    authService.newUser(name, email, password)
    .then(user => res.status(201).json(user))
    .catch(err => sendHttpResponse(err, res, next))
}

const me = (req, res, next) => {
    decodedToken(req)
    .then(decoded =>  res.json(decoded))
    .catch(err => sendHttpResponse(err, res, next))
}

const logout = (req, res, next) => {
    req.session.destroy()
    res.status(200).json('Logout successfuly!')
    return next()
}

const login = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    logger.debug(`Login username=${username} password=${password}`)

    authService.login(username, password)
    .then(user => {
        res.json(user)
    })
    .catch(err => sendHttpResponse(err, res, next))
}

class AuthApi implements Api {
    routes() {
        return express.Router()
            .get('/me', me)
            .post('/users', newUser)
            .post('/login', login)
            .get('/logout', logout)
    }
}

const api = new AuthApi()

export default server => server.use(URI, api.routes())
