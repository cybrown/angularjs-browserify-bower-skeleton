module.exports = {
    index: {
        url: '/',
        templateUrl: '/templates/index.html',
        controller: 'HomeController as ctrl'
    },
    users: {
        url: '/users',
        templateUrl: '/templates/users.html',
        controller: 'UserController as ctrl'
    }
};
