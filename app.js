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
  'pikeP',
  'seaT',
  'Sout',
  'bell',
  'alk'
];

var pike = {
  name: 'Pike Place',
  minCust: '17',
  maxCust: '18',
  avgSale: '5.2',
  avgCook: 0,
  hrTotal: [],

  randCust: function(min, max) {
    return Math.random() * (max - min + 1) + min;
  },

  genHr: function() {

  },

  render: function() {
    this.genHr();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ": " + this.hrTotal[i];
      ulEl.appendChild(liEl);
    };
  };

};

var sea = {
  name: 'SeaTac',
  minCust: '6',
  maxCust: '24',
  avgSale: '1.2',
  avgCook: 0,
  hrTotal: [],

  randCust: function(min, max) {
    return Math.random() * (max - min + 1) + min;
  },

  genHr: function() {

  },

  render: function() {
    this.genHr();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ": " + this.hrTotal[i];
      ulEl.appendChild(liEl);
    };
  };
};

var south = {
  name: 'Southcenter',
  minCust: '11',
  maxCust: '38',
  avgSale: '1.9',
  avgCook: 0,
  hrTotal: [],

  randCust: function(min, max) {
    return Math.random() * (max - min + 1) + min;
  },

  genHr: function() {

  },

  render: function() {
    this.genHr();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ": " + this.hrTotal[i];
      ulEl.appendChild(liEl);
    };
  };
};

var bell = {
  name: 'Bellevue',
  minCust: '20',
  maxCust: '48',
  avgSale: '3.3',
  avgCook: 0,
  hrTotal: [],

  randCust: function(min, max) {
    return Math.random() * (max - min + 1) + min;
  },

  genHr: function() {

  },

  render: function() {
    this.genHr();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ": " + this.hrTotal[i];
      ulEl.appendChild(liEl);
    };
  };
};

var alki = {
  name: 'Alki',
  minCust: '3',
  maxCust: '24',
  avgSale: '2.6',
  avgCook: 0,
  hrTotal: [],

  randCust: function(min, max) {
    return Math.random() * (max - min + 1) + min;
  },

  genHr: function() {

  },

  render: function() {
    this.genHr();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ": " + this.hrTotal[i];
      ulEl.appendChild(liEl);
    };
  };
};


// stores.render = function() {
//   var kV = Object.keys(this);
//   var newUl = document.createElement('ul');
//   for (var i = 0; i < kV.length; i++) {
//     var newLi = document.createElement('li');
//     newUl.appendChild(newLi);
//     var newText = document.createTextNode(kV[i]);
//   }
// }
//
// for (store in stores) {
//   stores.render();
// }
//
// stores.render();
