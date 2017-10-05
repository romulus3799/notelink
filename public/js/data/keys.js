const ADMIN_PASS = 'Prime2Echoes';
const VALID_LINKS = [
	"^.*youtube\\.com/watch\\?v=[a-zA-Z0-9_\\-]{1,}$", 
	"^.*youtu\\.be/[a-zA-Z0-9_\\-]{1,}",
	"^.*open\\.spotify\\.com/track/[a-zA-Z0-9]{1,}$",
	'^.*src=".*com/tracks/[0-9]{1,9}.*"></iframe>$'
];

// <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w\\.soundcloud\\.com/player/?url=https%3A//api\\.soundcloud\\.com/tracks/333881960&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
