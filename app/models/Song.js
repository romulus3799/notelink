const mongoose = require('mongoose');

module.exports = mongoose.model('Song', {
	link : {type: String, default: ''},
	artist : {type: String, default: ''},
	album : {type: String, default: ''},
	name : {type: String, default: ''},
	explicit : {type: Boolean, default: false},
	genres : {type: Array, default: []},
	tags : {type: Array, default: []},
	likes : {type: Number, default: 0},
	dislikes : {type: Number, default: 0},
	upload_date: {type: Number, default: Date.now()}
})