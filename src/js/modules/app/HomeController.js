var HomeController = function (COUNTER_FIRST_VALUE) {
    this.counter = COUNTER_FIRST_VALUE;
};

HomeController.prototype.inc = function () {
    this.counter++;
};

module.exports = HomeController;
