/**
 * Created by vanhung on 3/9/2016.
 */
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'sinhvien'
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/phones', {
            templateUrl: 'view/myview.html',
            controller: 'sinhvienController'
        }).
        otherwise({
            redirectTo: '/phones'
        });
    }]);

phonecatApp.controller("basecontroller",['$scope', function ($scope) {
    $scope.age="123";
    $scope.baseURL="http://localhost:8081/";
}]);