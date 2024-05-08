import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://community-citybikes.p.rapidapi.com/styr-staell-goeteborg.json',
  headers: {
    'X-RapidAPI-Key': 'c9267e18ccmshee40395437ca666p1992afjsnb01c49b0bbcc',
    'X-RapidAPI-Host': 'community-citybikes.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

// ''''''''
//   document.querySelector('#btn').addEventListener('click', () => {
//     getPlats()
//     console.log(result[i].name).value
//     // div.innerHTML += result[i].name
//     for (x = 0; x < result[i].length; x++) {
//       txt = txt + " " + x.options[i].text;
//     }
//     console.log(options)
//   })



________________
// function getCity() {
//   fetch('https://community-citybikes.p.rapidapi.com/styr-staell-goeteborg.json?rapidapi-key=c9267e18ccmshee40395437ca666p1992afjsnb01c49b0bbcc')
//     .then((r) => { return r.json() })
//     .then(result => {
//       console.log(result.items[index].properties.city)
//     })
//   let div = document.querySelector('div')
//   div.innerHTML = "<p>" + result.items[index].city + "</p>"
// }


// _____________________________________________________
// const fetch = require('node-fetch');

// const url = 'https://community-citybikes.p.rapidapi.com/networks.json';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'c9267e18ccmshee40395437ca666p1992afjsnb01c49b0bbcc',
//     'X-RapidAPI-Host': 'community-citybikes.p.rapidapi.com'
//   }
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
// _________SAMTLIGA NETWORKS ____________
// [
//   {
//     "city": "Moscow",
//     "name": "velobike-moscow",
//     "url": "http://api.citybik.es/velobike-moscow.json",
//     "tag": "velobike-moscow",
//     "radius": 5000,
//     "lat": 55750000,
//     "lng": 37616667,
//     "id": 0
//   },
//   {
//     "city": "Bærum",
//     "name": "baerum-bysykkel",
//     "url": "http://api.citybik.es/baerum-bysykkel.json",
//     "tag": "baerum-bysykkel",
//     "radius": 5000,
//     "lat": 59894550,
//     "lng": 10546343,
//     "id": 1
//   },
//   {
//     "city": "Siena",
//     "name": "bicincitta-siena",
//     "url": "http://api.citybik.es/bicincitta-siena.json",
//     "tag": "bicincitta-siena",
//     "radius": 5000,
//     "lat": 43318600,
//     "lng": 11330600,
//     "id": 2
//   },
//   {
//     "city": "Maroussi",
//     "name": "cyclopolis-maroussi",
//     "url": "http://api.citybik.es/cyclopolis-maroussi.json",
//     "tag": "cyclopolis-maroussi",
//     "radius": 5000,
//     "lat": 38056872,
//     "lng": 23808329,
//     "id": 3
//   },
//   {
//     "city": "Nafplio",
//     "name": "cyclopolis-nafplio",
//     "url": "http://api.citybik.es/cyclopolis-nafplio.json",
//     "tag": "cyclopolis-nafplio",
//     "radius": 5000,
//     "lat": 37563939,
//     "lng": 22809340,
//     "id": 4
//   },
//   {
//     "city": "Parco dei Colli di Bergamo",
//     "name": "bicincitta-parco-dei-colli-di-bergamo",
//     "url": "http://api.citybik.es/bicincitta-parco-dei-colli-di-bergamo.json",
//     "tag": "bicincitta-parco-dei-colli-di-bergamo",
//     "radius": 5000,
//     "lat": 45722956,
//     "lng": 9649230,
//     "id": 5
//   },
//   {
//     "city": "Aigialeia",
//     "name": "cyclopolis-aigialeia",
//     "url": "http://api.citybik.es/cyclopolis-aigialeia.json",
//     "tag": "cyclopolis-aigialeia",
//     "radius": 5000,
//     "lat": 38251110,
//     "lng": 22082157,
//     "id": 6
//   },
//   {
//     "city": "Marathon",
//     "name": "cyclopolis-marathon",
//     "url": "http://api.citybik.es/cyclopolis-marathon.json",
//     "tag": "cyclopolis-marathon",
//     "radius": 5000,
//     "lat": 38085568,
//     "lng": 23977638,
//     "id": 7
//   },
//   {
//     "city": "Mantova",
//     "name": "bicincitta-mantova",
//     "url": "http://api.citybik.es/bicincitta-mantova.json",
//     "tag": "bicincitta-mantova",
//     "radius": 5000,
//     "lat": 45158663,
//     "lng": 10783718,
//     "id": 8
//   },
//   {
//     "city": "Νea Smyrni",
//     "name": "cyclopolis-neasmyrni",
//     "url": "http://api.citybik.es/cyclopolis-neasmyrni.json",
//     "tag": "cyclopolis-neasmyrni",
//     "radius": 5000,
//     "lat": 37938100,
//     "lng": 23712600,
//     "id": 9
//   },
//   {
//     "city": "Μoschato-Tavros",
//     "name": "cyclopolis-moschatotavros",
//     "url": "http://api.citybik.es/cyclopolis-moschatotavros.json",
//     "tag": "cyclopolis-moschatotavros",
//     "radius": 5000,
//     "lat": 37953899,
//     "lng": 23682474,
//     "id": 10
//   },
//   {
//     "city": "Αrxaia Olympia",
//     "name": "cyclopolis-arxaiaolympia",
//     "url": "http://api.citybik.es/cyclopolis-arxaiaolympia.json",
//     "tag": "cyclopolis-arxaiaolympia",
//     "radius": 5000,
//     "lat": 37641970,
//     "lng": 21624726,
//     "id": 11
//   },
//   {
//     "city": "Kιato",
//     "name": "cyclopolis-kiato",
//     "url": "http://api.citybik.es/cyclopolis-kiato.json",
//     "tag": "cyclopolis-kiato",
//     "radius": 5000,
//     "lat": 38013267,
//     "lng": 22749381,
//     "id": 12
//   },
//   {
//     "city": "Assemini",
//     "name": "bicincitta-assemini",
//     "url": "http://api.citybik.es/bicincitta-assemini.json",
//     "tag": "bicincitta-assemini",
//     "radius": 5000,
//     "lat": 39289563,
//     "lng": 9006601,
//     "id": 13
//   },
//   {
//     "city": "Rhodes",
//     "name": "cyclopolis-rhodes",
//     "url": "http://api.citybik.es/cyclopolis-rhodes.json",
//     "tag": "cyclopolis-rhodes",
//     "radius": 5000,
//     "lat": 36450911,
//     "lng": 28224696,
//     "id": 14
//   },
//   {
//     "city": "Florina",
//     "name": "cyclopolis-florina",
//     "url": "http://api.citybik.es/cyclopolis-florina.json",
//     "tag": "cyclopolis-florina",
//     "radius": 5000,
//     "lat": 40801611,
//     "lng": 21424522,
//     "id": 15
//   },
//   {
//     "city": "Tortolì",
//     "name": "bicincitta-tortoli",
//     "url": "http://api.citybik.es/bicincitta-tortoli.json",
//     "tag": "bicincitta-tortoli",
//     "radius": 5000,
//     "lat": 39926644,
//     "lng": 9654953,
//     "id": 16
//   },
//   {
//     "city": "Limnos",
//     "name": "cyclopolis-limnos",
//     "url": "http://api.citybik.es/cyclopolis-limnos.json",
//     "tag": "cyclopolis-limnos",
//     "radius": 5000,
//     "lat": 39874786,
//     "lng": 25058672,
//     "id": 17
//   },
//   {
//     "city": "Gaeta",
//     "name": "bicincitta-gaeta",
//     "url": "http://api.citybik.es/bicincitta-gaeta.json",
//     "tag": "bicincitta-gaeta",
//     "radius": 5000,
//     "lat": 41209620,
//     "lng": 13584335,
//     "id": 18
//   },
//   {
//     "city": "Borgarello",
//     "name": "bicincitta-borgarello",
//     "url": "http://api.citybik.es/bicincitta-borgarello.json",
//     "tag": "bicincitta-borgarello",
//     "radius": 5000,
//     "lat": 45239637,
//     "lng": 9136150,
//     "id": 19
//   },
//   {
//     "city": "Pizzighettone e Formigara",
//     "name": "bicincitta-pizzighettone-formigara",
//     "url": "http://api.citybik.es/bicincitta-pizzighettone-formigara.json",
//     "tag": "bicincitta-pizzighettone-formigara",
//     "radius": 5000,
//     "lat": 45186748,
//     "lng": 9778087,
//     "id": 20
//   },
//   {
//     "city": "Cork",
//     "name": "cork",
//     "url": "http://api.citybik.es/cork.json",
//     "tag": "cork",
//     "radius": 5000,
//     "lat": 51893604,
//     "lng": -8494174,
//     "id": 21
//   },
//   {
//     "city": "Limerick",
//     "name": "limerick",
//     "url": "http://api.citybik.es/limerick.json",
//     "tag": "limerick",
//     "radius": 5000,
//     "lat": 52668746,
//     "lng": -8627809,
//     "id": 22
//   },
//   {
//     "city": "Bangkok",
//     "name": "punpunbikeshare",
//     "url": "http://api.citybik.es/punpunbikeshare.json",
//     "tag": "punpunbikeshare",
//     "radius": 5000,
//     "lat": 13750000,
//     "lng": 100516667,
//     "id": 23
//   },
//   {
//     "city": "Galway",
//     "name": "galway",
//     "url": "http://api.citybik.es/galway.json",
//     "tag": "galway",
//     "radius": 5000,
//     "lat": 53278349,
//     "lng": -9050691,
//     "id": 24
//   },
//   {
//     "city": "Montecatini Terme",
//     "name": "bicincitta-montecatini-terme",
//     "url": "http://api.citybik.es/bicincitta-montecatini-terme.json",
//     "tag": "bicincitta-montecatini-terme",
//     "radius": 5000,
//     "lat": 43883627,
//     "lng": 10764385,
//     "id": 25
//   },
//   {
//     "city": "Bydgoszcz",
//     "name": "bikeu-bra",
//     "url": "http://api.citybik.es/bikeu-bra.json",
//     "tag": "bikeu-bra",
//     "radius": 5000,
//     "lat": 53121930,
//     "lng": 18000380,
//     "id": 26
//   },
//   {
//     "city": "London",
//     "name": "santander-cycles",
//     "url": "http://api.citybik.es/santander-cycles.json",
//     "tag": "santander-cycles",
//     "radius": 5000,
//     "lat": 51511213,
//     "lng": -119824,
//     "id": 27
//   },
//   {
//     "city": "Aspen, CO",
//     "name": "we-cycle",
//     "url": "http://api.citybik.es/we-cycle.json",
//     "tag": "we-cycle",
//     "radius": 5000,
//     "lat": 39194951,
//     "lng": -106837002,
//     "id": 28
//   },
//   {
//     "city": "Carrara",
//     "name": "bicincitta-carrara",
//     "url": "http://api.citybik.es/bicincitta-carrara.json",
//     "tag": "bicincitta-carrara",
//     "radius": 5000,
//     "lat": 44077318,
//     "lng": 10097172,
//     "id": 29
//   },
//   {
//     "city": "Hamburg",
//     "name": "stadtrad-hamburg",
//     "url": "http://api.citybik.es/stadtrad-hamburg.json",
//     "tag": "stadtrad-hamburg",
//     "radius": 5000,
//     "lat": 53575320,
//     "lng": 10015340,
//     "id": 30
//   },
//   {
//     "city": "Sestri Levante - Lavagna",
//     "name": "tigullionbike",
//     "url": "http://api.citybik.es/tigullionbike.json",
//     "tag": "tigullionbike",
//     "radius": 5000,
//     "lat": 44272554,
//     "lng": 9395714,
//     "id": 31
//   },
//   {
//     "city": "Arezzo",
//     "name": "arbike",
//     "url": "http://api.citybik.es/arbike.json",
//     "tag": "arbike",
//     "radius": 5000,
//     "lat": 43473333,
//     "lng": 11870000,
//     "id": 32
//   },
//   {
//     "city": "Astana",
//     "name": "velobike",
//     "url": "http://api.citybik.es/velobike.json",
//     "tag": "velobike",
//     "radius": 5000,
//     "lat": 51166667,
//     "lng": 71416667,
//     "id": 33
//   },
//   {
//     "city": "Paris",
//     "name": "velib",
//     "url": "http://api.citybik.es/velib.json",
//     "tag": "velib",
//     "radius": 5000,
//     "lat": 48856614,
//     "lng": 2352221,
//     "id": 34
//   },
//   {
//     "city": "Ascoli Piceno",
//     "name": "ascoli-piceno",
//     "url": "http://api.citybik.es/ascoli-piceno.json",
//     "tag": "ascoli-piceno",
//     "radius": 5000,
//     "lat": 42850000,
//     "lng": 13583333,
//     "id": 35
//   },
//   {
//     "city": "Bergamo",
//     "name": "bigi",
//     "url": "http://api.citybik.es/bigi.json",
//     "tag": "bigi",
//     "radius": 5000,
//     "lat": 45695000,
//     "lng": 9670000,
//     "id": 36
//   },
//   {
//     "city": "Girona",
//     "name": "girocleta",
//     "url": "http://api.citybik.es/girocleta.json",
//     "tag": "girocleta",
//     "radius": 5000,
//     "lat": 41979400,
//     "lng": 2821426,
//     "id": 37
//   },
//   {
//     "city": "Alba",
//     "name": "alba",
//     "url": "http://api.citybik.es/alba.json",
//     "tag": "alba",
//     "radius": 5000,
//     "lat": 44716667,
//     "lng": 8083333,
//     "id": 38
//   },
//   {
//     "city": "Milano",
//     "name": "bikemi",
//     "url": "http://api.citybik.es/bikemi.json",
//     "tag": "bikemi",
//     "radius": 5000,
//     "lat": 45465454,
//     "lng": 9186516,
//     "id": 39
//   },
//   {
//     "city": "Biella",
//     "name": "biella",
//     "url": "http://api.citybik.es/biella.json",
//     "tag": "biella",
//     "radius": 5000,
//     "lat": 45577500,
//     "lng": 8051111,
//     "id": 40
//   },
//   {
//     "city": "Chivasso",
//     "name": "chivasso",
//     "url": "http://api.citybik.es/chivasso.json",
//     "tag": "chivasso",
//     "radius": 5000,
//     "lat": 45189765,
//     "lng": 7888935,
//     "id": 41
//   },
//   {
//     "city": "Zaragoza",
//     "name": "bizi",
//     "url": "http://api.citybik.es/bizi.json",
//     "tag": "bizi",
//     "radius": 5000,
//     "lat": 41648790,
//     "lng": -889581,
//     "id": 42
//   },
//   {
//     "city": "Cd de México",
//     "name": "ecobici",
//     "url": "http://api.citybik.es/ecobici.json",
//     "tag": "ecobici",
//     "radius": 5000,
//     "lat": 19432607,
//     "lng": -99133208,
//     "id": 43
//   },
//   {
//     "city": "Busto Arsizio",
//     "name": "bici-in-busto",
//     "url": "http://api.citybik.es/bici-in-busto.json",
//     "tag": "bici-in-busto",
//     "radius": 5000,
//     "lat": 45610555,
//     "lng": 8852062,
//     "id": 44
//   },
//   {
//     "city": "Antwerpen",
//     "name": "velo-antwerpen",
//     "url": "http://api.citybik.es/velo-antwerpen.json",
//     "tag": "velo-antwerpen",
//     "radius": 5000,
//     "lat": 51216667,
//     "lng": 4400000,
//     "id": 45
//   },
//   {
//     "city": "Cuneo",
//     "name": "cuneo",
//     "url": "http://api.citybik.es/cuneo.json",
//     "tag": "cuneo",
//     "radius": 5000,
//     "lat": 44384238,
//     "lng": 7541428,
//     "id": 46
//   },
//   {
//     "city": "Malmö",
//     "name": "malmobybike",
//     "url": "http://api.citybik.es/malmobybike.json",
//     "tag": "malmobybike",
//     "radius": 5000,
//     "lat": 55605000,
//     "lng": 13003800,
//     "id": 47
//   },
//   {
//     "city": "Madrid",
//     "name": "bicimad",
//     "url": "http://api.citybik.es/bicimad.json",
//     "tag": "bicimad",
//     "radius": 5000,
//     "lat": 40416800,
//     "lng": -3703800,
//     "id": 48
//   },
//   {
//     "city": "Didymoteicho",
//     "name": "easybike-didymoteicho",
//     "url": "http://api.citybik.es/easybike-didymoteicho.json",
//     "tag": "easybike-didymoteicho",
//     "radius": 5000,
//     "lat": 41350253,
//     "lng": 26497296,
//     "id": 49
//   },
//   {
//     "city": "Frosinone",
//     "name": "free-bike-sharing",
//     "url": "http://api.citybik.es/free-bike-sharing.json",
//     "tag": "free-bike-sharing",
//     "radius": 5000,
//     "lat": 41645081,
//     "lng": 13342123,
//     "id": 50
//   },
//   {
//     "city": "Glyfada",
//     "name": "easybike-glyfada",
//     "url": "http://api.citybik.es/easybike-glyfada.json",
//     "tag": "easybike-glyfada",
//     "radius": 5000,
//     "lat": 37871580,
//     "lng": 23735554,
//     "id": 51
//   },
//   {
//     "city": "Igoumenitsa",
//     "name": "easybike-igoumenitsa",
//     "url": "http://api.citybik.es/easybike-igoumenitsa.json",
//     "tag": "easybike-igoumenitsa",
//     "radius": 5000,
//     "lat": 39500577,
//     "lng": 20263520,
//     "id": 52
//   },
//   {
//     "city": "Lecce",
//     "name": "lecce",
//     "url": "http://api.citybik.es/lecce.json",
//     "tag": "lecce",
//     "radius": 5000,
//     "lat": 40350403,
//     "lng": 18177824,
//     "id": 53
//   },
//   {
//     "city": "Ioannina",
//     "name": "easybike-ioannina",
//     "url": "http://api.citybik.es/easybike-ioannina.json",
//     "tag": "easybike-ioannina",
//     "radius": 5000,
//     "lat": 39663981,
//     "lng": 20852278,
//     "id": 54
//   },
//   {
//     "city": "Karditsa",
//     "name": "easybike-karditsa",
//     "url": "http://api.citybik.es/easybike-karditsa.json",
//     "tag": "easybike-karditsa",
//     "radius": 5000,
//     "lat": 39363460,
//     "lng": 21921119,
//     "id": 55
//   },
//   {
//     "city": "Manerba del Garda",
//     "name": "manerba-in-bici",
//     "url": "http://api.citybik.es/manerba-in-bici.json",
//     "tag": "manerba-in-bici",
//     "radius": 5000,
//     "lat": 45561179,
//     "lng": 10559406,
//     "id": 56
//   },
//   {
//     "city": "Kavala",
//     "name": "easybike-kavala",
//     "url": "http://api.citybik.es/easybike-kavala.json",
//     "tag": "easybike-kavala",
//     "radius": 5000,
//     "lat": 40936906,
//     "lng": 24412216,
//     "id": 57
//   },
//   {
//     "city": "Kinouria",
//     "name": "easybike-kinouria",
//     "url": "http://api.citybik.es/easybike-kinouria.json",
//     "tag": "easybike-kinouria",
//     "radius": 5000,
//     "lat": 37147670,
//     "lng": 22893372,
//     "id": 58
//   },
//   {
//     "city": "Komotini",
//     "name": "easybike-komotini",
//     "url": "http://api.citybik.es/easybike-komotini.json",
//     "tag": "easybike-komotini",
//     "radius": 5000,
//     "lat": 41117833,
//     "lng": 25404130,
//     "id": 59
//   },
//   {
//     "city": "Patra",
//     "name": "easybike-patra",
//     "url": "http://api.citybik.es/easybike-patra.json",
//     "tag": "easybike-patra",
//     "radius": 5000,
//     "lat": 38241096,
//     "lng": 21725968,
//     "id": 60
//   },
//   {
//     "city": "Marciana Marina",
//     "name": "mar-e-bici",
//     "url": "http://api.citybik.es/mar-e-bici.json",
//     "tag": "mar-e-bici",
//     "radius": 5000,
//     "lat": 42805855,
//     "lng": 10196514,
//     "id": 61
//   },
//   {
//     "city": "Rethymno",
//     "name": "easybike-rethymno",
//     "url": "http://api.citybik.es/easybike-rethymno.json",
//     "tag": "easybike-rethymno",
//     "radius": 5000,
//     "lat": 35366757,
//     "lng": 24483284,
//     "id": 62
//   },
//   {
//     "city": "Samos",
//     "name": "easybike-samos",
//     "url": "http://api.citybik.es/easybike-samos.json",
//     "tag": "easybike-samos",
//     "radius": 5000,
//     "lat": 37754065,
//     "lng": 26978785,
//     "id": 63
//   },
//   {
//     "city": "Novara",
//     "name": "novara",
//     "url": "http://api.citybik.es/novara.json",
//     "tag": "novara",
//     "radius": 5000,
//     "lat": 45445740,
//     "lng": 8622165,
//     "id": 64
//   },
//   {
//     "city": "Nicosia",
//     "name": "easybike-nicosia",
//     "url": "http://api.citybik.es/easybike-nicosia.json",
//     "tag": "easybike-nicosia",
//     "radius": 5000,
//     "lat": 35173930,
//     "lng": 33364725,
//     "id": 65
//   },
//   {
//     "city": "Mani",
//     "name": "easybike-mani",
//     "url": "http://api.citybik.es/easybike-mani.json",
//     "tag": "easybike-mani",
//     "radius": 5000,
//     "lat": 41409747,
//     "lng": 26402495,
//     "id": 66
//   },
//   {
//     "city": "Irakleio",
//     "name": "easybike-irakleio",
//     "url": "http://api.citybik.es/easybike-irakleio.json",
//     "tag": "easybike-irakleio",
//     "radius": 5000,
//     "lat": 35338735,
//     "lng": 25144213,
//     "id": 67
//   },
//   {
//     "city": "Thessaloniki",
//     "name": "thessbike",
//     "url": "http://api.citybik.es/thessbike.json",
//     "tag": "thessbike",
//     "radius": 5000,
//     "lat": 40640316,
//     "lng": 22935271,
//     "id": 68
//   },
//   {
//     "city": "Athens",
//     "name": "athens-bikes",
//     "url": "http://api.citybik.es/athens-bikes.json",
//     "tag": "athens-bikes",
//     "radius": 5000,
//     "lat": 37983800,
//     "lng": 23727500,
//     "id": 69
//   },
//   {
//     "city": "Padova",
//     "name": "goodbike",
//     "url": "http://api.citybik.es/goodbike.json",
//     "tag": "goodbike",
//     "radius": 5000,
//     "lat": 45406434,
//     "lng": 11876761,
//     "id": 70
//   },
//   {
//     "city": "São Paulo",
//     "name": "ciclosampa",
//     "url": "http://api.citybik.es/ciclosampa.json",
//     "tag": "ciclosampa",
//     "radius": 5000,
//     "lat": -23550000,
//     "lng": -46633300,
//     "id": 71
//   },
//   {
//     "city": "A Coruña",
//     "name": "bicicorunha",
//     "url": "http://api.citybik.es/bicicorunha.json",
//     "tag": "bicicorunha",
//     "radius": 5000,
//     "lat": 43362300,
//     "lng": -8411500,
//     "id": 72
//   },
//   {
//     "city": "Ferrol - Narón",
//     "name": "bici-ferrol-terra",
//     "url": "http://api.citybik.es/bici-ferrol-terra.json",
//     "tag": "bici-ferrol-terra",
//     "radius": 5000,
//     "lat": 43489600,
//     "lng": -8219300,
//     "id": 73
//   },
//   {
//     "city": "Ferrara",
//     "name": "mimuovofe",
//     "url": "http://api.citybik.es/mimuovofe.json",
//     "tag": "mimuovofe",
//     "radius": 5000,
//     "lat": 44835038,
//     "lng": 11624056,
//     "id": 74
//   },
//   {
//     "city": "Montréal, QC",
//     "name": "bixi-montreal",
//     "url": "http://api.citybik.es/bixi-montreal.json",
//     "tag": "bixi-montreal",
//     "radius": 5000,
//     "lat": 45508693,
//     "lng": -73553928,
//     "id": 75
//   },
//   {
//     "city": "Parma",
//     "name": "parma",
//     "url": "http://api.citybik.es/parma.json",
//     "tag": "parma",
//     "radius": 5000,
//     "lat": 44801485,
//     "lng": 10327903,
//     "id": 76
//   },
//   {
//     "city": "Toronto, ON",
//     "name": "bixi-toronto",
//     "url": "http://api.citybik.es/bixi-toronto.json",
//     "tag": "bixi-toronto",
//     "radius": 5000,
//     "lat": 43653226,
//     "lng": -79383184,
//     "id": 77
//   },
//   {
//     "city": "Hamilton, ON",
//     "name": "sobi-hamilton",
//     "url": "http://api.citybik.es/sobi-hamilton.json",
//     "tag": "sobi-hamilton",
//     "radius": 5000,
//     "lat": 43256436,
//     "lng": -79869296,
//     "id": 78
//   },
//   {
//     "city": "Pavia",
//     "name": "pavia-in-bici",
//     "url": "http://api.citybik.es/pavia-in-bici.json",
//     "tag": "pavia-in-bici",
//     "radius": 5000,
//     "lat": 45184724,
//     "lng": 9158206,
//     "id": 79
//   },
//   {
//     "city": "Perugia",
//     "name": "bici-perugia",
//     "url": "http://api.citybik.es/bici-perugia.json",
//     "tag": "bici-perugia",
//     "radius": 5000,
//     "lat": 43110716,
//     "lng": 12390827,
//     "id": 80
//   },
//   {
//     "city": "Austin, TX",
//     "name": "austin",
//     "url": "http://api.citybik.es/austin.json",
//     "tag": "austin",
//     "radius": 5000,
//     "lat": 30264080,
//     "lng": -97743550,
//     "id": 81
//   },
//   {
//     "city": "Chattanooga, TN",
//     "name": "bike-chattanooga",
//     "url": "http://api.citybik.es/bike-chattanooga.json",
//     "tag": "bike-chattanooga",
//     "radius": 5000,
//     "lat": 35045629,
//     "lng": -85309680,
//     "id": 82
//   },
//   {
//     "city": "Piacenza",
//     "name": "piacenza",
//     "url": "http://api.citybik.es/piacenza.json",
//     "tag": "piacenza",
//     "radius": 5000,
//     "lat": 45047375,
//     "lng": 9686581,
//     "id": 83
//   },
//   {
//     "city": "Pinerolo",
//     "name": "pinerolo",
//     "url": "http://api.citybik.es/pinerolo.json",
//     "tag": "pinerolo",
//     "radius": 5000,
//     "lat": 44885025,
//     "lng": 7349995,
//     "id": 84
//   },
//   {
//     "city": "Portland, OR",
//     "name": "biketown",
//     "url": "http://api.citybik.es/biketown.json",
//     "tag": "biketown",
//     "radius": 5000,
//     "lat": 45521754,
//     "lng": -122681079,
//     "id": 85
//   },
//   {
//     "city": "Reggio Emilia",
//     "name": "reggio-emilia",
//     "url": "http://api.citybik.es/reggio-emilia.json",
//     "tag": "reggio-emilia",
//     "radius": 5000,
//     "lat": 44698993,
//     "lng": 10629685,
//     "id": 86
//   },
//   {
//     "city": "Boulder, CO",
//     "name": "boulder",
//     "url": "http://api.citybik.es/boulder.json",
//     "tag": "boulder",
//     "radius": 5000,
//     "lat": 40008110,
//     "lng": -105263850,
//     "id": 87
//   },
//   {
//     "city": "Rimini",
//     "name": "rimini",
//     "url": "http://api.citybik.es/rimini.json",
//     "tag": "rimini",
//     "radius": 5000,
//     "lat": 44057081,
//     "lng": 12564600,
//     "id": 88
//   },
//   {
//     "city": "Fort Lauderdale, FL",
//     "name": "broward",
//     "url": "http://api.citybik.es/broward.json",
//     "tag": "broward",
//     "radius": 5000,
//     "lat": 26120260,
//     "lng": -80148190,
//     "id": 89
//   },
//   {
//     "city": "Milwaukee, WI",
//     "name": "bublr-bikes",
//     "url": "http://api.citybik.es/bublr-bikes.json",
//     "tag": "bublr-bikes",
//     "radius": 5000,
//     "lat": 43036900,
//     "lng": -87896670,
//     "id": 90
//   },
//   {
//     "city": "Buffalo, NY",
//     "name": "reddy-bike-share",
//     "url": "http://api.citybik.es/reddy-bike-share.json",
//     "tag": "reddy-bike-share",
//     "radius": 5000,
//     "lat": 42893738,
//     "lng": -78871804,
//     "id": 91
//   },
//   {
//     "city": "Washington, DC",
//     "name": "capital-bikeshare",
//     "url": "http://api.citybik.es/capital-bikeshare.json",
//     "tag": "capital-bikeshare",
//     "radius": 5000,
//     "lat": 38896758,
//     "lng": -77037016,
//     "id": 92
//   },
//   {
//     "city": "Charlotte, NC",
//     "name": "charlotte",
//     "url": "http://api.citybik.es/charlotte.json",
//     "tag": "charlotte",
//     "radius": 5000,
//     "lat": 35227160,
//     "lng": -80838550,
//     "id": 93
//   },
//   {
//     "city": "Saluzzo",
//     "name": "saluzzo",
//     "url": "http://api.citybik.es/saluzzo.json",
//     "tag": "saluzzo",
//     "radius": 5000,
//     "lat": 44644540,
//     "lng": 7492735,
//     "id": 94
//   },
//   {
//     "city": "Cincinnati, OH",
//     "name": "cincy-red-bike",
//     "url": "http://api.citybik.es/cincy-red-bike.json",
//     "tag": "cincy-red-bike",
//     "radius": 5000,
//     "lat": 39101380,
//     "lng": -84512170,
//     "id": 95
//   },
//   {
//     "city": "Savigliano",
//     "name": "savigliano",
//     "url": "http://api.citybik.es/savigliano.json",
//     "tag": "savigliano",
//     "radius": 5000,
//     "lat": 44647032,
//     "lng": 7662463,
//     "id": 96
//   },
//   {
//     "city": "New York, NY",
//     "name": "citi-bike-nyc",
//     "url": "http://api.citybik.es/citi-bike-nyc.json",
//     "tag": "citi-bike-nyc",
//     "radius": 5000,
//     "lat": 40714352,
//     "lng": -74005973,
//     "id": 97
//   },
//   {
//     "city": "Terni",
//     "name": "terni",
//     "url": "http://api.citybik.es/terni.json",
//     "tag": "terni",
//     "radius": 5000,
//     "lat": 42563616,
//     "lng": 12642660,
//     "id": 98
//   },
//   {
//     "city": "Columbus, OH",
//     "name": "cogo",
//     "url": "http://api.citybik.es/cogo.json",
//     "tag": "cogo",
//     "radius": 5000,
//     "lat": 39983333,
//     "lng": -82983333,
//     "id": 99
//   },
//   {
//     "city": "Denver, CO",
//     "name": "denver",
//     "url": "http://api.citybik.es/denver.json",
//     "tag": "denver",
//     "radius": 5000,
//     "lat": 39720550,
//     "lng": -104952530,
//     "id": 100
//   },
//   {
//     "city": "Chicago, IL",
//     "name": "divvy",
//     "url": "http://api.citybik.es/divvy.json",
//     "tag": "divvy",
//     "radius": 5000,
//     "lat": 41878113,
//     "lng": -87629798,
//     "id": 101
//   },
//   {
//     "city": "Tirano",
//     "name": "tirano-in-bici",
//     "url": "http://api.citybik.es/tirano-in-bici.json",
//     "tag": "tirano-in-bici",
//     "radius": 5000,
//     "lat": 46216168,
//     "lng": 10169605,
//     "id": 102
//   },
//   {
//     "city": "El Paso, TX",
//     "name": "elpaso",
//     "url": "http://api.citybik.es/elpaso.json",
//     "tag": "elpaso",
//     "radius": 5000,
//     "lat": 31761480,
//     "lng": -106485070,
//     "id": 103
//   },
//   {
//     "city": "Fort Worth, TX",
//     "name": "fortworth",
//     "url": "http://api.citybik.es/fortworth.json",
//     "tag": "fortworth",
//     "radius": 5000,
//     "lat": 32751600,
//     "lng": -97328880,
//     "id": 104
//   },
//   {
//     "city": "Udine",
//     "name": "udine",
//     "url": "http://api.citybik.es/udine.json",
//     "tag": "udine",
//     "radius": 5000,
//     "lat": 46071066,
//     "lng": 13234579,
//     "id": 105
//   },
//   {
//     "city": "Salt Lake City",
//     "name": "greenbikeslc",
//     "url": "http://api.citybik.es/greenbikeslc.json",
//     "tag": "greenbikeslc",
//     "radius": 5000,
//     "lat": 40767450,
//     "lng": -111887360,
//     "id": 106
//   },
//   {
//     "city": "Omaha, NE",
//     "name": "omaha",
//     "url": "http://api.citybik.es/omaha.json",
//     "tag": "omaha",
//     "radius": 5000,
//     "lat": 41258320,
//     "lng": -96008530,
//     "id": 107
//   },
//   {
//     "city": "Houston, TX",
//     "name": "houston",
//     "url": "http://api.citybik.es/houston.json",
//     "tag": "houston",
//     "radius": 5000,
//     "lat": 29759830,
//     "lng": -95369490,
//     "id": 108
//   },
//   {
//     "city": "Boston, MA",
//     "name": "blue-bikes",
//     "url": "http://api.citybik.es/blue-bikes.json",
//     "tag": "blue-bikes",
//     "radius": 5000,
//     "lat": 42358430,
//     "lng": -71059773,
//     "id": 109
//   },
//   {
//     "city": "Ustica",
//     "name": "ustica",
//     "url": "http://api.citybik.es/ustica.json",
//     "tag": "ustica",
//     "radius": 5000,
//     "lat": 38703117,
//     "lng": 13168267,
//     "id": 110
//   },
//   {
//     "city": "Philadelphia, PA",
//     "name": "indego",
//     "url": "http://api.citybik.es/indego.json",
//     "tag": "indego",
//     "radius": 5000,
//     "lat": 39953780,
//     "lng": -75163740,
//     "id": 111
//   },
//   {
//     "city": "Indianapolis, IN",
//     "name": "indiana-pacers-bikeshare",
//     "url": "http://api.citybik.es/indiana-pacers-bikeshare.json",
//     "tag": "indiana-pacers-bikeshare",
//     "radius": 5000,
//     "lat": 39765930,
//     "lng": -86162160,
//     "id": 112
//   },
//   {
//     "city": "Como",
//     "name": "bici-co",
//     "url": "http://api.citybik.es/bici-co.json",
//     "tag": "bici-co",
//     "radius": 5000,
//     "lat": 45808059,
//     "lng": 9085176,
//     "id": 113
//   },
//   {
//     "city": "Madison, WI",
//     "name": "madison",
//     "url": "http://api.citybik.es/madison.json",
//     "tag": "madison",
//     "radius": 5000,
//     "lat": 43075710,
//     "lng": -89385270,
//     "id": 114
//   },
//   {
//     "city": "Los Angeles, CA",
//     "name": "metro-bike-share",
//     "url": "http://api.citybik.es/metro-bike-share.json",
//     "tag": "metro-bike-share",
//     "radius": 5000,
//     "lat": 34048550,
//     "lng": -118259050,
//     "id": 115
//   },
//   {
//     "city": "Minneapolis, MN",
//     "name": "nice-ride",
//     "url": "http://api.citybik.es/nice-ride.json",
//     "tag": "nice-ride",
//     "radius": 5000,
//     "lat": 44983334,
//     "lng": -93266669,
//     "id": 116
//   },
//   {
//     "city": "La Spezia",
//     "name": "speziainbici",
//     "url": "http://api.citybik.es/speziainbici.json",
//     "tag": "speziainbici",
//     "radius": 5000,
//     "lat": 44102450,
//     "lng": 9824082,
//     "id": 117
//   },
//   {
//     "city": "San Antonio, TX",
//     "name": "sanantonio",
//     "url": "http://api.citybik.es/sanantonio.json",
//     "tag": "sanantonio",
//     "radius": 5000,
//     "lat": 29437010,
//     "lng": -98482360,
//     "id": 118
//   },
//   {
//     "city": "Venezia",
//     "name": "venezia",
//     "url": "http://api.citybik.es/venezia.json",
//     "tag": "venezia",
//     "radius": 5000,
//     "lat": 45440847,
//     "lng": 12315515,
//     "id": 119
//   },
//   {
//     "city": "Long Beach, CA",
//     "name": "sobi-long-beach",
//     "url": "http://api.citybik.es/sobi-long-beach.json",
//     "tag": "sobi-long-beach",
//     "radius": 5000,
//     "lat": 33768970,
//     "lng": -118191640,
//     "id": 120
//   },
//   {
//     "city": "Torino",
//     "name": "to-bike",
//     "url": "http://api.citybik.es/to-bike.json",
//     "tag": "to-bike",
//     "radius": 5000,
//     "lat": 45070982,
//     "lng": 7685676,
//     "id": 121
//   },
//   {
//     "city": "Atlanta, GA",
//     "name": "relay-atlanta",
//     "url": "http://api.citybik.es/relay-atlanta.json",
//     "tag": "relay-atlanta",
//     "radius": 5000,
//     "lat": 33762794,
//     "lng": -84387271,
//     "id": 122
//   },
//   {
//     "city": "Recife",
//     "name": "bikerecife",
//     "url": "http://api.citybik.es/bikerecife.json",
//     "tag": "bikerecife",
//     "radius": 5000,
//     "lat": -8047129,
//     "lng": -34873437,
//     "id": 123
//   },
//   {
//     "city": "São Paulo",
//     "name": "bikesampa",
//     "url": "http://api.citybik.es/bikesampa.json",
//     "tag": "bikesampa",
//     "radius": 5000,
//     "lat": -23550000,
//     "lng": -46633300,
//     "id": 124
//   },
//   {
//     "city": "Rio de Janeiro",
//     "name": "bikerio",
//     "url": "http://api.citybik.es/bikerio.json",
//     "tag": "bikerio",
//     "radius": 5000,
//     "lat": -22904315,
//     "lng": -43184776,
//     "id": 125
//   },
//   {
//     "city": "Salvador",
//     "name": "bikesalvador",
//     "url": "http://api.citybik.es/bikesalvador.json",
//     "tag": "bikesalvador",
//     "radius": 5000,
//     "lat": -12973959,
//     "lng": -38508171,
//     "id": 126
//   },
//   {
//     "city": "Porto Alegre",
//     "name": "bikepoa",
//     "url": "http://api.citybik.es/bikepoa.json",
//     "tag": "bikepoa",
//     "radius": 5000,
//     "lat": -30033079,
//     "lng": -51236540,
//     "id": 127
//   },
//   {
//     "city": "Guadalajara",
//     "name": "mibici-guadalajara",
//     "url": "http://api.citybik.es/mibici-guadalajara.json",
//     "tag": "mibici-guadalajara",
//     "radius": 5000,
//     "lat": 20673788,
//     "lng": -103370432,
//     "id": 128
//   },
//   {
//     "city": "Valence",
//     "name": "libelo",
//     "url": "http://api.citybik.es/libelo.json",
//     "tag": "libelo",
//     "radius": 5000,
//     "lat": 44922726,
//     "lng": 4905634,
//     "id": 129
//   },
//   {
//     "city": "Santiago",
//     "name": "bikesantiago",
//     "url": "http://api.citybik.es/bikesantiago.json",
//     "tag": "bikesantiago",
//     "radius": 5000,
//     "lat": -33450000,
//     "lng": -70670000,
//     "id": 130
//   },
//   {
//     "city": "Oslo",
//     "name": "oslo-bysykkel",
//     "url": "http://api.citybik.es/oslo-bysykkel.json",
//     "tag": "oslo-bysykkel",
//     "radius": 5000,
//     "lat": 59913869,
//     "lng": 10752245,
//     "id": 131
//   },
//   {
//     "city": "Bergen",
//     "name": "bergen-bysykkel",
//     "url": "http://api.citybik.es/bergen-bysykkel.json",
//     "tag": "bergen-bysykkel",
//     "radius": 5000,
//     "lat": 60391263,
//     "lng": 5322054,
//     "id": 132
//   },
//   {
//     "city": "Trondheim",
//     "name": "trondheim-bysykkel",
//     "url": "http://api.citybik.es/trondheim-bysykkel.json",
//     "tag": "trondheim-bysykkel",
//     "radius": 5000,
//     "lat": 63430723,
//     "lng": 10393678,
//     "id": 133
//   },
//   {
//     "city": "Rennes",
//     "name": "le-velo-star",
//     "url": "http://api.citybik.es/le-velo-star.json",
//     "tag": "le-velo-star",
//     "radius": 5000,
//     "lat": 48114167,
//     "lng": -1680833,
//     "id": 134
//   },
//   {
//     "city": "Bordeaux",
//     "name": "v3-bordeaux",
//     "url": "http://api.citybik.es/v3-bordeaux.json",
//     "tag": "v3-bordeaux",
//     "radius": 5000,
//     "lat": 44837789,
//     "lng": -579180,
//     "id": 135
//   },
//   {
//     "city": "Lille",
//     "name": "vlille",
//     "url": "http://api.citybik.es/vlille.json",
//     "tag": "vlille",
//     "radius": 5000,
//     "lat": 50629250,
//     "lng": 3057256,
//     "id": 136
//   },
//   {
//     "city": "Pau",
//     "name": "idecycle",
//     "url": "http://api.citybik.es/idecycle.json",
//     "tag": "idecycle",
//     "radius": 5000,
//     "lat": 43295754,
//     "lng": -368566,
//     "id": 137
//   },
//   {
//     "city": "Pisa",
//     "name": "ciclopi",
//     "url": "http://api.citybik.es/ciclopi.json",
//     "tag": "ciclopi",
//     "radius": 5000,
//     "lat": 43722838,
//     "lng": 10401688,
//     "id": 138
//   },
//   {
//     "city": "Murcia",
//     "name": "muybici",
//     "url": "http://api.citybik.es/muybici.json",
//     "tag": "muybici",
//     "radius": 5000,
//     "lat": 37992239,
//     "lng": -1130654,
//     "id": 139
//   },
//   {
//     "city": "Vilagarcía de Arousa",
//     "name": "vaibike",
//     "url": "http://api.citybik.es/vaibike.json",
//     "tag": "vaibike",
//     "radius": 5000,
//     "lat": 42595400,
//     "lng": -8765900,
//     "id": 140
//   },
//   {
//     "city": "Cagliari",
//     "name": "cagliari",
//     "url": "http://api.citybik.es/cagliari.json",
//     "tag": "cagliari",
//     "radius": 5000,
//     "lat": 39220817,
//     "lng": 9121399,
//     "id": 141
//   },
//   {
//     "city": "Buenos Aires",
//     "name": "ecobici-buenos-aires",
//     "url": "http://api.citybik.es/ecobici-buenos-aires.json",
//     "tag": "ecobici-buenos-aires",
//     "radius": 5000,
//     "lat": -34630665,
//     "lng": -58411560,
//     "id": 142
//   },
//   {
//     "city": "Lisbon",
//     "name": "gira",
//     "url": "http://api.citybik.es/gira.json",
//     "tag": "gira",
//     "radius": 5000,
//     "lat": 38724954,
//     "lng": -9149334,
//     "id": 143
//   },
//   {
//     "city": "Varese",
//     "name": "gimme-bike",
//     "url": "http://api.citybik.es/gimme-bike.json",
//     "tag": "gimme-bike",
//     "radius": 5000,
//     "lat": 45818390,
//     "lng": 8823913,
//     "id": 144
//   },
//   {
//     "city": "Toulouse",
//     "name": "velo",
//     "url": "http://api.citybik.es/velo.json",
//     "tag": "velo",
//     "radius": 5000,
//     "lat": 43604652,
//     "lng": 1444209,
//     "id": 145
//   },
//   {
//     "city": "Luxembourg",
//     "name": "veloh",
//     "url": "http://api.citybik.es/veloh.json",
//     "tag": "veloh",
//     "radius": 5000,
//     "lat": 49630102,
//     "lng": 6152018,
//     "id": 146
//   },
//   {
//     "city": "Valencia",
//     "name": "valenbisi",
//     "url": "http://api.citybik.es/valenbisi.json",
//     "tag": "valenbisi",
//     "radius": 5000,
//     "lat": 39469907,
//     "lng": -376288,
//     "id": 147
//   },
//   {
//     "city": "Sellero",
//     "name": "sellero",
//     "url": "http://api.citybik.es/sellero.json",
//     "tag": "sellero",
//     "radius": 5000,
//     "lat": 46063047,
//     "lng": 10353434,
//     "id": 148
//   },
//   {
//     "city": "Lund",
//     "name": "lundahoj",
//     "url": "http://api.citybik.es/lundahoj.json",
//     "tag": "lundahoj",
//     "radius": 5000,
//     "lat": 55704660,
//     "lng": 13191007,
//     "id": 149
//   },
//   {
//     "city": "Ugento",
//     "name": "ugento",
//     "url": "http://api.citybik.es/ugento.json",
//     "tag": "ugento",
//     "radius": 5000,
//     "lat": 39927351,
//     "lng": 18158296,
//     "id": 150
//   },
//   {
//     "city": "Santander",
//     "name": "tusbic",
//     "url": "http://api.citybik.es/tusbic.json",
//     "tag": "tusbic",
//     "radius": 5000,
//     "lat": 43462305,
//     "lng": -3809980,
//     "id": 151
//   },
//   {
//     "city": "Amiens",
//     "name": "velam",
//     "url": "http://api.citybik.es/velam.json",
//     "tag": "velam",
//     "radius": 5000,
//     "lat": 49894067,
//     "lng": 2295753,
//     "id": 152
//   },
//   {
//     "city": "Lillestrøm",
//     "name": "bysykkel-lillestrom",
//     "url": "http://api.citybik.es/bysykkel-lillestrom.json",
//     "tag": "bysykkel-lillestrom",
//     "radius": 5000,
//     "lat": 59955969,
//     "lng": 11050378,
//     "id": 153
//   },
//   {
//     "city": "Mulhouse",
//     "name": "velocite-mulhouse",
//     "url": "http://api.citybik.es/velocite-mulhouse.json",
//     "tag": "velocite-mulhouse",
//     "radius": 5000,
//     "lat": 47750839,
//     "lng": 7335888,
//     "id": 154
//   },
//   {
//     "city": "Prata Camportaccio",
//     "name": "prata-camportaccio",
//     "url": "http://api.citybik.es/prata-camportaccio.json",
//     "tag": "prata-camportaccio",
//     "radius": 5000,
//     "lat": 46304214,
//     "lng": 9396491,
//     "id": 155
//   },
//   {
//     "city": "Lyon",
//     "name": "velov",
//     "url": "http://api.citybik.es/velov.json",
//     "tag": "velov",
//     "radius": 5000,
//     "lat": 45764043,
//     "lng": 4835659,
//     "id": 156
//   },
//   {
//     "city": "Ljubljana",
//     "name": "bicikelj",
//     "url": "http://api.citybik.es/bicikelj.json",
//     "tag": "bicikelj",
//     "radius": 5000,
//     "lat": 46056450,
//     "lng": 14508070,
//     "id": 157
//   },
//   {
//     "city": "Civitavecchia",
//     "name": "civitavecchia",
//     "url": "http://api.citybik.es/civitavecchia.json",
//     "tag": "civitavecchia",
//     "radius": 5000,
//     "lat": 42093752,
//     "lng": 11792246,
//     "id": 158
//   },
//   {
//     "city": "Sevilla",
//     "name": "sevici",
//     "url": "http://api.citybik.es/sevici.json",
//     "tag": "sevici",
//     "radius": 5000,
//     "lat": 37388096,
//     "lng": -5982329,
//     "id": 159
//   },
//   {
//     "city": "Barcellona Pozzo di Gotto",
//     "name": "longanoinbici",
//     "url": "http://api.citybik.es/longanoinbici.json",
//     "tag": "longanoinbici",
//     "radius": 5000,
//     "lat": 38149812,
//     "lng": 15212116,
//     "id": 160
//   },
//   {
//     "city": "Namur",
//     "name": "li-bia-velo",
//     "url": "http://api.citybik.es/li-bia-velo.json",
//     "tag": "li-bia-velo",
//     "radius": 5000,
//     "lat": 50465328,
//     "lng": 4867665,
//     "id": 161
//   },
//   {
//     "city": "Nancy",
//     "name": "velostanlib",
//     "url": "http://api.citybik.es/velostanlib.json",
//     "tag": "velostanlib",
//     "radius": 5000,
//     "lat": 48692054,
//     "lng": 6184417,
//     "id": 162
//   },
//   {
//     "city": "Créteil",
//     "name": "cristolib",
//     "url": "http://api.citybik.es/cristolib.json",
//     "tag": "cristolib",
//     "radius": 5000,
//     "lat": 48790367,
//     "lng": 2455572,
//     "id": 163
//   },
//   {
//     "city": "Bruxelles",
//     "name": "villo",
//     "url": "http://api.citybik.es/villo.json",
//     "tag": "villo",
//     "radius": 5000,
//     "lat": 50850339,
//     "lng": 4351710,
//     "id": 164
//   },
//   {
//     "city": "Cassano d'Adda",
//     "name": "cassano-d-adda",
//     "url": "http://api.citybik.es/cassano-d-adda.json",
//     "tag": "cassano-d-adda",
//     "radius": 5000,
//     "lat": 45530961,
//     "lng": 9515581,
//     "id": 165
//   },
//   {
//     "city": "Cergy",
//     "name": "velo2",
//     "url": "http://api.citybik.es/velo2.json",
//     "tag": "velo2",
//     "radius": 5000,
//     "lat": 49035616,
//     "lng": 2060325,
//     "id": 166
//   },
//   {
//     "city": "Vilnius",
//     "name": "vilnius-cyclocity",
//     "url": "http://api.citybik.es/vilnius-cyclocity.json",
//     "tag": "vilnius-cyclocity",
//     "radius": 5000,
//     "lat": 54687155,
//     "lng": 25279651,
//     "id": 167
//   },
//   {
//     "city": "富山市",
//     "name": "toyama-cyclocity",
//     "url": "http://api.citybik.es/toyama-cyclocity.json",
//     "tag": "toyama-cyclocity",
//     "radius": 5000,
//     "lat": 36695951,
//     "lng": 137213676,
//     "id": 168
//   },
//   {
//     "city": "Bianzone",
//     "name": "bianzone-in-bici",
//     "url": "http://api.citybik.es/bianzone-in-bici.json",
//     "tag": "bianzone-in-bici",
//     "radius": 5000,
//     "lat": 46188197,
//     "lng": 10109354,
//     "id": 169
//   },
//   {
//     "city": "Marseille",
//     "name": "le-velo",
//     "url": "http://api.citybik.es/le-velo.json",
//     "tag": "le-velo",
//     "radius": 5000,
//     "lat": 43296482,
//     "lng": 5369780,
//     "id": 170
//   },
//   {
//     "city": "Nantes",
//     "name": "bicloo",
//     "url": "http://api.citybik.es/bicloo.json",
//     "tag": "bicloo",
//     "radius": 5000,
//     "lat": 47218371,
//     "lng": -1553621,
//     "id": 171
//   },
//   {
//     "city": "Besançon",
//     "name": "velocite-besancon",
//     "url": "http://api.citybik.es/velocite-besancon.json",
//     "tag": "velocite-besancon",
//     "radius": 5000,
//     "lat": 47237829,
//     "lng": 6024053,
//     "id": 172
//   },
//   {
//     "city": "Rieti",
//     "name": "rietinbici",
//     "url": "http://api.citybik.es/rietinbici.json",
//     "tag": "rietinbici",
//     "radius": 5000,
//     "lat": 42402623,
//     "lng": 12860999,
//     "id": 173
//   },
//   {
//     "city": "Dublin",
//     "name": "dublinbikes",
//     "url": "http://api.citybik.es/dublinbikes.json",
//     "tag": "dublinbikes",
//     "radius": 5000,
//     "lat": 53349805,
//     "lng": -6260309,
//     "id": 174
//   },
//   {
//     "city": "Palma",
//     "name": "bicipalma",
//     "url": "http://api.citybik.es/bicipalma.json",
//     "tag": "bicipalma",
//     "radius": 5000,
//     "lat": 39571190,
//     "lng": 2646634,
//     "id": 175
//   },
//   {
//     "city": "Abu Dhabi",
//     "name": "adcb-bikeshare",
//     "url": "http://api.citybik.es/adcb-bikeshare.json",
//     "tag": "adcb-bikeshare",
//     "radius": 5000,
//     "lat": 24450278,
//     "lng": 54390000,
//     "id": 176
//   },
//   {
//     "city": "Castellucchio",
//     "name": "castellucchio",
//     "url": "http://api.citybik.es/castellucchio.json",
//     "tag": "castellucchio",
//     "radius": 5000,
//     "lat": 45150478,
//     "lng": 10651202,
//     "id": 177
//   },
//   {
//     "city": "Nice",
//     "name": "velobleu",
//     "url": "http://api.citybik.es/velobleu.json",
//     "tag": "velobleu",
//     "radius": 5000,
//     "lat": 43695949,
//     "lng": 7271413,
//     "id": 178
//   },
//   {
//     "city": "Noto",
//     "name": "notoinbici",
//     "url": "http://api.citybik.es/notoinbici.json",
//     "tag": "notoinbici",
//     "radius": 5000,
//     "lat": 36889437,
//     "lng": 15074658,
//     "id": 179
//   },
//   {
//     "city": "Enna",
//     "name": "enna",
//     "url": "http://api.citybik.es/enna.json",
//     "tag": "enna",
//     "radius": 5000,
//     "lat": 37563425,
//     "lng": 14279737,
//     "id": 180
//   },
//   {
//     "city": "Pordenone",
//     "name": "pordenone",
//     "url": "http://api.citybik.es/pordenone.json",
//     "tag": "pordenone",
//     "radius": 5000,
//     "lat": 45947901,
//     "lng": 12674491,
//     "id": 181
//   },
//   {
//     "city": "Calais",
//     "name": "vel-in",
//     "url": "http://api.citybik.es/vel-in.json",
//     "tag": "vel-in",
//     "radius": 5000,
//     "lat": 50950000,
//     "lng": 1850000,
//     "id": 182
//   },
//   {
//     "city": "Carbonia",
//     "name": "carbonia",
//     "url": "http://api.citybik.es/carbonia.json",
//     "tag": "carbonia",
//     "radius": 5000,
//     "lat": 39167222,
//     "lng": 8522222,
//     "id": 183
//   },
//   {
//     "city": "Cluj-Napoca",
//     "name": "clujbike",
//     "url": "http://api.citybik.es/clujbike.json",
//     "tag": "clujbike",
//     "radius": 5000,
//     "lat": 46775000,
//     "lng": 23597500,
//     "id": 184
//   },
//   {
//     "city": "Sorocaba",
//     "name": "integrabike",
//     "url": "http://api.citybik.es/integrabike.json",
//     "tag": "integrabike",
//     "radius": 5000,
//     "lat": -23501500,
//     "lng": -47452600,
//     "id": 185
//   },
//   {
//     "city": "Cremona",
//     "name": "scegli-in-bici",
//     "url": "http://api.citybik.es/scegli-in-bici.json",
//     "tag": "scegli-in-bici",
//     "radius": 5000,
//     "lat": 45134914,
//     "lng": 10022264,
//     "id": 186
//   },
//   {
//     "city": "Riviera de São Lourenço",
//     "name": "rivibike",
//     "url": "http://api.citybik.es/rivibike.json",
//     "tag": "rivibike",
//     "radius": 5000,
//     "lat": -23799800,
//     "lng": -46022300,
//     "id": 187
//   },
//   {
//     "city": "Trento",
//     "name": "e-motion-trento",
//     "url": "http://api.citybik.es/e-motion-trento.json",
//     "tag": "e-motion-trento",
//     "radius": 5000,
//     "lat": 46066432,
//     "lng": 11122145,
//     "id": 188
//   },
//   {
//     "city": "Ipaússu",
//     "name": "dukebike",
//     "url": "http://api.citybik.es/dukebike.json",
//     "tag": "dukebike",
//     "radius": 5000,
//     "lat": -23055300,
//     "lng": -49623700,
//     "id": 189
//   },
//   {
//     "city": "Barcelona",
//     "name": "bicing",
//     "url": "http://api.citybik.es/bicing.json",
//     "tag": "bicing",
//     "radius": 5000,
//     "lat": 41385063,
//     "lng": 2173403,
//     "id": 190
//   },
//   {
//     "city": "Antalya",
//     "name": "baksi-antalya",
//     "url": "http://api.citybik.es/baksi-antalya.json",
//     "tag": "baksi-antalya",
//     "radius": 5000,
//     "lat": 36862048,
//     "lng": 30638866,
//     "id": 191
//   },
//   {
//     "city": "Izmir",
//     "name": "baksi-bisim",
//     "url": "http://api.citybik.es/baksi-bisim.json",
//     "tag": "baksi-bisim",
//     "radius": 5000,
//     "lat": 38413404,
//     "lng": 27032575,
//     "id": 192
//   },
//   {
//     "city": "Rovereto",
//     "name": "e-motion-rovereto",
//     "url": "http://api.citybik.es/e-motion-rovereto.json",
//     "tag": "e-motion-rovereto",
//     "radius": 5000,
//     "lat": 45887106,
//     "lng": 11042242,
//     "id": 193
//   },
//   {
//     "city": "Istanbul",
//     "name": "baksi-istanbul",
//     "url": "http://api.citybik.es/baksi-istanbul.json",
//     "tag": "baksi-istanbul",
//     "radius": 5000,
//     "lat": 40969688,
//     "lng": 29047537,
//     "id": 194
//   },
//   {
//     "city": "Kocaeli",
//     "name": "baksi-kobis",
//     "url": "http://api.citybik.es/baksi-kobis.json",
//     "tag": "baksi-kobis",
//     "radius": 5000,
//     "lat": 40767473,
//     "lng": 29975588,
//     "id": 195
//   },
//   {
//     "city": "Helsinki",
//     "name": "citybikes-helsinki",
//     "url": "http://api.citybik.es/citybikes-helsinki.json",
//     "tag": "citybikes-helsinki",
//     "radius": 5000,
//     "lat": 60169855,
//     "lng": 24938379,
//     "id": 196
//   },
//   {
//     "city": "Monopoli",
//     "name": "monopoli-bike",
//     "url": "http://api.citybik.es/monopoli-bike.json",
//     "tag": "monopoli-bike",
//     "radius": 5000,
//     "lat": 40945191,
//     "lng": 17311687,
//     "id": 197
//   },
//   {
//     "city": "Turku",
//     "name": "foli",
//     "url": "http://api.citybik.es/foli.json",
//     "tag": "foli",
//     "radius": 5000,
//     "lat": 60450600,
//     "lng": 22266600,
//     "id": 198
//   },
//   {
//     "city": "Brescia",
//     "name": "bicimia",
//     "url": "http://api.citybik.es/bicimia.json",
//     "tag": "bicimia",
//     "radius": 5000,
//     "lat": 45537800,
//     "lng": 10217300,
//     "id": 199
//   },
//   {
//     "city": "Tel Aviv-Yaffo, Giv'atayim, Ramat-Gan",
//     "name": "telofun",
//     "url": "http://api.citybik.es/telofun.json",
//     "tag": "telofun",
//     "radius": 5000,
//     "lat": 32087052,
//     "lng": 34789776,
//     "id": 200
//   },
//   {
//     "city": "Andria",
//     "name": "andria",
//     "url": "http://api.citybik.es/andria.json",
//     "tag": "andria",
//     "radius": 5000,
//     "lat": 41224346,
//     "lng": 16296983,
//     "id": 201
//   },
//   {
//     "city": "Bratislava",
//     "name": "whitebikes",
//     "url": "http://api.citybik.es/whitebikes.json",
//     "tag": "whitebikes",
//     "radius": 5000,
//     "lat": 48149424,
//     "lng": 17113922,
//     "id": 202
//   },
//   {
//     "city": "Bratislava",
//     "name": "slovnaft-bajk",
//     "url": "http://api.citybik.es/slovnaft-bajk.json",
//     "tag": "slovnaft-bajk",
//     "radius": 5000,
//     "lat": 48135695,
//     "lng": 16975833,
//     "id": 203
//   },
//   {
//     "city": "Wageningen",
//     "name": "cykl",
//     "url": "http://api.citybik.es/cykl.json",
//     "tag": "cykl",
//     "radius": 5000,
//     "lat": 51974000,
//     "lng": 5667100,
//     "id": 204
//   },
//   {
//     "city": "Prešov",
//     "name": "bicyklezadobreskutky",
//     "url": "http://api.citybik.es/bicyklezadobreskutky.json",
//     "tag": "bicyklezadobreskutky",
//     "radius": 5000,
//     "lat": 48996275,
//     "lng": 21234341,
//     "id": 205
//   },
//   {
//     "city": "Kraków",
//     "name": "socialbicycles-wavelo",
//     "url": "http://api.citybik.es/socialbicycles-wavelo.json",
//     "tag": "socialbicycles-wavelo",
//     "radius": 5000,
//     "lat": 50061430,
//     "lng": 19936580,
//     "id": 206
//   },
//   {
//     "city": "Quartucciu",
//     "name": "bicinquartucciu",
//     "url": "http://api.citybik.es/bicinquartucciu.json",
//     "tag": "bicinquartucciu",
//     "radius": 5000,
//     "lat": 39250431,
//     "lng": 9179296,
//     "id": 207
//   },
//   {
//     "city": "Medellin",
//     "name": "encicla",
//     "url": "http://api.citybik.es/encicla.json",
//     "tag": "encicla",
//     "radius": 5000,
//     "lat": 6244300,
//     "lng": -75573500,
//     "id": 208
//   },
//   {
//     "city": "Olbia",
//     "name": "olbia-bike",
//     "url": "http://api.citybik.es/olbia-bike.json",
//     "tag": "olbia-bike",
//     "radius": 5000,
//     "lat": 40924054,
//     "lng": 9499439,
//     "id": 209
//   },
//   {
//     "city": "Vancouver",
//     "name": "mobibikes",
//     "url": "http://api.citybik.es/mobibikes.json",
//     "tag": "mobibikes",
//     "radius": 5000,
//     "lat": 49282700,
//     "lng": -123120700,
//     "id": 210
//   },
//   {
//     "city": "Savona",
//     "name": "savona",
//     "url": "http://api.citybik.es/savona.json",
//     "tag": "savona",
//     "radius": 5000,
//     "lat": 44295164,
//     "lng": 8463126,
//     "id": 211
//   },
//   {
//     "city": "Clermont-Ferrand",
//     "name": "c-velo",
//     "url": "http://api.citybik.es/c-velo.json",
//     "tag": "c-velo",
//     "radius": 5000,
//     "lat": 45783100,
//     "lng": 3082400,
//     "id": 212
//   },
//   {
//     "city": "Saint-Étienne",
//     "name": "velivert",
//     "url": "http://api.citybik.es/velivert.json",
//     "tag": "velivert",
//     "radius": 5000,
//     "lat": 45396667,
//     "lng": 4290833,
//     "id": 213
//   },
//   {
//     "city": "Brindisi",
//     "name": "brindisi",
//     "url": "http://api.citybik.es/brindisi.json",
//     "tag": "brindisi",
//     "radius": 5000,
//     "lat": 40637580,
//     "lng": 17940774,
//     "id": 214
//   },
//   {
//     "city": "Avignon",
//     "name": "velopop",
//     "url": "http://api.citybik.es/velopop.json",
//     "tag": "velopop",
//     "radius": 5000,
//     "lat": 43943689,
//     "lng": 4805833,
//     "id": 215
//   },
//   {
//     "city": "Batumi",
//     "name": "batumvelo",
//     "url": "http://api.citybik.es/batumvelo.json",
//     "tag": "batumvelo",
//     "radius": 5000,
//     "lat": 41660906,
//     "lng": 41678835,
//     "id": 216
//   },
//   {
//     "city": "Tradate",
//     "name": "tradate",
//     "url": "http://api.citybik.es/tradate.json",
//     "tag": "tradate",
//     "radius": 5000,
//     "lat": 45709385,
//     "lng": 8915993,
//     "id": 217
//   },
//   {
//     "city": "Belo Horizonte",
//     "name": "bikebh",
//     "url": "http://api.citybik.es/bikebh.json",
//     "tag": "bikebh",
//     "radius": 5000,
//     "lat": -19920793,
//     "lng": -43922165,
//     "id": 218
//   },
//   {
//     "city": "Petrolina",
//     "name": "bikepetrolina",
//     "url": "http://api.citybik.es/bikepetrolina.json",
//     "tag": "bikepetrolina",
//     "radius": 5000,
//     "lat": -9389049,
//     "lng": -40502751,
//     "id": 219
//   },
//   {
//     "city": "Jesi",
//     "name": "jesinbici",
//     "url": "http://api.citybik.es/jesinbici.json",
//     "tag": "jesinbici",
//     "radius": 5000,
//     "lat": 43522601,
//     "lng": 13244448,
//     "id": 220
//   },
//   {
//     "city": "Pamplona",
//     "name": "nbici",
//     "url": "http://api.citybik.es/nbici.json",
//     "tag": "nbici",
//     "radius": 5000,
//     "lat": 42811663,
//     "lng": -1648265,
//     "id": 221
//   },
//   {
//     "city": "Brasília",
//     "name": "bikebrasilia",
//     "url": "http://api.citybik.es/bikebrasilia.json",
//     "tag": "bikebrasilia",
//     "radius": 5000,
//     "lat": -15795115,
//     "lng": -47887424,
//     "id": 222
//   },
//   {
//     "city": "Goiânia",
//     "name": "debikegoiania",
//     "url": "http://api.citybik.es/debikegoiania.json",
//     "tag": "debikegoiania",
//     "radius": 5000,
//     "lat": -16670492,
//     "lng": -49259535,
//     "id": 223
//   },
//   {
//     "city": "Treviso",
//     "name": "treviso",
//     "url": "http://api.citybik.es/treviso.json",
//     "tag": "treviso",
//     "radius": 5000,
//     "lat": 45666901,
//     "lng": 12243039,
//     "id": 224
//   },
//   {
//     "city": "Fortaleza",
//     "name": "bicicletar",
//     "url": "http://api.citybik.es/bicicletar.json",
//     "tag": "bicicletar",
//     "radius": 5000,
//     "lat": -3732194,
//     "lng": -38510347,
//     "id": 225
//   },
//   {
//     "city": "Aracajú",
//     "name": "cajubike",
//     "url": "http://api.citybik.es/cajubike.json",
//     "tag": "cajubike",
//     "radius": 5000,
//     "lat": -10987263,
//     "lng": -37051898,
//     "id": 226
//   },
//   {
//     "city": "Belém",
//     "name": "bikebelem",
//     "url": "http://api.citybik.es/bikebelem.json",
//     "tag": "bikebelem",
//     "radius": 5000,
//     "lat": -1460079,
//     "lng": -48490865,
//     "id": 227
//   },
//   {
//     "city": "Sondrio",
//     "name": "sondrio",
//     "url": "http://api.citybik.es/sondrio.json",
//     "tag": "sondrio",
//     "radius": 5000,
//     "lat": 46169858,
//     "lng": 9878767,
//     "id": 228
//   },
//   {
//     "city": "Santos",
//     "name": "bikesantos",
//     "url": "http://api.citybik.es/bikesantos.json",
//     "tag": "bikesantos",
//     "radius": 5000,
//     "lat": -23954052,
//     "lng": -46333345,
//     "id": 229
//   },
//   {
//     "city": "Vercelli",
//     "name": "vercelli",
//     "url": "http://api.citybik.es/vercelli.json",
//     "tag": "vercelli",
//     "radius": 5000,
//     "lat": 45320227,
//     "lng": 8418573,
//     "id": 230
//   },
//   {
//     "city": "Santa Margherita Ligure - Portofino - Camogli",
//     "name": "portofino-park-and-bike",
//     "url": "http://api.citybik.es/portofino-park-and-bike.json",
//     "tag": "portofino-park-and-bike",
//     "radius": 5000,
//     "lat": 44335084,
//     "lng": 9211264,
//     "id": 231
//   },
//   {
//     "city": "Rosario",
//     "name": "mibicitubici",
//     "url": "http://api.citybik.es/mibicitubici.json",
//     "tag": "mibicitubici",
//     "radius": 5000,
//     "lat": -32950000,
//     "lng": -60650000,
//     "id": 232
//   },
//   {
//     "city": "Cernusco sul Naviglio - Pioltello - Carugate",
//     "name": "meglio-in-bici",
//     "url": "http://api.citybik.es/meglio-in-bici.json",
//     "tag": "meglio-in-bici",
//     "radius": 5000,
//     "lat": 45520541,
//     "lng": 9341984,
//     "id": 233
//   },
//   {
//     "city": "Des Moines, IA",
//     "name": "desmoines",
//     "url": "http://api.citybik.es/desmoines.json",
//     "tag": "desmoines",
//     "radius": 5000,
//     "lat": 41600544,
//     "lng": -93609106,
//     "id": 234
//   },
//   {
//     "city": "Santa Maria Maggiore - Malesco - Villette",
//     "name": "ossola",
//     "url": "http://api.citybik.es/ossola.json",
//     "tag": "ossola",
//     "radius": 5000,
//     "lat": 46127196,
//     "lng": 8499169,
//     "id": 235
//   },
//   {
//     "city": "Greenville, SC",
//     "name": "greenville",
//     "url": "http://api.citybik.es/greenville.json",
//     "tag": "greenville",
//     "radius": 5000,
//     "lat": 34852617,
//     "lng": -82394010,
//     "id": 236
//   },
//   {
//     "city": "Mezzolombardo",
//     "name": "bicincitta-mezzolombardo",
//     "url": "http://api.citybik.es/bicincitta-mezzolombardo.json",
//     "tag": "bicincitta-mezzolombardo",
//     "radius": 5000,
//     "lat": 46214002,
//     "lng": 11096786,
//     "id": 237
//   },
//   {
//     "city": "Scafati",
//     "name": "bicincitta-scafati",
//     "url": "http://api.citybik.es/bicincitta-scafati.json",
//     "tag": "bicincitta-scafati",
//     "radius": 5000,
//     "lat": 40762017,
//     "lng": 14536396,
//     "id": 238
//   },
//   {
//     "city": "Livorno",
//     "name": "bicincitta-livorno",
//     "url": "http://api.citybik.es/bicincitta-livorno.json",
//     "tag": "bicincitta-livorno",
//     "radius": 5000,
//     "lat": 43548473,
//     "lng": 10310567,
//     "id": 239
//   },
//   {
//     "city": "Forlì",
//     "name": "bicincitta-forli",
//     "url": "http://api.citybik.es/bicincitta-forli.json",
//     "tag": "bicincitta-forli",
//     "radius": 5000,
//     "lat": 44222739,
//     "lng": 12040731,
//     "id": 240
//   },
//   {
//     "city": "Rivarolo Canavese",
//     "name": "bicincitta-rivarolo-canavese",
//     "url": "http://api.citybik.es/bicincitta-rivarolo-canavese.json",
//     "tag": "bicincitta-rivarolo-canavese",
//     "radius": 5000,
//     "lat": 45306633,
//     "lng": 7723242,
//     "id": 241
//   },
//   {
//     "city": "Monserrato",
//     "name": "bicincitta-monserrato",
//     "url": "http://api.citybik.es/bicincitta-monserrato.json",
//     "tag": "bicincitta-monserrato",
//     "radius": 5000,
//     "lat": 39256019,
//     "lng": 9145357,
//     "id": 242
//   },
//   {
//     "city": "Mezzocorona",
//     "name": "bicincitta-mezzocorona",
//     "url": "http://api.citybik.es/bicincitta-mezzocorona.json",
//     "tag": "bicincitta-mezzocorona",
//     "radius": 5000,
//     "lat": 46233904,
//     "lng": 11127746,
//     "id": 243
//   },
//   {
//     "city": "San Lazzaro di Savena",
//     "name": "bicincitta-san-lazzaro-di-savena",
//     "url": "http://api.citybik.es/bicincitta-san-lazzaro-di-savena.json",
//     "tag": "bicincitta-san-lazzaro-di-savena",
//     "radius": 5000,
//     "lat": 44470272,
//     "lng": 11409399,
//     "id": 244
//   },
//   {
//     "city": "San Teodoro",
//     "name": "bicincitta-san-teodoro",
//     "url": "http://api.citybik.es/bicincitta-san-teodoro.json",
//     "tag": "bicincitta-san-teodoro",
//     "radius": 5000,
//     "lat": 40772283,
//     "lng": 9669545,
//     "id": 245
//   },
//   {
//     "city": "Parco Naturale Molentargius - Saline",
//     "name": "bicincitta-parco-molentargius-saline",
//     "url": "http://api.citybik.es/bicincitta-parco-molentargius-saline.json",
//     "tag": "bicincitta-parco-molentargius-saline",
//     "radius": 5000,
//     "lat": 39205254,
//     "lng": 9146761,
//     "id": 246
//   },
//   {
//     "city": "Parco Nazionale del Gargano",
//     "name": "parkinbici",
//     "url": "http://api.citybik.es/parkinbici.json",
//     "tag": "parkinbici",
//     "radius": 5000,
//     "lat": 41781708,
//     "lng": 15851642,
//     "id": 247
//   },
//   {
//     "city": "Gallipoli",
//     "name": "bicincitta-gallipoli",
//     "url": "http://api.citybik.es/bicincitta-gallipoli.json",
//     "tag": "bicincitta-gallipoli",
//     "radius": 5000,
//     "lat": 40055855,
//     "lng": 17992508,
//     "id": 248
//   },
//   {
//     "city": "Castel Guelfo di Bologna",
//     "name": "bicincitta-castel-guelfo-the-style-outlets",
//     "url": "http://api.citybik.es/bicincitta-castel-guelfo-the-style-outlets.json",
//     "tag": "bicincitta-castel-guelfo-the-style-outlets",
//     "radius": 5000,
//     "lat": 44432852,
//     "lng": 11675085,
//     "id": 249
//   },
//   {
//     "city": "San Michele All'adige",
//     "name": "bicincitta-san-michele-alladige",
//     "url": "http://api.citybik.es/bicincitta-san-michele-alladige.json",
//     "tag": "bicincitta-san-michele-alladige",
//     "radius": 5000,
//     "lat": 46187865,
//     "lng": 11133042,
//     "id": 250
//   },
//   {
//     "city": "Modena",
//     "name": "bicincitta-modena",
//     "url": "http://api.citybik.es/bicincitta-modena.json",
//     "tag": "bicincitta-modena",
//     "radius": 5000,
//     "lat": 44647128,
//     "lng": 10925226,
//     "id": 251
//   },
//   {
//     "city": "Brancaleone",
//     "name": "bicincitta-brancaleone",
//     "url": "http://api.citybik.es/bicincitta-brancaleone.json",
//     "tag": "bicincitta-brancaleone",
//     "radius": 5000,
//     "lat": 37967908,
//     "lng": 16075774,
//     "id": 252
//   },
//   {
//     "city": "Scandiano",
//     "name": "bicincitta-scandiano",
//     "url": "http://api.citybik.es/bicincitta-scandiano.json",
//     "tag": "bicincitta-scandiano",
//     "radius": 5000,
//     "lat": 44598234,
//     "lng": 10690927,
//     "id": 253
//   },
//   {
//     "city": "Elmas",
//     "name": "bicincitta-elmas",
//     "url": "http://api.citybik.es/bicincitta-elmas.json",
//     "tag": "bicincitta-elmas",
//     "radius": 5000,
//     "lat": 39263432,
//     "lng": 9051580,
//     "id": 254
//   },
//   {
//     "city": "TV",
//     "name": "bicincitta-tivat",
//     "url": "http://api.citybik.es/bicincitta-tivat.json",
//     "tag": "bicincitta-tivat",
//     "radius": 5000,
//     "lat": 42434980,
//     "lng": 18706639,
//     "id": 255
//   },
//   {
//     "city": "Acquaviva delle fonti",
//     "name": "bicincitta-acquaviva-delle-fonti",
//     "url": "http://api.citybik.es/bicincitta-acquaviva-delle-fonti.json",
//     "tag": "bicincitta-acquaviva-delle-fonti",
//     "radius": 5000,
//     "lat": 40930372,
//     "lng": 16841437,
//     "id": 256
//   },
//   {
//     "city": "Lodi",
//     "name": "we-love-bike",
//     "url": "http://api.citybik.es/we-love-bike.json",
//     "tag": "we-love-bike",
//     "radius": 5000,
//     "lat": 45309722,
//     "lng": 9503715,
//     "id": 257
//   },
//   {
//     "city": "Acquarica del Capo",
//     "name": "bicincitta-acquarica-del-capo",
//     "url": "http://api.citybik.es/bicincitta-acquarica-del-capo.json",
//     "tag": "bicincitta-acquarica-del-capo",
//     "radius": 5000,
//     "lat": 39914457,
//     "lng": 18245032,
//     "id": 258
//   },
//   {
//     "city": "Vicolungo",
//     "name": "bicincitta-vicolungo-the-style-outlets",
//     "url": "http://api.citybik.es/bicincitta-vicolungo-the-style-outlets.json",
//     "tag": "bicincitta-vicolungo-the-style-outlets",
//     "radius": 5000,
//     "lat": 45471672,
//     "lng": 8463392,
//     "id": 259
//   },
//   {
//     "city": "Porto Torres",
//     "name": "bicincitta-porto-torres",
//     "url": "http://api.citybik.es/bicincitta-porto-torres.json",
//     "tag": "bicincitta-porto-torres",
//     "radius": 5000,
//     "lat": 40833368,
//     "lng": 8402292,
//     "id": 260
//   },
//   {
//     "city": "Cisterna di Latina",
//     "name": "bicincitta-cisterna-di-latina",
//     "url": "http://api.citybik.es/bicincitta-cisterna-di-latina.json",
//     "tag": "bicincitta-cisterna-di-latina",
//     "radius": 5000,
//     "lat": 41575402,
//     "lng": 12828477,
//     "id": 261
//   },
//   {
//     "city": "Casaletto Spartano",
//     "name": "bicincitta-casaletto-spartano",
//     "url": "http://api.citybik.es/bicincitta-casaletto-spartano.json",
//     "tag": "bicincitta-casaletto-spartano",
//     "radius": 5000,
//     "lat": 40153280,
//     "lng": 15621147,
//     "id": 262
//   },
//   {
//     "city": "Selargius",
//     "name": "bicincitta-selargius",
//     "url": "http://api.citybik.es/bicincitta-selargius.json",
//     "tag": "bicincitta-selargius",
//     "radius": 5000,
//     "lat": 39259676,
//     "lng": 9162937,
//     "id": 263
//   },
//   {
//     "city": "Monza",
//     "name": "bicincitta-monza",
//     "url": "http://api.citybik.es/bicincitta-monza.json",
//     "tag": "bicincitta-monza",
//     "radius": 5000,
//     "lat": 45584500,
//     "lng": 9274448,
//     "id": 264
//   },
//   {
//     "city": "Morigerati",
//     "name": "bicincitta-morigerati",
//     "url": "http://api.citybik.es/bicincitta-morigerati.json",
//     "tag": "bicincitta-morigerati",
//     "radius": 5000,
//     "lat": 40142203,
//     "lng": 15529852,
//     "id": 265
//   },
//   {
//     "city": "San Donato Milanese",
//     "name": "bicincitta-san-donato-milanese",
//     "url": "http://api.citybik.es/bicincitta-san-donato-milanese.json",
//     "tag": "bicincitta-san-donato-milanese",
//     "radius": 5000,
//     "lat": 45409240,
//     "lng": 9268486,
//     "id": 266
//   },
//   {
//     "city": "Parco Nazionale del Circeo",
//     "name": "bicincitta-ente-parco-del-circeo",
//     "url": "http://api.citybik.es/bicincitta-ente-parco-del-circeo.json",
//     "tag": "bicincitta-ente-parco-del-circeo",
//     "radius": 5000,
//     "lat": 41315101,
//     "lng": 13033078,
//     "id": 267
//   },
//   {
//     "city": "Cesena",
//     "name": "bicincitta-cesena",
//     "url": "http://api.citybik.es/bicincitta-cesena.json",
//     "tag": "bicincitta-cesena",
//     "radius": 5000,
//     "lat": 44139643,
//     "lng": 12246429,
//     "id": 268
//   },
//   {
//     "city": "Lecco",
//     "name": "lecco",
//     "url": "http://api.citybik.es/lecco.json",
//     "tag": "lecco",
//     "radius": 5000,
//     "lat": 45856569,
//     "lng": 9397670,
//     "id": 269
//   },
//   {
//     "city": "Alghero",
//     "name": "bicincitta-alghero",
//     "url": "http://api.citybik.es/bicincitta-alghero.json",
//     "tag": "bicincitta-alghero",
//     "radius": 5000,
//     "lat": 40557951,
//     "lng": 8319294,
//     "id": 270
//   },
//   {
//     "city": "San Giovanni in Persiceto",
//     "name": "bicincitta-san-giovanni-in-persiceto",
//     "url": "http://api.citybik.es/bicincitta-san-giovanni-in-persiceto.json",
//     "tag": "bicincitta-san-giovanni-in-persiceto",
//     "radius": 5000,
//     "lat": 44640543,
//     "lng": 11189305,
//     "id": 271
//   },
//   {
//     "city": "Parco naturale Migliarino San Rossore Massaciuccoli",
//     "name": "bicincitta-ente-parco-san-rossore",
//     "url": "http://api.citybik.es/bicincitta-ente-parco-san-rossore.json",
//     "tag": "bicincitta-ente-parco-san-rossore",
//     "radius": 5000,
//     "lat": 43723826,
//     "lng": 10339509,
//     "id": 272
//   },
//   {
//     "city": "Treviglio",
//     "name": "bicincitta-treviglio",
//     "url": "http://api.citybik.es/bicincitta-treviglio.json",
//     "tag": "bicincitta-treviglio",
//     "radius": 5000,
//     "lat": 45529337,
//     "lng": 9591435,
//     "id": 273
//   },
//   {
//     "city": "Lavis",
//     "name": "bicincitta-lavis",
//     "url": "http://api.citybik.es/bicincitta-lavis.json",
//     "tag": "bicincitta-lavis",
//     "radius": 5000,
//     "lat": 46140842,
//     "lng": 11112493,
//     "id": 274
//   },
//   {
//     "city": "Ente Parco Montemarcello Magra",
//     "name": "bicincitta-ente-parco-di-montemarcello-magra",
//     "url": "http://api.citybik.es/bicincitta-ente-parco-di-montemarcello-magra.json",
//     "tag": "bicincitta-ente-parco-di-montemarcello-magra",
//     "radius": 5000,
//     "lat": 44114389,
//     "lng": 9963598,
//     "id": 275
//   },
//   {
//     "city": "Schio",
//     "name": "bicischio",
//     "url": "http://api.citybik.es/bicischio.json",
//     "tag": "bicischio",
//     "radius": 5000,
//     "lat": 45717051,
//     "lng": 11359770,
//     "id": 276
//   },
//   {
//     "city": "Imola",
//     "name": "bicincitta-imola",
//     "url": "http://api.citybik.es/bicincitta-imola.json",
//     "tag": "bicincitta-imola",
//     "radius": 5000,
//     "lat": 44355912,
//     "lng": 11716119,
//     "id": 277
//   },
//   {
//     "city": "Leipzig",
//     "name": "nextbike-leipzig",
//     "url": "http://api.citybik.es/nextbike-leipzig.json",
//     "tag": "nextbike-leipzig",
//     "radius": 5000,
//     "lat": 51341500,
//     "lng": 12362500,
//     "id": 278
//   },
//   {
//     "city": "Wiesbaden",
//     "name": "nextbike-wiesbaden",
//     "url": "http://api.citybik.es/nextbike-wiesbaden.json",
//     "tag": "nextbike-wiesbaden",
//     "radius": 5000,
//     "lat": 50070900,
//     "lng": 8243220,
//     "id": 279
//   },
//   {
//     "city": "Frankfurt",
//     "name": "visa-frankfurt",
//     "url": "http://api.citybik.es/visa-frankfurt.json",
//     "tag": "visa-frankfurt",
//     "radius": 5000,
//     "lat": 50107200,
//     "lng": 8663750,
//     "id": 280
//   },
//   {
//     "city": "Köln",
//     "name": "kvb-rad-koln",
//     "url": "http://api.citybik.es/kvb-rad-koln.json",
//     "tag": "kvb-rad-koln",
//     "radius": 5000,
//     "lat": 50942900,
//     "lng": 6956490,
//     "id": 281
//   },
//   {
//     "city": "Karlsruhe",
//     "name": "facherrad-karlsruhe",
//     "url": "http://api.citybik.es/facherrad-karlsruhe.json",
//     "tag": "facherrad-karlsruhe",
//     "radius": 5000,
//     "lat": 49010200,
//     "lng": 8418270,
//     "id": 282
//   },
//   {
//     "city": "Neusiedler See",
//     "name": "burgenland-neusiedler-see",
//     "url": "http://api.citybik.es/burgenland-neusiedler-see.json",
//     "tag": "burgenland-neusiedler-see",
//     "radius": 5000,
//     "lat": 47839000,
//     "lng": 16761000,
//     "id": 283
//   },
//   {
//     "city": "Düsseldorf",
//     "name": "nextbike-dusseldorf",
//     "url": "http://api.citybik.es/nextbike-dusseldorf.json",
//     "tag": "nextbike-dusseldorf",
//     "radius": 5000,
//     "lat": 51224300,
//     "lng": 6772040,
//     "id": 284
//   },
//   {
//     "city": "St.Pölten",
//     "name": "nextbike-stpolten",
//     "url": "http://api.citybik.es/nextbike-stpolten.json",
//     "tag": "nextbike-stpolten",
//     "radius": 5000,
//     "lat": 48205800,
//     "lng": 15623200,
//     "id": 285
//   },
//   {
//     "city": "Mödling",
//     "name": "nextbike-modling",
//     "url": "http://api.citybik.es/nextbike-modling.json",
//     "tag": "nextbike-modling",
//     "radius": 5000,
//     "lat": 48104700,
//     "lng": 16320200,
//     "id": 286
//   },
//   {
//     "city": "Sursee",
//     "name": "nextbike-sursee",
//     "url": "http://api.citybik.es/nextbike-sursee.json",
//     "tag": "nextbike-sursee",
//     "radius": 5000,
//     "lat": 47171300,
//     "lng": 8108770,
//     "id": 287
//   },
//   {
//     "city": "Luzern",
//     "name": "nextbike-luzern",
//     "url": "http://api.citybik.es/nextbike-luzern.json",
//     "tag": "nextbike-luzern",
//     "radius": 5000,
//     "lat": 47047200,
//     "lng": 8304460,
//     "id": 288
//   },
//   {
//     "city": "Rīga",
//     "name": "sixt-riga",
//     "url": "http://api.citybik.es/sixt-riga.json",
//     "tag": "sixt-riga",
//     "radius": 5000,
//     "lat": 56945300,
//     "lng": 24103300,
//     "id": 289
//   },
//   {
//     "city": "Dortmund",
//     "name": "metropolradruhr-dortmund",
//     "url": "http://api.citybik.es/metropolradruhr-dortmund.json",
//     "tag": "metropolradruhr-dortmund",
//     "radius": 5000,
//     "lat": 51514100,
//     "lng": 7462550,
//     "id": 290
//   },
//   {
//     "city": "Bochum",
//     "name": "metropolradruhr-bochum",
//     "url": "http://api.citybik.es/metropolradruhr-bochum.json",
//     "tag": "metropolradruhr-bochum",
//     "radius": 5000,
//     "lat": 51481300,
//     "lng": 7213300,
//     "id": 291
//   },
//   {
//     "city": "Bottrop",
//     "name": "metropolradruhr-bottrop",
//     "url": "http://api.citybik.es/metropolradruhr-bottrop.json",
//     "tag": "metropolradruhr-bottrop",
//     "radius": 5000,
//     "lat": 51526300,
//     "lng": 6946110,
//     "id": 292
//   },
//   {
//     "city": "Duisburg",
//     "name": "metropolradruhr-duisburg",
//     "url": "http://api.citybik.es/metropolradruhr-duisburg.json",
//     "tag": "metropolradruhr-duisburg",
//     "radius": 5000,
//     "lat": 51448700,
//     "lng": 6775130,
//     "id": 293
//   },
//   {
//     "city": "Essen",
//     "name": "metropolradruhr-essen",
//     "url": "http://api.citybik.es/metropolradruhr-essen.json",
//     "tag": "metropolradruhr-essen",
//     "radius": 5000,
//     "lat": 51442500,
//     "lng": 7023010,
//     "id": 294
//   },
//   {
//     "city": "Gelsenkirchen",
//     "name": "metropolradruhr-gelsenkirchen",
//     "url": "http://api.citybik.es/metropolradruhr-gelsenkirchen.json",
//     "tag": "metropolradruhr-gelsenkirchen",
//     "radius": 5000,
//     "lat": 51540400,
//     "lng": 7070390,
//     "id": 295
//   },
//   {
//     "city": "Hamm",
//     "name": "metropolradruhr-hamm",
//     "url": "http://api.citybik.es/metropolradruhr-hamm.json",
//     "tag": "metropolradruhr-hamm",
//     "radius": 5000,
//     "lat": 51677500,
//     "lng": 7848360,
//     "id": 296
//   },
//   {
//     "city": "Herne",
//     "name": "metropolradruhr-herne",
//     "url": "http://api.citybik.es/metropolradruhr-herne.json",
//     "tag": "metropolradruhr-herne",
//     "radius": 5000,
//     "lat": 51536300,
//     "lng": 7214930,
//     "id": 297
//   },
//   {
//     "city": "Mülheim a.d.R.",
//     "name": "metropolradruhr-mulheim-adr",
//     "url": "http://api.citybik.es/metropolradruhr-mulheim-adr.json",
//     "tag": "metropolradruhr-mulheim-adr",
//     "radius": 5000,
//     "lat": 51430800,
//     "lng": 6874010,
//     "id": 298
//   },
//   {
//     "city": "Oberhausen",
//     "name": "metropolradruhr-oberhausen",
//     "url": "http://api.citybik.es/metropolradruhr-oberhausen.json",
//     "tag": "metropolradruhr-oberhausen",
//     "radius": 5000,
//     "lat": 51493600,
//     "lng": 6851690,
//     "id": 299
//   },
//   {
//     "city": "Wachau",
//     "name": "nextbike-wachau",
//     "url": "http://api.citybik.es/nextbike-wachau.json",
//     "tag": "nextbike-wachau",
//     "radius": 5000,
//     "lat": 48318800,
//     "lng": 15416600,
//     "id": 300
//   },
//   {
//     "city": "Tulln",
//     "name": "nextbike-tulln",
//     "url": "http://api.citybik.es/nextbike-tulln.json",
//     "tag": "nextbike-tulln",
//     "radius": 5000,
//     "lat": 48326900,
//     "lng": 16056899,
//     "id": 301
//   },
//   {
//     "city": "Thermenregion",
//     "name": "nextbike-thermenregion",
//     "url": "http://api.citybik.es/nextbike-thermenregion.json",
//     "tag": "nextbike-thermenregion",
//     "radius": 5000,
//     "lat": 47989200,
//     "lng": 16264600,
//     "id": 302
//   },
//   {
//     "city": "Wrocław",
//     "name": "wrm-wroclaw",
//     "url": "http://api.citybik.es/wrm-wroclaw.json",
//     "tag": "wrm-wroclaw",
//     "radius": 5000,
//     "lat": 51109700,
//     "lng": 17048500,
//     "id": 303
//   },
//   {
//     "city": "Offenburg",
//     "name": "nextbike-offenburg",
//     "url": "http://api.citybik.es/nextbike-offenburg.json",
//     "tag": "nextbike-offenburg",
//     "radius": 5000,
//     "lat": 48472100,
//     "lng": 7942430,
//     "id": 304
//   },
//   {
//     "city": "Wr.Neustadt",
//     "name": "nextbike-wrneustadt",
//     "url": "http://api.citybik.es/nextbike-wrneustadt.json",
//     "tag": "nextbike-wrneustadt",
//     "radius": 5000,
//     "lat": 47816700,
//     "lng": 16242600,
//     "id": 305
//   },
//   {
//     "city": "Potsdam",
//     "name": "nextbike-potsdam",
//     "url": "http://api.citybik.es/nextbike-potsdam.json",
//     "tag": "nextbike-potsdam",
//     "radius": 5000,
//     "lat": 52399700,
//     "lng": 13067600,
//     "id": 306
//   },
//   {
//     "city": "Gütersloh",
//     "name": "nextbike-gutersloh",
//     "url": "http://api.citybik.es/nextbike-gutersloh.json",
//     "tag": "nextbike-gutersloh",
//     "radius": 5000,
//     "lat": 51904900,
//     "lng": 8392750,
//     "id": 307
//   },
//   {
//     "city": "10vorWien",
//     "name": "nextbike-10vorwien",
//     "url": "http://api.citybik.es/nextbike-10vorwien.json",
//     "tag": "nextbike-10vorwien",
//     "radius": 5000,
//     "lat": 48340300,
//     "lng": 16279000,
//     "id": 308
//   },
//   {
//     "city": "Usedom",
//     "name": "usedomrad-usedom",
//     "url": "http://api.citybik.es/usedomrad-usedom.json",
//     "tag": "usedomrad-usedom",
//     "radius": 5000,
//     "lat": 53977900,
//     "lng": 13992500,
//     "id": 309
//   },
//   {
//     "city": "Norderstedt",
//     "name": "nextbike-norderstedt",
//     "url": "http://api.citybik.es/nextbike-norderstedt.json",
//     "tag": "nextbike-norderstedt",
//     "radius": 5000,
//     "lat": 53696900,
//     "lng": 10002000,
//     "id": 310
//   },
//   {
//     "city": "Augsburg",
//     "name": "swa-rad-augsburg",
//     "url": "http://api.citybik.es/swa-rad-augsburg.json",
//     "tag": "swa-rad-augsburg",
//     "radius": 5000,
//     "lat": 48364700,
//     "lng": 10891600,
//     "id": 311
//   },
//   {
//     "city": "Limassol",
//     "name": "nextbike-limassol",
//     "url": "http://api.citybik.es/nextbike-limassol.json",
//     "tag": "nextbike-limassol",
//     "radius": 5000,
//     "lat": 34682300,
//     "lng": 33046400,
//     "id": 312
//   },
//   {
//     "city": "Christchurch",
//     "name": "nextbike-christchurch",
//     "url": "http://api.citybik.es/nextbike-christchurch.json",
//     "tag": "nextbike-christchurch",
//     "radius": 5000,
//     "lat": -43534100,
//     "lng": 172621000,
//     "id": 313
//   },
//   {
//     "city": "Heidelberg",
//     "name": "vrn-heidelberg",
//     "url": "http://api.citybik.es/vrn-heidelberg.json",
//     "tag": "vrn-heidelberg",
//     "radius": 5000,
//     "lat": 49402300,
//     "lng": 8675770,
//     "id": 314
//   },
//   {
//     "city": "Mannheim",
//     "name": "vrn-mannheim",
//     "url": "http://api.citybik.es/vrn-mannheim.json",
//     "tag": "vrn-mannheim",
//     "radius": 5000,
//     "lat": 49486900,
//     "lng": 8456380,
//     "id": 315
//   },
//   {
//     "city": "Innsbruck",
//     "name": "stadtrad-innsbruck",
//     "url": "http://api.citybik.es/stadtrad-innsbruck.json",
//     "tag": "stadtrad-innsbruck",
//     "radius": 5000,
//     "lat": 47263200,
//     "lng": 11396100,
//     "id": 316
//   },
//   {
//     "city": "Nicosia",
//     "name": "nextbike-nicosia",
//     "url": "http://api.citybik.es/nextbike-nicosia.json",
//     "tag": "nextbike-nicosia",
//     "radius": 5000,
//     "lat": 35172800,
//     "lng": 33365299,
//     "id": 317
//   },
//   {
//     "city": "Hollabrunn",
//     "name": "nextbike-hollabrunn",
//     "url": "http://api.citybik.es/nextbike-hollabrunn.json",
//     "tag": "nextbike-hollabrunn",
//     "radius": 5000,
//     "lat": 48562000,
//     "lng": 16078499,
//     "id": 318
//   },
//   {
//     "city": "WienerWald",
//     "name": "nextbike-wienerwald",
//     "url": "http://api.citybik.es/nextbike-wienerwald.json",
//     "tag": "nextbike-wienerwald",
//     "radius": 5000,
//     "lat": 48192600,
//     "lng": 16140999,
//     "id": 319
//   },
//   {
//     "city": "Zagreb",
//     "name": "nextbike-zagreb",
//     "url": "http://api.citybik.es/nextbike-zagreb.json",
//     "tag": "nextbike-zagreb",
//     "radius": 5000,
//     "lat": 45798400,
//     "lng": 15978900,
//     "id": 320
//   },
//   {
//     "city": "Glasgow",
//     "name": "nextbike-glasgow",
//     "url": "http://api.citybik.es/nextbike-glasgow.json",
//     "tag": "nextbike-glasgow",
//     "radius": 5000,
//     "lat": 55858900,
//     "lng": -4255490,
//     "id": 321
//   },
//   {
//     "city": "Belfast",
//     "name": "belfastbikes-belfast",
//     "url": "http://api.citybik.es/belfastbikes-belfast.json",
//     "tag": "belfastbikes-belfast",
//     "radius": 5000,
//     "lat": 54596900,
//     "lng": -5929180,
//     "id": 322
//   },
//   {
//     "city": "Stirling",
//     "name": "nextbike-stirling",
//     "url": "http://api.citybik.es/nextbike-stirling.json",
//     "tag": "nextbike-stirling",
//     "radius": 5000,
//     "lat": 56116500,
//     "lng": -3936900,
//     "id": 323
//   },
//   {
//     "city": "Šibenik",
//     "name": "grad-sibenik-sibenik",
//     "url": "http://api.citybik.es/grad-sibenik-sibenik.json",
//     "tag": "grad-sibenik-sibenik",
//     "radius": 5000,
//     "lat": 43733000,
//     "lng": 15898200,
//     "id": 324
//   },
//   {
//     "city": "Lublin",
//     "name": "lrm-lublin-lublin",
//     "url": "http://api.citybik.es/lrm-lublin-lublin.json",
//     "tag": "lrm-lublin-lublin",
//     "radius": 5000,
//     "lat": 51246900,
//     "lng": 22569700,
//     "id": 325
//   },
//   {
//     "city": "Ludwigshafen",
//     "name": "vrn-ludwigshafen",
//     "url": "http://api.citybik.es/vrn-ludwigshafen.json",
//     "tag": "vrn-ludwigshafen",
//     "radius": 5000,
//     "lat": 49474100,
//     "lng": 8432870,
//     "id": 326
//   },
//   {
//     "city": "Speyer",
//     "name": "vrn-speyer",
//     "url": "http://api.citybik.es/vrn-speyer.json",
//     "tag": "vrn-speyer",
//     "radius": 5000,
//     "lat": 49312600,
//     "lng": 8452950,
//     "id": 327
//   },
//   {
//     "city": "Lviv",
//     "name": "nextbike-lviv",
//     "url": "http://api.citybik.es/nextbike-lviv.json",
//     "tag": "nextbike-lviv",
//     "radius": 5000,
//     "lat": 49840200,
//     "lng": 24018200,
//     "id": 328
//   },
//   {
//     "city": "Würzburg",
//     "name": "nextbike-wurzburg",
//     "url": "http://api.citybik.es/nextbike-wurzburg.json",
//     "tag": "nextbike-wurzburg",
//     "radius": 5000,
//     "lat": 49800000,
//     "lng": 9933330,
//     "id": 329
//   },
//   {
//     "city": "Serfaus",
//     "name": "nextbike-serfaus",
//     "url": "http://api.citybik.es/nextbike-serfaus.json",
//     "tag": "nextbike-serfaus",
//     "radius": 5000,
//     "lat": 47038700,
//     "lng": 10604800,
//     "id": 330
//   },
//   {
//     "city": "Malta",
//     "name": "nextbike-malta",
//     "url": "http://api.citybik.es/nextbike-malta.json",
//     "tag": "nextbike-malta",
//     "radius": 5000,
//     "lat": 35919200,
//     "lng": 14488900,
//     "id": 331
//   },
//   {
//     "city": "Karlovac",
//     "name": "grad-karlovac-karlovac",
//     "url": "http://api.citybik.es/grad-karlovac-karlovac.json",
//     "tag": "grad-karlovac-karlovac",
//     "radius": 5000,
//     "lat": 45490500,
//     "lng": 15550300,
//     "id": 332
//   },
//   {
//     "city": "Slavonski Brod",
//     "name": "grad-slavonski-brod-slavonski-brod",
//     "url": "http://api.citybik.es/grad-slavonski-brod-slavonski-brod.json",
//     "tag": "grad-slavonski-brod-slavonski-brod",
//     "radius": 5000,
//     "lat": 45165600,
//     "lng": 18018300,
//     "id": 333
//   },
//   {
//     "city": "Milton Keynes",
//     "name": "santander-cycles-mk-milton-keynes",
//     "url": "http://api.citybik.es/santander-cycles-mk-milton-keynes.json",
//     "tag": "santander-cycles-mk-milton-keynes",
//     "radius": 5000,
//     "lat": 52040600,
//     "lng": -759417,
//     "id": 334
//   },
//   {
//     "city": "Hergiswil",
//     "name": "nextbike-hergiswil",
//     "url": "http://api.citybik.es/nextbike-hergiswil.json",
//     "tag": "nextbike-hergiswil",
//     "radius": 5000,
//     "lat": 46990500,
//     "lng": 8308289,
//     "id": 335
//   },
//   {
//     "city": "Makarska",
//     "name": "grad-makarska-makarska",
//     "url": "http://api.citybik.es/grad-makarska-makarska.json",
//     "tag": "grad-makarska-makarska",
//     "radius": 5000,
//     "lat": 43299200,
//     "lng": 17018400,
//     "id": 336
//   },
//   {
//     "city": "Brinje",
//     "name": "opcina-brinje-brinje",
//     "url": "http://api.citybik.es/opcina-brinje-brinje.json",
//     "tag": "opcina-brinje-brinje",
//     "radius": 5000,
//     "lat": 44997700,
//     "lng": 15125800,
//     "id": 337
//   },
//   {
//     "city": "Zadar",
//     "name": "grad-zadar-zadar",
//     "url": "http://api.citybik.es/grad-zadar-zadar.json",
//     "tag": "grad-zadar-zadar",
//     "radius": 5000,
//     "lat": 44005800,
//     "lng": 15218300,
//     "id": 338
//   },
//   {
//     "city": "Bensheim",
//     "name": "vrn-bensheim",
//     "url": "http://api.citybik.es/vrn-bensheim.json",
//     "tag": "vrn-bensheim",
//     "radius": 5000,
//     "lat": 49680300,
//     "lng": 8618900,
//     "id": 339
//   },
//   {
//     "city": "Ivanic Grad",
//     "name": "grad-ivanic-grad-ivanic-grad",
//     "url": "http://api.citybik.es/grad-ivanic-grad-ivanic-grad.json",
//     "tag": "grad-ivanic-grad-ivanic-grad",
//     "radius": 5000,
//     "lat": 45706200,
//     "lng": 16391900,
//     "id": 340
//   },
//   {
//     "city": "Sarajevo",
//     "name": "nextbike-sarajevo",
//     "url": "http://api.citybik.es/nextbike-sarajevo.json",
//     "tag": "nextbike-sarajevo",
//     "radius": 5000,
//     "lat": 43850000,
//     "lng": 18390000,
//     "id": 341
//   },
//   {
//     "city": "Exeter",
//     "name": "co-bikes-exeter",
//     "url": "http://api.citybik.es/co-bikes-exeter.json",
//     "tag": "co-bikes-exeter",
//     "radius": 5000,
//     "lat": 50727200,
//     "lng": -3536050,
//     "id": 342
//   },
//   {
//     "city": "Auckland Waterfront",
//     "name": "nextbike-auckland-waterfront",
//     "url": "http://api.citybik.es/nextbike-auckland-waterfront.json",
//     "tag": "nextbike-auckland-waterfront",
//     "radius": 5000,
//     "lat": -36841000,
//     "lng": 174763000,
//     "id": 343
//   },
//   {
//     "city": "Berlin",
//     "name": "nextbike-berlin",
//     "url": "http://api.citybik.es/nextbike-berlin.json",
//     "tag": "nextbike-berlin",
//     "radius": 5000,
//     "lat": 52508700,
//     "lng": 13356300,
//     "id": 344
//   },
//   {
//     "city": "Bremen",
//     "name": "wk-bike-bremen-bremen",
//     "url": "http://api.citybik.es/wk-bike-bremen-bremen.json",
//     "tag": "wk-bike-bremen-bremen",
//     "radius": 5000,
//     "lat": 53078100,
//     "lng": 8801320,
//     "id": 345
//   },
//   {
//     "city": "Worms",
//     "name": "vrn-worms",
//     "url": "http://api.citybik.es/vrn-worms.json",
//     "tag": "vrn-worms",
//     "radius": 5000,
//     "lat": 49639400,
//     "lng": 8346180,
//     "id": 346
//   },
//   {
//     "city": "Stans",
//     "name": "nextbike-stans",
//     "url": "http://api.citybik.es/nextbike-stans.json",
//     "tag": "nextbike-stans",
//     "radius": 5000,
//     "lat": 46959300,
//     "lng": 8368359,
//     "id": 347
//   },
//   {
//     "city": "Stansstad",
//     "name": "nextbike-stansstad",
//     "url": "http://api.citybik.es/nextbike-stansstad.json",
//     "tag": "nextbike-stansstad",
//     "radius": 5000,
//     "lat": 46980100,
//     "lng": 8340980,
//     "id": 348
//   },
//   {
//     "city": "Horw",
//     "name": "nextbike-horw",
//     "url": "http://api.citybik.es/nextbike-horw.json",
//     "tag": "nextbike-horw",
//     "radius": 5000,
//     "lat": 47018800,
//     "lng": 8308280,
//     "id": 349
//   },
//   {
//     "city": "Bürstadt",
//     "name": "vrn-burstadt",
//     "url": "http://api.citybik.es/vrn-burstadt.json",
//     "tag": "vrn-burstadt",
//     "radius": 5000,
//     "lat": 49646100,
//     "lng": 8449170,
//     "id": 350
//   },
//   {
//     "city": "Groß Enzersdorf",
//     "name": "nextbike-gross-enzersdorf",
//     "url": "http://api.citybik.es/nextbike-gross-enzersdorf.json",
//     "tag": "nextbike-gross-enzersdorf",
//     "radius": 5000,
//     "lat": 48198600,
//     "lng": 16549600,
//     "id": 351
//   },
//   {
//     "city": "Klagenfurt",
//     "name": "nextbike-klagenfurt",
//     "url": "http://api.citybik.es/nextbike-klagenfurt.json",
//     "tag": "nextbike-klagenfurt",
//     "radius": 5000,
//     "lat": 46633500,
//     "lng": 14308500,
//     "id": 352
//   },
//   {
//     "city": "Kaiserslautern",
//     "name": "vrn-kaiserslautern",
//     "url": "http://api.citybik.es/vrn-kaiserslautern.json",
//     "tag": "vrn-kaiserslautern",
//     "radius": 5000,
//     "lat": 49441300,
//     "lng": 7755660,
//     "id": 353
//   },
//   {
//     "city": "Las Palmas de Gran Canaria",
//     "name": "sitycleta-las-palmas-las-palmas-de-gran-canaria",
//     "url": "http://api.citybik.es/sitycleta-las-palmas-las-palmas-de-gran-canaria.json",
//     "tag": "sitycleta-las-palmas-las-palmas-de-gran-canaria",
//     "radius": 5000,
//     "lat": 28123600,
//     "lng": -15436600,
//     "id": 354
//   },
//   {
//     "city": "Velika Gorica",
//     "name": "grad-velika-gorica-velika-gorica",
//     "url": "http://api.citybik.es/grad-velika-gorica-velika-gorica.json",
//     "tag": "grad-velika-gorica-velika-gorica",
//     "radius": 5000,
//     "lat": 45716100,
//     "lng": 16068300,
//     "id": 355
//   },
//   {
//     "city": "Sisak",
//     "name": "grad-sisak-sisak",
//     "url": "http://api.citybik.es/grad-sisak-sisak.json",
//     "tag": "grad-sisak-sisak",
//     "radius": 5000,
//     "lat": 45487500,
//     "lng": 16375300,
//     "id": 356
//   },
//   {
//     "city": "Metković",
//     "name": "grad-metkovic-metkovic",
//     "url": "http://api.citybik.es/grad-metkovic-metkovic.json",
//     "tag": "grad-metkovic-metkovic",
//     "radius": 5000,
//     "lat": 43065400,
//     "lng": 17642000,
//     "id": 357
//   },
//   {
//     "city": "Jastrebarsko",
//     "name": "jastrebarsko-jastrebarsko",
//     "url": "http://api.citybik.es/jastrebarsko-jastrebarsko.json",
//     "tag": "jastrebarsko-jastrebarsko",
//     "radius": 5000,
//     "lat": 45669200,
//     "lng": 15654100,
//     "id": 358
//   },
//   {
//     "city": "Drniš",
//     "name": "grad-drnis-drnis",
//     "url": "http://api.citybik.es/grad-drnis-drnis.json",
//     "tag": "grad-drnis-drnis",
//     "radius": 5000,
//     "lat": 43842500,
//     "lng": 16119700,
//     "id": 359
//   },
//   {
//     "city": "Tuzla",
//     "name": "nextbike-tuzla",
//     "url": "http://api.citybik.es/nextbike-tuzla.json",
//     "tag": "nextbike-tuzla",
//     "radius": 5000,
//     "lat": 44539200,
//     "lng": 18675000,
//     "id": 360
//   },
//   {
//     "city": "Nitra",
//     "name": "arriva-nitra",
//     "url": "http://api.citybik.es/arriva-nitra.json",
//     "tag": "arriva-nitra",
//     "radius": 5000,
//     "lat": 48308800,
//     "lng": 18078300,
//     "id": 361
//   },
//   {
//     "city": "Marburg",
//     "name": "nextbike-marburg",
//     "url": "http://api.citybik.es/nextbike-marburg.json",
//     "tag": "nextbike-marburg",
//     "radius": 5000,
//     "lat": 50801900,
//     "lng": 8764440,
//     "id": 362
//   },
//   {
//     "city": "Budapest",
//     "name": "bubi",
//     "url": "http://api.citybik.es/bubi.json",
//     "tag": "bubi",
//     "radius": 5000,
//     "lat": 47497912,
//     "lng": 19040235,
//     "id": 363
//   },
//   {
//     "city": "Rüsselsheim am Main",
//     "name": "nextbike-russelsheim-am-main",
//     "url": "http://api.citybik.es/nextbike-russelsheim-am-main.json",
//     "tag": "nextbike-russelsheim-am-main",
//     "radius": 5000,
//     "lat": 49988100,
//     "lng": 8421420,
//     "id": 364
//   },
//   {
//     "city": "Heppenheim",
//     "name": "vrn-heppenheim",
//     "url": "http://api.citybik.es/vrn-heppenheim.json",
//     "tag": "vrn-heppenheim",
//     "radius": 5000,
//     "lat": 49643100,
//     "lng": 8638890,
//     "id": 365
//   },
//   {
//     "city": "Kassel",
//     "name": "nextbike-kassel",
//     "url": "http://api.citybik.es/nextbike-kassel.json",
//     "tag": "nextbike-kassel",
//     "radius": 5000,
//     "lat": 51312700,
//     "lng": 9479750,
//     "id": 366
//   },
//   {
//     "city": "Sarnen",
//     "name": "nextbike-sarnen",
//     "url": "http://api.citybik.es/nextbike-sarnen.json",
//     "tag": "nextbike-sarnen",
//     "radius": 5000,
//     "lat": 46896300,
//     "lng": 8246140,
//     "id": 367
//   },
//   {
//     "city": "Wolfenschiessen",
//     "name": "nextbike-wolfenschiessen",
//     "url": "http://api.citybik.es/nextbike-wolfenschiessen.json",
//     "tag": "nextbike-wolfenschiessen",
//     "radius": 5000,
//     "lat": 46907900,
//     "lng": 8397670,
//     "id": 368
//   },
//   {
//     "city": "Oberdorf",
//     "name": "nextbike-oberdorf",
//     "url": "http://api.citybik.es/nextbike-oberdorf.json",
//     "tag": "nextbike-oberdorf",
//     "radius": 5000,
//     "lat": 46956300,
//     "lng": 8388400,
//     "id": 369
//   },
//   {
//     "city": "Gießen",
//     "name": "nextbike-giessen",
//     "url": "http://api.citybik.es/nextbike-giessen.json",
//     "tag": "nextbike-giessen",
//     "radius": 5000,
//     "lat": 50594300,
//     "lng": 8680970,
//     "id": 370
//   },
//   {
//     "city": "Weinheim",
//     "name": "vrn-weinheim",
//     "url": "http://api.citybik.es/vrn-weinheim.json",
//     "tag": "vrn-weinheim",
//     "radius": 5000,
//     "lat": 49545000,
//     "lng": 8660270,
//     "id": 371
//   },
//   {
//     "city": "Cardiff",
//     "name": "nextbike-cardiff",
//     "url": "http://api.citybik.es/nextbike-cardiff.json",
//     "tag": "nextbike-cardiff",
//     "radius": 5000,
//     "lat": 51484800,
//     "lng": -3190620,
//     "id": 372
//   },
//   {
//     "city": "Hockenheim",
//     "name": "vrn-hockenheim",
//     "url": "http://api.citybik.es/vrn-hockenheim.json",
//     "tag": "vrn-hockenheim",
//     "radius": 5000,
//     "lat": 49322700,
//     "lng": 8542580,
//     "id": 373
//   },
//   {
//     "city": "Schwetzingen",
//     "name": "vrn-schwetzingen",
//     "url": "http://api.citybik.es/vrn-schwetzingen.json",
//     "tag": "vrn-schwetzingen",
//     "radius": 5000,
//     "lat": 49386300,
//     "lng": 8575600,
//     "id": 374
//   },
//   {
//     "city": "Ennetmoos",
//     "name": "nextbike-ennetmoos",
//     "url": "http://api.citybik.es/nextbike-ennetmoos.json",
//     "tag": "nextbike-ennetmoos",
//     "radius": 5000,
//     "lat": 46957300,
//     "lng": 8337700,
//     "id": 375
//   },
//   {
//     "city": "Eppelheim",
//     "name": "vrn-eppelheim",
//     "url": "http://api.citybik.es/vrn-eppelheim.json",
//     "tag": "vrn-eppelheim",
//     "radius": 5000,
//     "lat": 49402500,
//     "lng": 8633100,
//     "id": 376
//   },
//   {
//     "city": "Surrey",
//     "name": "nextbike-university-of-surrey",
//     "url": "http://api.citybik.es/nextbike-university-of-surrey.json",
//     "tag": "nextbike-university-of-surrey",
//     "radius": 5000,
//     "lat": 51242200,
//     "lng": -590594,
//     "id": 377
//   },
//   {
//     "city": "Swansea",
//     "name": "santander-cycles-swansea-swansea-university",
//     "url": "http://api.citybik.es/santander-cycles-swansea-swansea-university.json",
//     "tag": "santander-cycles-swansea-swansea-university",
//     "radius": 5000,
//     "lat": 51610600,
//     "lng": -3976400,
//     "id": 378
//   },
//   {
//     "city": "Erfurt",
//     "name": "nextbike-erfurt",
//     "url": "http://api.citybik.es/nextbike-erfurt.json",
//     "tag": "nextbike-erfurt",
//     "radius": 5000,
//     "lat": 50978500,
//     "lng": 11033400,
//     "id": 379
//   },
//   {
//     "city": "Banja Luka",
//     "name": "bl-bike-banja-luka",
//     "url": "http://api.citybik.es/bl-bike-banja-luka.json",
//     "tag": "bl-bike-banja-luka",
//     "radius": 5000,
//     "lat": 44775000,
//     "lng": 17199400,
//     "id": 380
//   },
//   {
//     "city": "Lahr",
//     "name": "lahr-pedelecs-lahr",
//     "url": "http://api.citybik.es/lahr-pedelecs-lahr.json",
//     "tag": "lahr-pedelecs-lahr",
//     "radius": 5000,
//     "lat": 48339600,
//     "lng": 7873760,
//     "id": 381
//   },
//   {
//     "city": "Odessa",
//     "name": "lviv-odessa",
//     "url": "http://api.citybik.es/lviv-odessa.json",
//     "tag": "lviv-odessa",
//     "radius": 5000,
//     "lat": 46463000,
//     "lng": 30704200,
//     "id": 382
//   },
//   {
//     "city": "Mönchengladbach",
//     "name": "santander-monchengladbach",
//     "url": "http://api.citybik.es/santander-monchengladbach.json",
//     "tag": "santander-monchengladbach",
//     "radius": 5000,
//     "lat": 51181700,
//     "lng": 6435780,
//     "id": 383
//   },
//   {
//     "city": "Celje",
//     "name": "nomagobikes-celje",
//     "url": "http://api.citybik.es/nomagobikes-celje.json",
//     "tag": "nomagobikes-celje",
//     "radius": 5000,
//     "lat": 46238800,
//     "lng": 15269300,
//     "id": 384
//   },
//   {
//     "city": "Bilbao",
//     "name": "bilbon-bizi",
//     "url": "http://api.citybik.es/bilbon-bizi.json",
//     "tag": "bilbon-bizi",
//     "radius": 5000,
//     "lat": 43275200,
//     "lng": -2935280,
//     "id": 385
//   },
//   {
//     "city": "Laško",
//     "name": "nomagobikes-lasko",
//     "url": "http://api.citybik.es/nomagobikes-lasko.json",
//     "tag": "nomagobikes-lasko",
//     "radius": 5000,
//     "lat": 46145800,
//     "lng": 15231200,
//     "id": 386
//   },
//   {
//     "city": "Lippstadt",
//     "name": "nextbike-lippstadt",
//     "url": "http://api.citybik.es/nextbike-lippstadt.json",
//     "tag": "nextbike-lippstadt",
//     "radius": 5000,
//     "lat": 51675500,
//     "lng": 8343940,
//     "id": 387
//   },
//   {
//     "city": "Žilina",
//     "name": "bikekia-zilina",
//     "url": "http://api.citybik.es/bikekia-zilina.json",
//     "tag": "bikekia-zilina",
//     "radius": 5000,
//     "lat": 49221700,
//     "lng": 18757200,
//     "id": 388
//   },
//   {
//     "city": "Vinnytsia",
//     "name": "nextbike-vinnytsia",
//     "url": "http://api.citybik.es/nextbike-vinnytsia.json",
//     "tag": "nextbike-vinnytsia",
//     "radius": 5000,
//     "lat": 49232800,
//     "lng": 28462500,
//     "id": 389
//   },
//   {
//     "city": "Bonn",
//     "name": "nextbike-bonn",
//     "url": "http://api.citybik.es/nextbike-bonn.json",
//     "tag": "nextbike-bonn",
//     "radius": 5000,
//     "lat": 50736700,
//     "lng": 7095410,
//     "id": 390
//   },
//   {
//     "city": "Koluszki",
//     "name": "rowerowe-lodzkie-rl-koluszki",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-koluszki.json",
//     "tag": "rowerowe-lodzkie-rl-koluszki",
//     "radius": 5000,
//     "lat": 51740100,
//     "lng": 19835000,
//     "id": 391
//   },
//   {
//     "city": "Łask",
//     "name": "rowerowe-lodzkie-rl-lask",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-lask.json",
//     "tag": "rowerowe-lodzkie-rl-lask",
//     "radius": 5000,
//     "lat": 51589300,
//     "lng": 19142000,
//     "id": 392
//   },
//   {
//     "city": "Łowicz",
//     "name": "rowerowe-lodzkie-rl-lowicz",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-lowicz.json",
//     "tag": "rowerowe-lodzkie-rl-lowicz",
//     "radius": 5000,
//     "lat": 52105700,
//     "lng": 19938100,
//     "id": 393
//   },
//   {
//     "city": "Pabianice",
//     "name": "rowerowe-lodzkie-rl-pabianice",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-pabianice.json",
//     "tag": "rowerowe-lodzkie-rl-pabianice",
//     "radius": 5000,
//     "lat": 51665100,
//     "lng": 19354800,
//     "id": 394
//   },
//   {
//     "city": "Sieradz",
//     "name": "rowerowe-lodzkie-rl-sieradz",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-sieradz.json",
//     "tag": "rowerowe-lodzkie-rl-sieradz",
//     "radius": 5000,
//     "lat": 51590200,
//     "lng": 18738200,
//     "id": 395
//   },
//   {
//     "city": "Skierniewice",
//     "name": "rowerowe-lodzkie-rl-skierniewice",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-skierniewice.json",
//     "tag": "rowerowe-lodzkie-rl-skierniewice",
//     "radius": 5000,
//     "lat": 51953900,
//     "lng": 20146900,
//     "id": 396
//   },
//   {
//     "city": "Zduńska Wola",
//     "name": "rowerowe-lodzkie-rl-zdunska-wola",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-zdunska-wola.json",
//     "tag": "rowerowe-lodzkie-rl-zdunska-wola",
//     "radius": 5000,
//     "lat": 51601100,
//     "lng": 18938000,
//     "id": 397
//   },
//   {
//     "city": "Zgierz",
//     "name": "rowerowe-lodzkie-rl-zgierz",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-zgierz.json",
//     "tag": "rowerowe-lodzkie-rl-zgierz",
//     "radius": 5000,
//     "lat": 51855100,
//     "lng": 19406800,
//     "id": 398
//   },
//   {
//     "city": "Kutno",
//     "name": "rowerowe-lodzkie-rl-kutno",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-kutno.json",
//     "tag": "rowerowe-lodzkie-rl-kutno",
//     "radius": 5000,
//     "lat": 52231700,
//     "lng": 19356400,
//     "id": 399
//   },
//   {
//     "city": "Łódź",
//     "name": "rowerowe-lodzkie-rl-lodz-rl",
//     "url": "http://api.citybik.es/rowerowe-lodzkie-rl-lodz-rl.json",
//     "tag": "rowerowe-lodzkie-rl-lodz-rl",
//     "radius": 5000,
//     "lat": 51767400,
//     "lng": 19457500,
//     "id": 400
//   },
//   {
//     "city": "Freiburg",
//     "name": "frelo-freiburg",
//     "url": "http://api.citybik.es/frelo-freiburg.json",
//     "tag": "frelo-freiburg",
//     "radius": 5000,
//     "lat": 47995800,
//     "lng": 7844530,
//     "id": 401
//   },
//   {
//     "city": "Trieste",
//     "name": "bicincitta-trieste",
//     "url": "http://api.citybik.es/bicincitta-trieste.json",
//     "tag": "bicincitta-trieste",
//     "radius": 5000,
//     "lat": 45649500,
//     "lng": 13776800,
//     "id": 402
//   },
//   {
//     "city": "Dresden",
//     "name": "mobibike-dresden",
//     "url": "http://api.citybik.es/mobibike-dresden.json",
//     "tag": "mobibike-dresden",
//     "radius": 5000,
//     "lat": 51053500,
//     "lng": 13738700,
//     "id": 403
//   },
//   {
//     "city": "Murmansk",
//     "name": "velobike-murmansk",
//     "url": "http://api.citybik.es/velobike-murmansk.json",
//     "tag": "velobike-murmansk",
//     "radius": 5000,
//     "lat": 68968000,
//     "lng": 33073999,
//     "id": 404
//   },
//   {
//     "city": "Nizhniy Novgorod",
//     "name": "velobike-nizhniy-novgorod",
//     "url": "http://api.citybik.es/velobike-nizhniy-novgorod.json",
//     "tag": "velobike-nizhniy-novgorod",
//     "radius": 5000,
//     "lat": 56194000,
//     "lng": 44003000,
//     "id": 405
//   },
//   {
//     "city": "Ivano Frankivsk",
//     "name": "nextbike-ivano-frankivsk",
//     "url": "http://api.citybik.es/nextbike-ivano-frankivsk.json",
//     "tag": "nextbike-ivano-frankivsk",
//     "radius": 5000,
//     "lat": 48928100,
//     "lng": 24710300,
//     "id": 406
//   },
//   {
//     "city": "Almaty",
//     "name": "almatybike",
//     "url": "http://api.citybik.es/almatybike.json",
//     "tag": "almatybike",
//     "radius": 5000,
//     "lat": 43239101,
//     "lng": 76926807,
//     "id": 407
//   },
//   {
//     "city": "Shymkent",
//     "name": "shymkentbike",
//     "url": "http://api.citybik.es/shymkentbike.json",
//     "tag": "shymkentbike",
//     "radius": 5000,
//     "lat": 42318400,
//     "lng": 69597800,
//     "id": 408
//   },
//   {
//     "city": "San Francisco Bay Area, CA",
//     "name": "bay-wheels",
//     "url": "http://api.citybik.es/bay-wheels.json",
//     "tag": "bay-wheels",
//     "radius": 5000,
//     "lat": 37714145,
//     "lng": -122250000,
//     "id": 409
//   },
//   {
//     "city": "Vannes",
//     "name": "veloceo",
//     "url": "http://api.citybik.es/veloceo.json",
//     "tag": "veloceo",
//     "radius": 5000,
//     "lat": 47655900,
//     "lng": -2760300,
//     "id": 410
//   },
//   {
//     "city": "Monaco",
//     "name": "monabike",
//     "url": "http://api.citybik.es/monabike.json",
//     "tag": "monabike",
//     "radius": 5000,
//     "lat": 43733333,
//     "lng": 7416667,
//     "id": 411
//   },
//   {
//     "city": "Tarbes, Lourdes",
//     "name": "tlp-velo",
//     "url": "http://api.citybik.es/tlp-velo.json",
//     "tag": "tlp-velo",
//     "radius": 5000,
//     "lat": 43230000,
//     "lng": 70000,
//     "id": 412
//   },
//   {
//     "city": "Reims",
//     "name": "zebullo",
//     "url": "http://api.citybik.es/zebullo.json",
//     "tag": "zebullo",
//     "radius": 5000,
//     "lat": 49262800,
//     "lng": 4034700,
//     "id": 413
//   },
//   {
//     "city": "Calais",
//     "name": "velectin",
//     "url": "http://api.citybik.es/velectin.json",
//     "tag": "velectin",
//     "radius": 5000,
//     "lat": 50948056,
//     "lng": 1856389,
//     "id": 414
//   },
//   {
//     "city": "Bourg-en-Bresse",
//     "name": "rubis-velo",
//     "url": "http://api.citybik.es/rubis-velo.json",
//     "tag": "rubis-velo",
//     "radius": 5000,
//     "lat": 46205600,
//     "lng": 5228900,
//     "id": 415
//   },
//   {
//     "city": "Niort",
//     "name": "tanlib",
//     "url": "http://api.citybik.es/tanlib.json",
//     "tag": "tanlib",
//     "radius": 5000,
//     "lat": 46325800,
//     "lng": -460600,
//     "id": 416
//   },
//   {
//     "city": "Marseillan",
//     "name": "marseillan",
//     "url": "http://api.citybik.es/marseillan.json",
//     "tag": "marseillan",
//     "radius": 5000,
//     "lat": 43357200,
//     "lng": 3528300,
//     "id": 417
//   },
//   {
//     "city": "Val d'Ille-Aubigné",
//     "name": "via-velo",
//     "url": "http://api.citybik.es/via-velo.json",
//     "tag": "via-velo",
//     "radius": 5000,
//     "lat": 48218100,
//     "lng": -1694700,
//     "id": 418
//   },
//   {
//     "city": "Saint-Nazaire",
//     "name": "velyceo",
//     "url": "http://api.citybik.es/velyceo.json",
//     "tag": "velyceo",
//     "radius": 5000,
//     "lat": 47280600,
//     "lng": -2208600,
//     "id": 419
//   },
//   {
//     "city": "Laon",
//     "name": "velocite-laon",
//     "url": "http://api.citybik.es/velocite-laon.json",
//     "tag": "velocite-laon",
//     "radius": 5000,
//     "lat": 49563900,
//     "lng": 3624400,
//     "id": 420
//   },
//   {
//     "city": "La Baule-Escoublac",
//     "name": "velo-baulois",
//     "url": "http://api.citybik.es/velo-baulois.json",
//     "tag": "velo-baulois",
//     "radius": 5000,
//     "lat": 47286700,
//     "lng": -2390800,
//     "id": 421
//   },
//   {
//     "city": "Troyes",
//     "name": "le-marcel",
//     "url": "http://api.citybik.es/le-marcel.json",
//     "tag": "le-marcel",
//     "radius": 5000,
//     "lat": 48299700,
//     "lng": 4079200,
//     "id": 422
//   },
//   {
//     "city": "Agen",
//     "name": "tempo-velo",
//     "url": "http://api.citybik.es/tempo-velo.json",
//     "tag": "tempo-velo",
//     "radius": 5000,
//     "lat": 44204900,
//     "lng": 621200,
//     "id": 423
//   },
//   {
//     "city": "Communauté d'agglomération Seine-Eure",
//     "name": "semo",
//     "url": "http://api.citybik.es/semo.json",
//     "tag": "semo",
//     "radius": 5000,
//     "lat": 49220000,
//     "lng": 1170000,
//     "id": 424
//   },
//   {
//     "city": "Soissons",
//     "name": "cyclovis",
//     "url": "http://api.citybik.es/cyclovis.json",
//     "tag": "cyclovis",
//     "radius": 5000,
//     "lat": 49381700,
//     "lng": 3323600,
//     "id": 425
//   },
//   {
//     "city": "La Chantrerie, Nantes",
//     "name": "chantrerie-captainbike",
//     "url": "http://api.citybik.es/chantrerie-captainbike.json",
//     "tag": "chantrerie-captainbike",
//     "radius": 5000,
//     "lat": 47286820,
//     "lng": -1521091,
//     "id": 426
//   },
//   {
//     "city": "Paris-Saclay",
//     "name": "saclay-captainbike",
//     "url": "http://api.citybik.es/saclay-captainbike.json",
//     "tag": "saclay-captainbike",
//     "radius": 5000,
//     "lat": 48709808,
//     "lng": 2211366,
//     "id": 427
//   },
//   {
//     "city": "Esch-sur-alzette",
//     "name": "velok",
//     "url": "http://api.citybik.es/velok.json",
//     "tag": "velok",
//     "radius": 5000,
//     "lat": 49502400,
//     "lng": 5972200,
//     "id": 428
//   },
//   {
//     "city": "Wien",
//     "name": "wienmobil-rad",
//     "url": "http://api.citybik.es/wienmobil-rad.json",
//     "tag": "wienmobil-rad",
//     "radius": 5000,
//     "lat": 48208174,
//     "lng": 16373818,
//     "id": 429
//   },
//   {
//     "city": "Verona",
//     "name": "bikeverona",
//     "url": "http://api.citybik.es/bikeverona.json",
//     "tag": "bikeverona",
//     "radius": 5000,
//     "lat": 45438611,
//     "lng": 10992778,
//     "id": 430
//   },
//   {
//     "city": "Kiel",
//     "name": "sprottenflotte-kiel",
//     "url": "http://api.citybik.es/sprottenflotte-kiel.json",
//     "tag": "sprottenflotte-kiel",
//     "radius": 5000,
//     "lat": 54283700,
//     "lng": 10132130,
//     "id": 431
//   },
//   {
//     "city": "Montpellier",
//     "name": "velomagg",
//     "url": "http://api.citybik.es/velomagg.json",
//     "tag": "velomagg",
//     "radius": 5000,
//     "lat": 43611900,
//     "lng": 3877200,
//     "id": 432
//   },
//   {
//     "city": "Las Vegas, NV",
//     "name": "rtc-bike-share",
//     "url": "http://api.citybik.es/rtc-bike-share.json",
//     "tag": "rtc-bike-share",
//     "radius": 5000,
//     "lat": 36143800,
//     "lng": -115156820,
//     "id": 433
//   },
//   {
//     "city": "Oklahoma, OK",
//     "name": "spokies",
//     "url": "http://api.citybik.es/spokies.json",
//     "tag": "spokies",
//     "radius": 5000,
//     "lat": 35464360,
//     "lng": -97508880,
//     "id": 434
//   },
//   {
//     "city": "León",
//     "name": "alsa-nextbike-leon",
//     "url": "http://api.citybik.es/alsa-nextbike-leon.json",
//     "tag": "alsa-nextbike-leon",
//     "radius": 5000,
//     "lat": 42598726,
//     "lng": -5567095,
//     "id": 435
//   },
//   {
//     "city": "Strasbourg",
//     "name": "velhop",
//     "url": "http://api.citybik.es/velhop.json",
//     "tag": "velhop",
//     "radius": 5000,
//     "lat": 48583611,
//     "lng": 7748056,
//     "id": 436
//   },
//   {
//     "city": "Belfort",
//     "name": "optymo",
//     "url": "http://api.citybik.es/optymo.json",
//     "tag": "optymo",
//     "radius": 5000,
//     "lat": 47641111,
//     "lng": 6849444,
//     "id": 437
//   },
//   {
//     "city": "Prostejov",
//     "name": "nextbike-prostejov",
//     "url": "http://api.citybik.es/nextbike-prostejov.json",
//     "tag": "nextbike-prostejov",
//     "radius": 5000,
//     "lat": 49472200,
//     "lng": 17105500,
//     "id": 438
//   },
//   {
//     "city": "Focșani",
//     "name": "nextbike-focsani",
//     "url": "http://api.citybik.es/nextbike-focsani.json",
//     "tag": "nextbike-focsani",
//     "radius": 5000,
//     "lat": 45694700,
//     "lng": 27185100,
//     "id": 439
//   },
//   {
//     "city": "Vukovar",
//     "name": "grad-vukovar",
//     "url": "http://api.citybik.es/grad-vukovar.json",
//     "tag": "grad-vukovar",
//     "radius": 5000,
//     "lat": 45357500,
//     "lng": 18989500,
//     "id": 440
//   },
//   {
//     "city": "Zaprešić",
//     "name": "grad-zapresic",
//     "url": "http://api.citybik.es/grad-zapresic.json",
//     "tag": "grad-zapresic",
//     "radius": 5000,
//     "lat": 45862200,
//     "lng": 15804900,
//     "id": 441
//   },
//   {
//     "city": "Brunel University",
//     "name": "santander-brunel",
//     "url": "http://api.citybik.es/santander-brunel.json",
//     "tag": "santander-brunel",
//     "radius": 5000,
//     "lat": 51546300,
//     "lng": -480480,
//     "id": 442
//   },
//   {
//     "city": "Pobiedziska",
//     "name": "pobiedziski-rower-gminny-pobiedziska",
//     "url": "http://api.citybik.es/pobiedziski-rower-gminny-pobiedziska.json",
//     "tag": "pobiedziski-rower-gminny-pobiedziska",
//     "radius": 5000,
//     "lat": 52476500,
//     "lng": 17286600,
//     "id": 443
//   },
//   {
//     "city": "Piotrków Trybunalski",
//     "name": "piotrkowski-rower-miejski-piotrkow-trybunalski",
//     "url": "http://api.citybik.es/piotrkowski-rower-miejski-piotrkow-trybunalski.json",
//     "tag": "piotrkowski-rower-miejski-piotrkow-trybunalski",
//     "radius": 5000,
//     "lat": 51397500,
//     "lng": 19677900,
//     "id": 444
//   },
//   {
//     "city": "Walldorf",
//     "name": "sap-walldorf",
//     "url": "http://api.citybik.es/sap-walldorf.json",
//     "tag": "sap-walldorf",
//     "radius": 5000,
//     "lat": 49294500,
//     "lng": 8623240,
//     "id": 445
//   },
//   {
//     "city": "Pitomača",
//     "name": "opcina-pitomaca",
//     "url": "http://api.citybik.es/opcina-pitomaca.json",
//     "tag": "opcina-pitomaca",
//     "radius": 5000,
//     "lat": 45907700,
//     "lng": 17262200,
//     "id": 446
//   },
//   {
//     "city": "Ljubljana",
//     "name": "nomago-ljubljana",
//     "url": "http://api.citybik.es/nomago-ljubljana.json",
//     "tag": "nomago-ljubljana",
//     "radius": 5000,
//     "lat": 46057700,
//     "lng": 14501300,
//     "id": 447
//   },
//   {
//     "city": "Pielgrzymka",
//     "name": "system-roweru-gminnego-pielgrzymka",
//     "url": "http://api.citybik.es/system-roweru-gminnego-pielgrzymka.json",
//     "tag": "system-roweru-gminnego-pielgrzymka",
//     "radius": 5000,
//     "lat": 51118500,
//     "lng": 15815300,
//     "id": 448
//   },
//   {
//     "city": "RVK e-Bike",
//     "name": "rvk",
//     "url": "http://api.citybik.es/rvk.json",
//     "tag": "rvk",
//     "radius": 5000,
//     "lat": 50706900,
//     "lng": 6876070,
//     "id": 449
//   },
//   {
//     "city": "Leverkusen",
//     "name": "wupsi",
//     "url": "http://api.citybik.es/wupsi.json",
//     "tag": "wupsi",
//     "radius": 5000,
//     "lat": 51073200,
//     "lng": 7008140,
//     "id": 450
//   },
//   {
//     "city": "Gran Canaria",
//     "name": "lovesharing-canary-islands-gran-canaria",
//     "url": "http://api.citybik.es/lovesharing-canary-islands-gran-canaria.json",
//     "tag": "lovesharing-canary-islands-gran-canaria",
//     "radius": 5000,
//     "lat": 27815400,
//     "lng": -15518200,
//     "id": 451
//   },
//   {
//     "city": "Lanzarote",
//     "name": "lovesharing-canary-islands-lanzarote",
//     "url": "http://api.citybik.es/lovesharing-canary-islands-lanzarote.json",
//     "tag": "lovesharing-canary-islands-lanzarote",
//     "radius": 5000,
//     "lat": 29049100,
//     "lng": -13572900,
//     "id": 452
//   },
//   {
//     "city": "Fuerteventura",
//     "name": "lovesharing-canary-islands-fuerteventura",
//     "url": "http://api.citybik.es/lovesharing-canary-islands-fuerteventura.json",
//     "tag": "lovesharing-canary-islands-fuerteventura",
//     "radius": 5000,
//     "lat": 28358400,
//     "lng": -14064000,
//     "id": 453
//   },
//   {
//     "city": "Nürnberg",
//     "name": "vagrad",
//     "url": "http://api.citybik.es/vagrad.json",
//     "tag": "vagrad",
//     "radius": 5000,
//     "lat": 49448700,
//     "lng": 11079400,
//     "id": 454
//   },
//   {
//     "city": "Split",
//     "name": "grad-split",
//     "url": "http://api.citybik.es/grad-split.json",
//     "tag": "grad-split",
//     "radius": 5000,
//     "lat": 43516200,
//     "lng": 16463700,
//     "id": 455
//   },
//   {
//     "city": "Solin",
//     "name": "grad-split-solin",
//     "url": "http://api.citybik.es/grad-split-solin.json",
//     "tag": "grad-split-solin",
//     "radius": 5000,
//     "lat": 43544100,
//     "lng": 16483300,
//     "id": 456
//   },
//   {
//     "city": "Općina Klis",
//     "name": "grad-split-opcina-klis",
//     "url": "http://api.citybik.es/grad-split-opcina-klis.json",
//     "tag": "grad-split-opcina-klis",
//     "radius": 5000,
//     "lat": 43560500,
//     "lng": 16526900,
//     "id": 457
//   },
//   {
//     "city": "Općina Hrvace",
//     "name": "grad-split-opcina-hrvace",
//     "url": "http://api.citybik.es/grad-split-opcina-hrvace.json",
//     "tag": "grad-split-opcina-hrvace",
//     "radius": 5000,
//     "lat": 43755300,
//     "lng": 16619700,
//     "id": 458
//   },
//   {
//     "city": "Općina Otok Dalmatinski",
//     "name": "grad-split-opcina-otok-dalmatinski",
//     "url": "http://api.citybik.es/grad-split-opcina-otok-dalmatinski.json",
//     "tag": "grad-split-opcina-otok-dalmatinski",
//     "radius": 5000,
//     "lat": 43688900,
//     "lng": 16736100,
//     "id": 459
//   },
//   {
//     "city": "Sinj",
//     "name": "grad-split-sinj",
//     "url": "http://api.citybik.es/grad-split-sinj.json",
//     "tag": "grad-split-sinj",
//     "radius": 5000,
//     "lat": 43703100,
//     "lng": 16636399,
//     "id": 460
//   },
//   {
//     "city": "Podstrana",
//     "name": "grad-split-podstrana",
//     "url": "http://api.citybik.es/grad-split-podstrana.json",
//     "tag": "grad-split-podstrana",
//     "radius": 5000,
//     "lat": 43493400,
//     "lng": 16559800,
//     "id": 461
//   },
//   {
//     "city": "Trogir",
//     "name": "grad-split-trogir",
//     "url": "http://api.citybik.es/grad-split-trogir.json",
//     "tag": "grad-split-trogir",
//     "radius": 5000,
//     "lat": 43523400,
//     "lng": 16247599,
//     "id": 462
//   },
//   {
//     "city": "Ostrava",
//     "name": "nextbike-ostrava",
//     "url": "http://api.citybik.es/nextbike-ostrava.json",
//     "tag": "nextbike-ostrava",
//     "radius": 5000,
//     "lat": 49834400,
//     "lng": 18282300,
//     "id": 463
//   },
//   {
//     "city": "Hlučín",
//     "name": "nextbike-ostrava-hlucin",
//     "url": "http://api.citybik.es/nextbike-ostrava-hlucin.json",
//     "tag": "nextbike-ostrava-hlucin",
//     "radius": 5000,
//     "lat": 49898000,
//     "lng": 18192300,
//     "id": 464
//   },
//   {
//     "city": "Vřesina",
//     "name": "nextbike-ostrava-vresina",
//     "url": "http://api.citybik.es/nextbike-ostrava-vresina.json",
//     "tag": "nextbike-ostrava-vresina",
//     "radius": 5000,
//     "lat": 49825000,
//     "lng": 18120600,
//     "id": 465
//   },
//   {
//     "city": "Ibiza-City",
//     "name": "ibizi-ibiza-city",
//     "url": "http://api.citybik.es/ibizi-ibiza-city.json",
//     "tag": "ibizi-ibiza-city",
//     "radius": 5000,
//     "lat": 38906600,
//     "lng": 1420460,
//     "id": 466
//   },
//   {
//     "city": "Hannover",
//     "name": "sprintrad",
//     "url": "http://api.citybik.es/sprintrad.json",
//     "tag": "sprintrad",
//     "radius": 5000,
//     "lat": 52372100,
//     "lng": 9735690,
//     "id": 467
//   },
//   {
//     "city": "Komorniki",
//     "name": "komornicki-system-rowerowy-komorniki",
//     "url": "http://api.citybik.es/komornicki-system-rowerowy-komorniki.json",
//     "tag": "komornicki-system-rowerowy-komorniki",
//     "radius": 5000,
//     "lat": 52334700,
//     "lng": 16809400,
//     "id": 468
//   },
//   {
//     "city": "Havířov",
//     "name": "nextbike-havirov",
//     "url": "http://api.citybik.es/nextbike-havirov.json",
//     "tag": "nextbike-havirov",
//     "radius": 5000,
//     "lat": 49779900,
//     "lng": 18432800,
//     "id": 469
//   },
//   {
//     "city": "Berounsko",
//     "name": "nextbike-berounsko",
//     "url": "http://api.citybik.es/nextbike-berounsko.json",
//     "tag": "nextbike-berounsko",
//     "radius": 5000,
//     "lat": 49961600,
//     "lng": 14064000,
//     "id": 470
//   },
//   {
//     "city": "Graben",
//     "name": "ready4green-graben",
//     "url": "http://api.citybik.es/ready4green-graben.json",
//     "tag": "ready4green-graben",
//     "radius": 5000,
//     "lat": 51124200,
//     "lng": 10898400,
//     "id": 471
//   },
//   {
//     "city": "Olesno",
//     "name": "oleski-rower-miejski-olesno",
//     "url": "http://api.citybik.es/oleski-rower-miejski-olesno.json",
//     "tag": "oleski-rower-miejski-olesno",
//     "radius": 5000,
//     "lat": 50877300,
//     "lng": 18421200,
//     "id": 472
//   },
//   {
//     "city": "Göteborg",
//     "name": "styr-staell-goeteborg",
//     "url": "http://api.citybik.es/styr-staell-goeteborg.json",
//     "tag": "styr-staell-goeteborg",
//     "radius": 5000,
//     "lat": 57690200,
//     "lng": 11988100,
//     "id": 473
//   },
//   {
//     "city": "Braunschweig",
//     "name": "nibelungen-bike-braunschweig",
//     "url": "http://api.citybik.es/nibelungen-bike-braunschweig.json",
//     "tag": "nibelungen-bike-braunschweig",
//     "radius": 5000,
//     "lat": 52259700,
//     "lng": 10530700,
//     "id": 474
//   },
//   {
//     "city": "Brno",
//     "name": "nextbike-brno",
//     "url": "http://api.citybik.es/nextbike-brno.json",
//     "tag": "nextbike-brno",
//     "radius": 5000,
//     "lat": 49191100,
//     "lng": 16614799,
//     "id": 475
//   },
//   {
//     "city": "Kuřim",
//     "name": "nextbike-brno-kurim",
//     "url": "http://api.citybik.es/nextbike-brno-kurim.json",
//     "tag": "nextbike-brno-kurim",
//     "radius": 5000,
//     "lat": 49299400,
//     "lng": 16536800,
//     "id": 476
//   },
//   {
//     "city": "Praha",
//     "name": "nextbike-praha",
//     "url": "http://api.citybik.es/nextbike-praha.json",
//     "tag": "nextbike-praha",
//     "radius": 5000,
//     "lat": 50059200,
//     "lng": 14576100,
//     "id": 477
//   },
//   {
//     "city": "Říčany",
//     "name": "nextbike-praha-ricany",
//     "url": "http://api.citybik.es/nextbike-praha-ricany.json",
//     "tag": "nextbike-praha-ricany",
//     "radius": 5000,
//     "lat": 49997600,
//     "lng": 14668500,
//     "id": 478
//   },
//   {
//     "city": "Olomouc",
//     "name": "nextbike-olomouc",
//     "url": "http://api.citybik.es/nextbike-olomouc.json",
//     "tag": "nextbike-olomouc",
//     "radius": 5000,
//     "lat": 49592900,
//     "lng": 17245900,
//     "id": 479
//   },
//   {
//     "city": "Kladno",
//     "name": "nextbike-kladno",
//     "url": "http://api.citybik.es/nextbike-kladno.json",
//     "tag": "nextbike-kladno",
//     "radius": 5000,
//     "lat": 50143500,
//     "lng": 14108200,
//     "id": 480
//   },
//   {
//     "city": "Opava",
//     "name": "nextbike-opava",
//     "url": "http://api.citybik.es/nextbike-opava.json",
//     "tag": "nextbike-opava",
//     "radius": 5000,
//     "lat": 49928900,
//     "lng": 18263400,
//     "id": 481
//   },
//   {
//     "city": "Bielefeld",
//     "name": "nextbike-bielefeld",
//     "url": "http://api.citybik.es/nextbike-bielefeld.json",
//     "tag": "nextbike-bielefeld",
//     "radius": 5000,
//     "lat": 52025700,
//     "lng": 8532860,
//     "id": 482
//   },
//   {
//     "city": "San Luis Potosi",
//     "name": "yoy-san-luis-potosi",
//     "url": "http://api.citybik.es/yoy-san-luis-potosi.json",
//     "tag": "yoy-san-luis-potosi",
//     "radius": 5000,
//     "lat": 22438000,
//     "lng": -100514000,
//     "id": 483
//   },
//   {
//     "city": "Cancún",
//     "name": "yoy-san-luis-potosi-cancun",
//     "url": "http://api.citybik.es/yoy-san-luis-potosi-cancun.json",
//     "tag": "yoy-san-luis-potosi-cancun",
//     "radius": 5000,
//     "lat": 21167500,
//     "lng": -86849800,
//     "id": 484
//   },
//   {
//     "city": "Bergisches e-Bike",
//     "name": "bergisches-e-bike",
//     "url": "http://api.citybik.es/bergisches-e-bike.json",
//     "tag": "bergisches-e-bike",
//     "radius": 5000,
//     "lat": 51019200,
//     "lng": 7180250,
//     "id": 485
//   },
//   {
//     "city": "Pardubice",
//     "name": "nextbike-pardubice",
//     "url": "http://api.citybik.es/nextbike-pardubice.json",
//     "tag": "nextbike-pardubice",
//     "radius": 5000,
//     "lat": 50034300,
//     "lng": 15781200,
//     "id": 486
//   },
//   {
//     "city": "Hradec Králové",
//     "name": "nextbike-hradec-kralove",
//     "url": "http://api.citybik.es/nextbike-hradec-kralove.json",
//     "tag": "nextbike-hradec-kralove",
//     "radius": 5000,
//     "lat": 50207900,
//     "lng": 15833400,
//     "id": 487
//   },
//   {
//     "city": "Mladá Boleslav",
//     "name": "nextbike-mladoboleslavsko-mlada-boleslav",
//     "url": "http://api.citybik.es/nextbike-mladoboleslavsko-mlada-boleslav.json",
//     "tag": "nextbike-mladoboleslavsko-mlada-boleslav",
//     "radius": 5000,
//     "lat": 50427800,
//     "lng": 14899900,
//     "id": 488
//   },
//   {
//     "city": "Mnichovo Hradiště",
//     "name": "nextbike-mladoboleslavsko-mnichovo-hradiste",
//     "url": "http://api.citybik.es/nextbike-mladoboleslavsko-mnichovo-hradiste.json",
//     "tag": "nextbike-mladoboleslavsko-mnichovo-hradiste",
//     "radius": 5000,
//     "lat": 50521800,
//     "lng": 14974100,
//     "id": 489
//   },
//   {
//     "city": "Bad Oeynhausen",
//     "name": "oeynrad-bad-oeynhausen",
//     "url": "http://api.citybik.es/oeynrad-bad-oeynhausen.json",
//     "tag": "oeynrad-bad-oeynhausen",
//     "radius": 5000,
//     "lat": 52205100,
//     "lng": 8800740,
//     "id": 490
//   },
//   {
//     "city": "RSVG",
//     "name": "rsvg-bike",
//     "url": "http://api.citybik.es/rsvg-bike.json",
//     "tag": "rsvg-bike",
//     "radius": 5000,
//     "lat": 50766900,
//     "lng": 7374570,
//     "id": 491
//   },
//   {
//     "city": "Linz",
//     "name": "citybikelinz",
//     "url": "http://api.citybik.es/citybikelinz.json",
//     "tag": "citybikelinz",
//     "radius": 5000,
//     "lat": 48300300,
//     "lng": 14284300,
//     "id": 492
//   },
//   {
//     "city": "Drobeta",
//     "name": "velopark-drobeta",
//     "url": "http://api.citybik.es/velopark-drobeta.json",
//     "tag": "velopark-drobeta",
//     "radius": 5000,
//     "lat": 44632600,
//     "lng": 22656400,
//     "id": 493
//   },
//   {
//     "city": "Nova Gorica",
//     "name": "nomago-gorica",
//     "url": "http://api.citybik.es/nomago-gorica.json",
//     "tag": "nomago-gorica",
//     "radius": 5000,
//     "lat": 45957600,
//     "lng": 13640600,
//     "id": 494
//   },
//   {
//     "city": "Saturn",
//     "name": "saturn",
//     "url": "http://api.citybik.es/saturn.json",
//     "tag": "saturn",
//     "radius": 5000,
//     "lat": 43820000,
//     "lng": 28744500,
//     "id": 495
//   },
//   {
//     "city": "Frýdek-Místek",
//     "name": "nextbike-frydek-mistek",
//     "url": "http://api.citybik.es/nextbike-frydek-mistek.json",
//     "tag": "nextbike-frydek-mistek",
//     "radius": 5000,
//     "lat": 49683200,
//     "lng": 18345700,
//     "id": 496
//   },
//   {
//     "city": "Uherské Hradiště",
//     "name": "nextbike-uherske-hradiste",
//     "url": "http://api.citybik.es/nextbike-uherske-hradiste.json",
//     "tag": "nextbike-uherske-hradiste",
//     "radius": 5000,
//     "lat": 49067800,
//     "lng": 17466500,
//     "id": 497
//   },
//   {
//     "city": "Zlín",
//     "name": "nextbike-zlin",
//     "url": "http://api.citybik.es/nextbike-zlin.json",
//     "tag": "nextbike-zlin",
//     "radius": 5000,
//     "lat": 49238000,
//     "lng": 17678800,
//     "id": 498
//   },
//   {
//     "city": "Krnov",
//     "name": "nextbike-krnov",
//     "url": "http://api.citybik.es/nextbike-krnov.json",
//     "tag": "nextbike-krnov",
//     "radius": 5000,
//     "lat": 50070300,
//     "lng": 17883700,
//     "id": 499
//   },
//   {
//     "city": "Eifel e-Bike",
//     "name": "eifel",
//     "url": "http://api.citybik.es/eifel.json",
//     "tag": "eifel",
//     "radius": 5000,
//     "lat": 50577100,
//     "lng": 6646730,
//     "id": 500
//   },
//   {
//     "city": "Rychnovsko",
//     "name": "nextbike-rychnovsko",
//     "url": "http://api.citybik.es/nextbike-rychnovsko.json",
//     "tag": "nextbike-rychnovsko",
//     "radius": 5000,
//     "lat": 50166800,
//     "lng": 16282800,
//     "id": 501
//   },
//   {
//     "city": "Písek",
//     "name": "nextbike-pisek",
//     "url": "http://api.citybik.es/nextbike-pisek.json",
//     "tag": "nextbike-pisek",
//     "radius": 5000,
//     "lat": 49305100,
//     "lng": 14146300,
//     "id": 502
//   },
//   {
//     "city": "Jihlava",
//     "name": "nextbike-jihlava",
//     "url": "http://api.citybik.es/nextbike-jihlava.json",
//     "tag": "nextbike-jihlava",
//     "radius": 5000,
//     "lat": 49407800,
//     "lng": 15606100,
//     "id": 503
//   },
//   {
//     "city": "Zagorje ob Savi",
//     "name": "nomago-zanaprej",
//     "url": "http://api.citybik.es/nomago-zanaprej.json",
//     "tag": "nomago-zanaprej",
//     "radius": 5000,
//     "lat": 46139200,
//     "lng": 14978500,
//     "id": 504
//   },
//   {
//     "city": "Sokołów Podlaski",
//     "name": "rower-powiatowy-sokolow-podlaski",
//     "url": "http://api.citybik.es/rower-powiatowy-sokolow-podlaski.json",
//     "tag": "rower-powiatowy-sokolow-podlaski",
//     "radius": 5000,
//     "lat": 52408200,
//     "lng": 22252500,
//     "id": 505
//   },
//   {
//     "city": "Bergamo",
//     "name": "nextbike-bergamo",
//     "url": "http://api.citybik.es/nextbike-bergamo.json",
//     "tag": "nextbike-bergamo",
//     "radius": 5000,
//     "lat": 45698600,
//     "lng": 9675670,
//     "id": 506
//   },
//   {
//     "city": "Osijek",
//     "name": "emobi-osijek",
//     "url": "http://api.citybik.es/emobi-osijek.json",
//     "tag": "emobi-osijek",
//     "radius": 5000,
//     "lat": 45554000,
//     "lng": 18694300,
//     "id": 507
//   },
//   {
//     "city": "Scandicci",
//     "name": "arval-scandicci",
//     "url": "http://api.citybik.es/arval-scandicci.json",
//     "tag": "arval-scandicci",
//     "radius": 5000,
//     "lat": 43770100,
//     "lng": 11159200,
//     "id": 508
//   },
//   {
//     "city": "Oldenburg",
//     "name": "nextbike-oldenburg",
//     "url": "http://api.citybik.es/nextbike-oldenburg.json",
//     "tag": "nextbike-oldenburg",
//     "radius": 5000,
//     "lat": 53144800,
//     "lng": 8224850,
//     "id": 509
//   },
//   {
//     "city": "Urdaibai",
//     "name": "nextbike-urdaibai",
//     "url": "http://api.citybik.es/nextbike-urdaibai.json",
//     "tag": "nextbike-urdaibai",
//     "radius": 5000,
//     "lat": 43395000,
//     "lng": -2688150,
//     "id": 510
//   },
//   {
//     "city": "MV-Rad",
//     "name": "mvrad-hq",
//     "url": "http://api.citybik.es/mvrad-hq.json",
//     "tag": "mvrad-hq",
//     "radius": 5000,
//     "lat": 53670700,
//     "lng": 12425500,
//     "id": 511
//   },
//   {
//     "city": "Anklam",
//     "name": "mvrad-anklam",
//     "url": "http://api.citybik.es/mvrad-anklam.json",
//     "tag": "mvrad-anklam",
//     "radius": 5000,
//     "lat": 53861400,
//     "lng": 13690700,
//     "id": 512
//   },
//   {
//     "city": "Greifswald (StadtRad)",
//     "name": "greifswald",
//     "url": "http://api.citybik.es/greifswald.json",
//     "tag": "greifswald",
//     "radius": 5000,
//     "lat": 54096100,
//     "lng": 13378700,
//     "id": 513
//   },
//   {
//     "city": "Dvůr Králové",
//     "name": "nextbike-dvur-kralove",
//     "url": "http://api.citybik.es/nextbike-dvur-kralove.json",
//     "tag": "nextbike-dvur-kralove",
//     "radius": 5000,
//     "lat": 50427800,
//     "lng": 15816200,
//     "id": 514
//   },
//   {
//     "city": "Kufstein",
//     "name": "vvtregiorad-kufstein",
//     "url": "http://api.citybik.es/vvtregiorad-kufstein.json",
//     "tag": "vvtregiorad-kufstein",
//     "radius": 5000,
//     "lat": 47583000,
//     "lng": 12169200,
//     "id": 515
//   },
//   {
//     "city": "Ellmau",
//     "name": "vvtregiorad-ellmau",
//     "url": "http://api.citybik.es/vvtregiorad-ellmau.json",
//     "tag": "vvtregiorad-ellmau",
//     "radius": 5000,
//     "lat": 47513400,
//     "lng": 12302500,
//     "id": 516
//   },
//   {
//     "city": "Chełm",
//     "name": "ski-rower-chelm",
//     "url": "http://api.citybik.es/ski-rower-chelm.json",
//     "tag": "ski-rower-chelm",
//     "radius": 5000,
//     "lat": 51131800,
//     "lng": 23475500,
//     "id": 517
//   },
//   {
//     "city": "Vrchlabí",
//     "name": "nextbike-vrchlabi",
//     "url": "http://api.citybik.es/nextbike-vrchlabi.json",
//     "tag": "nextbike-vrchlabi",
//     "radius": 5000,
//     "lat": 50622200,
//     "lng": 15612600,
//     "id": 518
//   },
//   {
//     "city": "Winsen (Luhe)",
//     "name": "winsenrad",
//     "url": "http://api.citybik.es/winsenrad.json",
//     "tag": "winsenrad",
//     "radius": 5000,
//     "lat": 53354700,
//     "lng": 10206700,
//     "id": 519
//   },
//   {
//     "city": "Portorož",
//     "name": "nomago-portoroz",
//     "url": "http://api.citybik.es/nomago-portoroz.json",
//     "tag": "nomago-portoroz",
//     "radius": 5000,
//     "lat": 45505400,
//     "lng": 13597900,
//     "id": 520
//   },
//   {
//     "city": "Landau in der Pfalz",
//     "name": "vrn-landau",
//     "url": "http://api.citybik.es/vrn-landau.json",
//     "tag": "vrn-landau",
//     "radius": 5000,
//     "lat": 49197500,
//     "lng": 8116930,
//     "id": 521
//   },
//   {
//     "city": "Aachen",
//     "name": "velocity-aachen",
//     "url": "http://api.citybik.es/velocity-aachen.json",
//     "tag": "velocity-aachen",
//     "radius": 5000,
//     "lat": 50776667,
//     "lng": 6083611,
//     "id": 522
//   },
//   {
//     "city": "Québec",
//     "name": "avelo-quebec",
//     "url": "http://api.citybik.es/avelo-quebec.json",
//     "tag": "avelo-quebec",
//     "radius": 5000,
//     "lat": 46813050,
//     "lng": -71216800,
//     "id": 523
//   },
//   {
//     "city": "Saguenay",
//     "name": "acces-velo-saguenay",
//     "url": "http://api.citybik.es/acces-velo-saguenay.json",
//     "tag": "acces-velo-saguenay",
//     "radius": 5000,
//     "lat": 48433333,
//     "lng": -71083333,
//     "id": 524
//   },
//   {
//     "city": "Epinal",
//     "name": "vilvolt",
//     "url": "http://api.citybik.es/vilvolt.json",
//     "tag": "vilvolt",
//     "radius": 5000,
//     "lat": 48183300,
//     "lng": 6450800,
//     "id": 525
//   },
//   {
//     "city": "Saint-Brieuc",
//     "name": "velobaie",
//     "url": "http://api.citybik.es/velobaie.json",
//     "tag": "velobaie",
//     "radius": 5000,
//     "lat": 48514000,
//     "lng": -2765000,
//     "id": 526
//   },
//   {
//     "city": "Gent",
//     "name": "donkey-gh",
//     "url": "http://api.citybik.es/donkey-gh.json",
//     "tag": "donkey-gh",
//     "radius": 5000,
//     "lat": 51050000,
//     "lng": 3730300,
//     "id": 527
//   },
//   {
//     "city": "Maribor",
//     "name": "mbajk",
//     "url": "http://api.citybik.es/mbajk.json",
//     "tag": "mbajk",
//     "radius": 5000,
//     "lat": 46554700,
//     "lng": 15645900,
//     "id": 528
//   },
//   {
//     "city": "Zürich",
//     "name": "publibike-zuerich",
//     "url": "http://api.citybik.es/publibike-zuerich.json",
//     "tag": "publibike-zuerich",
//     "radius": 5000,
//     "lat": 47387280,
//     "lng": 8537670,
//     "id": 529
//   },
//   {
//     "city": "Sierre",
//     "name": "publibike-sierre",
//     "url": "http://api.citybik.es/publibike-sierre.json",
//     "tag": "publibike-sierre",
//     "radius": 5000,
//     "lat": 46289860,
//     "lng": 7531940,
//     "id": 530
//   },
//   {
//     "city": "Nyon",
//     "name": "publibike-region-de-nyon",
//     "url": "http://api.citybik.es/publibike-region-de-nyon.json",
//     "tag": "publibike-region-de-nyon",
//     "radius": 5000,
//     "lat": 46381706,
//     "lng": 6240311,
//     "id": 531
//   },
//   {
//     "city": "Bern",
//     "name": "publibike-bern",
//     "url": "http://api.citybik.es/publibike-bern.json",
//     "tag": "publibike-bern",
//     "radius": 5000,
//     "lat": 46948410,
//     "lng": 7437670,
//     "id": 532
//   },
//   {
//     "city": "Lugano",
//     "name": "publibike-sottoceneri-ti",
//     "url": "http://api.citybik.es/publibike-sottoceneri-ti.json",
//     "tag": "publibike-sottoceneri-ti",
//     "radius": 5000,
//     "lat": 46004910,
//     "lng": 8952440,
//     "id": 533
//   },
//   {
//     "city": "Fribourg",
//     "name": "publibike-fribourg",
//     "url": "http://api.citybik.es/publibike-fribourg.json",
//     "tag": "publibike-fribourg",
//     "radius": 5000,
//     "lat": 46805708,
//     "lng": 7160339,
//     "id": 534
//   },
//   {
//     "city": "Lausanne",
//     "name": "publibike-lausanne-morges",
//     "url": "http://api.citybik.es/publibike-lausanne-morges.json",
//     "tag": "publibike-lausanne-morges",
//     "radius": 5000,
//     "lat": 46516649,
//     "lng": 6629480,
//     "id": 535
//   },
//   {
//     "city": "Sion",
//     "name": "publibike-sion",
//     "url": "http://api.citybik.es/publibike-sion.json",
//     "tag": "publibike-sion",
//     "radius": 5000,
//     "lat": 46228227,
//     "lng": 7358901,
//     "id": 536
//   },
//   {
//     "city": "Rouen",
//     "name": "lovelolibreservice",
//     "url": "http://api.citybik.es/lovelolibreservice.json",
//     "tag": "lovelolibreservice",
//     "radius": 5000,
//     "lat": 49443255,
//     "lng": 1099982,
//     "id": 537
//   },
//   {
//     "city": "Waterford",
//     "name": "waterford",
//     "url": "http://api.citybik.es/waterford.json",
//     "tag": "waterford",
//     "radius": 5000,
//     "lat": 52247504,
//     "lng": -7113029,
//     "id": 538
//   },
//   {
//     "city": "Loutraki",
//     "name": "cyclopolis-loutraki",
//     "url": "http://api.citybik.es/cyclopolis-loutraki.json",
//     "tag": "cyclopolis-loutraki",
//     "radius": 5000,
//     "lat": 37978213,
//     "lng": 22976748,
//     "id": 539
//   },
//   {
//     "city": "Igoumenitsa",
//     "name": "cyclopolis-igoumenitsa",
//     "url": "http://api.citybik.es/cyclopolis-igoumenitsa.json",
//     "tag": "cyclopolis-igoumenitsa",
//     "radius": 5000,
//     "lat": 39503119,
//     "lng": 20263927,
//     "id": 540
//   },
//   {
//     "city": "Edessa",
//     "name": "cyclopolis-edessa",
//     "url": "http://api.citybik.es/cyclopolis-edessa.json",
//     "tag": "cyclopolis-edessa",
//     "radius": 5000,
//     "lat": 40803316,
//     "lng": 22043673,
//     "id": 541
//   },
//   {
//     "city": "Syros",
//     "name": "cyclopolis-syros",
//     "url": "http://api.citybik.es/cyclopolis-syros.json",
//     "tag": "cyclopolis-syros",
//     "radius": 5000,
//     "lat": 37443861,
//     "lng": 24939397,
//     "id": 542
//   },
//   {
//     "city": "Chania",
//     "name": "cyclopolis-chania",
//     "url": "http://api.citybik.es/cyclopolis-chania.json",
//     "tag": "cyclopolis-chania",
//     "radius": 5000,
//     "lat": 35514842,
//     "lng": 24017754,
//     "id": 543
//   },
//   {
//     "city": "Toruń",
//     "name": "torvelo",
//     "url": "http://api.citybik.es/torvelo.json",
//     "tag": "torvelo",
//     "radius": 5000,
//     "lat": 53013800,
//     "lng": 18598400,
//     "id": 544
//   },
//   {
//     "city": "Gijón",
//     "name": "gijon",
//     "url": "http://api.citybik.es/gijon.json",
//     "tag": "gijon",
//     "radius": 5000,
//     "lat": 43539611,
//     "lng": -5666360,
//     "id": 545
//   },
//   {
//     "city": "Auxerre",
//     "name": "auxrmlevelo",
//     "url": "http://api.citybik.es/auxrmlevelo.json",
//     "tag": "auxrmlevelo",
//     "radius": 5000,
//     "lat": 47797221,
//     "lng": 3572376,
//     "id": 546
//   },
//   {
//     "city": "Genova",
//     "name": "zena-by-bike",
//     "url": "http://api.citybik.es/zena-by-bike.json",
//     "tag": "zena-by-bike",
//     "radius": 5000,
//     "lat": 44404300,
//     "lng": 8929089,
//     "id": 547
//   },
//   {
//     "city": "Badalona",
//     "name": "ambici-badalona",
//     "url": "http://api.citybik.es/ambici-badalona.json",
//     "tag": "ambici-badalona",
//     "radius": 5000,
//     "lat": 41447000,
//     "lng": 2245000,
//     "id": 548
//   },
//   {
//     "city": "Cornellà de Llobregat",
//     "name": "ambici-cornella-de-llobregat",
//     "url": "http://api.citybik.es/ambici-cornella-de-llobregat.json",
//     "tag": "ambici-cornella-de-llobregat",
//     "radius": 5000,
//     "lat": 41358500,
//     "lng": 2070809,
//     "id": 549
//   },
//   {
//     "city": "Santa Coloma de Gramenet",
//     "name": "ambici-santa-coloma-de-gramenet",
//     "url": "http://api.citybik.es/ambici-santa-coloma-de-gramenet.json",
//     "tag": "ambici-santa-coloma-de-gramenet",
//     "radius": 5000,
//     "lat": 41445900,
//     "lng": 2210330,
//     "id": 550
//   },
//   {
//     "city": "El Prat de Llobregat",
//     "name": "ambici-el-prat-de-llobregat",
//     "url": "http://api.citybik.es/ambici-el-prat-de-llobregat.json",
//     "tag": "ambici-el-prat-de-llobregat",
//     "radius": 5000,
//     "lat": 41323900,
//     "lng": 2093170,
//     "id": 551
//   },
//   {
//     "city": "Castelldefels",
//     "name": "ambici-castelldefels",
//     "url": "http://api.citybik.es/ambici-castelldefels.json",
//     "tag": "ambici-castelldefels",
//     "radius": 5000,
//     "lat": 41281600,
//     "lng": 1976780,
//     "id": 552
//   },
//   {
//     "city": "Viladecans",
//     "name": "ambici-viladecans",
//     "url": "http://api.citybik.es/ambici-viladecans.json",
//     "tag": "ambici-viladecans",
//     "radius": 5000,
//     "lat": 41316500,
//     "lng": 2013059,
//     "id": 553
//   },
//   {
//     "city": "Gavà",
//     "name": "ambici-gava",
//     "url": "http://api.citybik.es/ambici-gava.json",
//     "tag": "ambici-gava",
//     "radius": 5000,
//     "lat": 41303000,
//     "lng": 2002689,
//     "id": 554
//   },
//   {
//     "city": "Esplugues de Llobregat",
//     "name": "ambici-esplugues-de-llobregat",
//     "url": "http://api.citybik.es/ambici-esplugues-de-llobregat.json",
//     "tag": "ambici-esplugues-de-llobregat",
//     "radius": 5000,
//     "lat": 41377100,
//     "lng": 2089379,
//     "id": 555
//   },
//   {
//     "city": "Sant Joan Despí",
//     "name": "ambici-sant-joan-despi",
//     "url": "http://api.citybik.es/ambici-sant-joan-despi.json",
//     "tag": "ambici-sant-joan-despi",
//     "radius": 5000,
//     "lat": 41368000,
//     "lng": 2056350,
//     "id": 556
//   },
//   {
//     "city": "Molins de Rei",
//     "name": "ambici-molins-de-rei",
//     "url": "http://api.citybik.es/ambici-molins-de-rei.json",
//     "tag": "ambici-molins-de-rei",
//     "radius": 5000,
//     "lat": 41413200,
//     "lng": 2020370,
//     "id": 557
//   },
//   {
//     "city": "Sant Just Desvern",
//     "name": "ambici-sant-just-desvern",
//     "url": "http://api.citybik.es/ambici-sant-just-desvern.json",
//     "tag": "ambici-sant-just-desvern",
//     "radius": 5000,
//     "lat": 41380700,
//     "lng": 2074960,
//     "id": 558
//   },
//   {
//     "city": "Sant Boi de Llobregat",
//     "name": "ambici-sant-boi-de-llobregat",
//     "url": "http://api.citybik.es/ambici-sant-boi-de-llobregat.json",
//     "tag": "ambici-sant-boi-de-llobregat",
//     "radius": 5000,
//     "lat": 41345800,
//     "lng": 2034040,
//     "id": 559
//   },
//   {
//     "city": "Hanau",
//     "name": "heraeus-hanau",
//     "url": "http://api.citybik.es/heraeus-hanau.json",
//     "tag": "heraeus-hanau",
//     "radius": 5000,
//     "lat": 50138700,
//     "lng": 8944290,
//     "id": 560
//   },
//   {
//     "city": "Stari Grad",
//     "name": "stari-grad-hvar",
//     "url": "http://api.citybik.es/stari-grad-hvar.json",
//     "tag": "stari-grad-hvar",
//     "radius": 5000,
//     "lat": 43184100,
//     "lng": 16588600,
//     "id": 561
//   },
//   {
//     "city": "REVG",
//     "name": "revgmobic",
//     "url": "http://api.citybik.es/revgmobic.json",
//     "tag": "revgmobic",
//     "radius": 5000,
//     "lat": 50849300,
//     "lng": 6668700,
//     "id": 562
//   },
//   {
//     "city": "Erkelenz",
//     "name": "westbike-erkelenz",
//     "url": "http://api.citybik.es/westbike-erkelenz.json",
//     "tag": "westbike-erkelenz",
//     "radius": 5000,
//     "lat": 51075300,
//     "lng": 6312330,
//     "id": 563
//   },
//   {
//     "city": "Geilenkirchen",
//     "name": "westbike-geilenkirchen",
//     "url": "http://api.citybik.es/westbike-geilenkirchen.json",
//     "tag": "westbike-geilenkirchen",
//     "radius": 5000,
//     "lat": 50967100,
//     "lng": 6118860,
//     "id": 564
//   },
//   {
//     "city": "Heinsberg",
//     "name": "westbike-heinsberg",
//     "url": "http://api.citybik.es/westbike-heinsberg.json",
//     "tag": "westbike-heinsberg",
//     "radius": 5000,
//     "lat": 51059700,
//     "lng": 6118490,
//     "id": 565
//   },
//   {
//     "city": "Hückelhoven",
//     "name": "westbike-hueckelhoven",
//     "url": "http://api.citybik.es/westbike-hueckelhoven.json",
//     "tag": "westbike-hueckelhoven",
//     "radius": 5000,
//     "lat": 51052900,
//     "lng": 6219330,
//     "id": 566
//   },
//   {
//     "city": "Wegberg",
//     "name": "westbike-wegberg",
//     "url": "http://api.citybik.es/westbike-wegberg.json",
//     "tag": "westbike-wegberg",
//     "radius": 5000,
//     "lat": 51142700,
//     "lng": 6281300,
//     "id": 567
//   },
//   {
//     "city": "Grünheide (Mark)",
//     "name": "edeka-gruenheide-mark",
//     "url": "http://api.citybik.es/edeka-gruenheide-mark.json",
//     "tag": "edeka-gruenheide-mark",
//     "radius": 5000,
//     "lat": 52424700,
//     "lng": 13820300,
//     "id": 568
//   },
//   {
//     "city": "Erlangen",
//     "name": "nextbike-erlangen",
//     "url": "http://api.citybik.es/nextbike-erlangen.json",
//     "tag": "nextbike-erlangen",
//     "radius": 5000,
//     "lat": 49589000,
//     "lng": 11006500,
//     "id": 569
//   },
//   {
//     "city": "Gorizia",
//     "name": "nomago-gorizia",
//     "url": "http://api.citybik.es/nomago-gorizia.json",
//     "tag": "nomago-gorizia",
//     "radius": 5000,
//     "lat": 45946900,
//     "lng": 13620800,
//     "id": 570
//   },
//   {
//     "city": "Mainz",
//     "name": "mvg-meinrad-nextbike-mainz",
//     "url": "http://api.citybik.es/mvg-meinrad-nextbike-mainz.json",
//     "tag": "mvg-meinrad-nextbike-mainz",
//     "radius": 5000,
//     "lat": 45946900,
//     "lng": 13620800,
//     "id": 571
//   },
//   {
//     "city": "Warsaw",
//     "name": "veturilo-nextbike-warsaw",
//     "url": "http://api.citybik.es/veturilo-nextbike-warsaw.json",
//     "tag": "veturilo-nextbike-warsaw",
//     "radius": 5000,
//     "lat": 52258100,
//     "lng": 20994900,
//     "id": 572
//   },
//   {
//     "city": "Dijon",
//     "name": "divia-velodi",
//     "url": "http://api.citybik.es/divia-velodi.json",
//     "tag": "divia-velodi",
//     "radius": 5000,
//     "lat": 47321580,
//     "lng": 5041470,
//     "id": 573
//   },
//   {
//     "city": "Caen",
//     "name": "twisto-velo",
//     "url": "http://api.citybik.es/twisto-velo.json",
//     "tag": "twisto-velo",
//     "radius": 5000,
//     "lat": 49181340,
//     "lng": -363561,
//     "id": 574
//   },
//   {
//     "city": "Orléans",
//     "name": "veloplus-velotao",
//     "url": "http://api.citybik.es/veloplus-velotao.json",
//     "tag": "veloplus-velotao",
//     "radius": 5000,
//     "lat": 47902733,
//     "lng": 1908606,
//     "id": 575
//   },
//   {
//     "city": "Laval",
//     "name": "velitul",
//     "url": "http://api.citybik.es/velitul.json",
//     "tag": "velitul",
//     "radius": 5000,
//     "lat": 48070668,
//     "lng": -773402,
//     "id": 576
//   },
//   {
//     "city": "Miami, FL",
//     "name": "citi-bike-miami",
//     "url": "http://api.citybik.es/citi-bike-miami.json",
//     "tag": "citi-bike-miami",
//     "radius": 5000,
//     "lat": 25790654,
//     "lng": -80130045,
//     "id": 577
//   },
//   {
//     "city": "Montesilvano",
//     "name": "bicincitta-costa-blu",
//     "url": "http://api.citybik.es/bicincitta-costa-blu.json",
//     "tag": "bicincitta-costa-blu",
//     "radius": 5000,
//     "lat": 42500900,
//     "lng": 14128200,
//     "id": 578
//   },
//   {
//     "city": "Taranto",
//     "name": "bicincitta-pista",
//     "url": "http://api.citybik.es/bicincitta-pista.json",
//     "tag": "bicincitta-pista",
//     "radius": 5000,
//     "lat": 40435100,
//     "lng": 17209600,
//     "id": 579
//   },
//   {
//     "city": "Monteriggioni",
//     "name": "bicincitta-monteriggioni",
//     "url": "http://api.citybik.es/bicincitta-monteriggioni.json",
//     "tag": "bicincitta-monteriggioni",
//     "radius": 5000,
//     "lat": 43389600,
//     "lng": 11223600,
//     "id": 580
//   },
//   {
//     "city": "Massa",
//     "name": "bicincitta-massa",
//     "url": "http://api.citybik.es/bicincitta-massa.json",
//     "tag": "bicincitta-massa",
//     "radius": 5000,
//     "lat": 44014600,
//     "lng": 10101700,
//     "id": 581
//   },
//   {
//     "city": "Campoo de Enmedio",
//     "name": "bikenmedio",
//     "url": "http://api.citybik.es/bikenmedio.json",
//     "tag": "bikenmedio",
//     "radius": 5000,
//     "lat": 42999500,
//     "lng": -4139300,
//     "id": 582
//   },
//   {
//     "city": "A Illa de Arousa",
//     "name": "biciarousa",
//     "url": "http://api.citybik.es/biciarousa.json",
//     "tag": "biciarousa",
//     "radius": 5000,
//     "lat": 42552100,
//     "lng": -8866600,
//     "id": 583
//   },
//   {
//     "city": "Aller",
//     "name": "bealler",
//     "url": "http://api.citybik.es/bealler.json",
//     "tag": "bealler",
//     "radius": 5000,
//     "lat": 43148200,
//     "lng": -5629500,
//     "id": 584
//   },
//   {
//     "city": "Albacete",
//     "name": "albabici",
//     "url": "http://api.citybik.es/albabici.json",
//     "tag": "albabici",
//     "radius": 5000,
//     "lat": 38994300,
//     "lng": -1860200,
//     "id": 585
//   },
//   {
//     "city": "Alcázar de San Juan",
//     "name": "bicialcazar",
//     "url": "http://api.citybik.es/bicialcazar.json",
//     "tag": "bicialcazar",
//     "radius": 5000,
//     "lat": 39390100,
//     "lng": -3210100,
//     "id": 586
//   },
//   {
//     "city": "Valletta - Malta - Gozo",
//     "name": "tallinja-bike",
//     "url": "http://api.citybik.es/tallinja-bike.json",
//     "tag": "tallinja-bike",
//     "radius": 5000,
//     "lat": 35899200,
//     "lng": 14514100,
//     "id": 587
//   },
//   {
//     "city": "Tucson, AZ",
//     "name": "tugo-bike-share",
//     "url": "http://api.citybik.es/tugo-bike-share.json",
//     "tag": "tugo-bike-share",
//     "radius": 5000,
//     "lat": 32222499,
//     "lng": -110974900,
//     "id": 588
//   },
//   {
//     "city": "Prerov",
//     "name": "nextbike-prerov",
//     "url": "http://api.citybik.es/nextbike-prerov.json",
//     "tag": "nextbike-prerov",
//     "radius": 5000,
//     "lat": 49457400,
//     "lng": 17440800,
//     "id": 589
//   },
//   {
//     "city": "Tokyo",
//     "name": "docomo-cycle-tokyo",
//     "url": "http://api.citybik.es/docomo-cycle-tokyo.json",
//     "tag": "docomo-cycle-tokyo",
//     "radius": 5000,
//     "lat": 35682700,
//     "lng": 139766000,
//     "id": 590
//   },
//   {
//     "city": "Getafe",
//     "name": "gbici",
//     "url": "http://api.citybik.es/gbici.json",
//     "tag": "gbici",
//     "radius": 5000,
//     "lat": 40308000,
//     "lng": -3730100,
//     "id": 591
//   },
//   {
//     "city": "Avilés",
//     "name": "aviles-en-bici",
//     "url": "http://api.citybik.es/aviles-en-bici.json",
//     "tag": "aviles-en-bici",
//     "radius": 5000,
//     "lat": 43555400,
//     "lng": -5922200,
//     "id": 592
//   },
//   {
//     "city": "Caldas de Reis",
//     "name": "verdeciclos",
//     "url": "http://api.citybik.es/verdeciclos.json",
//     "tag": "verdeciclos",
//     "radius": 5000,
//     "lat": 42604100,
//     "lng": -8641900,
//     "id": 593
//   },
//   {
//     "city": "Badajoz",
//     "name": "biba",
//     "url": "http://api.citybik.es/biba.json",
//     "tag": "biba",
//     "radius": 5000,
//     "lat": 38878000,
//     "lng": -6970100,
//     "id": 594
//   },
//   {
//     "city": "Burgos",
//     "name": "bicibur",
//     "url": "http://api.citybik.es/bicibur.json",
//     "tag": "bicibur",
//     "radius": 5000,
//     "lat": 42343920,
//     "lng": -3696970,
//     "id": 595
//   },
//   {
//     "city": "Rivas-Vaciamadrid",
//     "name": "bicinrivas",
//     "url": "http://api.citybik.es/bicinrivas.json",
//     "tag": "bicinrivas",
//     "radius": 5000,
//     "lat": 40353530,
//     "lng": -3530950,
//     "id": 596
//   },
//   {
//     "city": "Multiple",
//     "name": "hellocycling",
//     "url": "http://api.citybik.es/hellocycling.json",
//     "tag": "hellocycling",
//     "radius": 5000,
//     "lat": 36392100,
//     "lng": 138862300,
//     "id": 597
//   },
//   {
//     "city": "Castelló de la Plana",
//     "name": "bicicas",
//     "url": "http://api.citybik.es/bicicas.json",
//     "tag": "bicicas",
//     "radius": 5000,
//     "lat": 39985600,
//     "lng": -38900,
//     "id": 598
//   },
//   {
//     "city": "Mislata",
//     "name": "bicimislata",
//     "url": "http://api.citybik.es/bicimislata.json",
//     "tag": "bicimislata",
//     "radius": 5000,
//     "lat": 39476300,
//     "lng": -418200,
//     "id": 599
//   },
//   {
//     "city": "Almeirim",
//     "name": "algira",
//     "url": "http://api.citybik.es/algira.json",
//     "tag": "algira",
//     "radius": 5000,
//     "lat": 39208200,
//     "lng": -8625200,
//     "id": 600
//   },
//   {
//     "city": "Rio Maior",
//     "name": "rmbikes",
//     "url": "http://api.citybik.es/rmbikes.json",
//     "tag": "rmbikes",
//     "radius": 5000,
//     "lat": 39337400,
//     "lng": -8937400,
//     "id": 601
//   },
//   {
//     "city": "Figueira da Foz",
//     "name": "figas",
//     "url": "http://api.citybik.es/figas.json",
//     "tag": "figas",
//     "radius": 5000,
//     "lat": 40154800,
//     "lng": -8861300,
//     "id": 602
//   },
//   {
//     "city": "Park City, UT",
//     "name": "summit-bike-share",
//     "url": "http://api.citybik.es/summit-bike-share.json",
//     "tag": "summit-bike-share",
//     "radius": 5000,
//     "lat": 40647400,
//     "lng": -111498100,
//     "id": 603
//   },
//   {
//     "city": "Richmond, VA",
//     "name": "rva-bikes",
//     "url": "http://api.citybik.es/rva-bikes.json",
//     "tag": "rva-bikes",
//     "radius": 5000,
//     "lat": 37538330,
//     "lng": -77434640,
//     "id": 604
//   },
//   {
//     "city": "Valladolid",
//     "name": "biki",
//     "url": "http://api.citybik.es/biki.json",
//     "tag": "biki",
//     "radius": 5000,
//     "lat": 41652200,
//     "lng": -4724300,
//     "id": 605
//   },
//   {
//     "city": "Valencia, área metropolitana",
//     "name": "mibisivalencia",
//     "url": "http://api.citybik.es/mibisivalencia.json",
//     "tag": "mibisivalencia",
//     "radius": 5000,
//     "lat": 39436400,
//     "lng": -464700,
//     "id": 606
//   },
//   {
//     "city": "Logroño",
//     "name": "bicilog",
//     "url": "http://api.citybik.es/bicilog.json",
//     "tag": "bicilog",
//     "radius": 5000,
//     "lat": 42465800,
//     "lng": -2440200,
//     "id": 607
//   },
//   {
//     "city": "Elx",
//     "name": "bicielx",
//     "url": "http://api.citybik.es/bicielx.json",
//     "tag": "bicielx",
//     "radius": 5000,
//     "lat": 38266500,
//     "lng": -700000,
//     "id": 608
//   },
//   {
//     "city": "Bogotá",
//     "name": "tembici-bogota",
//     "url": "http://api.citybik.es/tembici-bogota.json",
//     "tag": "tembici-bogota",
//     "radius": 5000,
//     "lat": 4656900,
//     "lng": -74065600,
//     "id": 609
//   },
//   {
//     "city": "Curitiba",
//     "name": "bike-curitiba",
//     "url": "http://api.citybik.es/bike-curitiba.json",
//     "tag": "bike-curitiba",
//     "radius": 5000,
//     "lat": -25429900,
//     "lng": -49272200,
//     "id": 610
//   },
//   {
//     "city": "Nordelta",
//     "name": "bike-itau-nordelta",
//     "url": "http://api.citybik.es/bike-itau-nordelta.json",
//     "tag": "bike-itau-nordelta",
//     "radius": 5000,
//     "lat": -34414600,
//     "lng": -58649300,
//     "id": 611
//   },
//   {
//     "city": "Quito",
//     "name": "sbp-quito",
//     "url": "http://api.citybik.es/sbp-quito.json",
//     "tag": "sbp-quito",
//     "radius": 5000,
//     "lat": -189000,
//     "lng": -78489100,
//     "id": 612
//   },
//   {
//     "city": "Lima",
//     "name": "citybike-lima",
//     "url": "http://api.citybik.es/citybike-lima.json",
//     "tag": "citybike-lima",
//     "radius": 5000,
//     "lat": -12120900,
//     "lng": -77029600,
//     "id": 613
//   },
//   {
//     "city": "Skrova",
//     "name": "skrova-bike",
//     "url": "http://api.citybik.es/skrova-bike.json",
//     "tag": "skrova-bike",
//     "radius": 5000,
//     "lat": 68166900,
//     "lng": 14661100,
//     "id": 614
//   },
//   {
//     "city": "Sant Vicent del Raspeig",
//     "name": "bicisanvi",
//     "url": "http://api.citybik.es/bicisanvi.json",
//     "tag": "bicisanvi",
//     "radius": 5000,
//     "lat": 38396110,
//     "lng": -523599,
//     "id": 615
//   },
//   {
//     "city": "Donostia/San Sebastián",
//     "name": "dbizi",
//     "url": "http://api.citybik.es/dbizi.json",
//     "tag": "dbizi",
//     "radius": 5000,
//     "lat": 43318400,
//     "lng": -1981700,
//     "id": 616
//   },
//   {
//     "city": "Bolzano",
//     "name": "bici-bolzano",
//     "url": "http://api.citybik.es/bici-bolzano.json",
//     "tag": "bici-bolzano",
//     "radius": 5000,
//     "lat": 46490000,
//     "lng": 11340100,
//     "id": 617
//   },
//   {
//     "city": "Köln",
//     "name": "callabike-koln",
//     "url": "http://api.citybik.es/callabike-koln.json",
//     "tag": "callabike-koln",
//     "radius": 5000,
//     "lat": 50939000,
//     "lng": 6959500,
//     "id": 618
//   },
//   {
//     "city": "Berlin",
//     "name": "callabike-berlin",
//     "url": "http://api.citybik.es/callabike-berlin.json",
//     "tag": "callabike-berlin",
//     "radius": 5000,
//     "lat": 52517900,
//     "lng": 13389500,
//     "id": 619
//   },
//   {
//     "city": "München",
//     "name": "callabike-munchen",
//     "url": "http://api.citybik.es/callabike-munchen.json",
//     "tag": "callabike-munchen",
//     "radius": 5000,
//     "lat": 48137500,
//     "lng": 11575900,
//     "id": 620
//   },
//   {
//     "city": "Frankfurt",
//     "name": "callabike-frankfurt",
//     "url": "http://api.citybik.es/callabike-frankfurt.json",
//     "tag": "callabike-frankfurt",
//     "radius": 5000,
//     "lat": 50110900,
//     "lng": 8679500,
//     "id": 621
//   },
//   {
//     "city": "Darmstadt",
//     "name": "callabike-darmstadt",
//     "url": "http://api.citybik.es/callabike-darmstadt.json",
//     "tag": "callabike-darmstadt",
//     "radius": 5000,
//     "lat": 49870713,
//     "lng": 8652729,
//     "id": 622
//   },
//   {
//     "city": "Hamburg",
//     "name": "stadtrad-hamburg-db",
//     "url": "http://api.citybik.es/stadtrad-hamburg-db.json",
//     "tag": "stadtrad-hamburg-db",
//     "radius": 5000,
//     "lat": 53550308,
//     "lng": 10000630,
//     "id": 623
//   },
//   {
//     "city": "Lüneburg",
//     "name": "stadtrad-lueneburg",
//     "url": "http://api.citybik.es/stadtrad-lueneburg.json",
//     "tag": "stadtrad-lueneburg",
//     "radius": 5000,
//     "lat": 53248697,
//     "lng": 10407776,
//     "id": 624
//   },
//   {
//     "city": "Stuttgart",
//     "name": "stadtrad-stuttgart",
//     "url": "http://api.citybik.es/stadtrad-stuttgart.json",
//     "tag": "stadtrad-stuttgart",
//     "radius": 5000,
//     "lat": 48778147,
//     "lng": 9180151,
//     "id": 625
//   },
//   {
//     "city": "Landernau",
//     "name": "ti-velo",
//     "url": "http://api.citybik.es/ti-velo.json",
//     "tag": "ti-velo",
//     "radius": 5000,
//     "lat": 48451200,
//     "lng": -4255100,
//     "id": 626
//   },
//   {
//     "city": "Genève",
//     "name": "velopartage-geneve",
//     "url": "http://api.citybik.es/velopartage-geneve.json",
//     "tag": "velopartage-geneve",
//     "radius": 5000,
//     "lat": 46202100,
//     "lng": 6145700,
//     "id": 627
//   },
//   {
//     "city": "Kreuzlingen",
//     "name": "regivelo-kreuzlingen",
//     "url": "http://api.citybik.es/regivelo-kreuzlingen.json",
//     "tag": "regivelo-kreuzlingen",
//     "radius": 5000,
//     "lat": 47646000,
//     "lng": 9171600,
//     "id": 628
//   },
//   {
//     "city": "Le Locle",
//     "name": "lelocleroule",
//     "url": "http://api.citybik.es/lelocleroule.json",
//     "tag": "lelocleroule",
//     "radius": 5000,
//     "lat": 47055400,
//     "lng": 6746600,
//     "id": 629
//   },
//   {
//     "city": "Neuchâtel",
//     "name": "neuchatelroule",
//     "url": "http://api.citybik.es/neuchatelroule.json",
//     "tag": "neuchatelroule",
//     "radius": 5000,
//     "lat": 46991600,
//     "lng": 6926900,
//     "id": 630
//   },
//   {
//     "city": "Thun",
//     "name": "thun",
//     "url": "http://api.citybik.es/thun.json",
//     "tag": "thun",
//     "radius": 5000,
//     "lat": 46757600,
//     "lng": 7628700,
//     "id": 631
//   },
//   {
//     "city": "Yverdon-les-Bains",
//     "name": "yverdon-les-bains",
//     "url": "http://api.citybik.es/yverdon-les-bains.json",
//     "tag": "yverdon-les-bains",
//     "radius": 5000,
//     "lat": 46778800,
//     "lng": 6641400,
//     "id": 632
//   },
//   {
//     "city": "Les Sables d'Olonne",
//     "name": "petites-reines",
//     "url": "http://api.citybik.es/petites-reines.json",
//     "tag": "petites-reines",
//     "radius": 5000,
//     "lat": 46497100,
//     "lng": -1780500,
//     "id": 633
//   },
//   {
//     "city": "Carcassonne",
//     "name": "cyclolibre",
//     "url": "http://api.citybik.es/cyclolibre.json",
//     "tag": "cyclolibre",
//     "radius": 5000,
//     "lat": 43212700,
//     "lng": 2349200,
//     "id": 634
//   },
//   {
//     "city": "Getxo",
//     "name": "getxobizi",
//     "url": "http://api.citybik.es/getxobizi.json",
//     "tag": "getxobizi",
//     "radius": 5000,
//     "lat": 43347600,
//     "lng": -3008800,
//     "id": 635
//   },
//   {
//     "city": "Ligne TER Royan - Angoulême",
//     "name": "velomodalis",
//     "url": "http://api.citybik.es/velomodalis.json",
//     "tag": "velomodalis",
//     "radius": 5000,
//     "lat": 45700000,
//     "lng": -330000,
//     "id": 636
//   },
//   {
//     "city": "Bilbao",
//     "name": "bizkaibizi-bilbao",
//     "url": "http://api.citybik.es/bizkaibizi-bilbao.json",
//     "tag": "bizkaibizi-bilbao",
//     "radius": 5000,
//     "lat": 43261700,
//     "lng": -2949100,
//     "id": 637
//   },
//   {
//     "city": "Erandio",
//     "name": "bizkaibizi-erandio",
//     "url": "http://api.citybik.es/bizkaibizi-erandio.json",
//     "tag": "bizkaibizi-erandio",
//     "radius": 5000,
//     "lat": 43302900,
//     "lng": -2975600,
//     "id": 638
//   },
//   {
//     "city": "getxo",
//     "name": "bizkaibizi-getxo",
//     "url": "http://api.citybik.es/bizkaibizi-getxo.json",
//     "tag": "bizkaibizi-getxo",
//     "radius": 5000,
//     "lat": 43347600,
//     "lng": -3008800,
//     "id": 639
//   },
//   {
//     "city": "Leioa",
//     "name": "bizkaibizi-leioa",
//     "url": "http://api.citybik.es/bizkaibizi-leioa.json",
//     "tag": "bizkaibizi-leioa",
//     "radius": 5000,
//     "lat": 43326600,
//     "lng": -2989700,
//     "id": 640
//   },
//   {
//     "city": "Santurtzi",
//     "name": "bizkaibizi-santurtzi",
//     "url": "http://api.citybik.es/bizkaibizi-santurtzi.json",
//     "tag": "bizkaibizi-santurtzi",
//     "radius": 5000,
//     "lat": 43328000,
//     "lng": -3033500,
//     "id": 641
//   },
//   {
//     "city": "Barakaldo",
//     "name": "bizkaibizi-barakaldo",
//     "url": "http://api.citybik.es/bizkaibizi-barakaldo.json",
//     "tag": "bizkaibizi-barakaldo",
//     "radius": 5000,
//     "lat": 43296600,
//     "lng": -2987000,
//     "id": 642
//   },
//   {
//     "city": "Sestao",
//     "name": "bizkaibizi-sestao",
//     "url": "http://api.citybik.es/bizkaibizi-sestao.json",
//     "tag": "bizkaibizi-sestao",
//     "radius": 5000,
//     "lat": 43309300,
//     "lng": -3006800,
//     "id": 643
//   },
//   {
//     "city": "Portugalete",
//     "name": "bizkaibizi-portugalete",
//     "url": "http://api.citybik.es/bizkaibizi-portugalete.json",
//     "tag": "bizkaibizi-portugalete",
//     "radius": 5000,
//     "lat": 43318000,
//     "lng": -3021400,
//     "id": 644
//   },
//   {
//     "city": "Berango",
//     "name": "bizkaibizi-berango",
//     "url": "http://api.citybik.es/bizkaibizi-berango.json",
//     "tag": "bizkaibizi-berango",
//     "radius": 5000,
//     "lat": 43361900,
//     "lng": -2996800,
//     "id": 645
//   },
//   {
//     "city": "Rogaland",
//     "name": "kolumbus-rogaland",
//     "url": "http://api.citybik.es/kolumbus-rogaland.json",
//     "tag": "kolumbus-rogaland",
//     "radius": 5000,
//     "lat": 58968900,
//     "lng": 5731000,
//     "id": 646
//   },
//   {
//     "city": "Honolulu",
//     "name": "gobiki",
//     "url": "http://api.citybik.es/gobiki.json",
//     "tag": "gobiki",
//     "radius": 5000,
//     "lat": 21304300,
//     "lng": -157856000,
//     "id": 647
//   },
//   {
//     "city": "Kailua-Kona",
//     "name": "hibike",
//     "url": "http://api.citybik.es/hibike.json",
//     "tag": "hibike",
//     "radius": 5000,
//     "lat": 19641700,
//     "lng": -155996200,
//     "id": 648
//   },
//   {
//     "city": "Bournemouth, Christchurch and Poole",
//     "name": "beryl-bcp",
//     "url": "http://api.citybik.es/beryl-bcp.json",
//     "tag": "beryl-bcp",
//     "radius": 5000,
//     "lat": 50719600,
//     "lng": -1873400,
//     "id": 649
//   },
//   {
//     "city": "Brighton",
//     "name": "beryl-brighton",
//     "url": "http://api.citybik.es/beryl-brighton.json",
//     "tag": "beryl-brighton",
//     "radius": 5000,
//     "lat": 50822200,
//     "lng": -140300,
//     "id": 650
//   },
//   {
//     "city": "Cornwall",
//     "name": "beryl-cornwall",
//     "url": "http://api.citybik.es/beryl-cornwall.json",
//     "tag": "beryl-cornwall",
//     "radius": 5000,
//     "lat": 50261600,
//     "lng": -5051000,
//     "id": 651
//   },
//   {
//     "city": "Greater Manchester",
//     "name": "beryl-greater-manchester",
//     "url": "http://api.citybik.es/beryl-greater-manchester.json",
//     "tag": "beryl-greater-manchester",
//     "radius": 5000,
//     "lat": 53479500,
//     "lng": -2243600,
//     "id": 652
//   },
//   {
//     "city": "Hackney",
//     "name": "beryl-hackney-cargo-bike",
//     "url": "http://api.citybik.es/beryl-hackney-cargo-bike.json",
//     "tag": "beryl-hackney-cargo-bike",
//     "radius": 5000,
//     "lat": 51536600,
//     "lng": -75100,
//     "id": 653
//   },
//   {
//     "city": "Hereford",
//     "name": "beryl-hereford",
//     "url": "http://api.citybik.es/beryl-hereford.json",
//     "tag": "beryl-hereford",
//     "radius": 5000,
//     "lat": 52054900,
//     "lng": -2715600,
//     "id": 654
//   },
//   {
//     "city": "Hertsmere",
//     "name": "beryl-hertsmere",
//     "url": "http://api.citybik.es/beryl-hertsmere.json",
//     "tag": "beryl-hertsmere",
//     "radius": 5000,
//     "lat": 51657700,
//     "lng": -269500,
//     "id": 655
//   },
//   {
//     "city": "Isle of Wight",
//     "name": "beryl-isle-of-wight",
//     "url": "http://api.citybik.es/beryl-isle-of-wight.json",
//     "tag": "beryl-isle-of-wight",
//     "radius": 5000,
//     "lat": 50695800,
//     "lng": -1223800,
//     "id": 656
//   },
//   {
//     "city": "Leeds",
//     "name": "beryl-leeds",
//     "url": "http://api.citybik.es/beryl-leeds.json",
//     "tag": "beryl-leeds",
//     "radius": 5000,
//     "lat": 53797100,
//     "lng": -1543800,
//     "id": 657
//   },
//   {
//     "city": "Norwich",
//     "name": "beryl-norwich",
//     "url": "http://api.citybik.es/beryl-norwich.json",
//     "tag": "beryl-norwich",
//     "radius": 5000,
//     "lat": 52628800,
//     "lng": 1293400,
//     "id": 658
//   },
//   {
//     "city": "Plymouth",
//     "name": "beryl-plymouth",
//     "url": "http://api.citybik.es/beryl-plymouth.json",
//     "tag": "beryl-plymouth",
//     "radius": 5000,
//     "lat": 50371400,
//     "lng": -4142100,
//     "id": 659
//   },
//   {
//     "city": "Portsmouth",
//     "name": "beryl-portsmouth",
//     "url": "http://api.citybik.es/beryl-portsmouth.json",
//     "tag": "beryl-portsmouth",
//     "radius": 5000,
//     "lat": 50803500,
//     "lng": -1073600,
//     "id": 660
//   },
//   {
//     "city": "Southampton",
//     "name": "beryl-southampton",
//     "url": "http://api.citybik.es/beryl-southampton.json",
//     "tag": "beryl-southampton",
//     "radius": 5000,
//     "lat": 50902100,
//     "lng": -1399800,
//     "id": 661
//   },
//   {
//     "city": "Watford",
//     "name": "beryl-watford",
//     "url": "http://api.citybik.es/beryl-watford.json",
//     "tag": "beryl-watford",
//     "radius": 5000,
//     "lat": 51655600,
//     "lng": -395300,
//     "id": 662
//   },
//   {
//     "city": "Westminster",
//     "name": "beryl-westminster-cargo-bike",
//     "url": "http://api.citybik.es/beryl-westminster-cargo-bike.json",
//     "tag": "beryl-westminster-cargo-bike",
//     "radius": 5000,
//     "lat": 51521500,
//     "lng": -184000,
//     "id": 663
//   },
//   {
//     "city": "West Midlands",
//     "name": "beryl-west-midlands",
//     "url": "http://api.citybik.es/beryl-west-midlands.json",
//     "tag": "beryl-west-midlands",
//     "radius": 5000,
//     "lat": 52479800,
//     "lng": -1901400,
//     "id": 664
//   },
//   {
//     "city": "Wool",
//     "name": "beryl-wool",
//     "url": "http://api.citybik.es/beryl-wool.json",
//     "tag": "beryl-wool",
//     "radius": 5000,
//     "lat": 50688300,
//     "lng": -2236100,
//     "id": 665
//   },
//   {
//     "city": "Cuenca",
//     "name": "bicicuenca",
//     "url": "http://api.citybik.es/bicicuenca.json",
//     "tag": "bicicuenca",
//     "radius": 5000,
//     "lat": -2897000,
//     "lng": -79003800,
//     "id": 666
//   },
//   {
//     "city": "Brive-la-Gaillarde",
//     "name": "velibeo",
//     "url": "http://api.citybik.es/velibeo.json",
//     "tag": "velibeo",
//     "radius": 5000,
//     "lat": 45158300,
//     "lng": 1532100,
//     "id": 667
//   },
//   {
//     "city": "Pointe-à-Pitre",
//     "name": "karuvelo",
//     "url": "http://api.citybik.es/karuvelo.json",
//     "tag": "karuvelo",
//     "radius": 5000,
//     "lat": 16241100,
//     "lng": -61533100,
//     "id": 668
//   },
//   {
//     "city": "Ardenne Métropole",
//     "name": "cyclam",
//     "url": "http://api.citybik.es/cyclam.json",
//     "tag": "cyclam",
//     "radius": 5000,
//     "lat": 49771900,
//     "lng": 4716100,
//     "id": 669
//   },
//   {
//     "city": "Grand Périgueux",
//     "name": "perivelo",
//     "url": "http://api.citybik.es/perivelo.json",
//     "tag": "perivelo",
//     "radius": 5000,
//     "lat": 45192900,
//     "lng": 721700,
//     "id": 670
//   },
//   {
//     "city": "Cholet",
//     "name": "choletbus",
//     "url": "http://api.citybik.es/choletbus.json",
//     "tag": "choletbus",
//     "radius": 5000,
//     "lat": 47060000,
//     "lng": -878300,
//     "id": 671
//   },
//   {
//     "city": "Argelès-sur-Mer",
//     "name": "velodaqui",
//     "url": "http://api.citybik.es/velodaqui.json",
//     "tag": "velodaqui",
//     "radius": 5000,
//     "lat": 42544900,
//     "lng": 3023500,
//     "id": 672
//   },
//   {
//     "city": "Mendoza",
//     "name": "enlabici-mendoza",
//     "url": "http://api.citybik.es/enlabici-mendoza.json",
//     "tag": "enlabici-mendoza",
//     "radius": 5000,
//     "lat": -32889500,
//     "lng": -68843300,
//     "id": 673
//   },
//   {
//     "city": "Passo Fundo",
//     "name": "passofundo",
//     "url": "http://api.citybik.es/passofundo.json",
//     "tag": "passofundo",
//     "radius": 5000,
//     "lat": -28255500,
//     "lng": -52398100,
//     "id": 674
//   },
//   {
//     "city": "Cascavel",
//     "name": "cascavel",
//     "url": "http://api.citybik.es/cascavel.json",
//     "tag": "cascavel",
//     "radius": 5000,
//     "lat": -24955800,
//     "lng": -53456600,
//     "id": 675
//   },
//   {
//     "city": "La Rochelle",
//     "name": "yelo-velo",
//     "url": "http://api.citybik.es/yelo-velo.json",
//     "tag": "yelo-velo",
//     "radius": 5000,
//     "lat": 46159100,
//     "lng": -1150900,
//     "id": 676
//   }
// ]
