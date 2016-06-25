(function(){

    var carData = function ($http) {

        getCarData = function (year, make, model, trim) {
            return $http.get('http://epalmer-api.azurewebsites.net/api/Car/getCar?year=' + year + '&make='
                + make + '&Model=' + model + '&Trim=' + trim)
            .then(function (response) {
                console.log(response);
                return response.data;
            });
        };

        return {
            getCarData: getCarData
        };
    };

    var app = angular.module('appCar');
    app.factory('carData', carData);

}());