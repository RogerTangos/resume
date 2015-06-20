var docOrder = [
'past',
'full',
'full2',
'asan',
'aa',
'aa2',
'mit',
'mit2',
'mit_eecs',
'electrical_eng',
'dept',
'glamorous',
'people',


'andsit',
'ialso',
'sitin',
'classes',
'classlist',

'simultaneous',
'neu',
'attending',
'neu2',
'neu3',
'half',
'half2',
'fulltime',
'fulltime2',
'infosys',
'balance',
'can',
'difficult',
'difficult2',
'difficultbut',
'run',
'startup',
'startup2',
'startup3',
'startup4',
'before',
'notbad',

'anyway',
'anyway2',
'2014',
'spring',
'looking',
'employment',
'employment2',
'developer',
// 'junior',
'pm',
'starting',
'fall',
'preferably',

'click',
'click1',
'please'
];

var docText = {

	'anyway':{
		content: "<br /> <br />Anyway...",
		children:['anyway2', '2014','looking','employment']
	},
	'anyway2':{
		content: "<br /><br />Anyway, I'll be graduating in ",
		children:[]
	},
	'2014':{
		content: "2014 ",
		children:['spring']
	},
	'spring':{
		content: "spring 2014 ",
		children: []
	},
	'looking':{
		content: "and am looking for ",
		children: []
	},
	'employment':{
		content: "employment.",
		children:['employment2','developer','pm','starting','fall']
	},
	'employment2':{
		content: "employment as a ",
		children:[]
	},
	'developer':{
		content: "developer ",
		children:[]
	},
	'pm':{
		content: "or project manager ",
		children:[]
	},
	// 'junior':{
	// 	content: "junior developer ",
	// 	children:[]
	// },
	'starting':{
		content: "starting in summer ",
		children:[]
	},
	'fall':{
		content: "or fall 2014.",
		children:['preferably']
	},
	'preferably':{
		content: "or, preferably, fall 2014.",
		children:[]
	},

	'click':{
		starter: true,
		content: "<br /><br />Please click through the highlighted text,",
		children:['click1']
	},

	'click1':{
		content:"<br /><br />Please",
		children:[]
	},

	'please':{
		starter:true,
		content: " have a look at my resume, and let me know let me know if I will be a good fit for your organization.</br>",
		children:[]
	},

	'past': {
		starter: true,
		content: "For the past two years, I've been ",
		children:[]},
	'full':{
		starter: true,
		content: "working full time ",
		children:['full2', 'asan', 'aa']	},
	'mit':{
		starter:true,
		content: "at MIT. ",
		children:['mit2', 'mit_eecs','dept']},
	'simultaneous':{
		starter:true,
		content: "<br /><br />I have simultaneously been ",
		children:[]	},
	'neu':{
		starter:true,
		content: "attending Northeastern ",
		children:['attending', 'neu2','half']},
	'attending':{
		content:'attending ',
		children:[]
	},
	'neu2':{
		content: " Northeastern ",
		children:['neu3']
	},
	'neu3':{
		content: "Northeastern (NEU)",
		children: []
	},
	'half':{
		content: "half time ",
		children:['half2','fulltime']
	},
	'half2':{
		content: "half time ",
		children:[]
	},
	'fulltime':{
		starter:false,
		content: "(and sometimes full time) ",
		children:['fulltime2', 'balance','can','difficult']
	},
	'fulltime2':{
		content: "(and sometimes full time) ",
		children:[]
	},

	'infosys':{
		starter:true,
		content: "for my MS in Information Systems. ",
		children:[] },
	'balance':{
		content: "Balancing both school and work ",
		children:[]
	},
	'can':{
		content: "can be ",
		children:[]
	},
	'difficult':{
		content: "difficult.",
		children:['difficult2', 'difficultbut', 'run', 'startup']
	},
	'difficult2':{
		content: "difficult, ",
		children:[]
	},
	'difficultbut':{
		content: " but I did ",
		children:[]
	},
	'run':{
		content: "once run a ",
		children:[]
	},
	'startup':{
		content: "startup. ",
		children:['startup2', 'before']
	},
	'startup2':{
		content: "startup ",
		children: ['startup3', ]
	},
	'startup3':{
		content: "bootstrapped startup ",
		children:['startup4' ,'notbad', 'anyway']
	},
	'startup4':{
		content: "bootstrapped startup ",
		children: []
	},
	'before':{
		content: "for a year before ending up at NEU and MIT.",
		children:[]
	},
	'notbad':{
		content: "By comparison, this isn't so bad.",
		children:[]
	},




	'mit2':{
		content: "at MIT's ",
		children:[]	},
	'mit_eecs':{
		content: "EECS ",
		children:['electrical_eng']	},
	'electrical_eng':{
		content: "Electrical Engineering and Computer Science ",
		children:[]
	},
	'dept':{
		content:"department. ",
		children:[]	},

	'full2':{
		content: "working full time",
		children:[]	},
	'asan':{
		content: "as an",
		children:[]
	},
	'aa':{
		content: "Administrative Assistant",
		children:['aa2', 'glamorous','people','andsit', 'sitin', 'classes']	},
	'aa2':{
		content: "Administrative Assistant",
		children:[]
	},
	'glamorous':{
		content: "It's not the most glamorous work but I do rub elbows with some of the",
		children:[]
	},
	'people':{
		content: "smartest people in the world; ",
		children:[]
	},
	// 'people2':{
	// 	content: "smartest people in the world ",
	// 	children:[]
	// },
	// 'like':{
	// 	content: "(<a href='http://en.wikipedia.org/wiki/Tim_Berners-Lee' target='_blank'>Tim Burners Lee</a>, <a href='http://en.wikipedia.org/wiki/Noam_Chomsky' target='_blank'>Noam Chomsky</a>, <a href='http://lids.mit.edu' target='_blank'>Munther Dahleh</a>, <a href='http://people.csail.mit.edu/billf/' target='_blank'>Bill Freeman</a>, <a href='http://www-mtl.mit.edu/~anantha/' target='_blank'>Anantha Chandrakasan</a>, and <a href='https://en.wikipedia.org/wiki/Anant_Agarwal' target='_blank'>Anant Agarwal</a> to name a few); ",
	// 	children:[]
	// },
	'andsit':{
		content: "and ",
		children:['ialso']
	},
	'ialso':{
		content: "I also ",
		children:[]
	},
	'sitin':{
		content: "participate in ",
		children:[]
	},
	'classes':{
		content: "classes and seminars.",
		children:['classlist']
	},
	'classlist':{
		content: "classes and seminars, like <a href='http://courses.csail.mit.edu/6.006/spring11/index.shtml' target='_blank'>MIT's Intro to Algorithms</a>, <a href='http://sipb.mit.edu/iap/' target='_blank'>MIT SIPB lectures</a>, <a href='http://6.470.scripts.mit.edu/2013/' target='_blank'>MIT's Intro to Web Programing</a>, and <a href='http://web.mit.edu/founders/www/' target='_blank'>The Founder\'s Journey</a>.",
		children:[]
	}
}

