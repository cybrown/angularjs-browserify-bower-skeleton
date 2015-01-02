var routes = require('./routes');

var app = angular.module('skeleton.app', ['skeleton.users', 'ui.router'])
    .controller('HomeController', require('./HomeController'))
    .controller('UserController', require('./UserController'))
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        Object.keys(routes).forEach(function (name) {
            $stateProvider.state(name, routes[name]);
        });
    });

var constants = require('./constants.json');
Object.keys(constants).forEach(function (name) {
    app.constant(name, constants[name]);
});
