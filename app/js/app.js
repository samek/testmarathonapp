'use strict';

/* App Module */

var voyoApp = angular.module('voyoApp', [
    'ngRoute',
    'voyoControllers',
    'ui.bootstrap'
]);

voyoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/front', {
                templateUrl: 'partials/front.html',
                controller: 'VoyoBox'
            }).
            when('/front/:mediaId', {
                templateUrl: 'partials/media.html',
                controller: 'VoyoMedia'
            }).
            otherwise({
                redirectTo: '/front'
            });
    }]);