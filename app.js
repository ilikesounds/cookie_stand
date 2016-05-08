var sD = document.getElementById('storesDiv');

(function defineTable() {
  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  var tfoot = document.createElement('tfoot');
  sD.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tbody);
  table.appendChild(tfoot);
  table.id = 'dataTable';
  thead.id = 'dataHeader';
  tbody.id = 'dataBody';
  tfoot.id = 'dataFooter';
}());

var tableEl = [
  document.getElementById('dataHeader'),
  document.getElementById('dataBody'),
  document.getElementById('dataFooter')
];

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
  var tHR = [];
  var eTD = [];
  for (var thr = 0; thr < 2; thr++) {
    tHR.push(document.createElement('tr'));
    eTD.push(document.createElement('td'));
    eTD[thr].id = 'emptyTableData' + thr;
    tHR[thr].appendChild(eTD[thr]);
    tableEl[0].appendChild(tHR[thr]);
  };
  tHR[0].id = 'storeNameRow';
  tHR[1].id = 'storeStatsRow';
};

function renderHRCol() {
  var hrcTR = [];
  var hrcTD = [];
  for (var hrc = 0; hrc < hoursOpen.length; hrc++) {
    hrcTR.push(document.createElement('tr'));
    hrcTD.push(document.createElement('td'));
    hrcTD[hrc].id = 'hours' + hrc;
    hrcTD[hrc].textContent = hoursOpen[hrc];
    hrcTR[hrc].appendChild(hrcTD[hrc]);
    tableEl[1].appendChild(hrcTR[hrc]);
  }
};

function rss() {
  var sNRow = [];
  var sSRow = [];
  var snr = document.getElementById('storeNameRow');
  var ssr = document.getElementById('storeStatsRow');
  for (var ii = 0; ii < storeName.length; ii++) {
    sNRow.push(document.createElement('td'));
    console.log(sNRow);
    var idName = storeName[ii].name;
    idName = idName.replace(/\s+/g, '');
    sNRow[ii].id = idName;
    sNRow[ii].textContent = storeName[ii].name;
    sNRow[ii].colSpan = 3;
    snr.appendChild(sNRow[ii]);
  };
}

renderTH();
renderHRCol();
rss();
