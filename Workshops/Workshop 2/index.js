angular.module('MyApp', [])

//.controller('MyController', ["Student", function(s){
.controller('MyController', function(Student, MyGradeService){
	var self = this;
	self.name = "Jennifer";

	self.student = new Student(self.name);

	self.addAssignment = function () {
		console.log(self.student);
		self.student.addAssignments = function (name, score) {
		console.log(self.student);

		self.average = MyGradeService.calculateAverage(self.student.assignments);
		self.letterGrade = MyGradeService.calculateGrade(self.average);
		self.passing = MyGradeService.calculatePassing(self.letterGrade);
		};
	};

});
//}]);