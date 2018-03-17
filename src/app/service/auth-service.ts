
import couchdb from '../db/couchdb'
import * as crypt from '../utils/crypt'
import * as jwt from '../utils/jwt'

import { User, Session } from '../model/user'
import { newNotFound, newRequiredParameters, newInvalidParameters } from '../utils/errors'

const getDomain = email => email.substring(email.lastIndexOf('@') + 1)

const getUsername = email => email.substring(1, email.lastIndexOf('@'))

const findById = (id: string): Promise<User> => new Promise((resolve, reject) => {
    if (!id) {
        return reject(newRequiredParameters(`id="${id}"`))
    }

    const users = couchdb('users')
    return users.find({
        selector: {
            _id: {
                $eq: id
            }
        }
    }, (err, body, header) => {
        if (err) reject(err)
        else {
            const docs = body.docs
            if (docs.length > 0) resolve(docs[0])
            else reject(newNotFound('User', 'email', id))
        }
    })
})

const newUser = (name: string, email: string, password: string, photoUrl: string = null, 
        providerId: string = null): Promise<User> => new Promise((resolve, reject) => {

    if (!name || !email || !password) { 
        return reject(this.newRequiredParametersError(`name=${name} email=${email} password=${password}`)) 
    }

    const toInsert = new User()
    toInsert._id = email
    toInsert.name = name || getUsername(email)
    toInsert.password = crypt.encode(password)
    toInsert.providerId = providerId || 'simple-api'
    toInsert.photoUrl = photoUrl || 'http://www.gravatar.com/avatar/?d=mysteryman&s=50'
    toInsert.session = new Session()
    delete toInsert._rev

    const users = couchdb('users')

    users.insert(toInsert, (err, inserted) => {
        if (err) reject(err)
        else {
            findById(inserted.id)
            .then(user => resolve(user))
            .catch(err => reject(err))
        }
    })
})

const forgotPassword = (email: string) => new Promise((resolve, reject) => {

})

const verifyToken = token => jwt.verify(token)
  
const login = (username, password) => new Promise((resolve, reject) => {
    const users = couchdb('users')
    findById(username)
        .then(user => {
            if (crypt.compare(password, user.password)) {
                jwt.sign({
                    id: user._id,
                    name: user.name,
                    session: user.session
                })
                .then(token => {
                    user.session.logged = true
                    user.session.token = token
                    users.insert({ _id: user._id, _rev: user._rev, session: user.session}, (err, updated) => {
                        if (err) reject(err)
                        else resolve(user)
                    })
                })
            } else reject(newInvalidParameters(`username=${username} with this password`))
        })
        .catch(err => reject(err))
})

export { 
    login, 
    newUser, 
    findById,
    forgotPassword, 
    verifyToken 
}
