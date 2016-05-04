var sD = document.getElementById('storesDiv');

var hoursOpen = [
  '10:00 am',
  '11:00 am',
  '12:00 pm',
  '01:00 pm',
  '02:00 pm',
  '03:00 pm',
  '04:00 pm',
  '05:00 pm'
];

function Store(name, minCust, maxCust, avgCookie, sectionId) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hrTotal = [];
  this.dayTotal = 0;
  this.sectionId = sectionId;
};

Store.prototype.randCust = function(min, max) {
  console.log(min, max);
  return Math.random() * (max - min) + min;
};

Store.prototype.hourTotal = function(hTotal, dTotal, avg, rand) {
  console.log(rand);
  for (var j = 0; j < hoursOpen.length; j++) {
    var ran = Math.floor(rand(this.minCust, this.maxCust) * avg);
    hTotal.push(ran);
    dTotal += ran;
  };
  return dTotal;
};

//function() {
//  var createdTD = [];
//  for (tr = 0; tr < 5; tr++) {
//    var ctd = document.createElement('td');
//    createdTD.push(ctd);
//  }
//};

// How can I DRY this out using a for loop to automate column creation based on the first 4 indicies of the store object
function renderTH() {
  var tHeader = document.createElement('thead');
  var tBody = document.createElement('tbody');
  tBody.id = 'tableBody';
  var tHeaderRow = document.createElement('th');
  var tHD1 = document.createElement('td');
  var tHD2 = document.createElement('td');
  var tHD3 = document.createElement('td');
  var tHD4 = document.createElement('td');
  var tHD5 = document.createElement('td');
  tHD1.textContent = '';
  tHD2.textContent = 'Store Name';
  tHD3.textContent = 'Min. Cust./Hr.';
  tHD4.textContent = 'Max. Cust./Hr.';
  tHD5.textContent = 'Avg. Cookie/Hr.';
  tHeaderRow.appendChild(tHD1);
  tHeaderRow.appendChild(tHD2);
  tHeaderRow.appendChild(tHD3);
  tHeaderRow.appendChild(tHD4);
  tHeaderRow.appendChild(tHD5);
  tHeaderRow.id = 'thRow';
  tHeader.appendChild(tHeaderRow);
  sD.appendChild(tHeader);
  sD.appendChild(tBody);
  for (var hr = 0; hr < hoursOpen.length; hr++) {
    var thr = document.createElement('tr');
    thr.textContent = hoursOpen[hr];
    tBody.appendChild(thr);
  }
};

// Store.prototype.render = function(sectId) {
//   console.log(this.hrTotal);
//   this.dayTotal = this.hourTotal(this.hrTotal, this.dayTotal, this.avgCookie,
//     this.randCust);
//   var trEl = document.createElement('tr');
//
//   for (var i = 0; i < hoursOpen.length; i++) {
//     var tdEl = document.createElement('tr');
//     pEl.textContent = this.name;
//     liEl.textContent = hoursOpen[i] + this.hrTotal[i];
//     ulEl.appendChild(liEl);
//
// };
// Store.prototype.render = function(sectId) {
//   console.log(this.hrTotal);
//   this.dayTotal = this.hourTotal(this.hrTotal, this.dayTotal, this.avgCookie, this.randCust);
//   var pEl = document.getElementById(sectId);
//   var ulEl = document.createElement('ul');
//
//   for (var i = 0; i < hoursOpen.length; i++) {
//     var liEl = document.createElement('li');
//     pEl.textContent = this.name;
//     liEl.textContent = hoursOpen[i] + this.hrTotal[i];
//     ulEl.appendChild(liEl);
//   }
//   var liMent = document.createElement('li');
//   liMent.textContent = 'Totals: ' + this.dayTotal;
//   ulEl.appendChild(liMent);
//   pEl.appendChild(ulEl);
// };

var pike = new Store('Pike Place Store', 17, 88, 5.2, 'pike');
var sea = new Store('SeaTac Store', 6, 24, 1.2, 'seaTac');
var sou = new Store('Southcenter Store', 11, 38, 1.9, 'souCen');
var bell = new Store('Bellevue Square Store', 20, 48, 3.3, 'belVue');
var alki = new Store('Alki Store', 3, 24, 2.6, 'alki');

var storeName = [
  pike,
  sea,
  sou,
  bell,
  alki
];

renderTH();

// for (var c = 0; c < storeName.length; c++) {
//   storeName[c].render(storeName[c].sectionId);
// };
