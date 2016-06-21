(function() {

var app = angular.module('appCar', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'ViewCar.html',
        controller: 'carController'
      })
      .otherwise({redirectTo:'/'});
  })

}());