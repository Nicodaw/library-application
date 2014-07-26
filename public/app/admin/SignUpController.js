libraryApp.controller('SignUpController', function($scope, auth, $location, notifier, identity){
	$scope.identity = identity;
	$scope.signup = function(user) {
		auth.signup(user).then(function() {
				notifier.success('Регистрацията успешна!');
				$location.path('/');

		})
	}
});