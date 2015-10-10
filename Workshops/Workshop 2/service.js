angular.module('MyApp')

.factory('Student', function() {

	function Student(name) {
		this.name = "";
		this.assignments = [];
	}

	Student.prototype.addAssignment = function(name, score) {
		var assignment = {
			name: name,
			score: score
		};
		this.assignments.push(assignment);

	};
	return Student;

})
	.service('MyGradeService', function(Student){
		var self = this;

		/*for (var i = 0; i < student.assignments.length; i++) {
			self.arrayOfGrades.push(student.assignments.assignment[i].score);
		}*/

		self.calculateAverage = function (arrayOfScores){
			var count = 0;
			var average = 0;
			for (var i = 0; i < arrayOfScores.length; i++) {
				count += arrayOfScores[i];
				average = count / (arrayOfScores.length);
			}
			return average;
		};

		var LetterGrade = [
			{
				GradeFloor: 90,
				Grade: "A"
			},
			{
				GradeFloor: 80,
				Grade: "B"
			},
			{
				GradeFloor: 70,
				Grade: "C"
			},
			{
				GradeFloor: 60,
				Grade: "D"
			},
			{
				GradeFloor: 50,
				Grade: "F"
			}
		];

		self.calculateGrade = function(average){
				if (average >= LetterGrade[0].GradeFloor){
						return LetterGrade[0].Grade;
				} else if (average >= LetterGrade[1].GradeFloor){
						return LetterGrade[1].Grade;
				} else if (average >= LetterGrade[2].GradeFloor){
						return  LetterGrade[2].Grade;
				} else if (average >= LetterGrade[3].GradeFloor){
						return LetterGrade[3].Grade;
				} else if (average <= LetterGrade[4].GradeFloor){
						return LetterGrade[4].Grade;
				}
		};
		
		self.calculatePassing = function(gradeLetter) {
			for (var i = 0; i < LetterGrade.length; i++) {
				//console.log(LetterGrade.length);
				if ((gradeLetter == "A") || (gradeLetter === "B") || (gradeLetter === "C")){
					return "True";
				} else {
					return "False";
				}
			}
		};
});