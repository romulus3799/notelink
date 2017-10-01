(() => {
	'use strict';
	angular.module('PostController', [])
		.controller('PostController', ($scope, $http, SongService) => {

			$http.get('/api/songs').then(res => { console.log(res); }, err => { console.log(err); });
			$scope.genres = GENRES;

			$scope.track = {
				link: '',
				artist: '',
				name: '',
				album: '',
				genres: [],
				explicit: false,
				tags: '',
				likes: 0,
				dislikes: 0,
				upload_date: 0
			}

			$scope.submitted = false;
			$scope.submissionMessage = '';
			$scope.postTrack = () => {
				console.log($scope.track);
				$scope.submitted = true;
				$scope.track.upload_date = Date.now();
				if ($scope.track.tags instanceof String)
					$scope.track.tags = $scope.track.tags.toLowerCase().split(" ") || [];
				
				SongService.post($scope.track)
					.then(tracks => {
						$scope.submissionMessage = 'Your track has been shared!'; 
						console.log(tracks); 
					},
					error => { 
						$scope.submissionMessage = 'There was an error sharing your track.';
						console.log(error); 
					});
			}

		});
})();

