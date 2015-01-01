angular.module('SkeletonApp', [])
    .service('userService', require('./services/UserService'))
    .controller('HomeController', require('./controllers/HomeController'));
