  var trip = angular.module('tripBill', ['ngRoute', 'ngAnimate']);
  trip.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
        console.log("route");
        $routeProvider
          .when('/', {
              templateUrl: 'menu.html',
              controller: 'MenuCtrl',
              controllerAs: 'menu'
          })
          .when('/new', {
              templateUrl: 'newTrip.html',
              controller: 'NewTripCtrl',
              controllerAs: 'newTrip'
          })
          .when('/trip/:tripId', {
              templateUrl: 'openTrip.html',
              controller: 'OpenTripCtrl',
              controllerAs: 'openTrip'
          })
          .when('/trips', {
              templateUrl: 'availableTrips.html',
              controller: 'AvailableTripsCtrl',
              controllerAs: 'availableTrips'
          })
          ;

        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);
    }]);
  /*trip.controller('MainCtrl', ['$route', '$routeParams', '$location',
      function($route, $routeParams, $location) {
        console.log("MAIN");
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
    }]);*/
  trip.controller('MenuCtrl', ['$routeParams', 'tripService',  function($routeParams, tripService) {
      console.log("HOME");
      this.test = true;
      
      this.initMockData = function(){
          var mockTrip = {
               name: "Italy",
               required: true,
               participants: []
          }
          
          var id = tripService.registerTrip(mockTrip);
          console.log(id);
      }
    }]);
  trip.controller('NewTripCtrl', ['$routeParams', function($routeParams) {
      console.log("NEW");
      this.name = "BookCtrl";
      this.params = $routeParams;
    }]);