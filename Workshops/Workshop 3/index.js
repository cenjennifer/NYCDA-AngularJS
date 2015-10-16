angular.module('MyApp', [])


.controller('MyController', function(Songlist){
	var self = this;
	self.genres = [
		{name: "Pop", songsTitles: []},
		{name: "Rock", songsTitles: []},
		{name: "Rap", songsTitles: []}
	];

	self.explicitAllowed = ["Explicit", "Not Explicit"];

	console.log(self.genres[0].songsTitles);
	self.songList = Songlist;


	for (var i = 0; i < self.songList.length; i++){
		for (var j = 0; j < self.genres.length; j++){
			if (self.songList[i].type === self.genres[j].name){
				self.genres[j].songsTitles.push(self.songList[i].name);
			}
		}
		
	}

	//self.songList = self.selectedGenre.songsTitles;
	//console.log(self.genres[1].songsTitles);
	/*var self = this;
	self.name = "Jennifer";

	self.person = new Person(self.name);

	self.selectedSongs = function () {

	};*/

	
});
