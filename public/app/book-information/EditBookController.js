libraryApp.controller('EditBookController', function($scope, BookResource, identity){
	$scope.identity = identity;
	$scope.books = BookResource.query();
	$scope.currentPage = 1;
	$scope.pageSize = 15;
});