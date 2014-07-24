var libraryApp = angular.module('libraryApp', ['ngResource','ngRoute']);

libraryApp.config(function($routeProvider, $locationProvider) {
	// $locationProvider.html5Mode(true);


	$routeProvider
		.when('/',{
			templateUrl: '/partials/home',
			controller: 'mainController'
		})
		.when('/log-in', {
			templateUrl: '/partials/log-in',
			controller: 'mainController'
		})

});