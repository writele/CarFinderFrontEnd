(function() {
var app = angular.module('appCar');

var carController = function ($scope, $http, carData, $routeParams) {
    $scope.car = [];
    $scope.imageURL = "";
    $scope.recalls = {};
    $scope.getData = function () {
        carData.getCarData($routeParams.year, $routeParams.make, $routeParams.model, $routeParams.trim).then(function (data) {
            $scope.car = data.Car;
            $scope.imageURL = data.Image;
            $scope.recalls = JSON.parse(data.Recalls);
        });
    };

    $scope.getData();
}

app.controller('carController', carController);

}());