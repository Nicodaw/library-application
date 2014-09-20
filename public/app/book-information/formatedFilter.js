libraryApp.filter('formated', function() {
	return function(input) {
		switch (input) {
			case true: return 'Да'; break;			
			case false: return '---'; break;
		}
	}
})