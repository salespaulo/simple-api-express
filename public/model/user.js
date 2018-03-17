"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Session {
    constructor() {
        this.score = 0;
        this.token = null;
        this.logged = false;
    }
}
exports.Session = Session;
class User {
    constructor() {
        this._id = '';
        this._rev = '';
        this.name = '';
        this.password = '';
        this.phoneNumber = '';
        this.providerId = '';
        this.firebaseId = '';
        this.photoUrl = '';
        this.session = new Session();
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvbW9kZWwvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVNBO0lBQUE7UUFDSSxVQUFLLEdBQVcsQ0FBQyxDQUFBO1FBQ2pCLFVBQUssR0FBUSxJQUFJLENBQUE7UUFDakIsV0FBTSxHQUFZLEtBQUssQ0FBQTtJQUN6QixDQUFDO0NBQUE7QUFjYywwQkFBTztBQVp0QjtJQUFBO1FBQ0UsUUFBRyxHQUFXLEVBQUUsQ0FBQTtRQUNoQixTQUFJLEdBQVcsRUFBRSxDQUFBO1FBQ2pCLFNBQUksR0FBVyxFQUFFLENBQUE7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixnQkFBVyxHQUFXLEVBQUUsQ0FBQTtRQUN4QixlQUFVLEdBQVcsRUFBRSxDQUFBO1FBQ3ZCLGVBQVUsR0FBVyxFQUFFLENBQUE7UUFDdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixZQUFPLEdBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0NBQUE7QUFFUSxvQkFBSSJ9