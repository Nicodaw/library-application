libraryApp.factory('bookFactory', function($q,$http,BookResource, identity){
	return {
		addBook: function(book) {
			var deferred = $q.defer();

			var book = new BookResource(book);
			book.$save().then(function() {
				deferred.resolve();
			}, function(response) {
				deferred.reject(response)
			});
			return deferred.promise;
		}
		
	};
})