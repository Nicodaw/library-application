var libraryApp = angular.module('libraryApp', ['ngResource','ngRoute']).value('toastr', toastr);

libraryApp.config(function($routeProvider, $locationProvider) {
	// $locationProvider.html5Mode(true);

	var routeUserChecks = {
		adminRole: {
			authenticate: function(auth) {
				return auth.isAuthorizedForRole('admin');
			}
		},
			authenticated: {
			authenticate: function(auth) {
				return auth.isAuthenticated();
			}
		}
	};



	$routeProvider
		.when('/',{
			templateUrl: '/partials/main/home',
			controller: 'mainController'
		})
		.when('/login', {
			templateUrl: '/partials/account/login',
			controller: 'loginController'
		})
		.when('/admin/users', {
			templateUrl: '/partials/admin/users-list',
			controller: 'UserListController',
			resolve: routeUserChecks.adminRole
		})
		.when('/profile',{
			templateUrl: '/partials/account/profile',
			controller: 'ProfileController',
			resolve: routeUserChecks.authenticated
		})
		.when('/admin/signup',{
			templateUrl: '/partials/admin/signup',
			controller: 'SignUpController',
			resolve: routeUserChecks.adminRole
		})
		.when('/admin/edit-book',{
			templateUrl: '/partials/admin/editBook',
			controller: 'EditBookController',
			resolve: routeUserChecks.authenticated
		})
});

libraryApp.run(function($rootScope,$location) {
	$rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
		if (rejection === 'not authorized') {
			$location.path('/');
		}
	})
});