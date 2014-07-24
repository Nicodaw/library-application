libraryApp.controller('mainController',function ($scope) {
	$scope.books = [{  id: 1,
	name: "20 000 левги под водата",
	inventoryNum: "2013/23",
	author: "Жул Верн",
	subName: "---",
	taken: true,
	returnDate: new Date(5/12/2014)
},{	id: 3,
	name: "Пътеводител",
	inventoryNum: "2015/73",
	author: "Дъглас Адамс",
	subName: "на галактическия стопаджия",
	taken: false,
	returnDate: "---"
},{	id: 2,
	name: "Войната на световете",
	inventoryNum: "2012/42",
	author: "Хърбърт Уелс",
	subName: "---",
	taken: false,
	returnDate: "---"
},{	id: 4,
	name: "четири",
	inventoryNum: "2012/42",
	author: "Хърбърт Уелс",
	subName: "---",
	taken: false,
	returnDate: "---"
},{	id: 5,
	name: "пет",
	inventoryNum: "2012/42",
	author: "Хърбърт Уелс",
	subName: "---",
	taken: false,
	returnDate: "---"
}]
})