const search        = require('./search');
const getheader     = require('./getheader');
const secondsToHms  = require('./secondsToHms');
const replaceStr    = require('./replaceStr');
var sortJsonArray   = require('sort-json-array');

exports.getcontent = function(param) {
  // tampilkan semua yang mempunyai tujuan yang sama
  i = priceroute = timeroute = 0;
  last = nexttran = [];
  hasiltransit    = search.transit(param.cityto)
  // cocokkan penerbangan nya
  for (var item in hasiltransit) {
      nexttran        = search.biasa(param.cityfrom,hasiltransit[item].from)
      if(nexttran[i]!==undefined){
          rute        = search.biasa(nexttran[i].to,param.cityto);
          detrute     = search.biasa(param.cityfrom,rute[i].from);
          detall      = detrute.concat(rute)
          console.log(detall)
          priceroute  = parseInt(detrute[i].price)+parseInt(rute[i].price);
          timeroute   = parseInt(detrute[i].travel_time)+parseInt(rute[i].travel_time);
          header      = getheader.get(param.cityfrom,param.cityto,priceroute,detrute[i].travel_time)
          rescnv      = secondsToHms.get(timeroute)
          time        = replaceStr.get(rescnv);
          last.push({
                      "from"        :header.from,
                      "to"          :header.to,
                      "price"       :header.price,
                      "travel_time" :time,
                      "routes"      :detall
          });
      }

  }
  sortJsonArray(last, param.orderby,'asc');
  var res     = JSON.stringify(last);
  return res;
};
exports.getcontent2 = function(param) {
  result        = [];
  priceroute    = 0;
  rutebiasa     = search.biasa(param.cityfrom,param.cityto)
  for (var item in rutebiasa) {
    priceroute  = priceroute+parseInt(rutebiasa[item].price);
    result.push({
                    "from"        :param.cityfrom,
                    "to"          :param.cityto,
                    "price"       :priceroute,
                    "travel_time" :rutebiasa[item].travel_time,
                    "routes"      :[rutebiasa[item]]
                  });
        sortJsonArray(result, param.orderby);
        var res     = JSON.stringify(result);
  }
  return res;
};
