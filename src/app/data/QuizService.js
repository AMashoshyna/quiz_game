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
				service.currentQuestion.shuffledAnswer = 
				shuffleAnswer(service.currentQuestion.detail.answer);
				console.log(service.currentQuestion.detail.answer)
			})
		};

		function shuffleAnswer(answer) {
			answer = answer.toLowerCase();
			var arr = answer.split('');
			return shuffle(arr);
		}

		function shuffle(a) {
			for (let i = a.length; i; i--) {
				let j = Math.floor(Math.random() * i);
				[a[i - 1], a[j]] = [a[j], a[i - 1]];
			}
				return a;
		}
	}
})();