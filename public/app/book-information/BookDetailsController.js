libraryApp.controller('BookDetailsController', function($scope, $routeParams, BookResource, bookFactory, $location) {
	$scope.book = BookResource.get({id: $routeParams.id});
	if ($scope.book.taken === "FALSE") {
		$scope.book.taken === false;
	};
	
	$scope.update = function(book) {
		bookFactory.update(book).then(function() {
			$location.path('/admin/edit-book');
		})
	}
});