angular.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {

		$routeProvider
			.when('/', {
				templateUrl: 'home.html',
				controllerAs: 'HomeController'
			})
			.when('/share', {
				templateUrl: 'post.html',
				controllerAs: 'PostController'
			})
			.when('/discover', {
				templateUrl: 'channels.html',
				controllerAs: 'ChannelsController'
			})
			.when('/profile', {
				templateUrl: 'profile.html',
				controllerAs: 'ProfileController'
			})
			.when('/api/songs', {
				templateUrl: '',
				controllerAs: ''
			})

		$locationProvider.html5Mode(true);
	}]);