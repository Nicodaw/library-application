libraryApp.controller('EditBookController', function($scope, BookResource, identity){
	$scope.identity = identity;
	$scope.books = BookResource.query();
});