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
