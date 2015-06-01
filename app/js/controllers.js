'use strict';

/* Controllers */

var voyoControllers = angular.module('voyoControllers', []);

voyoControllers.controller('VoyoBox', ['$scope', '$http',
    function($scope, $http) {
        $http.get('http://sporedtest.24ur.com/5d69d13266db4f5b48a519cf8e582751/voyobox').success(function(data) {
            $scope.voyobox = data.data;
        });

        $scope.orderProp = 'age';
    }]);

voyoControllers.controller('VoyoMedia', ['$scope', '$routeParams','$http',
    function($scope, $routeParams,$http) {
        $scope.mediaId = $routeParams.mediaId;
        $http.get('http://sporedtest.24ur.com/5d69d13266db4f5b48a519cf8e582751/crate-media/'+$routeParams.mediaId).success(function(data) {
            $scope.voyomedia = data.data;
        });
    }]);