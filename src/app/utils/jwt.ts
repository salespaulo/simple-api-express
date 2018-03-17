
import * as jwt from 'jsonwebtoken'
import * as config from 'config'

import { newUnauthorized } from '../utils/errors'
import { encode } from '../utils/crypt'

const jwtSecret = config.has('jwt.secret') ? config.get('jwt.secret') : 'simple-api-express-secret-prime(47)'
const secret = encode(jwtSecret)

const sign = data => new Promise((resolve, reject) =>
    jwt.sign(data, secret, (err, encoded) => {
        if (err) reject(newUnauthorized(err))
        else resolve(encoded)
    }))

const verify = token => new Promise((resolve, reject) =>
    jwt.verify(token, secret, (err, decoded) => {
        if (err) reject(newUnauthorized(err))
        else resolve(decoded)
    }))

export { sign, verify }
