angular.module('MyApp')

/*.factory('Person', function() {

	function Person(name) {
		this.name = "";
		this.selectedSongs = [];
	}

	Person.prototype.selectedSongs = function(name, type) {
		var song = {
			name: name,
			type: type
		};
		this.song.push(selectedSongs);

	};
	return Person;

})*/


.factory('Songs', function() {

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
	return Person;



	


})

});