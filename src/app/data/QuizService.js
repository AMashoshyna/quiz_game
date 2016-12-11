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

		service.getNewQuestion();


		function checkAnswer(answer) {
			if(answer.toLowerCase()!== service.currentQuestion.answer) {
				service.acceptAnswer = false;
			}
		};

		function getNewQuestion() {
			return $http.get(apiPath)
			.then((response) => {
				service.currentQuestion.detail = response.data[0];
				console.log(service.currentQuestion);
			})
		};
	}
})();