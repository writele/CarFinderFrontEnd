(function() {

var app = angular.module('appCar', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
      })
      .when('/car/:year/:make/:model/:trim', {
        templateUrl: 'ViewCar.html',
        controller: 'carController'
      })
      .otherwise({redirectTo:'/'});
  })

}());