var routes = require('./routes');

angular.module('skeleton.app', ['skeleton.users', 'ui.router'])
    .controller('HomeController', require('./HomeController'))
    .controller('UserController', require('./UserController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        Object.keys(routes).forEach(function (name) {
            $stateProvider.state(name, routes[name]);
        });
    });
