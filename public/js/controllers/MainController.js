angular.module('MainController', [])
	.controller('MainController', ($scope, $location) => {
		$scope.currentNavItem = $location.path() === '/' 
								? 'home' : 
								$location.path() === '/share'
								? 'share' :
								$location.path() === '/profile'
								? 'profile' : 'discover'
	});

