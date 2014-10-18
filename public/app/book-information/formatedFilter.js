libraryApp.filter('formated', function() {
	return function(input) {
		switch (input) {		
			case false: return 'Да'; break;
			default : return "необработена"; break;
		}
	}
})