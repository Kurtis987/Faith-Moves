angular.module('SongHandler', [])
	.factory('SongFactory', function() {

	function bubbleSort(sorted, newElement, sortedLength, sortBy) {
	 
	    var compareResult = sorted[sortedLength-1][sortBy].localeCompare(newElement[sortBy]);
	     if(compareResult < 1)
	     {   //already sorted add element at current position
	         sorted[sortedLength] = newElement;
	         return sorted;
	     }
	     //out of sort so swap elements we compared
	     sorted[sortedLength] = sorted[sortedLength-1];
	 
	    sorted[sortedLength-1] = newElement;
	 
	    sortedLength-=1;
	     if(sortedLength === 0)
	     { //We've reached the head of the array so we're sorted
	       return sorted;
	     }
	     else{ //still need to check if we're sorted
	       return bubbleSort(sorted, newElement, sortedLength, sortBy);
	     }
	}



	var songs = [];
	songs[0] = ["Dominic Balli","Warrior","My heart is overflowing with a good theme \n" +
		"I recite my composition concerning the King \n" +
		"My tongue is like the pen of a ready writer (Selah) \n" +
		"My God when you came out before your people \n" +
		"Marched through the wilderness the earth shook below \n" +
		"The heavens stopped at your presence dropped rained \n" +
		"Five thousand years you're still the same \n" +
		"So when the enemy comes at me with tactics of fear and fate \n" +
		"Like the Lord cracked the sky and it gave forth rain \n" +
		"So my enemies will be made a footstool before of the King \n" +
		"One by one they'll fall as heavenly armies \n" +
		"March and sing \n" +
		"\n" +
		"Chorus: \n" +
		"The Lord is warrior he'll fight with all his might, the enemy's frightened as triumph cries \n" +
		"A shout of victory, over his enemies and he'll go forth \n" +
		"The Lord is like a man war, his light will shatter the darkness from night as triumph cries \n" +
		"\n" +
		"The Lord is my shelter from my enemies \n" +
		"I will not fear what they can do to me \n" +
		"In the struggle I find strength for the fight \n" +
		"We'll raise the banner high until we break the night \n" +
		"Mount up with spiritual armor \n" +
		"For the weapons of this warfare are far from carnal \n" +
		"But mighty in God for tearing down strongholds \n" +
		"\n" +
		"Chorus: \n" +
		"We marching out brandishing arms upon \n" +
		"The wickedness battle goes on and on \n" +
		"We steady combattin from dawn to dawn my king had victory all along \n" +
		"We focus attention from day unto day from my troubles and unto the one that can save \n" +
		"My brethren cryin out charging the battle line lookin unto the God worthy of praise and hey \n" +
		"Runnin in the race till the day breaks and I'm throwin off weight gotta make haste \n" +
		"Enemy can't stay gotta vacate when the great name been proclaimed thus say the Lord \n" +
		"And I'm gonna fight it with a mighty mighty vigor gonna side it with the undivided \n" +
		"Hot up in the battle in valley of the \n" +
		"Shadow of a gallow and I'm runnin with a fella that I'm honored just to follow"];

	songs[1] = ["Dominic Balli","Drink for Free",'"Drink for Free" Lyrics \n' +
		"by Dominic Balli | from the album Public Announcement \n" +
		"Can you tell me wise man, what my life's about \n" +
		"Cuz I read somewhere, that he made me for his pleasure \n" + 
		"That I sing by his hand, just cuz' he loves the sound \n" + 
		"But can you tell me wise man, what my life's about (he said) \n" +
			"\n" +
		"Why do you spend your money, on what is not bread \n" + 
		"And your wages on what does not satisfy? \n" + 
			"\n" +
		"Can you tell me doctor, why I'm so lonely at night \n" + 
		"Cuz I read somewhere, it's cuz I'm livin' with no hope now \n" + 
		"Is this it doctor, I live then I die \n" + 
		"Drink every passing pleasure, but never satisfied \n" +
			"\n" +
		"Why do you spend your money, on what is not bread \n" + 
		"And your wages on what does not satisfy? \n" + 
			"\n" +
		"Come come unto the waters and drink \n" + 
		"Come come unto the waters waters \n" + 
		"Come come unto the waters \n" + 
		'and drink yourself to life'];

	songs[2] = ["Dominic Balli","Arise",'"Arise" Lyrics \n'+	
		"by Dominic Balli | from the album Public Announcement \n" +
		"  \n" +
		" \n" +
		"It's time we get up from this grave we been digging \n" +
		"Bury the old man, let the new one start livin \n" +
		"Move on to something better \n" +
		"Live on for something better \n" +
		"It's time we stop clinging to the world like it's home, stop lying with the enemy and return to the fold \n" +
		"Live on for something better \n" +
		"Look up for something better \n" +
		"The son is on his way \n" +
		"So carefully walk and seize the day \n" +
		" \n"+
		"Chorus: \n" +
		"We must arise \n" +
		"We must arise \n" +
		"We must arise \n" +
		"We must arise \n" +
		"Arising for the better day \n" +
		" \n" +
		"It's time to arise from the plague of the fall \n" +
		"To abandon fear and step up to the call \n" +
		"Move on to something better \n" +
		"Live on for something better \n" +
		"It's time we stop clinging to the world like it's home, stop lying with the enemy and return to the fold \n" +
		"Live on for something better \n" +
		"Look up for something better \n" +
		"Wake up from your dreaming \n" +
		"And march on like you got some reason to believe in \n "+
		" \n"+
		"Chorus: \n" +
		" \n" +
		"We got to take up our bed and arise \n" +
		"We got to take up our bed and arise \n" +
		"We got to take up our bed and arise \n" +
		"We got to take up our bed and arise \n" +
		"Rise up from the grave \n" +
		"Move on seize the day \n" +
		"Rise up from the grave \n" +
		"Move on seize the day \n" +
		"We must arise"
		];

	songs[3] = ["Dominic Balli","Bread for the Broken",'"Bread for the Broken (feat. Speech of Arrested Development)" Lyrics \n'+
		"by Dominic Balli | from the album Public Announcement \n" +
		"  \n" +
		" \n" +
		"I see children in the night \n" +
		"Twenty million as they reach for hope \n" +
		"No one look, no one cry \n" +
		"No one cares, so no one try \n" +
		"I see children in the night \n" +
		" \n" +
		"\/*Chorus:*\/ \n" +
		"We need bread for the broken \n" +
		"We need bread for the broken \n" +
		"Give some hope to the hopeless \n" +
		"Give some hope to the hopeless, hopeless \n" +
		"Bread for the broken, broken \n" +
		" \n" +
		"I see daughters in the fields \n" +
		"She sell her body for a dollar bill \n" +
		"No one look, no one cry \n" +
		"No one care, so no one try \n" +
		"I see children in the night \n" +
		" \n" +
		"\/\*Chorus:\*\/ \n" +
		" \n" +
		"I cannot live my life daily knowin I am connected to you \n" +
		"So what am I to do \n" +
		"If I was in your shoes I hope and pray that someone reach out to me and pull me from my blues \n" +
		"So won't you grab my hand baby, let me pull you to me \n" +
		"Let me see what I can do so you can be free \n" +
		"Let me grab your hand brother, let me help you now \n" +
		"Take this love from my heart and put this food in your mouth \n" +
		"And let me paint a picture of freedom \n" +
		"Let me paint the picture of healing \n" +
		"Let me paint the picture of humans through our lovin and given \n" +
		"We need bread"];

	songs[4] = ["Morgan Heritage","Take up your cross","I've seen the Son of Man, you know he's going there \n"+
		"\n"+
		"With a voice much louder than the rolling thunder \n"+
		"And his presence causing the earth to tremble, yeah \n"+
		"Standing in his glory commanding all mankind be still \n"+
		"He said, Hear my voice and do my will \n"+
		" \n"+
		"Take up your cross and walk with me \n"+
		"So said this man from Galilee \n"+
		" \n"+
		"He said, I'll be there, so have no fear \n"+
		"He said, I'll be there, so have no fear, oh yes \n"+
		"Said, He gave up his life so we can be saved and live \n"+
		"In the Father's everlasting light as it is \n"+
		" \n"+
		"Take up your cross and walk with me (with me) \n"+
		"So said this man from Galilee \n"+
		" \n"+
		"His voice was heard over valleys and mountains (and mountains) \n"+
		"Saying, I'll be there, so have no fear \n"+
		"He said, I'll be there, so have no fear \n"+
		"Standing in his glory commanding all mankind be still \n"+
		"He said, Hear my voice and do my will \n"+
		"\n"+
		"Take up your cross and walk with me \n"+
		"So said this man from Galilee \n"+
		"  \n"+
		" \n"+
		"I saw his light from over yonder \n"+
		"He humbled me within \n"+
		"Oh, he humbled me within \n"+
		" \n"+
		"See the Son of Man \n"+
		"With a voice much louder than the rolling thunder (rolling, rolling) \n"+
		"And his presence causing the earth to tremble, yeah \n"+
		"Standing in his glory commanding all mankind be still (be still) \n"+
		"Hear his voice and do his will \n"+
		" \n"+
		"Take up your cross and walk with me \n"+
		"So said this man from Galilee (Galilee) \n"+
		" \n"+
		"So take up your cross (take up your cross) and walk with me \n"+
		"So said this man from Galilee (oooh yeah) \n"+
		" \n"+
		"So take up your cross (take up your cross) and walk with me (come walk with Me) \n"+
		"So said this man (come talk with me) from Galilee (everybody sing it!) \n"+
		" \n"+
		"Take up your cross \n"+
		" \n"+
		" \n"+
		"Songwriters: Dean Ivanhoe Fraser / Denroy Morgan / Memmalatel Morgan / Nakhamyah Morgan / Peter Anthony Morgan / V Morgan \n"+
		"Take Up Your Cross lyrics © BMG Rights Management US, LLC"];
		
	songs[5] = ["Bunny Rugs","Praise Him","Written by: Bunny Rugs and Dan Geary \n"+
		"c-2006 COF Music, Inc. \n"+
		"Publishing: Raw Edge Planet (ASCAP) \n"+
		" \n"+
		"Praise HIM \n"+
		" \n"+
		"I praise him everyday \n"+
		"I praise him all the way \n"+
		"I praise him with all my strength \n"+
		"Praise him with all of my heart \n"+
		"I praise him with my instrument \n"+
		"My guitar and my harp, yea \n"+
		"Praise him when things get ruff \n"+
		"And they try to keep me down, yes \n"+
		"He's always there for me \n"+
		"Guiding me constantly  \n"+
		"Even in the dark I see, yes \n"+
		"I praise the Almighty, yes \n"+
		"Praise him praise him \n"+
		"Give thanks and praise to the king \n"+
		"Praise him praise him \n"+
		"I praise him for all his children \n"+
		"A joy throughout this world \n"+
		"To see the smiling face \n"+
		"On that little boy or girl \n"+
		"Even though my cup is full \n"+
		"And about to overflow \n"+
		"I praise him everywhere I go \n"+
		"I want the world to know \n"+
		"He's always there for me, yes \n"+
		"I praise the Almighty, yea \n"+
		"Praise him praise him \n"+
		"Give thanks and praise to the King \n"+
		"Praise him praise him \n"+
		"He gave me a song to sing \n"+
		"Praise him praise him \n"+
		"Give thanks and praise to the King \n"+
		"Praise him praise him \n"+
		"He gave us everything \n"+
		"He gave us the deep blue sea \n"+
		"Even the birds in the tree \n"+
		"He gave his life for you and me \n"+
		"I praise him with all my soul \n"+
		"Even in these turbulent days \n"+
		"The Almighty is at the control \n"+
		"So to him I give my praise  \n"+
		"He?s always there to lift me up \n"+
		"Never let me down, yes \n"+
		"He's always there for me \n"+
		"Guiding me constantly  \n"+
		"Even in the dark I see \n"+
		"I praise the Almighty \n"+
		"Praise him praise him \n"+
		"Give thanks and praise to the King \n"+
		"Praise him praise him \n"+
		"He gave us everything \n"+
		"Praise him, praise him \n"+
		"Give thanks and praise to the King \n"+
		"Praise him, praise him \n"+
		"He gave me a song to sing"];

	songs[6] = ["George Nooks","God is Standing By","Lyrics for God Is Standing By by George Nooks \n"+
		" \n"+
		"when you have troubles \n"+
		"don't cry nooooooo \n"+
		"just remember that God is standing by hold on yessss \n"+
		" \n"+
		" \n"+
		"when you have heartaches \n"+
		"don't cry ohhh noooo ohhh nooo \n"+
		"just remember (just remember) that God is standing by \n"+
		"so your burdens and just rememeber \n"+
		"God is standing by thank you Lord \n"+
		"sooo there's no need to cryy \n"+
		"God is standing by thank you Lord \n"+
		"sooo don't you worry and don't cry \n"+
		" \n"+
		"when you have troubles \n"+
		"don't cry ohhh nooo ohh noo \n"+
		"just remember (just remember) that \n"+
		"God is standing by \n"+
		"when your cup runneth ove rjust remember \n"+
		"God is standing by thank you Lord \n"+
		"sooo there's no need to cryy \n"+
		"God is standing by thank you Lord \n"+
		"sooooo don't you worry and don't cry \n"+
		" \n"+
		"forget about your troubles \n"+
		"forget about your pains \n"+
		"put your trust in the Father yeaaa \n"+
		"God is standing by thank you Lord \n"+
		"sooo there's no need, no need to cryy \n"+
		"no need to cry ohhhh \n"+
		"God is standing by thank you Lord \n"+
		"sooooo don't you worry and don't cry \n"+
		"don't cry ×12 \n"];

	songs[7] = ["Tashai Houston","Sheltered in the arms of God","I feel the touch of hands so warm and tender \n"+
		"They're leading me in the path that I must trod \n"+
		"I have no fear for Jesus walks beside me \n"+
		"And I'm sheltered in the arms of God \n"+
		" \n"+
		" \n"+
		"So let the storms rage high  \n"+
		"The dark clouds rise \n"+
		"They won't worry me  \n"+
		"For I am sheltered safe within the arms of God \n"+
		"He walks with me, \n"+
		"And naught on earth can harm me,  \n"+
		"For I am sheltered in the arms of God \n"+
		" \n"+
		"Soon I shall hear a voice from heaven's portal \n"+
		"Come home my child \n"+
		"Tiz' the last mile you have trod \n"+
		"I fall asleep \n"+
		"And wake in God's new heaven \n"+
		"Sheltered safe within the arms of God. \n"+
		" \n"+
		" \n"+
		"So let the storms rage high  \n"+
		"Let the dark clouds rise  \n"+
		"They won't worry me  \n"+
		"For I am sheltered safe within the arms of God \n"+
		"He walks with me  \n"+
		"And naught of earth can harm me  \n"+
		"For I am sheltered within the arms of God \n"];

	songs[8] = ["Sam Cooke and the Soul Stirrers","Touch the hem of his garment",
		"Whoa, there was a woman in the Bible days \n"+
		"She had been sick, \n"+
		"Sick so very long \n"+
		"But she heard 'bout Jesus was passin' by \n"+
		"So she joined the gathering throng \n"+
		"And while she was pushing her way through \n"+
		'Someone asked her "what are you trying to do?"  \n'+
		'She said "If I could just touch the hem of his garment I know I\'ll be made whole" \n'+
		" \n" +
		'She cried "Oh Lord" (Oh Lord) \n'+
		'And "Oh Lord" (Oh Lord) \n'+
		'"Oh Lord Oh Lord" (Oh Lord) \n'+
		'And "Oh Lord" (Oh Lord) \n'+
		'Said "If I could just touch the hem of his garment I know I\'ll be made whole" \n'+
		" \n"+
		"And whoa, she spent her money \n"+
		"Here and there \n"+
		"Until she had no, \n"+
		"Had no more to spare \n"+
		"The doctors, they done all they could \n"+
		"But their medicine would do no good \n"+
		"When she touched him, the savior didn't see \n"+
		'But still he turned around and cried "somebody touched me" \n'+
		'She said "It was I who just wanna touch the hem of your garment \n'+
		'I know I\'ll be made whole right now" \n'+
		" \n"+
		'She stood there cryin\' "Oh Lord" (Oh Lord) \n'+
		'"Oh Lord" and "Oh Lord" (Oh Lord) \n'+
		'"Oh Lord" (Oh Lord) \n'+
		'And "Oh Lord" (Oh Lord) \n'+
		'Said "if I could just touch the hem of your garment \n'+
		'I know I\'ll be made whole right now" \n'];

	songs[9] = ["Sam Cooke and the Soul Stirrers","The Last Mile of the Way (Take 2A)",
		"If I walk in the pathway of duty \n"+
		"If I work 'til the close of the day,  \n"+
		"Lord \n"+
		"I shall see the great king in all his beauty \n"+
		"When I've gone the last mile of the way, Lord, yes sir \n"+
		" \n"+
		"When I've gone the last mile of the way, oh yeah \n"+
		"I shall rest at the close of day \n"+
		"For I know there are joy awaiting \n"+
		"When I've gone the last mile of the way \n"+
		" \n"+
		"If I were, for Christ to proclaim the glad story, oh Lord \n"+
		"If I see for his sheep who gone astray, oh Lord \n"+
		"I am sure he will show me in his glory \n"+
		"When I've gone the last mile of the way, Lord, yes sir \n"+
		" \n"+
		" \n"+
		"When I've gone the last mile of the way, oh yes \n"+
		"I shall rest at the close of day, oh yeah \n"+
		"For I know, there are joy awaiting \n"+
		"When I've gone the last mile of the way \n"];

	songs[10] = ["Sam Cooke and the Soul Stirrers","That's heaven to me",
		"The things that I see \n"+
		"As I walk along the streets \n"+
		"That's heaven to me \n"+
		" \n"+
		"A little flower that blooms in May \n"+
		"A lovely sunset at the end of a day \n"+
		"Someone helping a stranger along the way \n"+
		"(That's heaven to me) \n"+
		"That's heaven to me \n"+
		" \n"+
		"The feeling I have when I hear a touching prayer \n"+
		"It makes me know, the Lord is somewhere \n"+
		"Even the birds flying around in the air \n"+
		"(That's heaven to me) \n"+
		"That's heaven to me, no  \n"+
		" \n"+
		"It doesn't have to be a miracle \n"+
		"In order for me to see, I know \n"+
		"The goodness of my, my Savior \n"+
		"Is everywhere to me, woah, woah, woah \n"+
		" \n"+
		" \n"+
		"Even the children playing in the street \n"+
		"Sing a friendly hello to everyone that they meet \n"+
		"Even the leaves blowing out, blowing out \n"+
		"Blowing out, blowing out on the tree \n"+
		"(That's heaven to me) \n"+
		"That's heaven to me, woah, woah \n"+
		" \n"+
		"Woah woah, woah woah, woah Lord \n"];

	songs[11] = ["Sam Cooke and the Soul Stirrers","Pilgrim of Sorrow",
		"Lord, I'm poor pilgrim of sorrow \n"+
		"Down in this world, I'm all alone \n"+
		"I have no hope for tomorrow \n"+
		"And I have no place that I can roam \n"+
		" \n"+
		"Sometimes, sometimes I'm so lonely \n"+
		"Sometimes I don't know what to do \n"+
		"I look around to friends for consolation \n"+
		"And I find that they have troubles too \n"+
		" \n"+
		"And I've got sisters and brothers, they don't like me \n"+
		"Because I'm away from sin \n"+
		"And I've got good friends, my best friends they turned against me \n"+
		"Because I'm a trial so hard to win \n"+
		" \n"+
		"Oh, Lord, oh, Lord, come on, Jesus \n"+
		"And oh, Lord, sometimes I'm exhausted, Lord and driven \n"+
		"'Til I decided that I would roam \n"+
		"That's when I heard of a city called Glory \n"+
		"And oh, I'm trying to make that city my home \n"];

	songs[12] = ["Sam Cooke and the Soul Stirrers","He's so wonderful",
		"Wonderful, God is so wonderful \n"+
		"he's wonderful, God he's wonderful \n"+
		" \n"+
		"The Lord is my shepherd, he's my guide \n"+
		"Whenever I need, the Lord will provide \n"+
		"And praise my lords name \n"+
		"I know he's so wonderful \n"+
		" \n"+
		"And O, he's wonderful and I better believe \n"+
		"The Lord is wonderful, oh yes he is \n"+
		"And O, he's wonderful, I know the Lord \n"+
		"he's so wonderful \n"+
		" \n"+
		"And O, if you never tried God, try the Lord one day \n"+
		"And see when my father come down and make a way \n"+
		"And O, i can't help it but love God \n"+
		"he's so wonderful, wonderful etc. \n"+
		" \n"+
		"He's been my mother and my father too \n"+
		"There's no limit to what my Lord can do \n"+
		" \n"+
		"and O, I love God, he's so wonderful \n"];

	songs[13] = ["The Blind Boys of Alabama","Wade in the Water",
		"Wade in the water \n"+ 
		"Come on and \n"+
		"Wade in the water children \n"+
		"Wade in the water \n"+
		" \n"+
		"My Lord  \n"+
		"My God gonna trouble the water \n"+
		"Come on and \n"+
		"Wade in the water \n"+
		" \n"+
		"Come on and \n"+
		"Wade in the water children \n"+
		"Wade in the water \n"+
		"My God gonna trouble the water \n"+
		" \n"+
		"If you hear, tella me dying \n"+
		"I don't want no body to cry \n"+
		"All I want you to do for me  \n"+
		"And that to close my dying eyes, \n"+
		" \n"+
		"Well come on and \n"+
		"Wade in the water \n"+
		"Wade in the water children \n"+
		"Wade in the water \n"+
		" \n"+
		"My lord \n"+
		"My God gonna trouble the water \n"+
		"Well in my dying hours \n"+
		"I don't want no body to moan \n"+
		" \n"+
		"All I want you to do for me \n"+
		"Is to give that bell a tone \n"+
		"Well come on and \n"+
		"Wade in the water \n"+
		" \n"+
		"Wade in the water children \n"+
		"Wade in the water \n"+
		"My God gonna trouble the water \n"+
		"When I get in glory \n"+
		" \n"+
		"Well I'm gonna shake my mother's hand \n"+
		"I'm gonna tell her all about my troubles  \n"+
		"While I'm traveling though this land \n"+
		"Well come and \n"+
		" \n"+
		"Wade in the water \n"+
		"Wade in the water children \n"+
		"Wade in the water \n"+
		"My God gonna trouble the water \n"+
		" \n"+
		"Come on and \n"+
		"Wade in the water \n"+
		"Wade in the water children \n"+
		"Wade in the water \n"+
		" \n"+
		"My Lord \n"+
		"My God gonna trouble the water \n"+
		" \n"+
		" \n"+
		"Songwriters: Chris Goldsmith / John Chelew / The Blind Boys Of Alabama \n"+
		"Wade in the Water lyrics © BMG Rights Management US, LLC \n"];

	songs[14] = ["The Blind Boys of Alabama","People Get Ready",
		"People get ready \n"+
		"There's a train a-coming \n"+
		"You don't need no baggage \n"+
		"You just get on board \n"+
		"All you need is faith \n"+
		"To hear the diesels humming \n"+
		"Don't need no ticket \n"+
		"You just thank the Lord \n"+
		" \n"+
		"People get ready \n"+
		"For the train to Jordan \n"+
		"Picking up passengers \n"+
		"From coast to coast \n"+
		"Faith is the key \n"+
		"Open the doors and board them \n"+
		"There's room for all \n"+
		"Among the loved the most \n"+
		" \n"+
		"There ain't no room \n"+
		"For the hopeless sinner \n"+
		"Who would hurt all mankind just \n"+
		"To save his own \n"+
		"Have pity on those \n"+
		"Whose chances are thinner \n"+
		"'Cause there's no hiding place \n"+
		"From the Kingdom's throne \n"+
		" \n"+
		"So people get ready \n"+
		"For the train a-comin' \n"+
		"You don't need no baggage \n"+
		"You just get on board \n"+
		"All you need is faith \n"+
		"To hear the diesels humming \n"+
		"Don't need no ticket \n"+
		"You just thank, you just thank the Lord \n"+
		" \n"+
		" \n"+
		"Songwriters: Curtis Mayfield \n"+
		"People Get Ready lyrics © Sony/ATV Music Publishing LLC, Warner/Chappell Music, Inc \n"];

	songs[15] = ["The Blind Boys of Alabama","Amazing Grace",
		"Amazing grace, how sweet the sound \n"+
		"That sav'd a wretch like me! \n"+
		"I once was lost, but now am found, \n"+
		"Was blind, but now I see. \n"+
		" \n"+
		"'Twas grace that taught my heart to fear, \n"+
		"And grace my fears reliev'd; \n"+
		"How precious did that grace appear, \n"+
		"The hour I first believ'd! \n"+
		" \n"+
		"Thro' many dangers, toils and snares, \n"+
		"I have already come; \n"+
		"'Tis grace has brought me safe thus far, \n"+
		"And grace will lead me home. \n"+
		"  \n"+
		" \n"+
		"The Lord has promis'd good to me, \n"+
		"His word my hope secures; \n"+
		"He will my shield and portion be, \n"+
		"As long as life endures. \n"+
		" \n"+
		"Yes, when this flesh and heart shall fail, \n"+
		"And mortal life shall cease; \n"+
		"I shall possess, within the veil, \n"+
		"A life of joy and peace. \n"+
		"  \n"+
		" \n"+
		"The earth shall soon dissolve like snow, \n"+
		"The sun forbear to shine; \n"+
		"But God, who call'd me here below, \n"+
		"Will be forever mine. \n"+
		" \n"+
		"John Newton, Olney Hymns (London: W. Oliver, 1779) \n"];

	songs[16] = ["Away From You","The O.C. Supertones",
		"Say you got a minute friend \n"+
		"Because I'd like to tell you something \n"+
		"You may think nothing of it \n"+
		"But wait you're gonna love it \n"+
		"What if I told you I held the one true philosophy \n"+
		"Would you hear me out or just turn your back and laugh at me \n"+
		"Lord I just don't understand \n"+
		"This strange creature you call man \n"+
		"Who thinks he lives by his own hand \n"+
		"But I know, I know, I know, I know \n"+
		"There's no life away from you \n"+
		"There's no life away from you \n"+
		"So I will remain still and silent \n"+
		"For fear of the words I may say \n"+
		"But am I still in my defiance \n"+
		"When I'm trying so hard to obey \n"+
		"Say you got a minute friend \n"+
		"Because I'd like to tell you something \n"+
		"You may think nothing of it \n"+
		"But wait you're gonna love it \n"+
		"What if I told you I held the one true philosophy \n"+
		"Would you hear me out or just turn your back and laugh at me \n"+
		"Lord I just don't understand \n"+
		"This strange creature you call man \n"+
		"Who thinks he lives by his own hand \n"+
		"But I know, I know, I know, I know \n"+
		"There's no life away from you \n"+
		"There's no life away from you \n"+
		"So I will remain still and silent \n"+
		"For fear of the words I may say \n"+
		"But am I still in my defiance \n"+
		"When I'm trying so hard to obey \n"+
		" \n"+
		"Songwriters: Alan Tatum / Bobby West / Lawrence Johnson \n"+
		"Away From You lyrics © Sony/ATV Music Publishing LLC \n"];

	songs[17] = ["George nooks","How Great Thou Art",
		"O Lord my God, when I in awesome wonder \n"+
		"Consider all the worlds Thy hands have made; \n"+
		"I see the stars, I hear the rolling thunder \n"+
		"Thy power throughout the universe displayed \n"+
		" \n"+
		"[Chorus] \n"+
		"Then sings my soul, my Savior God, to Thee \n"+
		"How great Thou art, how great Thou art \n"+
		"Then sings my soul, my Savior God, to Thee \n"+
		"How great Thou art, how great Thou art! \n"+
		" \n"+
		"When through the woods, and forest glades I wander \n"+
		"And hear the birds sing sweetly in the trees \n"+
		"When I look down, from lofty mountain grandeur \n"+
		"And see the brook, and feel the gentle breeze \n"+
		" \n"+
		"[Chorus] \n"+
		"Then sings my soul, my Savior God, to Thee \n"+
		"How great Thou art, How great Thou art \n"+
		"Then sings my soul, my Savior God, to Thee \n"+
		"How great Thou art, How great Thou art! \n"+
		" \n"+
		"And when I think, that God, His Son not sparing; \n"+
		"Sent Him to die, I scarce can take it in; \n"+
		"That on the cross, my burden gladly bearing \n"+
		"He bled and died to take away my sin \n"+
		" \n"+
		" \n"+
		"[Chorus] \n"+
		"Then sings my soul, my Savior God, to Thee \n"+
		"How great Thou art, how great Thou art \n"+
		"Then sings my soul, my Savior God, to Thee \n"+
		"How great Thou art, how great Thou art! \n"+
		" \n"+
		"When Christ shall come, with shout of acclamation \n"+
		"And take me home, what joy shall fill my heart \n"+
		"Then I shall bow, in humble adoration \n"+
		'And then proclaim: "My God, how great Thou art!" \n'];

	songs[18] = ["George Nooks","Give Thanks",
		"Give thanks \n"+
		"With a grateful heart \n"+
		"Give thanks \n"+
		"To the Holy One \n"+
		"Give thanks \n"+
		"Because He's given \n"+
		"Jesus Christ His Son \n"+
		"Give thanks \n"+
		"With a grateful heart \n"+
		"Give thanks \n"+
		"To the Holy One \n"+
		"Give thanks \n"+
		"Because He's given \n"+
		"Jesus Christ His Son \n"+
		"And now let the weak \n"+
		'Say "I am strong" \n'+
		"Let the poor say \n"+
		'"I am rich" \n'+
		"Because of what the Lord \n"+
		"Has done for us \n"];

	songs[19] = ["Wayne Stoddart","highest praise",
		'"Enter into his gates with thanksgiving and into his courts with praise!" \n'+
		"CHORUS \n"+
		"Let me hear you praise Him, \n"+
		"Raise your hands and adore Him \n"+
		"Give Jesus Christ the highest praise \n"+
		"Bow down before Him worship and adore Him \n"+
		"Give Jesus Christ the highest praise \n"+
		" \n"+
		"Verse 1 \n"+
		"From sin He set I free \n"+
		"And gave I victory \n"+
		"That's why I sing the highest praise \n"+
		"For all that He has done \n"+
		"For sending us his only son \n"+
		"Give El Shaddai the highest praise \n"+
		"Come hail Him up again \n"+
		" \n"+
		"CHORUS \n"+
		"Let me hear you praise Him, \n"+
		"Raise your hands and adore Him \n"+
		"Give Jesus Christ the highest praise \n"+
		"Bow down before Him worship and adore Him \n"+
		"Give Jesus Christ the highest praise \n"+
		" \n"+
		"Verse 2 \n"+
		"He water the earth from his chambers, \n"+
		"Set the boundary, form the sea, (...it's Him who reigns in me) \n"+
		"He commands the Winds and rain \n"+
		"And calls me by my name \n"+
		"Inside my heart He rules and reigns. \n"+
		" \n"+
		"CHORUS \n"+
		"Let me hear you praise Him, \n"+
		"Raise your hands and adore Him \n"+
		"Give Jesus Christ the highest praise (x3) \n"+
		"Let me hear you praise Him (x3) \n"+
		"Bow down before Him worship and adore Him  \n"+
		"Give Jesus Christ the highest praise \n"];

	songs[20] = ["DJ Nicholas feat. Kevin Smith & Jermaine Edwards","Close To You",
		"Bless Your name Jesus \n"+
		"Yooo \n"+
		" \n"+
		" \n"+
		"A just the Most High \n"+
		"Wah di Bible say \n"+
		"He that dwelleth in the secret place of the Most High shall abide in the shadow of the Almighty (Close to me God) \n"+
		"Yohooo \n"+
		" \n"+
		"Father, me love you every time \n"+
		"You a hear me chant \n"+
		" \n"+
		"I want to be close to You, Jesus \n"+
		"Don't wanna to be far away \n"+
		"Hay, hay, hay \n"+
		"I want to be close to You, \n"+
		"My God \n"+
		"Jesus \n"+
		"Don't wanna be far away \n"+
		"Hay, hay, hay \n"+
		"(Could neva, could neva) \n"+
		" \n"+
		"Well like a belt and a buckle that's how me want fi stay \n"+
		"Close to You Lord God each and every day \n"+
		"Living in your presence I could neva go astray \n"+
		"I praise and worship without delay \n"+
		"Yeahaa, \n"+
		"Lord I wanna wrap myself around You \n"+
		"And I wanna tell You that I love You \n"+
		"Cause when I am in Your presence \n"+
		"I can't help myself \n"+
		"But, to express myself \n"+
		" \n"+
		"But a one drop a blood \n"+
		"And tell the devil Back Weh \n"+
		"Cause I will always praise Him with Gospel Reggae \n"+
		"I gotta read my Bible so me nuh go astray \n"+
		"Cause in Your eyes our life was like a day \n"+
		" \n"+
		"I wanna be close to You \n"+
		"Ah no you alone you know Jermaine \n"+
		"Jesus \n"+
		"Don't wanna be far away \n"+
		"Hay, hay, hay \n"+
		"I want to be close to You, \n"+
		"(I have been in the outter courts too long) \n"+
		"Jesus \n"+
		"Don't wanna be far away \n"+
		"(Nicholas a wah you a tell dem say \n"+
		"Hay, hay, hay \n"+
		" \n"+
		"So listen me \n"+
		"Yow! \n"+
		"So when me shut me eye and lift me hand in a di place \n"+
		"Ah so me want the anointing just fi land in a di place \n"+
		"That can't happen without relationship \n"+
		"That's why mi haffi be a diligent man inna di race \n"+
		"When all the children of God be as one inna di place \n"+
		"Like the Upper Room it a go gran inna di place \n"+
		"Me no want no rock fi cry out \n"+
		"Me a play my part \n"+
		"Me no want stick stand inna mi place \n"+
		"On the solid rock me deh me stand inna di grace \n"+
		"If God praise a pillar me belong inna di case \n"+
		"Me want Jesus see me so much \n"+
		"That Him tell Him Father \n"+
		"Every morning this man inna mi face \n"+
		" \n"+
		"I wanna be close to You \n"+
		"(Closer than ever) \n"+
		"Jesus \n"+
		"Don't wanna be far away \n"+
		"Hay, hay, hay \n"+
		"(Every hour and every night) \n"+
		"I want to be close to You, \n"+
		"(I woulda neva want to be out of Your presence, Lord Almighty) \n"+
		"Don't wanna be far away \n"+
		"Hay, hay, hay \n"+
		" \n"+
		"Hear how it go now no \n"+
		"Listen \n"+
		" \n"+
		"If a relationship mi want you will give me \n"+
		"And so me really have to stay close to you \n"+
		"Him stick closer than a brother, You no see me \n"+
		"And even closer than me Mommy and me crew \n"+
		"Ah Cho \n"+
		" \n"+
		"And mi fi leave dat, mi nah go do \n"+
		"You mad? \n"+
		"No, and if mi leave, wah me go do \n"+
		"Neva \n"+
		"Instead, me check and see me really need a closer walk fi true \n"+
		"So me leggo all the things beset \n"+
		"The Word me start recruit \n"+
		"Inna Ephesians where me go and find a full armor suit \n"+
		"The breastplate of righteousness \n"+
		"And Gird me loin with the truth \n"+
		"Then me draw fi mi helmet \n"+
		"And step in me Gospel boot \n"+
		"Bringing a betta tomorrow for the youths \n"+
		" \n"+
		"I wanna be close to you, \n"+
		"Jesus \n"+
		"Don't wanna be far away \n"+
		"Hay, hay, hay \n"+
		"(Every day and every night) \n"+
		"I want to be close to You, \n"+
		"(Coulda neva, coulda neva) \n"+
		"Don't wanna be far away \n"+
		"Hay, hay, hay \n"+
		" \n"+
		"A just the blessing a di Lord that maketh one rich you know \n"+
		"And addeth no sorrow with it \n"+
		"So, if you want to be blessed \n"+
		"The place that you must be is at the feet of the Almighty \n"+
		" \n"+
		"Close to di Lord like a post to the guard \n"+
		"Close to di Lord like a post to the guard \n"+
		"Close to di Lord like a house to the yard \n"+
		"Wire mouse to the cord \n"+
		"A mi source a di Lord \n"];

	songs[21] = ["Avion Blackman","Got To Be",
		"The Spirit of the Lord I've got to be, \n"+
		"Got to be, got to be. \n"+
		"Walking in the presence of the Almighty, \n"+
		"Almighty, Almighty. \n"+
		" \n"+
		"The Spirit of the Lord I've got to be, \n"+
		"Got to be, got to be. \n"+
		"Walking in the presence of the Almighty, \n"+
		"Almighty, Almighty. \n"+
		" \n"+
		"No more standing in the shadows, \n"+
		"I'll walk the straight and narrow. \n"+
		"Or waiting on the sidelines, \n"+
		"I know you're always at my side. \n"+
		"For you are always with me, \n"+
		"And you know what's best for me. \n"+
		"So keep me from the darkness, \n"+
		"And let the light of Your love, \n"+
		"Just shine on me. \n"+
		" \n"+
		"The Spirit of the Lord I've got to be, \n"+
		"Got to be, got to be. \n"+
		"Walking in the presence of the Almighty, \n"+
		"Almighty, Almighty. \n"+
		" \n"+
		"The Spirit of the Lord I've got to be, \n"+
		"Got to be, got to be. \n"+
		"Walking in the presence of the Almighty, \n"+
		"Almighty, Almighty. \n"+
		" \n"+
		"Walk in righteousness, along the path of justice. \n"+
		"Walk upright in the sight of the Lord, yeah! \n"+
		"Walk in obedience, to His commandments. \n"+
		"Walk upright in the sight of the Lord, yeah! \n"+
		" \n"+
		"The Spirit of the Lord I've got to be, \n"+
		"Got to be, got to be. \n"+
		"Walking in the presence of the Almighty, \n"+
		"Almighty, Almighty. \n"+
		" \n"+
		"The Spirit of the Lord I've got to be, \n"+
		"Got to be, got to be. \n"+
		"Walking in the presence of the Almighty, \n"+
		"Almighty, Almighty. \n"+
		" \n"+
		"No more standing in the shadows, \n"+
		"I'll walk the straight and narrow. \n"+
		"Or waiting on the sidelines, \n"+
		"I know you're always at my side. \n"+
		"Don't turn to the right or the left, \n"+
		"Just follow His steps, \n"+
		"Walk upright in the sight of the Lord, yeah! \n"+
		" \n"+
		"The Spirit of the Lord I've got to be, \n"+
		"Got to be, got to be. \n"+
		"Walking in the presence of the Almighty, \n"+
		"Almighty, Almighty. \n"+
		" \n"+
		"The Spirit of the Lord I've got to be, \n"+
		"Got to be, got to be. \n"+
		"Walking in the presence of the Almighty, \n"+
		"Almighty, Almighty. \n"];

	songs[22] = ["Avion Blackman","Joy Of The Lord",
		"I can't explain \n"+
		"The way You heal my heart \n"+
		"When I'm in pain \n"+
		"And I can't describe \n"+
		"The way You move in me \n"+
		"I'm so alive \n"+
		" \n"+
		"The joy of the Lord \n"+
		"Is my strength - is my strength \n"+
		"The joy of the Lord \n"+
		"Is my song - is my song \n"+
		" \n"+
		"You're my strength, You are my song \n"+
		"You are my salvation \n"+
		"The only One, that I lean upon \n"+
		"You're my strength, You are my song \n"+
		"Jesus You're my salvation \n"+
		"The only One, that I call upon \n"+
		" \n"+
		"The joy of the Lord \n"+
		"Is my strength - is my strength \n"+
		"The joy of the Lord \n"+
		"Is my song - is my song \n"+
		" \n"+
		"(..) \n"+
		" \n"+
		"I know that You will never leave me alone \n"+
		"Because I cannot do it on my own \n"+
		"You are here with me \n"+
		" \n"+
		"I know that You will never leave me alone \n"+
		"Because I cannot do it on my own \n"+
		"You are here with me \n"+
		" \n"+
		"In my sorrow, in my pain \n"+
		"Your love it does remain \n"+
		"Your joy it gives me strength today \n"+
		"In my sorrow, in my pain \n"+
		"Your love it does remain \n"+
		"Your joy it brings me strength today \n"+
		" \n"+
		"The joy of the Lord \n"+
		"Is my strength - is my strength \n"+
		"The joy of the Lord \n"+
		"Is my song - is my song \n"+
		" \n"+
		"You've brightened up my every day \n"+
		"And give me peace through music \n"+
		"So Father take my heart I pray \n"+
		"This broken heart and use it \n"+
		" \n"+
		"You've brightened up my every day \n"+
		"And give me peace through music \n"+
		"So Father take my heart I pray \n"+
		"This broken heart and use it \n"+
		" \n"+
		"The joy of the Lord \n"+
		"Is my strength - is my strength \n"+
		"The joy of the Lord \n"+
		"Is my song - is my song \n"];

	songs[23] = ["Avion Blackman","Day And Night",
		"Day and night, night and day, \n"+
		"I will meditate on Your Word. \n"+
		"Day and night, night and day, \n"+
		"I will meditate on Your Word. \n"+
		" \n"+
		"(..) \n"+
		" \n"+
		"Day and night, night and day, \n"+
		"I will meditate on Your Word. \n"+
		"Day and night, night and day, \n"+
		"I will meditate on Your Word. \n"+
		" \n"+
		"He wants us to flourish, \n"+
		"Have strength and take courage, \n"+
		"He is with us every step that we take. \n"+
		"He has given Revelation, divine inspiration, \n"+
		"So on His Word we must meditate. \n"+
		" \n"+
		"Day and night, night and day, \n"+
		"I will meditate on Your Word. \n"+
		"Day and night, night and day, \n"+
		"I will meditate on Your Word. \n"+
		" \n"+
		"Blessed is the man that walketh not, \n"+
		"In the counsel of the ungodly. \n"+
		"Nor stands with the sinners, \n"+
		"Or sits with the scornful. \n"+
		"But his delight is in the Lord, \n"+
		"And on His Law he meditates, \n"+
		"Day and night on the Law of the Lord. \n"+
		" \n"+
		"Day and night, night and day, \n"+
		"I will meditate on Your Word. \n"+
		"Day and night, night and day, \n"+
		"I will meditate on Your Word. \n"+
		" \n"+
		"(..) \n"+
		" \n"+
		"He wants us to flourish, \n"+
		"Have strength and take courage, \n"+
		"He is with us every step that we take. \n"+
		"Like a tree that is planted, in the Garden of Eden, \n"+
		"Bearing fresh fruits in every season. \n"+
		" \n"+
		"Day and night, night and day, \n"+
		"I will meditate on Your Word. \n"+
		"Day and night, night and day, \n"+
		"I will meditate on Your Word.  \n"];

	songs[24] = ["Avion Blackman","It Is For Freedom",
		"It's for freedom, you've been set free, \n"+
		"It's for freedom, it's for freedom. \n"+
		"Don't you go back to your slavery, \n"+
		"It's for freedom, it is for freedom. \n"+
		" \n"+
		"So don't throw it all away for a fleeting moment. \n"+
		"No, don't give it all away to one who doesn't care. \n"+
		"It is for freedom that you have been set free, \n"+
		"So don't go back to the way things used to be. \n"+
		" \n"+
		"It's for freedom you've been set free, \n"+
		"It's for freedom, it's for freedom. \n"+
		"Don't you go back where you used to be, \n"+
		"It's for freedom, it is for freedom. \n"+
		" \n"+
		"When I think of all that the Lord has done, \n"+
		"Sacrificing His only Son, \n"+
		"So that we can all be free, \n"+
		"Give thanks and praise to the Almighty. \n"+
		"Well it just makes me feel so sad, \n"+
		"To see them drift away from God, \n"+
		"And turn back to their evil ways, \n"+
		"Come back to the Almighty. \n"+
		" \n"+
		"It's for freedom, you've been set free, \n"+
		"It's for freedom, it's for freedom. \n"+
		"Don't you go back to your slavery, \n"+
		"It's for freedom, it is for freedom. \n"+
		" \n"+
		"The Lord he has a plan and He wants you to prosper. \n"+
		"It's not for, freedom to sin but to serve each other in love. \n"+
		"It is for freedom that you have been set free, \n"+
		"So don't go back to the way things used to be. \n"+
		" \n"+
		"It's for freedom you've been set free, \n"+
		"It's for freedom, it's for freedom. \n"+
		"Don't you go back where you used to be, \n"+
		"It's for freedom, it is for freedom. \n"+
		" \n"+
		"(..) \n"+
		" \n"+
		"You know I have seen a lot of what the world can do, \n"+
		"And it breaks my heart in two, \n"+
		"To see a brother slip away, \n"+
		"From their walk with the Almighty. \n"+
		"Well, it just makes me feel so sad, \n"+
		"To see them walk away from God, \n"+
		"And go back to their evil ways, \n"+
		"Run back to the Almighty. \n"+
		" \n"+
		"So don't go back to Egypt; \n"+
		"Don't go back to Rome; \n"+
		"Don't go back to Babylon; \n"+
		"That place is not your home. \n"+
		" \n"+
		"No don't go back to Egypt; \n"+
		"Don't go back to Rome; \n"+
		"Or go back to how it used to be; \n"+
		"That place is not your home. \n"+
		" \n"+
		"It's for freedom, you've been set free, \n"+
		"It's for freedom, it's for freedom. \n"+
		"Don't you go back to your slavery, \n"+
		"It's for freedom, it is for freedom. \n"+
		" \n"+
		"So don't go back to the way things used to be. \n"+
		"Don't go back to the way things used to be. \n"];

	songs[25] = ["Papa San","God and I",
		"Jesus make me smile again Jesus make me scream again \n"+
		"Jesus make me laugh again teach mi how fi walk again (yeeeh) rept \n"+
		"(Mi go so now) \n"+
		" \n"+
		"0 Lord you're di only one \n"+
		"That's why mi holding on so long \n"+
		"(holding on so long \n"+
		"Evry time mi play mi life to my frens \n"+
		"Dem listen but dem neva learn mi song rept x1 \n"+
		" \n"+
		"VERSE 1 \n"+
		"My life is like a nightmare an mi future is like a dream \n"+
		"Mi trapped inna di middle somewhere in between \n"+
		"Mi flesh rise up an jus, wau create a seen \n"+
		"But mi ask Christ fi keep mi heart clean (yow) \n"+
		"More time mi tell a man a small problem \n"+
		"Den dung di road mi gaan guh hear dem back again \n"+
		"Mi naah talk bout di secret mi have fi dem \n"+
		"Mi have fi wanda if some a dem a friend \n"+
		"(den mi guh so yow) \n"+
		" \n"+
		"CHORUS 2 \n"+
		" \n"+
		"VERSE \n"+
		"(whey mi tell dem seh, listen mi aye) \n"+
		"There were times when mi feel mi coulda liv'it up \n"+
		"There were times when mi feel mi woulda give it up \n"+
		"There were times when mi feel mi woulda lie dung inna mi bed \n"+
		"Anuh wake up an, some body find mi dead \n"+
		"There were times it get so tuff mi couldn't tek nuh more \n"+
		"There were times mi find a room an den mi shut di door \n"+
		"There were times mi sey mi cry till eye water poor \n"+
		"An, mi a slide inna it because it flood di floor \n"+
		"There were times mi member David and Solomon \n"+
		"There were times mi member Joseph - Sarah, Abraham \n"+
		"There were times a realize I'm not the only one \n"+
		"Because di cross is di perfect demonstration \n"+
		" \n"+
		"VERSE 2 \n"+
		"(listen) \n"+
		" \n"+
		"Mi look east, north, south and west \n"+
		"Mi nuh si nuh baddy wen I was going through di wilderness \n"+
		"A jus, me, an, mi pain, an, mi stress \n"+
		"Three a wi together an, yu get a total mess \n"+
		"But jus, as mi fi tek di last breath \n"+
		"Mi hear behind mi ... another foot step \n"+
		"Mi concern so mi tek a check \n"+
		"Mi hear a voice sey \n"+
		"Come onto me all ye that labour and \n"+
		"I will give you rest \n"+
		" \n"+
		"BRIDGE \n"+
		" \n"+
		"My yolk is easy my burden is light \n"+
		"I want you to prosper every day and night \n"+
		"I die for you I take your stripe \n"+
		"It's alright, it's alright \n"+
		"It's alright, it's alright \n"+
		"I understand the things that you are going through \n"+
		"It is nothing new cause I've been there to \n"+
		"My own reject me even just as you \n"+
		"Falsely accused for things I did not do \n"+
		"Like Jacki Valesquez I get on my knees I realize my problem is just bun and cheese \n"+
		"He's here with me and He will never leave \n"+
		"The cross still bleed, the cross still bleed (yes) \n"+
		" \n"];

		songs[26] = ["The O.C. Supertones","Lift Me Up",""];
		songs[27] = ["Mikey D & Gospel David","God's Way",""];
		songs[28] = ["The Five Blind Boys of Alabama","Look Where He Brought Me from",""];
		songs[29] = ["Ryan Hiraoka","Freedom",""];
		songs[30] = ["Owen Uriah","We're Not Ordinary People",""];
		songs[31] = ["Owen Uriah","My Redeemer Lives",""];
		songs[32] = ["Owen Uriah","Because Of Him",""];
		songs[33] = ["Elan Atias","Nothing Is Worth Losing You",""];
		songs[34] = ["Lincoln Brewster","Here I Am to Worship (Live Instrumental Version)",""];
		songs[35] = ["Corey Harris","Daily Bread",""];
		songs[36] = ["Carlene Davis","Healing Rain",""];
		songs[37] = ["Donna Marie","God so Love the World",""];
		songs[38] = ["Donna Marie","Bless His Holy Name",""];
		songs[39] = ["Junior Tucker & Carlene Davis","Lord I Lift Your Name on High",""];
		songs[40] = ["E-Mac-U-Let","Jesus Be a Fence",""];
		songs[41] = ["Carlene Davis","Give Thanks",""];
		songs[42] = ["DJ Nicholas","Thank You",""];


		//private function
		function sortSongs(){
		    var songTitle = 1;
		    var sorted = [];
		    var i = 0;
		    sorted[i] = songs[i];
		    for(i = 1; i < songs.length; i++) {
		       sorted = bubbleSort(sorted, songs[i], sorted.length, songTitle);
		    }
		    return sorted;
		}
		
		//private function
		function sortArtists(){
		    var Artist = 0;
		    var sorted = [];
		    var i = 0;
		    sorted[i] = songs[i];
		    for(i = 1; i < songs.length; i++) {
		       sorted = bubbleSort(sorted, songs[i], sorted.length, Artist);
		    }
		    return sorted;
		}
		return {
		    getSongs: function() {
			    return sortSongs();
			},
			getArtists: function() {
			    return sortArtists();
			},
			getLyrics: function() {
				var localSongs = sortSongs();
				var i = 0;
				var songsWithLyrics = [];
				for(i; i < localSongs.length; i++) {
					if(localSongs[i][2] != ""){
						songsWithLyrics[i] = localSongs[i];
					}
				}
			}
		};
	});