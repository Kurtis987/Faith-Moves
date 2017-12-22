angular.module('FaithMovesApp', ['ngRoute', 'RouteControllers', 'NavbarDirective']);

angular.module('FaithMovesApp').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true); // Enable href routing without hashes

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})
	.when('/artists', {
		templateUrl: 'templates/artists.html',
		controller: 'AboutController'
	})
	.when('/lyrics', {
		templateUrl: 'templates/lyrics.html',
		controller: 'LyricsController'
	})
	.when('/music', {
		templateUrl: 'templates/music.html',
		controller: 'MusicController'
	})  
	.when('/prayer', {
		templateUrl: 'templates/prayer.html',
		controller: 'PrayerController'
	})
	.when('/songs', {
		templateUrl: 'templates/songs.html',
		controller: 'SongsController'
	})
	.when('/verses', {
		templateUrl: 'templates/verses.html',
		controller: 'VersesController'
	});
});