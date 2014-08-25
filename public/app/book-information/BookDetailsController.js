libraryApp.controller('BookDetailsController', function($scope, $routeParams, BookResource, bookFactory, $location) {
	$scope.book = BookResource.get({id: $routeParams.id});

	$scope.update = function(book) {
		bookFactory.update(book).then(function() {
			$location.path('/admin/edit-book');
		})
	}
});