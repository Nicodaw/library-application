var libraryApp = angular.module('libraryApp', ['ngResource','ngRoute']).value('toastr', toastr);

libraryApp.config(function($routeProvider, $locationProvider) {
	// $locationProvider.html5Mode(true);

	var routeRoleChecks = {
		admin: {
			auth: function(auth) {
				return auth.isAuthorizedForRole('admin');
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
			controller: 'mainController'
		})
		.when('/admin/users', {
			templateUrl: '/partials/admin/users-list',
			controller: 'UserListController',
			resolve: routeRoleChecks.admin
		})
		.when('/admin/signup',{
			templateUrl: '/partials/admin/signup',
			controller: 'SignUpController',
			resolve: routeRoleChecks.admin
		})
});

libraryApp.run(function($rootScope,$location) {
	$rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
		if (rejection === 'not authorized') {
			$location.path('/');
		}
	})
});