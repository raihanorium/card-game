var cardGame = angular.module('cardGame');

cardGame.directive('card', [function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/card.html',
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])