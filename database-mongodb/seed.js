const db = require('./index.js');
const Middle = require('./Middle.js');
var randomSentence = require('random-sentence');
var randomTitle = require('random-title');
var randomParagraph = require('random-paragraph');

const imgars = [
  'https://i.imgur.com/GzkL3jA.jpg',
  'https://i.imgur.com/Z0BHUC1.jpg',
  'https://i.imgur.com/onllnQA.jpg',
  'https://i.imgur.com/C1CFsMJ.jpg',
  'https://i.imgur.com/En5loGM.jpg',
  'https://i.imgur.com/xb6HmNv.jpg',
  'https://i.imgur.com/uWLcPsH.jpg',
  'https://i.imgur.com/NXLvw3R.jpg',
  'https://i.imgur.com/thmV90m.jpg',
  'https://i.imgur.com/vz5zc25.jpg',
  'https://i.imgur.com/cNpUgq9.jpg',
  'https://i.imgur.com/BmV2FQo.jpg',
  'https://i.imgur.com/tVtaQgx.jpg',
  'https://i.imgur.com/eBH9pj5.jpg',
  'https://i.imgur.com/N4ghJCw.jpg',
  'https://i.imgur.com/IvqMASL.jpg',
  'https://i.imgur.com/k7ZiQjI.jpg',
  'https://i.imgur.com/w2itSdi.jpg',
  'https://i.imgur.com/u6LyfGH.jpg',
  'https://i.imgur.com/ePHEwol.jpg',
  'https://i.imgur.com/78xJj3b.jpg',
  'https://i.imgur.com/vIKKgex.jpg',
  'https://i.imgur.com/9ptJPRp.jpg',
  'https://i.imgur.com/kz6BdZw.jpg',
  'https://i.imgur.com/nH2ACxT.jpg',
  'https://i.imgur.com/JrR5Ffh.jpg',
  'https://i.imgur.com/hhinxy1.jpg',
  'https://i.imgur.com/wtVYhXa.jpg',
  'https://i.imgur.com/7CP18eD.jpg',
  'https://i.imgur.com/x0n4RnN.jpg',
  'https://i.imgur.com/iF6e0Ly.jpg',
  'https://i.imgur.com/ceCgVml.jpg',
  'https://i.imgur.com/ykUWQdz.jpg',
  'https://i.imgur.com/I9C3ciB.jpg',
  'https://i.imgur.com/pOoKB48.jpg',
  'https://i.imgur.com/qz7EvI9.jpg',
  'https://i.imgur.com/gCsRMVL.jpg',
  'https://i.imgur.com/JX0vxtw.jpg',
  'https://i.imgur.com/uMMLfOb.jpg',
  'https://i.imgur.com/1lwCaxP.jpg',
  'https://i.imgur.com/5KyE6ea.jpg',
  'https://i.imgur.com/uelFvMv.jpg',
  'https://i.imgur.com/XmyRzQ4.jpg',
  'https://i.imgur.com/p38bcyV.jpg',
  'https://i.imgur.com/bvE7sNW.jpg',
  'https://i.imgur.com/Skh6HBZ.jpg',
  'https://i.imgur.com/oVJI6FY.jpg',
  'https://i.imgur.com/ADGJVtd.jpg',
  'https://i.imgur.com/4UdMAhG.jpg',
  'https://i.imgur.com/83dXQZe.jpg',
  'https://i.imgur.com/nKp0FFq.jpg',
  'https://i.imgur.com/UAmdx8U.jpg',
  'https://i.imgur.com/1L7iX0m.jpg',
  'https://i.imgur.com/IfY4Tfm.jpg',
  'https://i.imgur.com/AUyOPLY.jpg',
  'https://i.imgur.com/zOFuPWz.jpg',
  'https://i.imgur.com/GzkL3jA.jpg',
  'https://i.imgur.com/Z0BHUC1.jpg',
  'https://i.imgur.com/onllnQA.jpg',
  'https://i.imgur.com/C1CFsMJ.jpg',
  'https://i.imgur.com/En5loGM.jpg',
  'https://i.imgur.com/xb6HmNv.jpg',
  'https://i.imgur.com/uWLcPsH.jpg',
  'https://i.imgur.com/NXLvw3R.jpg',
  'https://i.imgur.com/thmV90m.jpg',
  'https://i.imgur.com/vz5zc25.jpg',
  'https://i.imgur.com/cNpUgq9.jpg',
  'https://i.imgur.com/BmV2FQo.jpg',
  'https://i.imgur.com/tVtaQgx.jpg',
  'https://i.imgur.com/eBH9pj5.jpg',
  'https://i.imgur.com/N4ghJCw.jpg',
  'https://i.imgur.com/IvqMASL.jpg',
  'https://i.imgur.com/k7ZiQjI.jpg',
  'https://i.imgur.com/w2itSdi.jpg',
  'https://i.imgur.com/u6LyfGH.jpg',
  'https://i.imgur.com/ePHEwol.jpg',
  'https://i.imgur.com/78xJj3b.jpg',
  'https://i.imgur.com/vIKKgex.jpg',
  'https://i.imgur.com/9ptJPRp.jpg',
  'https://i.imgur.com/e3I3ku4.jpg',
  'https://i.imgur.com/kz6BdZw.jpg',
  'https://i.imgur.com/jleNFdq.jpg',
  'https://i.imgur.com/tTntrZ5.jpg',
  'https://i.imgur.com/7LXyE7W.jpg',
  'https://i.imgur.com/GOC1RAy.jpg',
  'https://i.imgur.com/zbnGVq6.jpg',
  'https://i.imgur.com/zh1p1pO.jpg',
  'https://i.imgur.com/fwteFsf.jpg',
  'https://i.imgur.com/tc1sSsk.jpg',
  'https://i.imgur.com/sp96D0g.jpg',
  'https://i.imgur.com/l4VI4jB.jpg',
  'https://i.imgur.com/ZZLPGT0.jpg',
  'https://i.imgur.com/4d6wBsd.jpg',
  'https://i.imgur.com/dEYinMZ.jpg',
  'https://i.imgur.com/b3v7VOa.jpg',
  'https://i.imgur.com/0zmS9EG.jpg',
  'https://i.imgur.com/44h58Nt.jpg',
  'https://i.imgur.com/j9JYdP7.jpg',
  'https://i.imgur.com/zWzwJS9.jpg',
  'https://i.imgur.com/BFcktJ8.jpg',
  'https://i.imgur.com/us6VNzW.jpg'
];


