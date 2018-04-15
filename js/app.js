angular.module('OrganicDublin', ['ngRoute','OrganicControllers']);
 
angular.module('OrganicDublin').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
    })
    .when('/shops', {
        templateUrl: 'templates/shops.html',
    })
    .when('/markets', {
        templateUrl: 'templates/markets.html',
    })
    .when('/wheretoeat', {
        templateUrl: 'templates/wheretoeat.html',
    })
    .when('/foodevents', {
        templateUrl: 'templates/foodevents.html',
    })
    .when('/general', {
        templateUrl: 'templates/general.html',
    })
    .when('/business', {
        templateUrl: 'templates/business.html',
    })
});