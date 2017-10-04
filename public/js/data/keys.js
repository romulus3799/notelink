const ADMIN_PASS = 'Prime2Echoes';
const VALID_LINKS = [
	"^https://www.youtube.com/watch\?v=[a-zA-Z0-9_\-]{11}$", 
	"^https://youtu.be/[a-zA-Z0-9_\-]",
	"^https://open.spotify.com/track/[a-zA-Z0-9]{22}$",
	"^<iframe.*src=\"https://w.soundcloud.com/player/\?url=https%3A\/\/api.soundcloud.com/tracks/[0-9]{1,9}&amp;.*\"></iframe>$"
];