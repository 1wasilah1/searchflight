const source  = require('./source');
exports.biasa = function(from,to) {
  var destiny = [];
  for (var item in source.routes) {
      //get your destination
      if(source.routes[item].from==from && source.routes[item].to==to){
        destiny.push(source.routes[item])
      }
  }
  return destiny;
};
exports.transit = function(kota) {
  var destiny     = [];
  for (var item in source.routes) {
      //get your destination
      if(source.routes[item].to==kota){
        destiny.push(source.routes[item])
      }
  }
  return destiny;
};
