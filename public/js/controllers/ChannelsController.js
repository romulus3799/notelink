(() => {
	'use strict';
	angular.module('ChannelsController', [])
		.controller('ChannelsController', ($scope, $http, SongService) => {
			$scope.PASSWORD = ADMIN_PASS;
			$scope.tagsInput = '';
			$scope.genres = GENRES;
			// console.log('Into ChannelsController');
			SongService.get().then(tracks => {
				$scope.tracks = tracks.data;
				for (let i in $scope.tracks) {
					if ($scope.tracks[i].link == '' || 
						$scope.tracks[i].name == '' || 
						$scope.tracks[i].artist == '' ||
						$scope.tracks[i].genres.length === 0/* ||
						!$scope.tracks[i].link.includes('youtu')*/) {
						SongService.delete($scope.tracks[i]._id).then(tracks => {
							$scope.tracks = tracks.data;
						})
					}
					// console.log($scope.tracks[i]);
				}
			});
			$scope.delete = id => {
				SongService.delete(id).then(data => {
					// console.log('Deleted ' + id);
					SongService.get().then(tracks => { $scope.tracks = tracks.data; });
				});
			}

			$scope.hashify = arr => {
				return arr.toString().replace(/ /g, ', ').replace(/,,/g,',');
			}

			$scope.searchGenres = [];
			$scope.searchTagString = '';
			$scope.searchTags = [];

			$scope.match = (haystack, arr) => {
			    return arr.some(v => {
        			return haystack.indexOf(v) >= 0;
			    });
			};

			$scope.match = (haystack, arr) => {
			    return arr.some(v => {
        			for (let i in haystack) {
        				if (v.includes(haystack[i])) return true;
        			}
        			return false;
			    });
			}; 

			// $scope.pageWidth = $(window).width();
			// $(window).resize(() => {
			// 	$scope.pageWidth = $(window).width();
			// 	// console.log('page width: ' + $scope.pageWidth);
			// })
			// $(document).ready(() => {
			// 	$(window).resize(() => {
			// 		$scope.pageWidth = $(window).width();
			// 		// console.log('page width: ' + $scope.pageWidth);
			// 	})
			// })

		})
		.filter('trusted', ['$sce', $sce => {
		    return url => {
		    	if (url.includes('youtu.be')) {
		    		url = url.replace('youtu.be', 'youtube.com/embed');
		    	} else if (url.includes('youtube.com/watch?v=')) {
		    		url = url.replace('/watch?v=', '/embed/');
		    	} else if (url.includes('spotify')) {
		    		url = url.replace('open.spotify.com/track/', 'open.spotify.com/embed/track/')
		    	}else if (url.includes('soundcloud')) {
		    		url = url.substring(url.indexOf('src="')+5, url.indexOf('">'));
		    		// console.log(url);
		    	}
		        return $sce.trustAsResourceUrl(url);
		    };
		}])
})();

