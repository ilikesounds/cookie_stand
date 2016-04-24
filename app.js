var pikePlace = {
  minCust: '17',
  maxCust: '18',
  avgSale: '5.2'
  randCust: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  render: function() {
    var liEl = document.createElement('li');
    var ulEl = document.createElement('ul');
    liEl.textContent = this.minCust;
    liEl.textContent =
  }
}

var seaTac = {
  minCust: '6';
  maxCust: '24';
  avgSale: '1.2';
  randCust: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
}

var southcenter = {
  minCust: '11';
  maxCust: '38';
  avgSale: '1.9';
  randCust: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
}

var bellevue = {
  minCust: '20';
  maxCust: '48';
  avgSale: '3.3';
  randCust: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
}

var alki = {
  minCust: '3';
  maxCust: '24';
  avgSale: '2.6';
  randCust: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
}
