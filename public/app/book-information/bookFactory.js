libraryApp.factory('bookFactory', function($q,$http,BookResource, identity){
	return {
		addBook: function(book) {
			var deferred = $q.defer();

			var book = new BookResource(book);
			book.taken = false;
			book.returnDate = "04/08/2015"
			book.isFormated = false;
			book.$save().then(function() {
				deferred.resolve();
			}, function(response) {
				deferred.reject(response)
			});
			return deferred.promise;
		},

		update: function(book) {
			var deferred = $q.defer();

        	var updatedBook = new BookResource(book);
        	updatedBook.$update().then(function() {
        		deferred.resolve();
        	}, function(response) {
        		deferred.reject(response);
        	})
        	 return deferred.promise;
		}
		
	};
})