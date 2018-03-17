"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../log");
const authService = require("../service/auth-service");
const objects_1 = require("../utils/objects");
const init_1 = require("./init");
const shutdown_1 = require("./shutdown");
let userId = null;
describe('/auth', () => {
    after(() => {
        shutdown_1.default(init_1.app);
        return authService.findById(userId)
            .then(user => init_1.couchdb('users').destroy(user._id, user._rev, (err, deleted) => {
            userId = null;
        }))
            .catch(err => log_1.default.error(`User test can not destroyed error=${objects_1.inspect(err)}!`));
    });
    before(() => authService.newUser('test', 'test@test.com', '1234')
        .then(user => userId = user._id)
        .catch(err => log_1.default.error(`User test can not created error=${objects_1.inspect(err)}!`)));
    it('/login', done => {
        init_1.chai.request(init_1.app)
            .post('/auth/login')
            .send({ username: 'test@test.com', password: '1234' })
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1hcGktdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvX3Rlc3QvYXV0aC1hcGktdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGdDQUEyQjtBQUMzQix1REFBc0Q7QUFDdEQsOENBQTBDO0FBRTFDLGlDQUEyQztBQUMzQyx5Q0FBaUM7QUFFakMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFBO0FBRWpCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ25CLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDUCxrQkFBUSxDQUFDLFVBQUcsQ0FBQyxDQUFBO1FBQ2IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3pFLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDakIsQ0FBQyxDQUFDLENBQUM7YUFDRixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFNLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3pGLENBQUMsQ0FBQyxDQUFBO0lBRUYsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7U0FDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDL0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBTSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBR3BGLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDaEIsV0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFHLENBQUM7YUFDWixJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ25CLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ3JELEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzlCLElBQUksRUFBRSxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=