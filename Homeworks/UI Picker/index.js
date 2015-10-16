angular.module('MyApp', [])

.controller('MyController', function(){
	var self = this;

	self.selectDefault = {
		class: 'default',
		classDiv: 'defaultDiv',
		classDiv2: 'defaultDiv2'
	};
	self.selectRed = {
		class: 'red',
		classDiv: 'redDiv',
		classDiv2: 'redDiv2'
	};
	self.selectGreen = {
		class: 'green',
		classDiv: 'greenDiv',
		classDiv2: 'greenDiv2'
	};
	self.selectBlue = {
		class: 'blue',
		classDiv: 'blueDiv',
		classDiv2: 'blueDiv2'
	};
	self.selectPurple = {
		class: 'purple',
		classDiv: 'purpleDiv',
		classDiv2: 'purpleDiv2'
	};

	self.folders = [
		{name: "Personal", filenames: []},
		{name: "Work", filenames: []},
		{name: "Trip", filenames: []}
	];

	self.addFileToFolder = function(filename){
			if (!self.fileName) {
				self.showMessage = true;
				console.log("Add File Name");
			} else {
				self.selectedFolder.filenames.push(filename);
			}
		self.fileName = undefined;
	};
	
	self.div1 = "This is Div #1";
	self.div2 = "This is Div #2";

/*
	self.fileTypeArrayTrip = [];
	self.fileTypeArrayWork = [];
	self.fileTypeArrayPersonal = [];

	self.isNewFilePersonal = false;
	self.isNewFileWork = false;
	self.isNewFileTrip = false;

	self.showMessage = false;
	
	self.addFile = function() {
		if (!self.fileName) {
			self.showMessage = true;
			console.log("Add File Name");
		} else {
				if (self.selectFileType === 'personalFileType'){
				self.isNewFilePersonal = true;
				self.isNewFile = true;
				//(self.fileTypeArray[0].filename).push(self.fileName);
				(self.fileTypeArrayPersonal).push(self.fileName);
				} else if (self.selectFileType === 'workFileType'){
				self.isNewFileWork = true;
				(self.fileTypeArrayWork).push(self.fileName);

				} else if (self.selectFileType === 'tripFileType'){
				self.isNewFileTrip = true;
				(self.fileTypeArrayTrip).push(self.fileName);
				}
		self.fileName = undefined;
		self.showMessage = false;
		}
	};*/
});