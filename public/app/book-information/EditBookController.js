libraryApp.controller('EditBookController', function($scope, BookResource, identity, $log){
	$scope.identity = identity;
	$scope.books = BookResource.query();
	$scope.currentPage = 1;
	$scope.pageSize = 15;
	$scope.areaStatus = true;
});