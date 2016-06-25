(function() {
var app = angular.module('appCar');

var mainController = function ($scope) {
  $scope.title = "Car Finder";
}

app.controller('mainController', mainController);

}());