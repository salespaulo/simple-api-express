
import logger from '../log'
import * as authService from '../service/auth-service'
import { inspect } from '../utils/objects'

import { chai, app, couchdb } from './init'
import shutdown from './shutdown'

let userId = null

describe('/auth', () => {
    after(() => {
        shutdown(app)
        return authService.findById(userId)
            .then(user => couchdb('users').destroy(user._id, user._rev, (err, deleted) => {
                userId = null
            }))
            .catch(err => logger.error(`User test can not destroyed error=${inspect(err)}!`))
    })

    before(() => authService.newUser('test', 'test@test.com', '1234')
        .then(user => userId = user._id)
        .catch(err => logger.error(`User test can not created error=${inspect(err)}!`)))
    

    it('/login', done => {
        chai.request(app)
            .post('/auth/login')
            .send({ username: 'test@test.com', password: '1234' })
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                done()
            })
    })
})
