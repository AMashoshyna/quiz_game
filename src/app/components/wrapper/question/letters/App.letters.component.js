(function() {
	'use strict';
	angular.module('App')
	.component('letters', {
		templateUrl: 'src/app/components/wrapper/question/letters/letters_template.html',
		controller: lettersController
	});

	lettersController.$inject = ['QuizService']
	function lettersController(QuizService) {
		var ctrl = this;

		ctrl.answer = QuizService.currentQuestion;
	}
})();