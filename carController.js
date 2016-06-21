(function() {
var app = angular.module('appCar');

var carController = function ($scope, $http, carData) {
    $scope.car = [];
    $scope.imageURL = "";
    $scope.recalls = {};
    $scope.getData = function () {
        carData.getCarData().then(function (data) {
            $scope.car = data.Car;
            $scope.imageURL = data.Image;
            $scope.recalls = JSON.parse(data.Recalls);
        });
    };

    $scope.name = 'Hello car';

    $scope.getData();
}

app.controller('carController', carController);

}());