function getImage() {
  let x = Math.floor(Math.random() * 99);
  return imgars[x];
}


var products = [];

for (let i = 0; i < 100; i++) {
  let prod = {};
  prod.productId = i;    //ID
  prod.prices = [];       //PRICES
  for (let j = 0; j < 4; j++)
  {
    var randomprice = (Math.random() * (6000.00 - 50.00 + 50.00) + 50.00).toFixed(2);
    prod.prices.push(randomprice);
  }
  prod.images = [];       //IMAGES
  for (let j = 0; j < 14; j++) {
    let x = getImage();
    prod.images.push(x);
  }
  prod.short_headers = []; //SHORT HEADERS
  for (let j = 0; j < 4; j++) {
    let header = randomTitle({min: 1, max: 6});
    prod.short_headers.push(header);
  }
  prod.long_headers = []; //LONG HEADERS
  for (let j = 0; j < 10; j++) {
    let header = randomTitle({min: 3, max: 12});
    prod.long_headers.push(header);
  }
  prod.recc_prod_names = []; //BUNDLE NAMES
  for (let j = 0; j < 4; j++) {
    let name = randomTitle({min: 6, max: 13});
    prod.recc_prod_names.push(name);
  }
  prod.captions = []; //CAPTIONS
  for (let j = 0; j < 13; j++) {
    let cap = randomParagraph({min: 1, max: 3});
    prod.captions.push(cap);
  }
  products.push(prod);
}

const newProducts = products;

const insertProducts = function() {
  Middle.deleteMany({}, function(err, result) {
    Middle.create(newProducts)
    .then(() => {console.log('db seeded!'); db.disconnect();
  });
});
};

insertProducts();
