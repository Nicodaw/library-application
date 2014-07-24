libraryApp.controller('loginController', function($scope, notifier, identity,auth) {

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
})