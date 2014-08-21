var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	seqNumber: Number,
	title: String,
	author: String,
	subTitle: String,
	taken: Boolean,
	returnDate: Date,
	inventoryNum: String,
	isFormated: Boolean,
	shelf: String
});

var Book = mongoose.model("Book", bookSchema);

module.exports.seedInitialBooks = function() {
		Book.find({}).exec(function (err, collection) {
		if (err) {
			console.log('Cannot find books: '+ err);
			return
		}

			if (collection.length === 0) {
				Book.create({seqNumber: 1, title:'Пътеводител на галактическия стопаджия', author:'Дъглас Адамс',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'2013/43', isFormated: true, shelf: '48-2'});
				Book.create({seqNumber: 2, title:'Математически справочник', author:'Боряна Милкоева',subTitle:'одобрен от МОМН',taken: false, returnDate: new Date ('---'), inventoryNum:'2012/12', isFormated: true, shelf: '45-3'});
				Book.create({seqNumber: 3, title:'Параграф 22', author:'Джоузеф Хелър',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'2010/51', isFormated: true, shelf: '43-5'});
				Book.create({seqNumber: 4, title:'Вината в нашите звезди', author:'Джон Грийн',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'4000/23', isFormated: true, shelf: '48-6'});
				Book.create({seqNumber: 5, title:'Engines of War', author:'George Mann',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'2013/78', isFormated: false, shelf: '50-1'});
				Book.create({seqNumber: 6, title:'UTF-8 encoding test ñ Δ μ æ', author:'ÆÉÖ ',subTitle:'---',taken: false, returnDate: new Date ('---'), inventoryNum:'2015/85', isFormated: false, shelf: '32-2'});
			console.log('Books added to database');
		}

	})
};