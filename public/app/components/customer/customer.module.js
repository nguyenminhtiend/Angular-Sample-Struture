(function () {
    'use strict';

    angular.module('customer.module', ['ngRoute'])
        .config(customerConfig)
        .controller('CustomerController', CustomerController);

    customerConfig.$inject = ['$routeProvider'];

    function customerConfig($routeProvider){
        $routeProvider
            .when('/customer', {
                title: 'Customer',
                controller: 'CustomerController',
                templateUrl: './app/components/customer/customer.html',
                controllerAs: 'vm',
                authorize: 'Admin'
            });
    }

    function CustomerController(){
        var vm = this;
        vm.message = 'Hello messizip!';
    }
})();