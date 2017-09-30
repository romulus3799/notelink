angular.module('SongService', [])
	.factory('Song', ['$http', $http => {
		return {
			get: () => {
				return $http.get('/api/songs/');
			},
			create: songData => {
				return $http.post('/api/songs/', songData);
			},
			delete: id => {
				return $http.delete('/api/nerds/' + id);
			}
		}
	}]);