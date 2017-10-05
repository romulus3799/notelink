angular.module('MainController', [])
	.controller('MainController', ($scope, $location) => {
		$scope.currentNavItem = $location.path() === '/' 
		? 'home' : 
		$location.path() === '/share'
		? 'share' :
		$location.path() === '/discover'
		? 'discover' :
		$location.path() === '/profile'
		? 'profile' : 'discover';

		$(document).ready(() => {

			$('a').on('click', () => {
				console.log($(this));
				
				$(document).ready(() => {
					$scope.currentNavItem = $location.path() === '/' 
					? 'home' : 
					$location.path() === '/share'
					? 'share' :
					$location.path() === '/discover'
					? 'discover' :
					$location.path() === '/profile'
					? 'profile' : 'home';
				});
			});
		});
	});

