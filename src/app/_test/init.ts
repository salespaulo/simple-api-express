process.env.NODE_ENV = 'test'
process.env.PORT= '3999'

import server from '../app'
import couchdb from '../db/couchdb'

const app = server.get()

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

chai.use(chaiHttp)

export { 
    chai, 
    should, 
    chaiHttp, 
    app, 
    couchdb 
}
