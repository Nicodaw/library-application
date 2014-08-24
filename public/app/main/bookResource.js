libraryApp.factory('BookResource', function($resource, $http){

	var BookResource = $resource('/api/books/:id', {id:'@id'},  {update:{method: 'PUT', isArray: false}});


	return BookResource;

})