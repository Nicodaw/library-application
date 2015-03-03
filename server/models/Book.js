var mongoose = require('mongoose');
//var mongooseRedisCache = require('mongoose-redis-cache');

var bookSchema = mongoose.Schema({
	signature: String,
	title: String,
	author: String,
	subTitle: String,
	taken: Boolean,
	returnDate: Date,
	inventoryNum: String,
	isFormated: String,
	shelf: String,
	year: String,
	genre: String,
	subAuthor: String,
	price: String


});

//bookSchema.set('redisCache', true);

var Book = mongoose.model("Book", bookSchema);
module.exports.seedInitialBooks = function() {
		Book.find({}).exec(function (err, collection) {
		if (err) {
			console.log('Cannot find books: '+ err);
			return
		}

			if (collection.length === 0) {
			//	Book.create({seqNumber: 1, title:'Пътеводител на галактическия стопаджия', author:'Дъглас Адамс',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'2013/43', isFormated: true, shelf: '48-2', signature: "55/C13", year: "1949", genre: "Геология Минералогия", subAuthor: "Годев Н.", price: "0.12"});
				// Book.create({seqNumber: 2, title:'Математически справочник', author:'Боряна Милкоева',subTitle:'одобрен от МОМН',taken: false, returnDate: new Date ('---'), inventoryNum:'2012/12', isFormated: true, shelf: '45-3', signature: "55/C13", year: "1949", genre: "Геология Минералогия", subAuthor: "Годев Н."});
				// Book.create({seqNumber: 3, title:'Параграф 22', author:'Джоузеф Хелър',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'2010/51', isFormated: true, shelf: '43-5', signature: "55/C13", year: "1949", genre: "Геология Минералогия", subAuthor: "Годев Н."});
				// Book.create({seqNumber: 4, title:'Вината в нашите звезди', author:'Джон Грийн',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'4000/23', isFormated: true, shelf: '48-6', signature: "55/C13", year: "1949", genre: "Геология Минералогия", subAuthor: "Годев Н."});
				// Book.create({seqNumber: 5, title:'Engines of War', author:'George Mann',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'2013/78', isFormated: false, shelf: '50-1', signature: "55/C13", year: "1949", genre: "Геология Минералогия", subAuthor: "Годев Н."});
				// Book.create({seqNumber: 6, title:'UTF-8 encoding test ñ Δ μ æ', author:'ÆÉÖ ',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'2015/85', isFormated: false, shelf: '32-2', signature: "55/C13", year: "1949", genre: "Геология Минералогия", subAuthor: "Годев Н."});
			console.log('Books added to database');
		}

	})
};