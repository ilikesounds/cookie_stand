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

var storeName = [];

var hrsId = [];

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

Store.prototype.hourTotal = function() {
  for (var ht = 0; ht < hoursOpen.length; ht++) {
    var ran = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookie);
    console.log(ran);
    this.hrTotal.push(ran);
    this.dayTotal += ran;
  };
  return this.dayTotal;
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
    hrcTR[hrc].id = 'hours' + hrc;
    hrcTD[hrc].textContent = hoursOpen[hrc];
    hrcTR[hrc].appendChild(hrcTD[hrc]);
    tableEl[1].appendChild(hrcTR[hrc]);
  };
  var hrcTotR = document.createElement('tr');
  var hrcTotD = document.createElement('td');
  hrcTotR.id = 'totalsRow';
  hrcTotD.id = 'totalsData0';
  hrcTotD.textContent = 'Daily Cookie Total';
  hrcTotR.appendChild(hrcTotD);
  tableEl[2].appendChild(hrcTotR);
};

function rss() {
  var sNRow = [];
  var sSCol1 = [];
  var sSCol2 = [];
  var sSCol3 = [];
  var snr = document.getElementById('storeNameRow');
  var ssr = document.getElementById('storeStatsRow');
  for (var ii = 0; ii < storeName.length; ii++) {
    sNRow.push(document.createElement('td'));
    var idName = storeName[ii].name;
    idName = idName.replace(/\s+/g, '');
    sNRow[ii].id = idName;
    sNRow[ii].textContent = storeName[ii].name;
    sNRow[ii].colSpan = 3;
    snr.appendChild(sNRow[ii]);
  };
  for (var ii = 0; ii < storeName.length; ii++) {
    sSCol1.push(document.createElement('td'));
    sSCol1[ii].id = 'minCust' + ii;
    sSCol1[ii].textContent = storeName[ii].minCust;
    ssr.appendChild(sSCol1[ii]);
    sSCol2.push(document.createElement('td'));
    sSCol2[ii].id = 'maxCust' + ii;
    sSCol2[ii].textContent = storeName[ii].maxCust;
    ssr.appendChild(sSCol2[ii]);
    sSCol3.push(document.createElement('td'));
    sSCol3[ii].id = 'avgCookie' + ii;
    sSCol3[ii].textContent = storeName[ii].avgCookie;
    ssr.appendChild(sSCol3[ii]);
  };
}

Store.renderNew = function(storeName) {
  storeName.hourTotal(storeName.hrTotal, storeName.dayTotal, storeName.avgCookie);
  for (iii = 0; iii < hoursOpen.length; iii++) {
    var hrId = document.getElementById('hours' + iii);
    var hrCookTD = document.createElement('td');
    hrCookTD.colSpan = 3;
    var idName = storeName.name;
    idName = idName.replace(/\s+/g, '');
    hrCookTD.id = idName + 'hrTotal' + iii;
    hrCookTD.textContent = storeName.hrTotal[iii];
    hrId.appendChild(hrCookTD);
  };
  var totalTD = document.createElement('td');
  var totalAppend = document.getElementById('totalsRow');
  totalTD.textContent = storeName.dayTotal;
  var idName2 = storeName.name;
  idName2 = idName2.replace(/\s+/g, '');
  totalTD.id = idName2 + 'Total';
  totalAppend.appendChild(totalTD);
};

function runEmAll() {
  renderTH();
  renderHRCol();
  rss();
  for (s = 0; s < storeName.length; s++) {
    Store.renderNew(storeName[s]);
  };
};

runEmAll();
