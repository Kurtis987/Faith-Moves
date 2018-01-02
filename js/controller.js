angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Welcome to Faith Moves Radio!"; 

	})
	.controller('NavController', function($scope) {

	})
	.controller('AboutController', function($scope, $location) {

	})
	.controller('ArtistsController', function($scope, $location) {

	})
	.controller('LyricsController', function($scope, $location) {

	})
	.controller('LyricsController', function($scope, $location, SongFactory) {
		$scope.lyrics = SongFactory.getSongs();
		//scroll to top of active panel
		//https://stackoverflow.com/questions/21958933/bootstrap-accordion-scroll-to-top-of-active-panel-heading
		//Credit to Xelio for this fix
    	$('#accordion').on('show.bs.collapse', '.panel-default', function () {
       		$('html,body').animate({
        		scrollTop: $(this).offset().top
    		}, 500); 
		});
	}) 
	.controller('PrayerController', function($scope, $location) {

	})
	.controller('SongsController', function($scope, $location, SongFactory) {
		
		$scope.songs = SongFactory.getSongs();
 
	})
	.controller('VersesController', function($scope, $location) {
	});