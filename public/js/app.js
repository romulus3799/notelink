angular.module('noteLink',
	[
		'ngRoute',
		'ngMaterial',
		'appRoutes',
		'MainController',
		'HomeController',
		'PostController',
		'ChannelsController',
		'ProfileController',
		'SongService'
	])
	.config($mdThemingProvider => {

	    $mdThemingProvider.theme('notelinktheme')
	    .primaryPalette('lime')
	    .accentPalette('deep-purple')
	    .warnPalette('pink');

	    $mdThemingProvider.setDefaultTheme('notelinktheme');
	});