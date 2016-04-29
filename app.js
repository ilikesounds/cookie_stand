<<<<<<< HEAD
var pikePlaceStore = {
  storeName: 'Pike Place Store',
  minCust: 17,
  maxCust: 88,
  avgCookie: 5.2,
  totals: [],
  grandTotal: 0,
  hours: [
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: '
  ],

  getRandom: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },

  hourTotal: function() {
    for(var j = 0; j < this.hours.length; j++) {
      var ran = Math.floor(this.getRandom() * this.avgCookie);
      this.totals.push(ran);
      this.grandTotal += ran;
    }
  },

  render: function() {
    this.hourTotal();
    var pEl = document.getElementById('pike');
    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      pEl.textContent = this.storeName;
      liEl.textContent = this.hours[i] + this.totals[i];
      ulEl.appendChild(liEl);
    }
    var liMent = document.createElement('li');
    liMent.textContent = 'TOTALS ' + this.grandTotal;
    ulEl.appendChild(liMent);
    pEl.appendChild(ulEl);

  }
};

var seaTacStore = {
  storeName: 'SeaTac Airport Store',
  minCust: 6,
  maxCust: 24,
  avgCookie: 1.2,
  totals: [],
  grandTotal: 0,
  hours: [
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: '
  ],

  getRandom: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },

  hourTotal: function() {
    for(var j = 0; j < this.hours.length; j++) {
      var ran = Math.floor(this.getRandom() * this.avgCookie);
      this.totals.push(ran);
      this.grandTotal += ran;
    }
  },

  render: function() {
    this.hourTotal();
    var pEl = document.getElementById('seaTac');
    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      pEl.textContent = this.storeName;
      liEl.textContent = this.hours[i] + this.totals[i];
      ulEl.appendChild(liEl);
    }
    var liMent = document.createElement('li');
    liMent.textContent = 'TOTALS ' + this.grandTotal;
    ulEl.appendChild(liMent);
    pEl.appendChild(ulEl);
  }
};

var southCenterStore = {
  storeName: 'Southcenter Store',
  minCust: 11,
  maxCust: 38,
  avgCookie: 1.9,
  totals: [],
  grandTotal: 0,
  hours: [
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: '
  ],

  getRandom: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },

  hourTotal: function() {
    for(var j = 0; j < this.hours.length; j++) {
      var ran = Math.floor(this.getRandom() * this.avgCookie);
      this.totals.push(ran);
      this.grandTotal += ran;
    }
  },

  render: function() {
    this.hourTotal();
    var pEl = document.getElementById('souCen');
    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      pEl.textContent = this.storeName;
      liEl.textContent = this.hours[i] + this.totals[i];
      ulEl.appendChild(liEl);
    }
    var liMent = document.createElement('li');
    liMent.textContent = 'TOTALS ' + this.grandTotal;
    ulEl.appendChild(liMent);
    pEl.appendChild(ulEl);

  }
};

var bellevueSqStore = {
  storeName: 'Bellevue Square Store',
  minCust: 20,
  maxCust: 48,
  avgCookie: 3.3,
  totals: [],
  grandTotal: 0,
  hours: [
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: '
  ],

  getRandom: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },

  hourTotal: function() {
    for(var j = 0; j < this.hours.length; j++) {
      var ran = Math.floor(this.getRandom() * this.avgCookie);
      this.totals.push(ran);
      this.grandTotal += ran;
    }
  },

  render: function() {
    this.hourTotal();
    var pEl = document.getElementById('belVue');
    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      pEl.textContent = this.storeName;
      liEl.textContent = this.hours[i] + this.totals[i];
      ulEl.appendChild(liEl);
    }
    var liMent = document.createElement('li');
    liMent.textContent = 'TOTALS ' + this.grandTotal;
    ulEl.appendChild(liMent);
    pEl.appendChild(ulEl);
  }
};

var alkiStore = {
  storeName: 'Alki Store',
  minCust: 3,
  maxCust: 24,
  avgCookie: 2.6,
  totals: [],
  grandTotal: 0,
  hours: [
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: '
  ],

  getRandom: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },

  hourTotal: function() {
    for(var j = 0; j < this.hours.length; j++) {
      var ran = Math.floor(this.getRandom() * this.avgCookie);
      this.totals.push(ran);
      this.grandTotal += ran;
    }
  },

  render: function() {
    this.hourTotal();
    var pEl = document.getElementById('alki');
    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      pEl.textContent = this.storeName;
      liEl.textContent = this.hours[i] + this.totals[i];
      ulEl.appendChild(liEl);
    }
    var liMent = document.createElement('li');
    liMent.textContent = 'TOTALS ' + this.grandTotal;
    ulEl.appendChild(liMent);
    pEl.appendChild(ulEl);
  }
};

var stores = [
  pikePlaceStore,
  alkiStore,
  seaTacStore,
  bellevueSqStore,
  southCenterStore
];
for(var k = 0; k < stores.length; k++) {
  stores[k].render(stores[k].grandTotal);
}
=======
var stores = [

  {
  name: 'Pike Place',
  minCust: '17',
  maxCust: '18',
  avgSale: '5.2'
  },

  {
  name: 'SeaTac',
  minCust: '6',
  maxCust: '24',
  avgSale: '1.2',
  },

  {
  name: 'Southcenter',
  minCust: '11',
  maxCust: '38',
  avgSale: '1.9',
  },

  {
  name: 'Bellevue',
  minCust: '20',
  maxCust: '48',
  avgSale: '3.3',
  },

  {
  name: 'Alki',
  minCust: '3',
  maxCust: '24',
  avgSale: '2.6',
  }
]

stores.randCust =  function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

stores.render = function() {
  var kV = Object.keys(this);
  var newUl = document.createElement('ul');
  for (var i = 0; i < kV.length; i++) {
    var newLi = document.createElement('li');
    newUl.appendChild(newLi);
    var newText = document.createTextNode(kV[i]);
  }
}

for (store in stores) {
  stores.render();
}

stores.render();
>>>>>>> master
