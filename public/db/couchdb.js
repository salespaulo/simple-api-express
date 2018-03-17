"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nano = require("nano");
const config = require("config");
const log_1 = require("../log");
const objects_1 = require("../utils/objects");
const Agent = require('agentkeepalive');
const couchdb = nano({
    url: config.get('db.host'),
    log: (id, args) => log_1.default.silly(`CouchDB id="${objects_1.inspect(id)}" args="${objects_1.inspect(args)}"`),
    requestDefaults: {
        agent: new Agent({
            maxSockets: 50,
            maxKeepAliveRequests: 0,
            maxKeepAliveTime: 30000
        })
    },
});
const create = dbname => couchdb.db.create(dbname, (err, body) => {
    if (err) {
        if (err.error === 'file_exists') {
            log_1.default.silly(`CouchDB create db=${dbname} error=${objects_1.inspect(err)}`);
        }
        else {
            log_1.default.error(`CouchDB create db=${dbname} error=${objects_1.inspect(err)}`);
        }
    }
    else
        log_1.default.info(`CouchDB create db=${dbname} successfuly!`);
});
create('users');
exports.default = (dbname) => couchdb.use(dbname);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hkYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvZGIvY291Y2hkYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZCQUE0QjtBQUM1QixpQ0FBZ0M7QUFFaEMsZ0NBQTJCO0FBQzNCLDhDQUFpRDtBQUVqRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUV2QyxNQUFNLE9BQU8sR0FBUSxJQUFJLENBQUM7SUFDdEIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQzFCLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUNkLGFBQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxpQkFBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLGlCQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUN2RSxlQUFlLEVBQUc7UUFDZCxLQUFLLEVBQUcsSUFBSSxLQUFLLENBQUM7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLG9CQUFvQixFQUFFLENBQUM7WUFDdkIsZ0JBQWdCLEVBQUUsS0FBSztTQUMxQixDQUFDO0tBQ0w7Q0FDSixDQUFDLENBQUE7QUFFRixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUM3RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLGFBQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLE1BQU0sVUFBVSxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixhQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixNQUFNLFVBQVUsaUJBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDbkUsQ0FBQztJQUNILENBQUM7SUFBQyxJQUFJO1FBQUMsYUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsTUFBTSxlQUFlLENBQUMsQ0FBQTtBQUNsRSxDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUVmLGtCQUFlLENBQUMsTUFBYyxFQUEyQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQSJ9