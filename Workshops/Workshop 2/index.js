angular.module('MyApp', [])

//.controller('MyController', ["Student", function(s){
.controller('MyController', function(Student, MyGradeService){
	var self = this;
	self.name = "Jennifer";
	self.student = new Student(self.name);
		console.log(self.student);
	self.addAssignment = function (name, score) {
			console.log(self.average);
		self.student.addAssignment (name, score);
		self.average = MyGradeService.calculateAverage(self.student.assignments);
		self.letterGrade = MyGradeService.calculateGrade(self.average);
		self.passing = MyGradeService.calculatePassing(self.letterGrade);
	};
});
//}]);