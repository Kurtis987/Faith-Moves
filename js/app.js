angular.module('FaithMovesApp', ['ngRoute', 'ngSanitize', 'RouteControllers', 'SongHandler', 'NavbarDirective'])
	.run(function($rootScope) {
		$rootScope.verses = [];
		$rootScope.verses[0] = ["John 16:33", "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world."];
		$rootScope.verses[1] = ["Romans 8:6" , "The mind governed by the flesh is death, but the mind governed by the Spirit is life and peace."];
		$rootScope.verses[2] = ["Colossians 3:15","Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful."];
		$rootScope.verses[3] = ["Psalm 46:1","God is our refuge and strength, an ever-present help in trouble."];
		$rootScope.verses[4] = ["Psalm 18:32-36","It is God who arms me with strength and keeps my way secure. 33 He makes my feet like the feet of a deer; he causes me to stand on the heights. 34 He trains my hands for battle; my arms can bend a bow of bronze. 35 You make your saving help my shield, and your right hand sustains me; your help has made me great. 36 You provide a broad path for my feet, so that my ankles do not give way."];
		$rootScope.verses[5] = ["Psalm 119:165","Great peace have those who love your law, and nothing can make them stumble."];
		$rootScope.verses[6] = ["Isaiah 41:10","So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."];
		$rootScope.verses[7] = ["Deuteronomy 31:6","Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you."];
		$rootScope.verses[8] = ["Matthew 18:12-14","<span class='red-letter'>What do you think? If a man owns a hundred sheep, and one of them wanders away, will he not leave the ninety-nine on the hills and go to look for the one that wandered off? 13 And if he finds it, truly I tell you, he is happier about that one sheep than about the ninety-nine that did not wander off. 14 In the same way your Father in heaven is not willing that any of these little ones should perish.</span>"];
		$rootScope.verses[9] = ["Mark 11:22-25",'<span class="red-letter">“Have faith in God,”</span> Jesus answered. 23 <span class="red-letter"">“Truly I tell you, if anyone says to this mountain, ‘Go, throw yourself into the sea,’ and does not doubt in their heart but believes that what they say will happen, it will be done for them. 24 Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours. 25 And when you stand praying, if you hold anything against anyone, forgive them, so that your Father in heaven may forgive you your sins.”</span>'];
		$rootScope.verses[10] = ["Acts 3:16","By faith in the name of Jesus, this man whom you see and know was made strong. It is Jesus’ name and the faith that comes through him that has completely healed him, as you can all see."];
		$rootScope.verses[11] = ["Acts 2:25-28", 'David said about him: “I saw the Lord always before me. Because he is at my right hand, I will not be shaken. 26 Therefore my heart is glad and my tongue rejoices; my body also will rest in hope, 27 because you will not abandon me to the realm of the dead, you will not let your holy one see decay. 28 You have made known to me the paths of life; you will fill me with joy in your presence."'];
		$rootScope.verses[12] = ["Galatians 1:10","Am I now trying to win the approval of human beings, or of God? Or am I trying to please people? If I were still trying to please people, I would not be a servant of Christ."];
		$rootScope.verses[13] = ["Galations 2:6","As for those who were held in high esteem—whatever they were makes no difference to me; God does not show favoritism—they added nothing to my message."];
		$rootScope.verses[14] = ["Galatians 5:22","But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, 23 gentleness and self-control."];
		$rootScope.verses[15] = ["1 Thessalonians 5:16-18","Rejoice always, 17 pray continually, 18 give thanks in all circumstances; for this is God’s will for you in Christ Jesus."];
		$rootScope.verses[16] = ["2 Corinthians 12:9-10",'But he said to me, <span class="red-letter">“My grace is sufficient for you, for my power is made perfect in weakness.”</span> Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me. 10That is why, for Christ’s sake, I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong.'];
		$rootScope.verses[17] = ["Matthew 6:25-27"," “<span class='red-letter'>Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? 26 Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they? 2 Can any one of you by worrying add a single hour to your life?</span>"];
		$rootScope.verses[18] = ["Philippians 4:6-7","Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. 7 And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."];
		$rootScope.verses[19] = ["Isaiah 40:30-31","Even youths grow tired and weary, and young men stumble and fall; 31 but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."];
		$rootScope.verses[20] = ["Isaiah 35:4",'say to those with fearful hearts, “Be strong, do not fear; your God will come, he will come with vengeance; with divine retribution he will come to save you."'];
		$rootScope.verses[21] = ["James 1:2-4","Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, 3 because you know that the testing of your faith produces perseverance. 4 Let perseverance finish its work so that you may be mature and complete, not lacking anything."];
		$rootScope.verses[22] = ["Psalm 27:1","The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?"];
		$rootScope.verses[23] = ["Psalm 51:1-6","Have mercy on me, O God, according to your unfailing love; according to your great compassion blot out my transgressions. 2 Wash away all my iniquity and cleanse me from my sin. 3 For I know my transgressions, and my sin is always before me. 4 Against you, you only, have I sinned and done what is evil in your sight; so you are right in your verdict and justified when you judge. 5 Surely I was sinful at birth, sinful from the time my mother conceived me. 6 Yet you desired faithfulness even in the womb; you taught me wisdom in that secret place."];
		$rootScope.verses[24] = ["Matthew 6:19-24","<span class='red-letter'>Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. 20 But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. 21 For where your treasure is, there your heart will be also. 22 The eye is the lamp of the body. If your eyes are healthy, your whole body will be full of light. 23 But if your eyes are unhealthy, your whole body will be full of darkness. If then the light within you is darkness, how great is that darkness! 24 No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money."];
		$rootScope.verses[25] = ["Psalm 91:1",'Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. 2 I will say of the Lord, “He is my refuge and my fortress, my God, in whom I trust.”'];
		$rootScope.verses[26] = ["Psalm 23:1-4","The Lord is my shepherd, I lack nothing. 2 He makes me lie down in green pastures, he leads me beside quiet waters, 3 he refreshes my soul. He guides me along the right paths for his name’s sake. 4 Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me."];
		$rootScope.verses[27] = ["Romans 8:39","neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."];
		$rootScope.verses[28] = ["Joshua 1:1-9",'After the death of Moses the servant of the Lord, the Lord said to Joshua son of Nun, Moses’ aide: 2 “Moses my servant is dead. Now then, you and all these people, get ready to cross the Jordan River into the land I am about to give to them—to the Israelites. 3 I will give you every place where you set your foot, as I promised Moses. 4 Your territory will extend from the desert to Lebanon, and from the great river, the Euphrates—all the Hittite country—to the Mediterranean Sea in the west. 5 No one will be able to stand against you all the days of your life. As I was with Moses, so I will be with you; I will never leave you nor forsake you. 6 Be strong and courageous, because you will lead these people to inherit the land I swore to their ancestors to give them. 7 Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left, that you may be successful wherever you go. 8 Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful. 9 Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.”'];
		$rootScope.verses[29] = ["Psalm 90:1-2","Lord, you have been our dwelling place throughout all generations. 2 Before the mountains were born or you brought forth the whole world, from everlasting to everlasting you are God."];
		$rootScope.verses[30] = ["Matthew 11:25-30",'At that time Jesus said, <span class="red-letter">“I praise you, Father, Lord of heaven and earth, because you have hidden these things from the wise and learned, and revealed them to little children. 26 Yes, Father, for this is what you were pleased to do. 27 All things have been committed to me by my Father. No one knows the Son except the Father, and no one knows the Father except the Son and those to whom the Son chooses to reveal him. 28 Come to me, all you who are weary and burdened, and I will give you rest. 29 Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. 30 For my yoke is easy and my burden is light.”</span>'];
		$rootScope.verses[31] = ["Psalm 121:1-8","I lift up my eyes to the mountains— where does my help come from? 2 My help comes from the Lord, the Maker of heaven and earth. 3 He will not let your foot slip— he who watches over you will not slumber; 4 indeed, he who watches over Israel will neither slumber nor sleep. 5 The Lord watches over you— the Lord is your shade at your right hand; 6 the sun will not harm you by day, nor the moon by night. 7 The Lord will keep you from all harm— he will watch over your life; 8 the Lord will watch over your coming and going both now and forevermore."];
		$rootScope.verses[32] = ["1 Corinthians 13:1-3","If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal. 2 If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing. 3 If I give all I possess to the poor and give over my body to hardship that I may boast, but do not have love, I gain nothing."];
		$rootScope.verses[33] = ["Ephesians 6:10","Finally, be strong in the Lord and in his mighty power."];
		$rootScope.verses[34] = ["Luke 6:36","<span class='red-letter'>Be merciful, just as your Father is merciful.</span>"];
		$rootScope.verses[35] = ["Hebrews 13:5",'Keep your lives free from the love of money and be content with what you have, because God has said, “Never will I leave you; never will I forsake you.”'];
		$rootScope.verses[36] = ["1 Peter 3:8-9", "Finally, all of you, be like-minded, be sympathetic, love one another, be compassionate and humble. 9 Do not repay evil with evil or insult with insult. On the contrary, repay evil with blessing, because to this you were called so that you may inherit a blessing."];
		$rootScope.verses[37] = ["Revelation 2:10","<span class='red-letter'>Do not be afraid of what you are about to suffer. I tell you, the devil will put some of you in prison to test you, and you will suffer persecution for ten days. Be faithful, even to the point of death, and I will give you life as your victor’s crown.</span>"];
		$rootScope.verses[38] = ["Ephesians 4:32","Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."];
		$rootScope.verses[39] = ["Psalm 100:4","Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name."];


		//pick different verse each day
		var today = Date.now();
		var dayInMilliseconds = 86400000;
		var daysSinceEpoch = Math.floor(today/dayInMilliseconds);
		var pick = daysSinceEpoch % $rootScope.verses.length;
		$rootScope.VerseOfDay = $rootScope.verses[pick];


	});

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
		controller: 'ArtistsController'
	})
	.when('/lyrics', {
		templateUrl: 'templates/lyrics.html',
		controller: 'LyricsController'
	})
	.when('/music', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
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