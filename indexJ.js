// function getSetup() {
//   fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?rapidapi-key=c9267e18ccmshee40395437ca666p1992afjsnb01c49b0bbcc')
//     .then((r) => { return r.json() })
//     .then(data => console.log(data));

//   const data = {
//     category: "This is category",
//     setup: "This is setup",
//     delivery: "This is delivery"
//   }
//   try {
//   } catch (error) {
//     console.error('Sorry, something went wrong!' + error);
//   };
// };
// console.log('funkar det?');
//     data.setup = setupContainer.addEventListener(data.setup),
// delivery.addEventListener = (data.delivery))

// categories.addEventListener.textContent('option')('click', getOption);
// _________________

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://jokeapi-v2.p.rapidapi.com/joke/any',
//   params: {
//     type: 'twopart',
//     format: 'json',
//     contains: 'c%23',
//     idRange: '0-150',
//     blacklistFlags: 'nsfw,racist',
//     'safe-mode': 'safe'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'c9267e18ccmshee40395437ca666p1992afjsnb01c49b0bbcc',
//     'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
//   }
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
// ______________________________________________

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://jokeapi-v2.p.rapidapi.com/categories',
//   params: { format: 'json' },
//   headers: {
//     'X-RapidAPI-Key': 'c9267e18ccmshee40395437ca666p1992afjsnb01c49b0bbcc',
//     'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
//   }
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }



// _____CATEGORIES___________
// {
// 	"error": false,
// 	"categories": [
// 		"Any",
// 		"Misc",
// 		"Programming",
// 		"Dark",
// 		"Pun",
// 		"Spooky",
// 		"Christmas"
// 	],
// 	"categoryAliases": [
// 		{
// 			"alias": "Miscellaneous",
// 			"resolved": "Misc"
// 		},
// 		{
// 			"alias": "Coding",
// 			"resolved": "Programming"
// 		},
// 		{
// 			"alias": "Development",
// 			"resolved": "Programming"
// 		},
// 		{
// 			"alias": "Halloween",
// 			"resolved": "Spooky"
// 		}
// 	],
// 	"timestamp": 1699796895961
// }

// ____FLAGS____________
// {
// 	"error": false,
// 	"flags": [
// 		"nsfw",
// 		"religious",
// 		"political",
// 		"racist",
// 		"sexist",
// 		"explicit"
// 	],
// 	"timestamp": 1699796659010
// }
// _______________________WITH CATEGORIES____________________
// const url = 'https://jokeapi-v2.p.rapidapi.com/categories?format=json';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c9267e18ccmshee40395437ca666p1992afjsnb01c49b0bbcc',
// 		'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// _______________________________________
// const unirest = require('unirest');

// const req = unirest('GET', 'https://jokeapi-v2.p.rapidapi.com/joke/Any');

// req.query({
// 	type: 'single',
// 	format: 'json'
// });

// req.headers({
// 	'X-RapidAPI-Key': 'c9267e18ccmshee40395437ca666p1992afjsnb01c49b0bbcc',
// 	'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
// });

// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });
// _______________________________________
// {
// 	"error": false,
// 	"category": "Dark",
// 	"type": "twopart",
// 	"setup": "I told my psychiatrist I got suicidal tendencies.",
// 	"delivery": "He said from now on I have to pay in advance.",
// 	"flags": {
// 		"nsfw": false,
// 		"religious": false,
// 		"political": false,
// 		"racist": false,
// 		"sexist": false,
// 		"explicit": false
// 	},
// 	"id": 93,
// 	"safe": false,
// 	"lang": "en"
// }
// _______________________________________________
// {
//   "error": false,
//   "categories": [
//       "Any",
//       "Misc",
//       "Programming",
//       "Dark",
//       "Pun",
//       "Spooky",
//       "Christmas"
//   ],
//   "categoryAliases": [
//       {
//           "alias": "Miscellaneous",
//           "resolved": "Misc"
//       },
//       {
//           "alias": "Coding",
//           "resolved": "Programming"
//       },
//       {
//           "alias": "Development",
//           "resolved": "Programming"
//       },
//       {
//           "alias": "Halloween",
//           "resolved": "Spooky"
//       }
//   ],
//   "timestamp": 1699569507628
// // }
// const url = 'https://jokeapi-v2.p.rapidapi.com/categories?format=json';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'c9267e18ccmshee40395437ca666p1992afjsnb01c49b0bbcc',
//     'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
//   }
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
