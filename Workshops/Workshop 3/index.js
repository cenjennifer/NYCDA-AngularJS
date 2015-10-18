angular.module('MyApp', [])


.controller('MyController', function(songList, filterSongs, genreArray, Person, explicitArray, explicitAllowed, SelectedResults){
	var self = this;
	self.songs = songList;
	self.genres = genreArray;
	self.explicitAllowed = explicitArray;

	self.person = new Person(self.name, self.age);

	self.underAge = function(age) {
		//self.explicitAllowed[0].disabled = false;

		if(age < 18){
			//explicit not allowed
			return true;
		}
	};

	self.selectedSongs = function (song, genre, explicit) {
		self.person.addselectedSongs (song, genre, explicit);
		console.log(SelectedResults.songResults(self.person.selectedSongs));
	};
});
