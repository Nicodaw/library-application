libraryApp.controller('BookDetailsController', function($scope, $routeParams, BookResource) {
	$scope.book = BookResource.get({id: $routeParams.id});
});