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
				//$("span.glyphicon-play").removeClass("glyphicon-play").addClass("glyphicon-pause");
				$("#play-button").html('<span class="glyphicon glyphicon-stop"></span> Stop');
			} else {
				$scope.player.pause();
				//$("span.glyphicon-pause").removeClass("glyphicon-pause").addClass("glyphicon-play");
				$("#play-button").html('<span class="glyphicon glyphicon-play"></span> Play');
			}
		};
	}) 
	.controller('ArtistsController', function($scope, $location, $routeParams) {
		$scope.Artists = [];
		$scope.Artists[0] = ["Avion Blackman", "AvionBlackman.jpg",
		"http://www.christafari.com/wp-christafari/wp-content/uploads/2013/05/IMG_3764.jpg",
		"avion-blackman.html","full", '<p>Avion Claudette Trudy Henrietta Blackman (born January 30, 1976) '+
		'is a reggae recording artist, and the wife of Christafari front man Mark Mohr.[1] </p>'+
		'<p>She has produced three solo albums as well as providing vocals and bass guitar '+
		'for Christafari since 2003.[1]"</p>'+
		'<p>As a child she led a humble and simple life. From the age of four to twenty-eight she lived '+
		'"in the forest, 7 miles from the village of Piparo, where she was home-schooled '+
		'along with her 24 brothers and sisters. The family lived a lifestyle of simplicity, '+
		'with no electricity or plumbing, and growing most of what they ate off the land '+
		'they were living on.[1]" </p>'+
		'<h3>Christafari </h3>'+
		'<p>In 2002, while he was teaching a seminar in Trinidad, Blackman met Christafari founder, '+
		'Mark Mohr and 18 months later they were married in Los Angeles. '+
		'By this point Blackman had begun to play bass and provide vocals for the band, '+
		'lending her voice to the songs "Hiding Place" and "My Sustenance" for the album Gravity. '+
		'She has been an integral part of the band since then, '+
		'involved with all their subsequent albums and tours.[1]</p>'+
		'<h3>Solo career </h3>'+
		'<h4>Onyinye </h4>'+
		'<p>It was during the recording of the Christafari children\'s '+
		'album Reggae Sunday School, that the idea of a solo album was first pitched by husband Mark '+
		'and despite her initial reluctance, Blackman\'s debut album Onyinye was released later'+
		' that year (2005). The album was released to critical acclaim and at the '+
		'2006 Marlin awards the album was given top honors, being declared the album of the year, '+
		'as well as winning in the Contemporary Female Vocal Performance category, '+
		'(for the song "Marvelous Beauty"). She was the first non-Jamaican to receive the award.[1]</p>'+
		'<h4>Sweet life </h4>'+
		'<p>In 2008, the follow up album, Sweet Life was released, '+
		'showing a move towards more reggae roots. The song "Yeshua" was a favorite and to this '+
		'day Christafari will often close their concerts with this song. '+
		'She picked up another Marlin award for the song "Sweet Life". [1]</p>'+
		'<h4>Third World girl </h4>'+
		'<p>In 2011 work began on Blackman\'s third album, with a month-long trip to Hawaii and an '+
		'expressed wish to "write and record a new song every day".[1] '+
		'Initially recording was going to be demo sessions only but instead turned into a '+
		'full recording session and at the end of the month a full album had been created '+
		'and even a music video for the title track had been filmed amongst '+
		'the jungles and waterfalls of Hawaii. Themes on the album include '+
		'healing and relationships. [1]"</p>'+
		'<h3>Source</h3>'+
		'[1]"Avion Blackman" Retrieved 2018, January 5 <a href="https://en.wikipedia.org/wiki/Avion_Blackman">https://en.wikipedia.org/wiki/Avion_Blackman</a>'];


		$scope.Artists[1] = ["DJ Nicholas", "DJNicholas.jpg",
		"https://static1.squarespace.com/static/5914814d414fb5fd1e06ca62/591b7ef217bffc5e5c4a5a91/5948ef09d482e999e6f682eb/1497952015936/WEBDJ+Nicholas+Physician+and+Promo67723May+26+2016.jpg?format=1500w",
		"DJ-Nicholas.html", "full", '<p>Jamaican born Gospel Reggae Artiste Nicholas Eccleston, '+
		'more popularly known as DJ Nicholas has grown to become one of the leading Caribbean Gospel '+
		'Artist.  He was born on October 29, 1980 in Kingston; however, in his teenage years '+
		'searching for truth, he became a marijuana smoker, very rebellious and immersed '+
		'in the Rastafarian Religion. His life was shortly after changed by a scripture '+
		'from Acts 4:12. He is now a passionate follower of Jesus Christ. [1]</p>'+
 		'<p>Nicholas performs in the USA where he now resides; he performed with Deitrick Haddon on '+
 		'BET Celebration of Gospel 2016. He has been interviewed on TBN for TBN Salsa In the Mix. '+
 		'He has also performed in the UK, Canada and over 25 countries in the Caribbean '+
 		'region and continues to regularly visit them. He has shared stages with TD Jakes, '+
 		'Shirley Caesar, Kirk Franklin, Donnie McClurkin, Tye Tribette, Erica Campbell, and '+
 		'Tamela Mann among others. [1]</p>'+
		'<p>Nicholas is featured on Grammy nominated singer Deitrick Haddon’s album titled '+
		'Masterpiece, on Todd Dulaney\'s upcoming "The 2nd Encounter" album and on Papa San\’s One Blood '+
		'Album; the album features Lecrae, Da Truth, Fred Hammond and Israel Haughton among others. '+
		'Some of Nicholas\’ popular songs are Holy Ghost Gym, Holy Ghost Church, '+
		'Things Already Better, Naa Bow and Cut It Off to name a few."[1] </p>'+
		'<h3>Source</h3>'+
		'[1] "Biography" Retrieved 2018, January 5 <a href="https://www.djnicholas.net/">https://www.djnicholas.net/</a>'];

		$scope.Artists[2] = ["Dominic Balli", "DominicBalli.jpg",
		"https://static1.squarespace.com/static/5425bab7e4b0c63514ab1f71/5425c0f4e4b0c63514ab31e4/544fb17fe4b0b45b1d007cec/1414508930647/pic7.jpg",
		"dominic-balli.html", "full", '<p>When hearing about Dominic Balli\'s story,'+
		'I think about <b>2 Corinthians 12:9-10</b>: <p>"But he said to me, \'My grace is sufficient for you,'+ 
		'for my power is made perfect in weakness.\' Therefore I will boast all the more'+
		'gladly about my weaknesses, so that Christ\’s power may rest on me.'+ 
		'10 That is why, for Christ\’s sake, I delight in weaknesses, in insults, in hardships,'+ 
		'in persecutions, in difficulties. For when I am weak, then I am strong."</p>'+
		'<p>Similarly, Balli attributes strengths of his musical gifts to God, '+
		'as they were once his weaknesses. Balli says, “Music is a gift. '+
		'And I feel like the Creator gave it to me. I mean, I went most of my '+
		'life being one hundred percent musically inept, and totally unable to sing,'+
		'and then one day it was like, Here. This is yours. Use it.’”[1] </p>'+
		'<p>It is refreshing that he see\'s himself more as a conduit for the Holy Spirit '+
		'to pour through rather than boasting and taking pride in his music. </p>'+
		'<h3>Source</h3>'+
		'[1]"Dominic Balli" - Retrieved 2018, January 1 from <a href="http://www.dominicballi.com/bio/">http://www.dominicballi.com/bio/</a>'];

		$scope.Artists[3] = ["George Nooks", "GeorgeNooks.jpg",
		"https://myspace.com/georgenooks/mixes/classic-my-photos-376703/photo/105459865",
		"george-nooks.html", "square", '<p>"Nooks started his musical career in the youth choir at his church,'+ 
		'and moved on to perform at school concerts and talent shows. [1]</p>'+ 
		'<p>After first recording professionally in 1974, Nooks first found success performing under '+
		'the name Prince Mohamed, as a deejay on discomix tracks for producer Joe Gibbs.[1] </p>'+	
		'<p>He continued to have a successful career in the Reggae Market for the next 27 years. However, '+
		'Nooks began to record primarily gospel material after death of his grandmother in 2001. '+
		'[1]</p><p> He has seen much success in the gospel reggae genre as well.'+
		'His 2016 album Ride Out Your Storm reached number 4 on the Billboard Reggae Albums chart, '+
		'and number 22 on the Gospel chart. [1]</p>'+
		'<p>Nooks also works as a producer, and has run his own Total Records label since the early 1990s."[1] </p>'+
		'[1]"George Nooks" (2017, October 11) Retrieved 2018, January 4 from <a href="https://en.wikipedia.org/wiki/George_Nooks">https://en.wikipedia.org/wiki/George_Nooks</a>'];

		$scope.Artists[4] = ["The O.C. Supertones", "ocsupertones.jpeg",
		"https://static1.squarespace.com/static/58aa70b117bffc6029d67d1b/t/58cb29b9440243037fb9c2ce/1489709500791/?format=1500w",
		"oc-supertones.html", "full", '<p>The O. C. Supertones are a Christian ska group that uses music'+ 
		'to share the love of Jesus. Filled with fun songs to put a smile on your face and a dance in '+
		'your step, their live show is packed with energy and a deep connection to your soul. The band\’s '+
		'message is to encourage the Body of Christ and to reach non-believers.[1]</p>'+
		'<p>The 6 current members all serve at their local churches and 4 of them are full time Pastors.[1]</p>'+
		'<p>The Supertones have produced 10 albums combining over 1 million units sold, '+
		'more than 20 national and world tours, and have seen tens of thousands come to Christ… '+
		'<b>All for God’s Glory!</b>[1]</p>'+
		'<h3>Source</h3>'+
		'[1]"THE BAND" Retrieved 2018, January 4 <a href="https://www.ocsupertones.com/">https://www.ocsupertones.com/</a>'];

		$scope.Artists[5] = ["Papa San", "PapaSan.png",
		"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/12728999_211936785825212_8363937496706017213_n.png?oh=c919afabbe02fea644ac7f3f52ed7443&oe=5ABE4429",
		"papa-san.html", "square", '<p."Tyrone Thompson, (born July 1, 1967) better known as Papa San, '+
		'is a Jamaican reggae, dancehall and gospel singer. Born in 1967 in Spanish Town, he was raised '+
		'by his Rastafarian grandmother and began performing with sound systems (including Black Scorpio '+
		'and Creation) in the late 1970s. He won the Tastee Talent contest in 1981. He went on to '+
		'become one of the major dancehall artists of the late 1980s and 1990s, with hits such as '+
		'"Maddy Maddy Cry".[1]</p>'+
		'<p>His brother and fellow deejay Dirtsman was murdered in 1993 in the three years that followed '+
		'his sister was killed in a motorcycle accident, his cousin was killed by police, '+
		'and he himself had legal problems after being arrested on weapons charges. He turned to '+
		'Christianity in 1997. This is also reflected in his style, as he started off as a true '+
		'dancehall deejay, later adopting traits of Gospel and Christian music.[1]</p>'+
		'<p>Papa San sponsors a concert known as Papa San and Friends, to raise funds for orphanages '+
		'in rural Jamaica. Since becoming a Christian he has continued to produce his roots reggae sound, '+
		'but with the message of Christ to the beat instead of his previously popular secular music. [1]</p>'+
		'<p>He has six children and lives in Weston, Florida with five of them and his wife, '+
		'Debbie Thompson. In 2011, Papa San and his wife, having been ordained ministers of the Gospel, '+
		'were launched into pastoral ministry and started Our Fathers Kingdom International Ministries. [1]</p>'+
		'<p>In 2013, Papa San featured on Church Clothes, Vol 2 by Christian Hip Hop artist Lecrae, '+
		'with Andy Mineo, on the song "The Fever". His album One Blood topped the Billboard Reggae '+
		'Albums Chart in February 2014.[1]</p>'+
		'<h3>Source</h3>'+
		'[1]"Papa San" Retrieved 2018, January 5 <a href="https://en.wikipedia.org/wiki/Papa_San">https://en.wikipedia.org/wiki/Papa_San</a>'];

		$scope.Artists[6] = ["Sam Cooke and the Soul Stirrers", "Sam_Cooke_Soul_Stirrers.jpg",
		"http://www.concordmusicgroup.com/artists/sam-cooke-the-soul-stirrers/",
		"sam-cooke-and-the-soul-stirrers.html", "square", '<p>The Soul Stirrers are an American gospel music group, '+
		'whose career spans over eighty years. The group was a pioneer in the development of the quartet'+
		' style of gospel, and a major influence of soul music, doo wop, and motown sound, some of the secular music that owed much to gospel.[1]</p>'+
		'<p>The group was formed by Roy Crain, who had launched his first quartet, which sang in a '+
		'jubilee style, in 1926 in Trinity, Texas. In the early 1930s, after Crain moved to Houston, '+
		'he joined an existing group on the condition that it change its name to "the Soul Stirrers."'+
		' The name "Soul Stirrers" yields from the description of one of Roy Crain\'s '+
		'earlier quartets as "soul-stirring". Among the members of that group was R. (Rebert) H. Harris, '+
		'who soon became its musical leader. The Soul Stirrers formed as a Jubilee quartet, '+
		'transformed their sound, influenced by many hard gospel singers such as Mahalia Jackson '+
		'and Sister Rosetta Tharpe. [1]</p>'+
		'<p>Rebert Harris, also from Trinity, Texas, brought several changes to the Soul Stirrers '+
		'that affected gospel quartet singing generally. He used a falsetto style that had its '+
		'antecedents in African music, but which was new to the popular jubilee singing style of the '+
		'time. He pioneered the "swing lead", in which two singers would share the job of leading '+
		'the song, allowing virtuoso singers to increase the emotional intensity of the song as the '+
		'lead passed between them without disturbing the four part harmony. That innovation led '+
		'the Soul Stirrers, while still called a quartet, to acquire five members.[1]</p>'+
		'<p>The Soul Stirrers made other important changes in those years: ad-libbing lyrics, '+
		'singing in delayed time, and repeating words in the background as both a rhythmic and '+
		'emotional support for the lead singers. The Soul Stirrers along with other quartet performers, '+
		'dropped the "flatfooted" style of jubilee quartets before them and expanded their repertoire '+
		'from spirituals and traditional hymns to the newer gospel compositions. '+
		'The group also loosened the rigid arrangements that jubilee quartets had favored to permit '+
		'individual singers within the group more space for individual development.[1]</p>'+
		'<p>The Soul Stirrers signed with Specialty Records, where they recorded a number of tracks, '+
		'including "By and By" and "In that Awful Hour". Harris quit in late 1950 to form a new group, '+
		'citing dissatisfaction with what he viewed as the crookedness of the business and '+
		'immoral behaviour by musicians he saw on the "Gospel Highway" touring circuit. '+
		'He was briefly replaced on lead by Paul Foster, then by Sam Cooke. [1]</p>'+
		'<p>Cooke joined the group at the age of nineteen served as lead vocalist from 1950 to 1956.'+
		'One of the early singles with Cooke was "Jesus Gave Me Water", '+
		'a major hit that brought the Soul Stirrers acclaim. [1]</p>'+
		'<p>Thomas L. Breuster was replaced by Bob King and, briefly, Julius Cheeks. '+
		'When Cooke left in 1957 to pursue a career in pop music, the Soul Stirrers\' '+
		'preeminence in gospel was essentially over, though a brief period of success with '+
		'Johnnie Taylor sustained the group for a time. [1]</p>'+
		'<p>Various line-ups continued touring and recording throughout the last half of the century '+
		'to a small and devoted following. The group — and all of its members — was inducted '+
		'into the Rock and Roll Hall of Fame in 1989 as one of rock\s '+
		'Early Influences, and into the Vocal Group Hall of Fame in 2000."[1]</p>'+
		'<h3>Source</h3>'+
		'[1]"The Soul Stirrers" 2018, January 2 Retrieved 2018, <a href="https://en.wikipedia.org/wiki/The_Soul_Stirrers">https://en.wikipedia.org/wiki/The_Soul_Stirrers</a>'];

		$scope.Artists[7] = ["Tashai Houston", "TashaiHouston.jpg",
		"https://d1jxr8mzr163g2.cloudfront.net/9b9009af-34f7-454b-b878-155ae9b60782/82a8b0e2-e685-4543-aace-c8b8218a4475_h.jpg",
		"tashai-houston.html", "full", '<p>Tashai Houston was born March 15,'+
		' 1981 in the district of Alexandria in the parish of St. Ann, Jamaica. '+
		'She grew up in a nearby district called Philadelphia and attended the Philadelphia Church of God.'+
		'Her passion and gift for singing landed her the position of local star and the church praise and '+
		'worship leader.[1]</p>'+
		'<p>“I came from humble beginnings but I know God called me to be a music minister and his call comes '+
		'with provision so I waited patiently on Jehovah Jireh and now the fullness of time has come”'+
		'were the psalmist’s remarks to this new recording stage of her life."'+
		'"Tashai says her philosophy is based on 1 Corinthians 13:1." [1]</p> '+
		'<h5><b>1 Corinthians 13:</b></h5> '+
		'<p>If I speak in the tongues[a] of men or of angels, but do not have love,'+ 
		'I am only a resounding gong or a clanging cymbal. 2 If I have the gift of prophecy and can '+
		'fathom all mysteries and all knowledge, and if I have a faith that can move mountains, '+
		'but do not have love, I am nothing. 3 If I give all I possess to the poor and give over '+
		'my body to hardship that I may boast,[b] but do not have love, I gain nothing.'+
		'4 Love is patient, love is kind. It does not envy, it does not boast, it is not proud. '+
		'5 It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no '+
		'record of wrongs. 6 Love does not delight in evil but rejoices with the truth. 7 '+
		'It always protects, always trusts, always hopes, always perseveres.'+
		'8 Love never fails. But where there are prophecies, they will cease; where there are tongues, '+
		'they will be stilled; where there is knowledge, it will pass away. '+
		'9 For we know in part and we prophesy in part, 10 but when completeness comes, '+
		'what is in part disappears. 11 When I was a child, I talked like a child, '+
		'I thought like a child, I reasoned like a child. When I became a man, '+
		'I put the ways of childhood behind me. 12 For now we see only a reflection as in a mirror; '+
		'then we shall see face to face. Now I know in part; then I shall know fully, '+
		'even as I am fully known.'+
		'13 And now these three remain: faith, hope and love. But the greatest of these is love. [1]</p>'+
		'<p>Tashai believes "love is the key to unlock every closed door. '+
		'Perfect love represents God because God is love and a heart of love is necessary '+
		'for a minister to be truly effective." [1] </p>'+
		'<h3>Source</h3>'+
		'[1]"BIO ABOUT US"  Retrieved 2018, January 4 "http://www.tashainmusic.com/about"'];


		$scope.Artists[8] = ["The Blind Boys of Alabama", "TheBlindBoysOfAlabama.jpg",
		"https://static1.squarespace.com/static/56266a4ae4b00785244770d8/5967daf62e69cf820b3c223d/5967daf7f5e23140108c3b61/1499978488405/-images-uploads-gallery-BB_press_photo_.jpg",
		"blind-boys-of-alabama.html", "full", '<p>The Blind Boys first rose to fame in the segregated '+
		'south with their thrilling vocal harmonies and roof-raising live show. '+
		'They released their debut single, "I Can See Everybody’s Mother But Mine," '+
		'on the iconic Veejay label in 1948, launching a 70-year recording career that '+
		'would see them rack up five GRAMMY Awards (plus one for Lifetime Achievement), '+
		'enter the Gospel Music Hall of Fame, collaborate with everyone from Mavis Staples '+
		'and Stevie Wonder to Prince and Lou Reed, and perform on the world\'s '+
		'most prestigious stages. It would be difficult to overstate the Blind Boys\' influence '+
		'on their contemporaries and the generations that came after. The New York Times said that '+
		'they "came to epitomize what is known as jubilee singing, a livelier breed of gospel music," '+
		'adding that "they made it zestier still by adding jazz and blues idioms and turning up the '+
		'volume, creating a sound…like the rock \'n\' roll that grew out of it." TIME Magazine raved '+
		'that "they\'re always hunting for - and finding - the perfect note or harmony that lifts an '+
		'old tune into the sublime," while The Washington Post praised their "soul-stirring harmonies" '+
		'and "range of cross-genre collaborations," and The New Yorker simply called them "legendary."' +
		'"When the Blind Boys started out, we weren\'t even thinking about all these accolades and '+
		'all that stuff," founding member Jimmy Carter told NPR. '+
		'"We just wanted to get out and sing gospel and tell the world about gospel music." '+
		'Mission accomplished!"[1]</p>'+
		'<p>"The band\'s original lineup is down to just two remaining survivors: long-time group '+
		'leader Clarence Fountain and current leader Jimmy Carter. Both men were born in Alabama '+
		'during the Great Depression, and while Carter is still active and regularly touring with the '+
		'group, Fountain\'s health precludes him from traveling much these days, though he does appear on '+
		'the album." [1]</p>'+
		'<p>"These men were both raised as blind, African American males in the Deep South during '+
		'the Jim Crow years, and they were sent to a school where the expectation for them was to '+
		'one day make brooms or mops for a living," says Blind Boys manager Charles Driebe. '+
		'"But they\'ve transcended all that." [1]</p>'+
 		'<p>Given the age of the surviving original members, it\'s not hard to hear the subtext of '+
 		'the album \'Almost Home\'. In lines like "my work is done and I\'m finally going home '+
 		'to see my maker," they acknowledge that they\'re closer to the end than the beginning. '+
 		'But rather than resting on their laurels, the band is adding a new chapter to their legacy, '+
 		'creating some of the finest work of their career as they solidify their place not just in '+
 		'musical history, but in the very fabric of American culture. The original members may be '+
 		'"Almost Home", but it\'s clear the Blind Boys intend to keep on singing, '+
 		'spreading peace, joy, and love until the very last note.[1]</p>'+
 		'<h3>Source</h3>'+
		'[1]"THE BLIND BOYS OF ALABAMA" Retrieved 2018, January 4 <a href="http://www.blindboys.com/about/">http://www.blindboys.com/about/</a>'];


		$scope.Artists[9] = ["Wayne Stoddart", "WayneStoddart.jpg",
		"https://f4.bcbits.com/img/a1786765347_2.jpg",
		"wayne-stoddart.html", "square", '<p>Wayne Stoddart, as a young adult, lived in the inner-city '+
		'community of Eastern Kingston (Mountain View) and existed amidst the harsh culture of the '+
		'Kingston ghetto. Despite his surroundings, Stoddart was able to sustain his identity as a '+
		'man of God. The experiences of his environment have led to lyrics of comfort, '+
		'encouragement and upliftment for the oppressed and depressed seeking The Way. '+
		'The title track COMMITTED on Stoddart debut solo album is a prime example of the '+
		'root of the songwriter’s message. While living at Mountain View, Wayne Stoddart '+
		'assembled at the local New Testament Church of God where he served as Musical Director. '+
		'Wayne Stoddart formed the group Dynamis from the local members of the church and produced '+
		'the album FULFILLMENT as a church project. In March 1996 the group was nominated Best '+
		'Performing Gospel Band by the Jamaica Music Awards (JAMI) for the FULFILLMENT album.[1]</p>'+
		'<p>The Wayne Stoddart debut solo album COMMITTED was nominated Best New Gospel Reggae album and '+
		'won the award for Most Distinguish Male Vocal at the New York Caribbean Gospel Awards '+
		'(NYCGA) 2002. In 2003 the album was also nominated Best Male Gospel Reggae Album by the '+
		'Marlin Gospel Awards. The Inspirational Reggae artist released the album LOVE CONVICTIONS in '+
		'2008. The album went on to win three awards at the NYCGA: Best Male Vocal, '+
		'Gospel Reggae Album of the Year and Best Produced Gospel Reggae Album. Wayne '+
		'released his third solo album IT IS WRITTEN in 2015. The album contains 13 original '+
		'songs and one dub; all lyrics written by Wayne Stoddart.[1]</p>'+
		'<p>“I like to think of my music as Righteous Rockers…music is my expression of life '+
		'and lessons learned along the way… again the idea is to encourage, '+
		'inspire and uplift everyone that comes within earshot of these tunes”, '+
		'the songwriter passionately expressed.[1]</p>'+
		'<p>The gospel reggae phenomenon continues to feed the people with the '+
		'bread of life through his musical collection of The Word. Wayne continues '+
		'to “Move on inna Jesus name”: healing the wounded, comforting the brokenhearted, '+
		'setting the captives free and tearing down the strongholds of the enemy, '+
		'through the power of the Most High God." [1]</p>'+
		'<h3>Source</h3>'+
		'[1]"Biography" Retrieved 2018, January 5 <a href="https://www.sonicbids.com/band/wayne-stoddart/">https://www.sonicbids.com/band/wayne-stoddart/</a>'];


		$scope.Artists[10] = ["Carlene Davis", "CarleneDavis.jpg",
		"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/17103581_1300310953389360_520118694708831399_n.jpg?oh=cb758814853cfa7354b4387a929cb39f&oe=5AEDC418",
		"carlene-davis.html", "square", '<p>Carlene Davis (born c.1953) is a Jamaican gospel and reggae singer '+
		'active since the 1970s. Successful since the early 1980s as a reggae artist, '+
		'she survived cancer in the mid-1990s, after which she dedicated her career to gospel music. '+
		'She has released over ten albums.[1]</p>'+
		'<p>Davis was born in Colonels Ridge, Clarendon Parish and moved to England with her parents at the '+
		'age of fourteen, where she began to perform professionally a year later, playing guitar '+
		'in an all-girl band before joining the pop trio Toreadores. She then moved to Toronto, '+
		'Ontario, Canada where she lived for eight years. Davis initially found fame as a reggae '+
		'singer. She recorded her debut single in Toronto, a version of "Leaving on a Jet Plane", '+
		'and had a local hit with a version of Jimmy Cliff\'s "The Harder They Come".[1]</p>'+
		'<p>In 1996 she was diagnosed with breast cancer and her Christian faith became a more '+
		'important part of her life. She returned to recording gospel music, '+
		'which she had first recorded in the early 1990s. She released the album Vessel in 1998, '+
		'and in 2000 her single "This Island Needs Jesus" was a major hit in several Caribbean'+
		'countries. She became involved in cancer charity work, with half of the proceeds '+
		'from her 2003 album Author and Finisher going to the Jamaica Cancer Society.'+
		'Davis has continued to perform regularly, including appearances at the Redbones Blues '+
		'Revue, Fun in the Son, and Live On The Waterfront. [1]</p>'+
		'<p>In 2000, Davis was named Minister of music for The Family Church on the Rock in Kingston. '+
		'In 2006 she gained a doctorate in pastoral counselling from the Trinity Theological Seminary '+
		'in South Florida.[1]</p>'+
		'<p>By the mid-2000s Davis had her own recording studio, Judah Recording, and the Glory Music '+
		'productions record label, run with her husband Tommy Cowan.[1]</p>'+
		'<p>In 2014 Davis released the album Dripping Blood, and announced that 25 percent of '+
		'royalties would go to US-based charity Samaritan\'s Purse to fund their work fighting '+
		'Ebola in Liberia. The album reached number 3 on the Billboard Reggae Albums chart.[1]"</p>'+
		'<h3>Source</h3>'+
		'[1](2017, May 31) "Carlene Davis" Retrieved 4 January 2018 from <a href="https://en.wikipedia.org/wiki/Carlene_Davis">https://en.wikipedia.org/wiki/Carlene_Davis</a>'];


		$scope.Artists[11] = ["Donna Marie", "DonnaMarie.jpg",
		"https://www.discogs.com/Donna-Marie-Now-Is-The-Time/release/6671857",
		"donna-marie.html", "square", '<p>Donna Marie was born in the UK, although her formative years were '+
		'spent in Jamaica. It was while living in Jamaica that she demonstrated her talent singing '+
		'lead in her local Pentecostal Church choir. After leaving the choir she joined a band performing '+
		'lead and backing vocals." As a soloist she has produced a number of gospel reggae songs.[1]</p>'+
		'<h3>Source</h3>'+
  		'"Artist Biography by AllMusic". Retrieved from <a href="https://www.allmusic.com/artist/donna-marie-mn0000988293/biography">https://www.allmusic.com/artist/donna-marie-mn0000988293/biography</a>'];


		$scope.Artists[12] = ["Owen Uriah", "OwenUriah.jpg",
		"https://fr.payplay.fm/161848300-owen-uriah-photo.jpg",
		"owen-uriah.html", "square", '<p>There was a time when Gospel artiste Owen Uriah thought God '+
		'could never use a man like him. He began his musical journey as a DJ with local sound systems '+
		'in his home town of Birmingham, England. Owen progressed into a more creative mode as a '+
		'drummer, but found he had a vocal ability.  He decided to use his vocals to lead his band '+
		'URIAH, which he formed in the mid 1980’s.[1]</p>'+
		'<p> Owen was very successful as a secular artist, fast becoming one of the top artistes on the '+
		'Club Scene and was in great demand. He toured the country performing classic Soul, RnB and '+
		'Reggae. Owen came to the point in his life when he knew he had to dedicate the gift that '+
		'God had given him to the work of the Ministry. [1]</p>'+
		'<p> Owen gave his heart to the Lord in 1985, after attending a Nicky Cruz Rally at the '+
		'Birmingham Town Hall in  England. He then joined the Hockley Pentecostal Church '+
		'where he was Baptised. He is currently a member of the New Testament Church in Edgebaston, '+
		'Birmingham in England.[1]</p>'+
		'<p> He has been involved in the Community for almost 20 years, working with disadvantaged '+
		'and talented youths. He is proactive in church events participating in Outreach Events '+
		'throughout the U.K. He also works as a mentor in local schools and for the Youth '+
		'Offending Service, in an effort to help wayward youngsters receive guidance. '+
		'He is a Martial Arts Instructor, and England Karate Judge. '+
		'His Karate School has produced English and National Champions, which  '+
		'involves children of mixed abilities and Special Needs. [1]</p>'+
		'<p>Owen is confident about his calling to the Ministry, and his position in the Body of Christ.[1]</p>'+
		'<p>He says, “ My calling is to minister restoration and reconciliation, and to inform '+
		'people that God has a purpose for Everyone.  Every individual is precious to God, '+
		'and every Christian must take their  position in the Body of Christ, and I aim to encourage '+
		'individuals to find their position and walk the path that is set before them.”[1]</p>'+
		'<p>Owen has an anointing to write songs that people from all walks of life can relate to, '+
		'using familiar rhythms, songs of Praise, truth and reality, conveying the issues of life '+
		'that we all face. [1]</p>'+
		'<p>He directs the listener to Jesus Christ, the Author and Finisher of our Faith.[1]</p>'+
		'<p> Owen is committed to the message that is promoted in his music, and conveys an '+
		'uncompromising message about his Lord and Saviour, Jesus Christ. [1]</p>'+
		'<h4> MINISTRY</h4>'+
		'<p>In 1992 Owen began singing at National and International Evangelistic Crusades and Major '+
		'Christian conferences. He has toured the U.S.A, Jamaica and Europe. [1]</p>'+
		'<p>He is humble and very approachable, and seeks to be a blessing wherever he goes. '+
		'His ability to communicate and encourage has enabled him to be effective in the Ministries.[1]</p>'+
		'<p>He has attended Bible College in Birmingham, England, and has also studied in the U.S.A. [1]</p>'+
		'<p>He also has a Teaching Ministry. He has a grounded approach to his Ministry as he encourages '+
		'others to adopt the motto: “KEEP IT REAL.” [1]</p>'+
		'<h4>COMMUNITY SERVICES.</h4>'+
		'<p>Owen is also actively involved in prison ministry in conjunction with the United Evangelical '+
		'Project visiting prisons throughout the U.K. [1]</p>'+
		'<p>He has been a fundraiser for the National Society for Prevention of Cruelty to Children '+
		'for over six years. He has organised major events, raising funds for numerous charitable bodies. [1]</p>'+
		'<p>He also works with the Youth Offending Service as a Community Panel member, administering '+
		'Referral Orders to young offenders in liaison with Birmingham Juvenile Court in England. [1]</p>'+
		'<p>He is a Registered Learning Mentor, with youth at local schools throughout Birmingham, England. [1]</p>'+
		'<p>He is a Black Belt Karate Instructor with the English Karate Governing Body. His Karate '+
		'School has achieved Gold, Silver and Bronze medals in National and International Events. [1]</p>'+
		'<p>He was also an International Association Coach and England Karate Judge. [1]</p>'+
		'<p>His Ministry has been with the Africa Women’s Ministry, Church Building in South Africa and '+
		'India, Romania Support Group, Mothers Union in England, St Basil’s Homeless Charity, Salvation '+
		'Army contributing to Birmingham’s Homeless. [1]</p>'+
		'<h3>Source</h3>'+
		'"Owen Uriah Bio". Retrieved from <a href="http://dubroom.org/starrecordings/owen_uriah_biography.htm">http://dubroom.org/starrecordings/owen_uriah_biography.htm</a>'];

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
						$('.artist-img').attr("src", "/Faith-Moves/img/Artists/"+$scope.Artists[artist][1]);
						if($scope.Artists[artist][4] == "square") {
							$('.artist-img').addClass("square");
						}
						$('.artist-bio').html($scope.Artists[artist][5]);
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
				$('#myModal').modal('toggle');
				
				//alert('Thank you ' + $scope.firstName +".\n" + "Your prayer has been sent.");
			}
		};
	})
	.controller('SongsController', function($scope, $location, SongFactory) {
		
		$scope.songs = SongFactory.getSongs();
 
	});