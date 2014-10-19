libraryApp.filter('formated', function() {
	return function(input) {
		switch (input) {		
			case '0': return 'Да'; break;
			default : return "---"; break;
		}
	}
})