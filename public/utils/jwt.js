"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config = require("config");
const errors_1 = require("../utils/errors");
const crypt_1 = require("../utils/crypt");
const jwtSecret = config.has('jwt.secret') ? config.get('jwt.secret') : 'simple-api-express-secret-prime(47)';
const secret = crypt_1.encode(jwtSecret);
const sign = data => new Promise((resolve, reject) => jwt.sign(data, secret, (err, encoded) => {
    if (err)
        reject(errors_1.newUnauthorized(err));
    else
        resolve(encoded);
}));
exports.sign = sign;
const verify = token => new Promise((resolve, reject) => jwt.verify(token, secret, (err, decoded) => {
    if (err)
        reject(errors_1.newUnauthorized(err));
    else
        resolve(decoded);
}));
exports.verify = verify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC91dGlscy9qd3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvQ0FBbUM7QUFDbkMsaUNBQWdDO0FBRWhDLDRDQUFpRDtBQUNqRCwwQ0FBdUM7QUFFdkMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMscUNBQXFDLENBQUE7QUFDN0csTUFBTSxNQUFNLEdBQUcsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBRWhDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3BDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUFDLE1BQU0sQ0FBQyx3QkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDckMsSUFBSTtRQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFBO0FBUUUsb0JBQUk7QUFOYixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQ3BELEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUN2QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFBQyxNQUFNLENBQUMsd0JBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLElBQUk7UUFBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUVRLHdCQUFNIn0=