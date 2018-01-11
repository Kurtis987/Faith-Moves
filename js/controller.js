angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Welcome to Faith Moves Radio!"; 

	})
	.controller('NavController', function($scope) {

	})
	.controller('RadioController', function($scope) {
		selectStyle();
		$scope.value = .5;
		$scope.player = document.getElementById("player");
		$scope.player.volume = $scope.value;
		$scope.$watch(function(){return $scope.value;},
              function (newValue, oldValue) {
                 $scope.player.volume = newValue;
        });
		$scope.play = function() {
			if ($scope.player.paused) {
				$scope.player.play();
			} else {
				$scope.player.pause();
			}
		};
	})
	.controller('AboutController', function($scope, $location) {

	})
	.controller('ArtistsController', function($scope, $location, $routeParams) {
		$scope.Artists = [];
		$scope.Artists[0] = ["Avion Blackman", "AvionBlackman.jpg",
		"http://www.christafari.com/wp-christafari/wp-content/uploads/2013/05/IMG_3764.jpg",
		"avion-blackman.html","full"]; 
		$scope.Artists[1] = ["DJ Nicholas", "DJNicholas.jpg",
		"https://static1.squarespace.com/static/5914814d414fb5fd1e06ca62/591b7ef217bffc5e5c4a5a91/5948ef09d482e999e6f682eb/1497952015936/WEBDJ+Nicholas+Physician+and+Promo67723May+26+2016.jpg?format=1500w",
		"DJ-Nicholas.html", "full"];
		$scope.Artists[2] = ["Dominic Balli", "DominicBalli.jpg",
		"https://static1.squarespace.com/static/5425bab7e4b0c63514ab1f71/5425c0f4e4b0c63514ab31e4/544fb17fe4b0b45b1d007cec/1414508930647/pic7.jpg",
		"dominic-balli.html", "full"];
		$scope.Artists[3] = ["George Nooks", "GeorgeNooks.jpg",
		"https://myspace.com/georgenooks/mixes/classic-my-photos-376703/photo/105459865",
		"george-nooks.html", "square"];
		$scope.Artists[4] = ["The O.C. Supertones", "ocsupertones.jpeg",
		"https://static1.squarespace.com/static/58aa70b117bffc6029d67d1b/t/58cb29b9440243037fb9c2ce/1489709500791/?format=1500w",
		"oc-supertones.html", "full"];
		$scope.Artists[5] = ["Papa San", "PapaSan.png",
		"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/12728999_211936785825212_8363937496706017213_n.png?oh=c919afabbe02fea644ac7f3f52ed7443&oe=5ABE4429",
		"papa-san.html", "square"];
		$scope.Artists[6] = ["Sam Cooke and the Soul Stirrers", "Sam_Cooke_Soul_Stirrers.jpg",
		"http://www.concordmusicgroup.com/artists/sam-cooke-the-soul-stirrers/",
		"sam-cooke-and-the-soul-stirrers.html", "square"];
		$scope.Artists[7] = ["Tashai Houston", "TashaiHouston.jpg",
		"https://d1jxr8mzr163g2.cloudfront.net/9b9009af-34f7-454b-b878-155ae9b60782/82a8b0e2-e685-4543-aace-c8b8218a4475_h.jpg",
		"tashai-houston.html", "full"];
		$scope.Artists[8] = ["The Blind Boys of Alabama", "TheBlindBoysOfAlabama.jpg",
		"https://static1.squarespace.com/static/56266a4ae4b00785244770d8/5967daf62e69cf820b3c223d/5967daf7f5e23140108c3b61/1499978488405/-images-uploads-gallery-BB_press_photo_.jpg",
		"blind-boys-of-alabama.html", "full"];
		$scope.Artists[9] = ["Wayne Stoddart", "WayneStoddart.jpg",
		"https://f4.bcbits.com/img/a1786765347_2.jpg",
		"wayne-stoddart.html", "square"];
		$scope.Artists[10] = ["Carlene Davis", "CarleneDavis.jpg",
		"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/17103581_1300310953389360_520118694708831399_n.jpg?oh=cb758814853cfa7354b4387a929cb39f&oe=5AEDC418",
		"carlene-davis.html", "square"];
		$scope.Artists[11] = ["Donna Marie", "DonnaMarie.jpg",
		"https://www.discogs.com/Donna-Marie-Now-Is-The-Time/release/6671857",
		"donna-marie.html", "square"];
		$scope.Artists[12] = ["Owen Uriah", "OwenUriah.jpg",
		"https://fr.payplay.fm/161848300-owen-uriah-photo.jpg",
		"owen-uriah.html", "square"];


		$scope.page = $routeParams.id;

		$scope.artistPage = function(id) {
			$location.path("/artists/" + id);
		};

		var getImg = function() { 
			var path = $location.path();
			if(path != "/artists")
			{ 
				$('.artist-name').text($scope.page);
				var artist;
				for (artist in $scope.Artists) { 
					if($scope.page.localeCompare($scope.Artists[artist][0]) == 0)
					{
						$('.artist-img').attr("src", "/img/Artists/"+$scope.Artists[artist][1]);
						if($scope.Artists[artist][4] == "square") {
							$('.artist-img').addClass("square");
						}
						break;
					}
				}
			}
		};
		getImg();

	}) 
	.controller('LyricsController', function($scope, $location, SongFactory) {
		$scope.lyrics = SongFactory.getLyrics();
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
		$scope.submit = function() {
			if ($scope.prayerForm.$valid) {
				alert('Thank you ' + $scope.firstName +".\n" + "Your prayer has been sent.");
			}
		};
	})
	.controller('SongsController', function($scope, $location, SongFactory) {
		
		$scope.songs = SongFactory.getSongs();
 
	})
	.controller('VersesController', function($scope, $location) {
	});