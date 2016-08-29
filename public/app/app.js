(function () {
    'use strict';

    angular.module('main.module', ['ngRoute', 'ui.bootstrap', 'customer.module'])
        .run(appRun).config(appConfig);

    appConfig.$inject = ['$routeProvider'];

    function appConfig($routeProvider){
        $routeProvider
            .when('/', {
                redirectTo: '/customer'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    appRun.$inject = ['$rootScope', '$route', '$location'];
    function appRun($rootScope, $route, $location){
        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            var nextPath = $location.path(),
                nextRoute = $route.routes[nextPath];
                console.log(nextRoute.authorize);
        });

        $rootScope.$on('$routeChangeSuccess', function () {
            if (!$route.current.title) {
                document.title = 'Sample';
            } else {
                document.title = 'Sample - ' + $route.current.title;
            }
        });
    }
})();