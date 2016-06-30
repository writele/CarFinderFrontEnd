(function(){

    var carData = function ($http) {

         getYears = function () {
            return $http.get('http://epalmer-api.azurewebsites.net/api/Car/Years')
            .then(function (response) {
                return response.data;
            });
        };

        getMakes = function (year) {
            return $http.get('http://epalmer-api.azurewebsites.net/api/Car/' + year + '/Makes')
            .then(function (response) {
                return response.data;
            });
        };

        getModels = function (year, make) {
            return $http.get('http://epalmer-api.azurewebsites.net/api/Car/' + year + '/' + make + '/Models')
            .then(function (response) {
                return response.data;
            });
        };

        getTrims = function (year, make, model) {
            return $http.get('http://epalmer-api.azurewebsites.net/api/Car/' + year + '/' + make +  '/' + model + '/Trims')
            .then(function (response) {
                return response.data;
            });
        };

        getCarData = function (year, make, model, trim) {
            return $http.get('http://epalmer-api.azurewebsites.net/api/Car/getCar?year=' + year + '&make='
                + make + '&Model=' + model + '&Trim=' + trim)
            //2012, Honda, Accord, Sedan SE
            .then(function (response) {
                return response.data;
            });
        };

        return {
            getYears: getYears,
            getMakes, getMakes,
            getModels, getModels,
            getTrims: getTrims,
            getCarData: getCarData
        };
    };

    var app = angular.module('appCar');
    app.factory('carData', carData);

}());