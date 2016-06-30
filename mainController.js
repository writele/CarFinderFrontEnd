(function() {
var app = angular.module('appCar');

var mainController = function ($scope, $http, carData, $routeParams) {
      $scope.years = [];
      $scope.makes = [];
      $scope.models = [];
      $scope.trims = [];
      $scope.selectedYear = $scope.years[0];
      $scope.selectedMake = null;
      $scope.selectedModel = null;
      $scope.selectedTrim = null;
      $scope.showYears = true;
      $scope.showMakes = false;
      $scope.showModels = false;
      $scope.showTrims = false;

      // $scope.appendData = function(element, array) {
      //   //add select list yearsDropdown
      //   console.log($scope.years + " " + $scope.showYears);
      //   var itemDropdown = document.getElementById(element);
      //   for(item in array) {
      //     itemDropdown.add(new Option( array[item] ));
      //   }
      // };

      $scope.getYears = function () {
        carData.getYears().success(function (result) {
            $scope.years = result;
            $scope.showYears = true;   
            console.log($scope.showYears); 
            console.log($scope.years);
            console.log($scope.years[0]);
        });
      };

       $scope.getMakes = function (year) {
        carData.getMakes(year).then(function (data) {
            $scope.makes = data;
            $scope.showMakes = true;    
        });
      };

      $scope.getYears();
}

app.controller('mainController', mainController);

}());