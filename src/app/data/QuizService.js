(function() {
	'use strict';
	angular.module('App')
	.service('QuizService', QuizService);


QuizService.$inject = ['$http', 'apiPath'];
	function QuizService($http, apiPath) {
		var service = this;
		service.currentQuestion = {};
		service.getNewQuestion = getNewQuestion;
		service.score = 0;
		service.progress = 0;
		service.checkAnswer = checkAnswer;
		service.acceptAnswer = true;


		function checkAnswer(answer) {

		};

		function getNewQuestion() {

		};

	}
})();