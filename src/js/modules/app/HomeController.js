var HomeController = function () {
    this.counter = 1;
};

HomeController.prototype.inc = function () {
    this.counter++;
};

module.exports = HomeController;
