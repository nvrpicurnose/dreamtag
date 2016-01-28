Meteor.startup(function(){
	if(Dreams.find().count() === 0){
		var demo_dreams = [
			{
				'title':'Flying into a Cloud',
				'date' : moment("2015-12-05"),
				'text' : 'I dreamt I was flying high above the trees. It was great until a gust of stinky sewer wind blew me high into the sky where I got lost. Eventually I started to lose sight as things got blurrier, until finally I bumped into a cloud and woke up.',
				'tags' : "flying, clouds, smelly, happy",
				'timeLock' : moment("2016-01-01"),
				'private' : true
			},
			{
				'title':'Forgot My Clothes At Home!',
				'date' : moment("2016-01-14"),
				'text' : 'I was getting ready for work and rushed to put on my pants. As I was givng a presentation, I noticed no one was paying attention to me. Suddenly Janice from Accounting burst out in laughter and thats when I realized I had only put on underwear... but no pants.',
				'tags' : "naked, embarrassed, work, rush",
				'timeLock' : moment("2016-09-04"),
				'private' : false
			},
			{
				'title':'The Nightmare on Elm Street',
				'date' : moment("2015-02-01"),
				'text' : 'The scariest dream I just had literally woke me up in shivers. I dreamt I was at a bar on Elm St where everyone was super friendly. As I was leaving the bar, a mysterious stranger popped out of nowhere and sat on my chest until last call. No more moonshine for me.',
				'tags' : "nightmare, scary, alcohol, night terror",
				'timeLock' : moment("2999-12-31"),
				'private' : true
			},
			{
				'title':'The Girl of My Dreams',
				'date' : moment("2015-02-13"),
				'text' : 'I dreamt that I met the girl of my dreams! She had a kind smile, brownish blonde hair and the cutest cheeks. I swear my heart stopped beating when she looked up at me. <3 The heart doth yearn to be loved back.',
				'tags' : "happy, scary, girl, love",
				'timeLock' : moment("1970-01-01"),
				'private' : false
			}
		];
		for(var i=0; i<demo_dreams.length; i++){
			Dreams.insert(demo_dreams[i]);
		}
	};
});