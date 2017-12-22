angular.module('NavbarDirective', []).directive('faithMovesNav', function() {
	return {
		restrict: 'E', // E -> element
		templateUrl: 'templates/directives/faith-moves-nav.html'
	};
});