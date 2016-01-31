Meteor.startup(function(){
	if(Dreams.find().count() === 0){
		var demo_dreams = [
			{
				'title':'Flying into a Cloud',
				'date' : new Date("2015-12-05"),
				'text' : 'I dreamt I was flying high above the trees. It was great until a gust of stinky sewer wind blew me high into the sky where I got lost. Eventually I started to lose sight as things got blurrier, until finally I bumped into a cloud and woke up.',
				'tags' : "flying, clouds, smelly, happy",
				'timeLock' : new Date("2016-01-01"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'Forgot My Clothes At Home!',
				'date' : new Date("2016-01-14"),
				'text' : 'I was getting ready for work and rushed to put on my pants. As I was givng a presentation, I noticed no one was paying attention to me. Suddenly Janice from Accounting burst out in laughter and thats when I realized I had only put on underwear... but no pants.',
				'tags' : "naked, embarrassed, work, rush",
				'timeLock' : new Date("2016-01-30"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'The Nightmare on Elm Street',
				'date' : new Date("2015-02-01"),
				'text' : 'The scariest dream I just had literally woke me up in shivers. I dreamt I was at a bar on Elm St where everyone was super friendly. As I was leaving the bar, a mysterious stranger popped out of nowhere and sat on my chest until last call. No more moonshine for me.',
				'tags' : "nightmare, scary, alcohol, night terror",
				'timeLock' : new Date("2016-03-01"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'The Girl of My Dreams',
				'date' : new Date("2015-02-13"),
				'text' : 'I dreamt that I met the girl of my dreams! She had a kind smile, brownish blonde hair and the cutest cheeks. I swear my heart stopped beating when she looked up at me. <3 The heart doth yearn to be loved back.',
				'tags' : "happy, scary, girl, love",
				'timeLock' : new Date("2016-02-13"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'Roadtrip Across Antartica',
				'date' : new Date("2015-03-13"),
				'text' : 'So I was jamming in Jamaica with my boy Justin Trudeau, smoking a fattie. Thats when Ziggy came up and brought forth the important issue of Canadian Sovereignty in the Arctic. Santa aint a Ruski fellas!',
				'tags' : "none, test",
				'timeLock' : new Date("2016-02-01"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'What happened to all the chairs??',
				'date' : new Date("2015-01-02"),
				'text' : 'Back when Bill Gates was programming his schools class enrollment software and assigning his classes with lots of girls... I was first Lt.Colornal of MUSIC CHAIRS CHAMPSHIPS SASHKATCHEWAN since 1998. But nowadays the interest is gone. The youth are too distracted with their iChairs and Beats by Dre',
				'tags' : "none, test",
				'timeLock' : new Date("2015-01-09"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'Aerodynamic Origami Designs',
				'date' : new Date("2015-02-13"),
				'text' : 'I believe I can fly. I believe I can touch the sky. I think about it every night and day. Spread my wings and fly away.',
				'tags' : "none, test",
				'timeLock' : new Date("2016-09-01"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'The reason we daydream?',
				'date' : new Date("2015-02-13"),
				'text' : 'Is the same reason we lose sleep.',
				'tags' : "none, test",
				'timeLock' : new Date("2170-01-01"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'7 Years of Abundance, 7 Years of Famine',
				'date' : new Date("0001-01-01"),
				'text' : 'Pharoah had a deeply troubling dream one fateful night. In his dream he saw seven cattle healthy and fat, eating the abundant grains of Egypt. Then seven skinny and sickly frail cows, with nothing to eat. When Pharoah awoke, he sought to find the meaning of his dream.',
				'tags' : "none, test",
				'timeLock' : new Date("1999-12-31"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'Too much coding.. Javascript in my dreams',
				'date' : new Date("2015-02-01"),
				'text' : 'How do you know youve been doing something for too long? You start dreaming in it. I swear my whole night was function after function, and yet it felt so natural. Like in dreamland, code can be the language that your mind talks to itself in.',
				'tags' : "none, test",
				'timeLock' : new Date("2016-03-09"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'420 Forever',
				'date' : new Date("2015-02-03"),
				'text' : 'Cause smoke weed everyday.',
				'tags' : "none, test",
				'timeLock' : new Date("2016-04-20"),
				'public' : true,
				'owner': 'Anonymous'
			},
			{
				'title':'Television Reruns of my Life (so far)',
				'date' : new Date("2015-02-01"),
				'text' : 'That had got to be the weirdest dream I have ever had. I dreamt that I was watching a rerun on TV that played clips and summarized my life thus far. I was totally in agreeance only later to wake up, think back and realize none of what I saw was my life. But I was totally convinced...',
				'tags' : "none, test",
				'timeLock' : new Date("2016-01-31"),
				'public' : true,
				'owner': 'Anonymous'
			}
		];
		for(var i=0; i<demo_dreams.length; i++){
			Dreams.insert(demo_dreams[i]);
		}
	};
});