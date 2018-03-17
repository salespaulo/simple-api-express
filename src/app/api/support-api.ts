
import Api from '.'

import * as healthService from '../service/health-service'
import * as express from 'express'

const URI = '/support'

class SupportApi implements Api {
    routes() {
        return express.Router()
            .get('/ping', (req, res, next) => res.json({ result: 'pong' }))
            .post('/health', (req, res, next) => healthService.check)
            .get('/health', (req, res, next) => healthService.check)
            .post('/echo', (req, res, next) => res.json({ result: req.body.echo }))
            .get('/echo', (req, res, next) => res.json({ result: req.query.echo }))
            .get('/echo/:echo', (req, res, next) => res.json({ result: req.params.echo }))
    }
}

const api = new SupportApi()

export default server => server.use(URI, api.routes())
