libraryApp.factory('DateCalculator', function($http){

	function calculator() {
		var dateTaken = new Date();
		var calcDate = dateTaken.getDate();
		dateTaken.setDate(calcDate + 10);
		return dateTaken;

	}
	var DateCalculator = new calculator();


	return DateCalculator;

})