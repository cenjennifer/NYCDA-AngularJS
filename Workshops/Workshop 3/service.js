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


/*.factory('Songs', function() {

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
}]);