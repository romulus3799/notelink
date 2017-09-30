const Song = require('./models/Song');

module.exports = app => {
	app.get('/api/songs', (req,res) => {
		Song.find((err, songs) => {
			if (err) res.send(err);
			res.json(songs);
		});
	});

	app.get('*', (req, res) => {
		res.sendFile('c:/notelink/public/index.html');
	});
}