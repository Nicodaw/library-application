libraryApp.controller('loginController', function($scope, notifier, identity,auth, $location) {

	$scope.identity = identity;

	$scope.login = function(user) {
		auth.login(user).then(function(success){
			if (success) {
				notifier.success("Влизането успешно!")
			}
			else {
				notifier.error("Грешно Име или Парола")				
			}
		});
	}

	$scope.logout = function() {
		auth.logout().then(function() {
				notifier.success('Излизането успешно!');
				$scope.user.username='';
				$scope.user.password='';
				$location.path('/');	
		})
	
	}
})