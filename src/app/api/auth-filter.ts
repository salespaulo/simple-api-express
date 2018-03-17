
import logger from '../log'
import option from '../utils/option'
import * as authService from '../service/auth-service'
import { newHttpResponse } from '../utils/errors'

import * as config from 'config'

const unless = ['/login', '/support']

const getToken = header => option(header)
    .filter(header => header.split(' ')[0] === 'Bearer')
    .map(header => header.split(' ')[1])
    .map(header => header.trim())
    .map(header => header.toLowerCase())
    .orElse('');

const getHeader = option(config.get('jwt.header'))
        .orElse('Authorization')

const extractHeader = req => req.headers[getHeader()]

const isUnless = path => unless.indexOf(path) > -1 || 
                        unless.some(uri => path.indexOf(uri) > -1)

const decodedToken = req => {
    const token = getToken(extractHeader(req))
    return authService.verifyToken(token)
}

const filter = (req, res, next) => {
    const path = req.originalUrl
    logger.debug(`Auth filter to path=${path}`)
    if (isUnless(path)) {
        logger.debug(`Auth filter is unless to req.path=${path}`)
        next()
    } else {
        logger.debug(`Auth filter will verify token to req.path=${path}`)
        decodedToken(req)
        .then(decoded =>  next())
        .catch(err => newHttpResponse(err, res, next))
    }
}

export { decodedToken, filter }
