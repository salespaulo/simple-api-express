"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("../utils/objects");
const config = require("config");
const winston = require('winston');
const morgan = require('morgan');
const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            level: config.get('logger.file.level'),
            filename: config.get('logger.file.path'),
            handleExceptions: true,
            json: true,
            maxsize: 5242880,
            maxFiles: 5,
            colorize: false
        }),
        new (winston.transports.Console)({
            level: config.get('logger.console.level'),
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});
logger.stream = {
    write: (message, encoding) => logger.info(message)
};
const createMorgan = () => morgan('combined', { stream: logger.stream });
exports.default = objects_1.merge(logger, { morgan: createMorgan });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2xvZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsOENBQXdDO0FBRXhDLGlDQUFnQztBQUVoQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBRWhDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsVUFBVSxFQUFFO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUU7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7WUFDdEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7WUFDeEMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFFO1lBQzlCLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO1lBQ3pDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDO0tBQ0w7SUFDRCxXQUFXLEVBQUUsS0FBSztDQUNyQixDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ1osS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Q0FDckQsQ0FBQTtBQUVELE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7QUFFeEUsa0JBQWUsZUFBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFBIn0=