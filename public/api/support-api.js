"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const healthService = require("../service/health-service");
const express = require("express");
const URI = '/support';
class SupportApi {
    routes() {
        return express.Router()
            .get('/ping', (req, res, next) => res.json({ result: 'pong' }))
            .post('/health', (req, res, next) => healthService.check)
            .get('/health', (req, res, next) => healthService.check)
            .post('/echo', (req, res, next) => res.json({ result: req.body.echo }))
            .get('/echo', (req, res, next) => res.json({ result: req.query.echo }))
            .get('/echo/:echo', (req, res, next) => res.json({ result: req.params.echo }));
    }
}
const api = new SupportApi();
exports.default = server => server.use(URI, api.routes());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC1hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2FwaS9zdXBwb3J0LWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDJEQUEwRDtBQUMxRCxtQ0FBa0M7QUFFbEMsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFBO0FBRXRCO0lBQ0ksTUFBTTtRQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2FBQ2xCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQzlELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzthQUN4RCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7YUFDdkQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN0RSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3RFLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN0RixDQUFDO0NBQ0o7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFBO0FBRTVCLGtCQUFlLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEifQ==