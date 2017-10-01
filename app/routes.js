const Song = require('./models/Song');
const path = require('path');

module.exports = app => {

	app.get('/api/songs', (req,res) => {
		Song.find((err, songs) => {
			if (err) {
				console.log('error getting songs');
				res.send(err);
			}

			res.json(songs);
		});
	});

	app.post('/api/songs', (req, res) => {
		console.log('Posting...');
		//create pyramid
		Song.create({
			link		: req.body.link,
			artist		: req.body.artist,
			album		: req.body.album,
			name		: req.body.name,
			explicit	: req.body.explicit,
			genres		: req.body.genres,
			likes		: req.body.likes,
			dislikes	: req.body.dislikes,
			tags		: req.body.tags,
			upload_date	: req.body.upload_date
		}, (err, song) => {
			if (err) {res.send(err)}

			Song.find((err, songs) => {
				if (err) {res.send(err)}

				res.json(songs)
			})
		})
	})

	app.delete('/api/songs/:song_id', (req, res) => {
		Song.remove({
			_id : req.params.song_id
		}, (err, song) => {
			if (err) {res.send(err)}

			Song.find((err, songs) => {
				if (err) {res.send(err)}

				res.json(songs)
			})
		})

	})

	app.get('*', (req, res) => {
		res.sendFile(path.resolve('public/index.html'));
	});
}