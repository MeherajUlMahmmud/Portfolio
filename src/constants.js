export const images = [
	require("./assets/images/image-1.jpg"),
	require("./assets/images/image-2.jpg"),
	require("./assets/images/image-3.jpg"),
]

export const person_images = [
	require("./assets/images/person-1.svg"),
	require("./assets/images/person-2.svg"),
]

export const projects = [
	{
		title: "JobLand",
		description:
			"Using Django in the backend, and HTML, CSS in the frontend I bult this project as a University term-project. This is a Job Portal where employers post about the empty positions in their organizations, and applicants apply for any position they see fit.",
		image: "/images/Jobland.png",
		tags: ["Django", "HTML-CSS-JS", "PostgreSQL"],
		source: "https://github.com/MeherajUlMahmmud/JobLand",
		visit: "https://jobland-django.herokuapp.com/",
	},
	{
		title: "AMIC",
		description:
			"This is a Cloud based Health care System built with Django. This system provides services i.e. Doctors’ Appointment, Emergency Services (Blood Donation, Plasma Donation), Health Advisor, Blog",
		image: "/images/AMIC.png",
		tags: ["Django", "HTML-CSS-JS", "PostgreSQL"],
		source: "https://github.com/MeherajUlMahmmud/AMIC-v2.0",
		visit: "https://amic-django.herokuapp.com/",
	},
	// {
	// 	title: "DevBlog",
	// 	description:
	// 		"This is a blogging app built with Django framework. This is one of the early projects I built with Django.",
	// 	image: "/images/2.png",
	// 	tags: ["Django", "HTML-CSS-JS", "PostgreSQL"],
	// 	source: "https://github.com/MeherajUlMahmmud/DevBlog",
	// 	visit: "https://devblog-234.herokuapp.com/",
	// },
	{
		title: "iShkool",
		description:
			"This is an education platform built with React.js and  framework. This is one of the professional projects I have built as a Junior Software Engineer.",
		image: "/images/iShkool.png",
		tags: ["React.js", "Node.js", "PostgreSQL"],
		source: "#",
		visit: "https://www.ishkool.org/",
	},
	{
		title: "BetNow",
		description:
			"This is a Betting platform built with React.js and Node.js. This is one of the most complex projects I have built so far.",
		credentials: {
			username: "Username: admin",
			password: "Password: 123456",
		},
		image: "/images/BetNow.png",
		tags: ["React.js", "Node.js", "PostgreSQL"],
		source: "#",
		visit: "https://betnow-client.herokuapp.com/",
	},
	// {
	// 	title: "EasyAd",
	// 	description:
	// 		"This is a Advertising Platform where billboard owners rents their bilboards to companoes for their advertising purpose.",
	// 	image: "/images/3.png",
	// 	tags: ["Django", "HTML-CSS-JS", "PostgreSQL"],
	// 	source: "https://github.com/MeherajUlMahmmud/EasyAd",
	// 	visit: "https://easyad-bd.herokuapp.com/",
	// },
	{
		title: "Rokto Lagbe",
		description:
			"This is a Blood Donation App where users can register using Google accounts and request for blood if neccessary. Users can view a list of all available donors in the platform.",
		image: "/images/4.png",
		tags: ["Android", "Java", "Firebase"],
		source: "https://github.com/MeherajUlMahmmud/BloodDonationFirebase",
		visit: "#",
	},
	{
		title: "Restaurant App",
		description:
			"This is a restaurant app built with Google's Flutter Framework for a certain restaurant following their company policy. It uses a Django API as backend and SQLite as Database.",
		image: "/images/5.png",
		tags: ["Flutter", "Django REST Framework", "SQLite"],
		source: "https://github.com/MeherajUlMahmmud/Crust-and-Bunz/tree/master/mobile_app",
		visit: "#",
	},
];

export const blogs = [
	{
		title: "Linear Regression Raw Python Implementation",
		description:
			"Raw Python Implementation of Simple Linear Regression (Univariate).",
		image: "/images/blog1.png",
		source: "https://medium.com/@meheraj/linear-regression-raw-python-implementation-d797f5e3508d",
	},
	{
		title: "Basics of Linear Algebra",
		description: "Linear Algebra Operations Using Raw Python.",
		image: "/images/blog2.jpeg",
		source: "https://medium.com/@meheraj/basics-of-linear-algebra-4ef0570a8313",
	},
	{
		title: "Inverting a matrix in Python",
		description:
			"Implementing a python script to inverse a 3x3 square matrix.",
		image: "/images/blog3.jpeg",
		source: "https://medium.com/@meheraj/inverting-a-matrix-in-python-3f7c1c136cf4",
	},
];

export const TimeLineData = [
	// {
	// 	year: 2017,
	// 	text: "Completed my Higher Secondary Certificate exam with a GPA of 4.00 out of 5.00",
	// },
	{
		year: 2018,
		text: "Started my B.Sc. in Computer Science & Engineering at East West University",
	},
	{
		year: 2019,
		text: "Awarded Medha Lalon Scholarship in the session of 2019-2021",
	},
	{
		year: 2021,
		text: "Awarded Dean's List Scholarship in the session of 2021-2022",
	},
	{ year: 2021, text: "Started Freelance Web and Mobile App Development" },
	{ year: 2021, text: "Appointed as an Undergraduate Teaching Assistant" },
	{
		year: 2021,
		text: "Appointed as a Junior Software Engineer at ZeroInv",
	},
];
