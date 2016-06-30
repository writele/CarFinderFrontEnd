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
      $scope.showYears = false;
      $scope.showMakes = false;
      $scope.showModels = false;
      $scope.showTrims = false;
      $scope.showViewCar = false;

      // $scope.appendData = function(element, array) {
      //   //add select list yearsDropdown
      //   console.log($scope.years + " " + $scope.showYears);
      //   var itemDropdown = document.getElementById(element);
      //   for(item in array) {
      //     itemDropdown.add(new Option( array[item] ));
      //   }
      // };

      $scope.getYears = function () {
        carData.getYears().then(function (data) {
            $scope.years = data;
            $scope.showYears = true;      
            console.log($scope.selectedYear);   
        });
      };

       $scope.getMakes = function (year) {
        carData.getMakes(year).then(function (data) {
            $scope.makes = data;
            $scope.selectedMake = $scope.makes[0];
            $scope.showMakes = true;   
        });
      };

        $scope.getModels = function (year, make) {
        carData.getModels(year, make).then(function (data) {
            $scope.models = data;
            $scope.selectedModel = $scope.models[0];
            $scope.showModels = true;   
        });
      };

        $scope.getTrims = function (year, make, model) {
        carData.getTrims(year, make, model).then(function (data) {
            $scope.trims = data;
            $scope.selectedTrim = $scope.trims[0];
            $scope.showTrims = true; 
            $scope.showViewCar = true;  
        });
      };

      $scope.getYears();
}

app.controller('mainController', mainController);

}());