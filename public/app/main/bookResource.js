libraryApp.factory('BookResource', function($resource){

	var BookResource = $resource('/api/books/:id', {_id:'@id'},  {update:{method:  'PUT', isArray: false}});


	return BookResource;

})