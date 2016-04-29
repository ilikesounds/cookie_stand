var elId = [
  document.getElementById('pike'),
  document.getElementById('seaTac'),
  document.getElementById('souCen'),
  document.getElementById('belVue'),
  document.getElementById('alki')
];

var hoursOpen = [
  '10:00a',
  '11:00a',
  '12:00p',
  '01:00p',
  '02:00p',
  '03:00p',
  '04:00p',
  '05:00p',
  '06:00p'
];

var stores = [
  pike,
  // sea,
  // south,
  // bell,
  // alki
];

var pike = {
  name: 'Pike Place',
  minCust: 17,
  maxCust: 88,
  avgSale: 5.2,
  hrTotal: [],
  dayTotal: 0,
  id: elId[0],

  randCust: function(min, max) {
    return Math.random() * (max - min + 1) + min;
    // console.log(this.randomCustomer);
  },

  genHr: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookiesAnHour = Math.floor(pike.randCust(pike.maxCust - pike.minCust) *
        pike.avgSale);
      pike.hrTotal += cookiesAnHour;
      pike.dayTotal += cookiesAnHour;
    };
  },
};

//   render: function(element) {
//     this.genHr(this.hrTotal, this.dayTotal, this.avgSale, this.randCust(this.maxCust - this.minCust), hoursOpen);
//     var ulEl = document.createElement('ul');
//     ulEl.appendChild(document.createTextNode(this.name));
//     var secEl = element.appendChild(ulEl);
//
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': ' + this.hrTotal[i];
//       ulEl.appendChild(liEl);
//     };
//
//     var totEl = document.createElement('li');
//     totEl.textContent = 'Total: ' + this.hrTotal;
//     ulEl.appendChild(totEl);
//   }
// };
//
// pike.render(elId[0]);

// var sea = {
//   name: 'SeaTac',
//   minCust: 6,
//   maxCust: 24,
//   avgSale: 1.2,
//   hrTotal: [],
//   total: 0,
//
//   randCust: function(min, max) {
//     return Math.random() * (max - min + 1) + min;
//   },
//
//   genHr: function() {
//
//   },
//
//   render: function() {
//     this.genHr();
//
//     var ulEl = document.createElement('ul');
//     ulEl.appendChild(document.createTextNode(this.name));
//     var sectionEl = document.getElementById('store_data').appendChild(ulEl);
//
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ": " + this.hrTotal[i];
//       ulEl.appendChild(liEl);
//     };
//   };
// };
//
// var south = {
//   name: 'Southcenter',
//   minCust: '11',
//   maxCust: '38',
//   avgSale: '1.9',
//   hrTotal: [],
//   total: 0,
//
//   randCust: function(min, max) {
//     return Math.random() * (max - min + 1) + min;
//   },
//
//   genHr: function() {
//
//   },
//
//   render: function() {
//     this.genHr();
//
//     var ulEl = document.createElement('ul');
//     ulEl.appendChild(document.createTextNode(this.name));
//     var sectionEl = document.getElementById('store_data').appendChild(ulEl);
//
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ": " + this.hrTotal[i];
//       ulEl.appendChild(liEl);
//     };
//   };
// };
//
// var bell = {
//   name: 'Bellevue',
//   minCust: '20',
//   maxCust: '48',
//   avgSale: '3.3',
//   hrTotal: [],
//   total: 0,
//
//   randCust: function(min, max) {
//     return Math.random() * (max - min + 1) + min;
//   },
//
//   genHr: function() {
//
//   },
//
//   render: function() {
//     this.genHr();
//
//     var ulEl = document.createElement('ul');
//     ulEl.appendChild(document.createTextNode(this.name));
//     var sectionEl = document.getElementById('store_data').appendChild(ulEl);
//
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ": " + this.hrTotal[i];
//       ulEl.appendChild(liEl);
//     };
//   };
// };
//
// var alki = {
//   name: 'Alki',
//   minCust: '3',
//   maxCust: '24',
//   avgSale: '2.6',
//   hrTotal: [],
//   total: 0,
//
//   randCust: function(min, max) {
//     return Math.random() * (max - min + 1) + min;
//   },
//
//   genHr: function() {
//
//   },
//
//   render: function() {
//     this.genHr();
//
//     var ulEl = document.createElement('ul');
//     ulEl.appendChild(document.createTextNode(this.name));
//     var sectionEl = document.getElementById('store_data').appendChild(ulEl);
//
//     for (var i = 0; i < hoursOpen.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ": " + this.hrTotal[i];
//       ulEl.appendChild(liEl);
//     };
//   };
// };
//
//
// // stores.render = function() {
// //   var kV = Object.keys(this);
// //   var newUl = document.createElement('ul');
// //   for (var i = 0; i < kV.length; i++) {
// //     var newLi = document.createElement('li');
// //     newUl.appendChild(newLi);
// //     var newText = document.createTextNode(kV[i]);
// //   }
// // }
// //
// // for (store in stores) {
// //   stores.render();
// // }
// //
// // stores.render();
