'use strict';

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
    $http.get('http://sporedtest.24ur.com/5d69d13266db4f5b48a519cf8e582751/voyobox').success(function(data) {
        $scope.voyobox = data.data;
    });

    $scope.orderProp = 'age';
});