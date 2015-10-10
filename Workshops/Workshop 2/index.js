angular.module('MyApp', [])

//.controller('MyController', ["Student", function(s){
.controller('MyController', function(Student, MyGradeService){
	var self = this;
	self.name = "Jennifer";

	self.student = new Student(self.name);

	self.studentScores = [];

	for (var i = 0; i < self.student.assignments.length; i++) {
			self.studentScore.push(self.student.assignments[i].score);
		}
	console.log(self.studentScores);

	/*self.addAssignment = function((ctrl.assignment, ctrl.score)) {
		student.addAssignment(ctrl.assignment, ctrl.score)
	};*/

	//self.average = MyGradeService.calculateAverage([90, 100, 90]);
	self.average = MyGradeService.calculateAverage(self.studentScores);
	self.letterGrade = MyGradeService.calculateGrade(self.average);
	self.passing = MyGradeService.calculatePassing(self.letterGrade);

});
//}]);