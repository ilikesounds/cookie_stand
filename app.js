var sD = document.getElementById('storesDiv');

var hoursOpen = ['10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm',
  '03:00 pm', '04:00 pm', '05:00 pm'
];

var storeName = [];

function Store(name, minCust, maxCust, avgCookie, sectionId) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hrTotal = [];
  this.dayTotal = 0;
  storeName.push(this);
};

var pike = new Store('Pike Place Store', 17, 88, 5.2, 'pike');
var sea = new Store('SeaTac Store', 6, 24, 1.2, 'seaTac');
var sou = new Store('Southcenter Store', 11, 38, 1.9, 'souCen');
var bell = new Store('Bellevue Square Store', 20, 48, 3.3, 'belVue');
var alki = new Store('Alki Store', 3, 24, 2.6, 'alki');

Store.prototype.randCust = function(min, max) {
  console.log(min, max);
  return Math.random() * (max - min) + min;
};

Store.prototype.hourTotal = function(hTotal, dTotal, avg, rand) {
  console.log(rand);
  for (var ht = 0; ht < hoursOpen.length; ht++) {
    var ran = Math.floor(rand(this.minCust, this.maxCust) * avg);
    hTotal.push(ran);
    dTotal += ran;
    //or
    //hTotal.push(Math.floor(rand(this.minCust, this.maxCust) * avg));
    //dTotal += hTotal[ht];
  };
  return dTotal;
};

function renderTH() {
  var tHeader = document.createElement('thead');
  var dataTable = document.createElement('table');
  sD.appendChild(dataTable);
  dataTable.id = 'dataTable';
  var tHR = [];
  var eTD = [];
  for (var thr = 0; thr < 2; thr++) {
    tHR.push(document.createElement('tr'));
    eTD.push(document.createElement('td'));
    eTD[thr].className = 'emptyTableData';
    tHR[thr].appendChild(eTD[thr]);
    tHeader.appendChild(tHR[thr]);
  };
  tHeader.id = 'tableHeader';
  tHR[0].id = 'storeNameRow';
  tHR[1].id = 'storeStatsRow';
  dataTable.appendChild(tHeader);
};

function renderHRCol() {
  var tBody = document.createElement('tbody');
  var hrcTR = [];
  var hrcTD = [];
  for (var hrc = 0; hrc < hoursOpen.length; hrc++) {
    var hrcTR1 = document.createElement('tr');
    var hrcTD1 = document.createElement('td');
  }
};

// for (obj <- (this is arbitrary, like a function argument or variable) in Store <- (this specifies the array to iterate over)); {
//   this syntax will iterate over the total number of objects within the Store object
// };

//Store[obj].method/property is how you access the object array as a traditional array, you can call this with [obj] because it was specified in the previous for loop. I have to do this using for loops.

// var sName = [];
// tBody.id = 'tableBody';
// for (var tbd = 0; tbd < Store.length; tbd++) {
//   var sName1 = document.createElement('td')
//   sName.push(sName1);
//   sName[tbd].textContent = Store.name[tbd];
//   sName[tbd].id = Store
// };
// tHD1.textContent = '';
// tHD2.textContent = 'Store Name';
// tHD3.textContent = 'Min. Cust./Hr.';
// tHD4.textContent = 'Max. Cust./Hr.';
// tHD5.textContent = 'Avg. Cookie/Hr.';
// tHeaderRow.appendChild(tHD1);
// tHeaderRow.appendChild(tHD2);
// tHeaderRow.appendChild(tHD3);
// tHeaderRow.appendChild(tHD4);
// tHeaderRow.appendChild(tHD5);
// tHeaderRow.id = 'thRow';
// sD.appendChild(tBody);
// for (var hr = 0; hr < hoursOpen.length; hr++) {
//   var thr = document.createElement('tr');
//   thr.textContent = hoursOpen[hr];
//   tBody.appendChild(thr);
// }

function renderTD() {
  var tHD1 = document.createElement('td');
  var tHD2 = document.createElement('td');
  var tHD3 = document.createElement('td');
  var tHD4 = document.createElement('td');
  var tHD5 = document.createElement('td');
}

// Store.prototype.renderRow = function() {
//   this.dayTotal = this.hourTotal(this.hrTotal, this.dayTotal, this.avgCookie, this.randCust);
//   var trEl = document.createElement('tr');
//
//   for (var i = 0; i < hoursOpen.length; i++) {
//     var tdEl = document.createElement('td');
//     pEl.textContent = this.name;
//     liEl.textContent = hoursOpen[i] + this.hrTotal[i];
//     ulEl.appendChild(liEl);
//   }
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
// }

// for (var c = 0; c < storeName.length; c++) {
//   storeName[c].render(storeName[c].sectionId);
// };

// var formEl = document.getElementById('submit');
// submit.addEventListener('submit', function())

renderTH();
