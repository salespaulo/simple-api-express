"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
exports.default = app => {
    app.instance.close();
    process.env.PORT = server_1.DEFAULT_PORT;
    process.env.NODE_ENV = server_1.DEFAULT_ENV;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1dGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL190ZXN0L3NodXRkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQXFEO0FBRXJELGtCQUFlLEdBQUcsQ0FBQyxFQUFFO0lBQ2pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcscUJBQVksQ0FBQTtJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxvQkFBVyxDQUFBO0FBQ3RDLENBQUMsQ0FBQSJ9