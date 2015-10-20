angular.module('MyApp', [])


.controller('MyController', function(songList, filterSongs, genreArray, Person, explicitArray){
	var self = this;
	self.songs = songList;
	self.genres = genreArray;
	self.explicitAllowed = explicitArray;

	self.person = new Person(self.name, self.age);

	self.underAge = function(age) {

		if(age < 18){
			//explicit not allowed
			return true;
		}
	};

	self.selectedSongs = function () {
		var selectedSongs = [];

		//Best Practice: Create in Factory
		for (var i = 0; i < self.songs.length; i++) {
			if (self.songs[i].checked) {
				var songToAdd = {
					name: self.songs[i].name,
					version: self.selectedExplicitLong
				};
				selectedSongs.push(songToAdd);
			}
		}
		console.log(selectedSongs);
	};
});
