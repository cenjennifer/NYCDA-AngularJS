angular.module('MyApp', [])

.controller('MyController', function () {
	var self = this;

	self.first = 'George';
	self.last = 'Dagher';
	self.email = 'georgedagher@nycd.com';

	self.isEditing = false;

	self.edit = function() {
		self.isEditing = true;
		self.firstinput = self.first;	
		self.lastinput = self.last;
	}

	self.firstinput = 'George';	
	self.lastinput = 'Dagher';

	self.done = function() {
		self.first = angular.copy(self.firstinput);
		self.last = angular.copy(self.lastinput);
		self.isEditing = false;
	}

	self.cancel = function() {	
		self.isEditing = false;
	}
	
});