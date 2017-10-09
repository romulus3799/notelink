(() => {
	'use strict';
	angular.module('PostController', [])
		.controller('PostController', ($scope, $http, $route, $location, SongService) => {
			$(document).ready(() => {
				$('#afterSubmitDiv').hide();
			})

			$scope.reloadRoute = () => {
				$route.reload();
			}
			$scope.navigate = href => {
				$location.path(href);
			}

			SongService.get().then(tracks => { $scope.tracks = tracks.data;});
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
			$scope.showThanks = false;

			$scope.postTrack = () => {
				console.log($scope.track);
				$scope.submitted = true;
				$('#afterSubmitDiv').show();
				$scope.track.upload_date = Date.now();
				if ($scope.track.tags instanceof String)
					$scope.track.tags = $scope.track.tags.toLowerCase().split(" ") || [];
				
				let link = $scope.track.link;
				let isValidLink = false;
				for (let i in VALID_LINKS) {
					if (new RegExp(VALID_LINKS[i]).test(link)) {
						isValidLink = true;
						break;
					}
				}
				if (!isValidLink) {
					$scope.submissionMessage = 'Oops, you submitted a link with the wrong format! Please read the instructions for copying and pasting valid links.';
					return;
				};

				// let isDuplicateLink = false;
				// for (let i in $scope.tracks) {
				// 	if ($scope.tracks[i].link === link) {
				// 		isDuplicateLink = true;
				// 		break;
				// 	}
				// }
				// if (isDuplicateLink) {
				// 	$scope.submissionMessage = 'That link has already been submitted.';
				// 	return;
				// };

				SongService.post($scope.track)
					.then(tracks => {
						$scope.submissionMessage = 'Your track has been shared!';
						$scope.showThanks = true;
						console.log(tracks);
					},
					error => {
						$scope.submissionMessage = 'There was an error sharing your track.';
						$scope.showThanks = false;
						console.log(error);
					});
			}

		});
})();

