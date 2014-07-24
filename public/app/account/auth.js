libraryApp.factory('auth', function($q,identity,$http){
	return{
		login: function(user) {
			var deferred = $q.defer();

			$http.post('/login', user).success(function(response) {
				if (response.success) {
					identity.currentUser = response.user;
					deferred.resolve(true);

				}
				else {
					deferred.resolve(false);

				}
		});

		return deferred.promise;

		}
	};
})