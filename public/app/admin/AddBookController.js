libraryApp.controller('AddBookController', function($scope, bookFactory, $location, notifier, identity){
	$scope.identity = identity;
	$scope.addBook = function(book) {
		bookFactory.addBook(book).then(function() {
				notifier.success('Добавянето на книга е успешно!');
				$location.path('/');

		})
	}
});