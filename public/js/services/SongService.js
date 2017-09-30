angular.module('SongService', [])
	.factory('SongService', ['$http', $http => {
		return {
			get: () => {
				return $http.get('/api/songs');
			},
			post: songData => {
				return $http.post('/api/songs', songData);
			},
			delete: id => {
				return $http.delete('/api/songs/' + id);
			}
		}
	}]);