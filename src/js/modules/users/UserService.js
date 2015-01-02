var UserService = function ($http) {
    this.$http = $http;
};

UserService.prototype.findAll = function () {
    return this.$http.get('/data.json').then(function (response) {
        return response.data;
    });
};

module.exports = UserService;
