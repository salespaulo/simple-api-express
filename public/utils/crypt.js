"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const option_1 = require("../utils/option");
const encode = term => option_1.default(term)
    .map(t => bcrypt.hashSync(t, 10))
    .orElse('');
exports.encode = encode;
const compare = (term, hash) => bcrypt.compareSync(term, hash);
exports.compare = compare;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL3V0aWxzL2NyeXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUNBQWdDO0FBRWhDLDRDQUFvQztBQUVwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFNLENBQUMsSUFBSSxDQUFDO0tBQzlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2hDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUlOLHdCQUFNO0FBRmYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUU3QywwQkFBTyJ9