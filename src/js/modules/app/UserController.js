var UserController = function (userService) {
    this.userService = userService;
    this.users = [];
    this.getUsers();
};

UserController.prototype.getUsers = function () {
    var _this = this;
    this.userService.findAll().then(function (users) {
        _this.users.length = 0;
        users.forEach(function (user) {
            _this.users.push(user);
        });
    });
};

module.exports = UserController;
