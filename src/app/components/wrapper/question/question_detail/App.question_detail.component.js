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
		QuizService.getNewQuestion().then(function(){
			
		ctrl.currentQuestion = QuizService.currentQuestion;
		console.log(ctrl.currentQuestion);
		});

	}
})();