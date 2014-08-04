libraryApp.filter('dateFilter', function() {
	return function(input) {
		switch (input) {
			case "Apr 8": return '---'; break;
			default : return input; break;
		}
	}
})