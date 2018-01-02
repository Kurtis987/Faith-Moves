angular.module('NavbarDirective', []).directive('faithMovesNav', function() {
	return {
		restrict: 'E', // E -> element
		templateUrl: 'templates/directives/faith-moves-nav.html'
	};
});
angular.module('RadioDirective', []).directive('radio', function() {
	return {
		restrict: 'E', // E -> element
		templateUrl: 'templates/directives/radio.html'
	};
});