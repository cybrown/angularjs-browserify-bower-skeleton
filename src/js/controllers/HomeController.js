var HomeController = function (userService) {
    this.userService = userService;
    this.counter = 1;
    this.users = [];
};

HomeController.prototype.inc = function () {
    this.counter++;
};

HomeController.prototype.getUsers = function () {
    var _this = this;
    this.userService.findAll().then(function (users) {
        _this.users.length = 0;
        users.forEach(function (user) {
            _this.users.push(user);
        });
    });
};

module.exports = HomeController;
