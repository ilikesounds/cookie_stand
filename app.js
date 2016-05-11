var sD = document.getElementById('storesDiv');
var formEl = document.getElementById('storeUpdate');

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

function Store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hrTotal = [];
  this.dayTotal = 0;
  storeName.push(this);
};

var pike = new Store('Pike Place Store', 17, 88, 5.2);
var sea = new Store('SeaTac Store', 6, 24, 1.2);
var sou = new Store('Southcenter Store', 11, 38, 1.9);
var bell = new Store('Bellevue Square Store', 20, 48, 3.3);
var alki = new Store('Alki Store', 3, 24, 2.6);

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
  for (var ix = 0; ix < storeName.length; ix++) {
    sSCol1.push(document.createElement('td'));
    sSCol1[ix].id = 'minCust' + ii;
    sSCol1[ix].textContent = storeName[ix].minCust;
    ssr.appendChild(sSCol1[ix]);
    sSCol2.push(document.createElement('td'));
    sSCol2[ix].id = 'maxCust' + ix;
    sSCol2[ix].textContent = storeName[ix].maxCust;
    ssr.appendChild(sSCol2[ix]);
    sSCol3.push(document.createElement('td'));
    sSCol3[ix].id = 'avgCookie' + ix;
    sSCol3[ix].textContent = storeName[ix].avgCookie;
    ssr.appendChild(sSCol3[ix]);
  };
}

Store.renderNew = function(sName) {
  sName.hourTotal(sName.hrTotal, sName.dayTotal, sName.avgCookie);
  for (iii = 0; iii < hoursOpen.length; iii++) {
    var hrId = document.getElementById('hours' + iii);
    var hrCookTD = document.createElement('td');
    hrCookTD.colSpan = 3;
    var idName = sName.name;
    idName = idName.replace(/\s+/g, '');
    hrCookTD.id = idName + 'hrTotal' + iii;
    hrCookTD.textContent = sName.hrTotal[iii];
    hrId.appendChild(hrCookTD);
  };
  var totalTD = document.createElement('td');
  var totalAppend = document.getElementById('totalsRow');
  totalTD.textContent = sName.dayTotal;
  var idName2 = sName.name;
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

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var newStoreName = event.target.newStoreName.value;
  var newMinCust = parseInt(event.target.newStoreMin.value);
  var newMaxCust = parseInt(event.target.newStoreMax.value);
  var newAvgCookie = parseFloat(event.target.newStoreAvg.value);
  var newShop = new Store(newStoreName, newMinCust, newMaxCust,
    newAvgCookie);
  newShop.hourTotal();
  Store.renderNew(newShop);
  var snr = document.getElementById('storeNameRow');
  var ssr = document.getElementById('storeStatsRow');
  var sNRow = document.createElement('td');
  var idName3 = storeName.lastIndexOf.name;
  idName3 = idName3.replace(/\s+/g, '');
  sNRow.id = idName3;
  sNRow.textContent = storeName[storeName.length - 1].name;
  sNRow.colSpan = 3;
  snr.appendChild(sNRow);
  var sSCol1 = document.createElement('td');
  sSCol1.id = 'minCust' + storeName[storeName.length - 1];
  sSCol1.textContent = storeName[storeName.length - 1].minCust;
  ssr.appendChild(sSCol1);
  var sSCol2 = document.createElement('td');
  sSCol2.id = 'maxCust' + storeName[storeName.length - 1];
  sSCol2.textContent = storeName[storeName.length - 1].maxCust;
  ssr.appendChild(sSCol2);
  var sSCol3 = document.createElement('td');
  sSCol3.id = 'avgCookie' + storeName[storeName.length - 1];
  sSCol3.textContent = storeName[storeName.length - 1].avgCookie;
  ssr.appendChild(sSCol3);
});

runEmAll();
