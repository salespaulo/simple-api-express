"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const auth_filter_1 = require("./api/auth-filter");
const auth_api_1 = require("./api/auth-api");
const support_api_1 = require("./api/support-api");
const express = require("express");
const authFilter = server => server.use(auth_filter_1.filter);
exports.default = server_1.default(express())
    .map(authFilter)
    .map(support_api_1.default)
    .map(auth_api_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxQ0FBNkI7QUFDN0IsbURBQTBDO0FBQzFDLDZDQUFvQztBQUNwQyxtREFBMEM7QUFFMUMsbUNBQWtDO0FBYWxDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQkFBTSxDQUFDLENBQUE7QUFFL0Msa0JBQWUsZ0JBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMzQixHQUFHLENBQUMsVUFBVSxDQUFDO0tBQ2YsR0FBRyxDQUFDLHFCQUFVLENBQUM7S0FDZixHQUFHLENBQUMsa0JBQU8sQ0FBQyxDQUFBIn0=