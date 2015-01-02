var UserService = function ($http, API_URL) {
    this.$http = $http;
    this.API_URL = API_URL;
};

UserService.prototype.findAll = function () {
    return this.$http.get(this.API_URL).then(function (response) {
        return response.data;
    });
};

module.exports = UserService;
