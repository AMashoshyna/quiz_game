(function() {
	'use strict';
	angular.module('App')
	.component('questionDetail', {
		templateUrl: 'src/app/components/wrapper/question/question_detail/question_template.html',
		controller: questionDetailController
	});

	questionDetailController.$inject= ['QuizService'];
	function questionDetailController(QuizService) {
		var ctrl = this;
		ctrl.currentQuestion = QuizService.currentQuestion;
		ctrl.getNewQuestion = function() {
			QuizService.getNewQuestion();
		}
	}
})();