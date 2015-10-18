angular.module('MyApp')

.factory('Person', function() {

	function Person(name, age){
		this.name = name;
		this.age = age;
		this.selectedSongs = [];
	}

	Person.prototype.addselectedSongs = function (name, type, explicit) {
		var song = {
			name: name,
			type: type,
			explicit: explicit
		};
		this.selectedSongs.push(song);

	};
	return Person;
})


/*.factory('Songs', function(songList) {

	function Songs() {
		this.name = "";
		this.type = "";
	}

	Songs.prototype.selectSongs = function(name, type) {
		var song = {
			name: name,
			type: type
		};
		
		this.song.push(selectedSongs);

	};
	return Songs;
});*/

.value ('genreArray', [
		{name: "Pop", songsTitles: []},
		{name: "Rock", songsTitles: []},
		{name: "Rap", songsTitles: []}
	])
.value ('songList', [{
	name: "A",
	type: "Pop"
},
	{
	name: "AA",
	type: "Pop"
},
{
	name: "AAA",
	type: "Pop"
},
{
	name: "B",
	type: "Rock"
},
{
	name: "BB",
	type: "Rock"
},
{
	name: "BBB",
	type: "Rock"
},
{
	name: "C",
	type: "Rap"
},
{
	name: "CC",
	type: "Rap"
},
{
	name: "CCC",
	type: "Rap"
}])

.factory ('filterSongs', function(songList, genreArray){

	for (var i = 0; i < songList.length; i++){
		for (var j = 0; j < genreArray.length; j++){
			if (songList[i].type === genreArray[j].name){
				genreArray[j].songsTitles.push(songList[i].name);
			}
		}
	}
	return genreArray;
})

.value ('explicitArray', ["Explicit", "Not Explicit"])

.service('explicitAllowed', function(explicitArray){
	var self = this;

	self.ageAllowed = function (age){
		if (age < 18){
		//explicit not allowed
		explicitArray[0].disabled = true;
		}
	};
})

.service('SelectedResults', function(Person){
	var self = this;
	var results = "";
	self.songResults = function(selectedSongs){
		for (var i = 0; i < selectedSongs.length; i++){
			results += ("[Name: " + selectedSongs[i].name + ", Genre: " + selectedSongs[i].type + ", Explicit: " + selectedSongs[i].explicit + "] ");
		}
		return results;
	};
});