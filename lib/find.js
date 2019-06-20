const source        = require('./source');
const secondsToHms  = require('./secondsToHms');
const replaceStr    = require('./replaceStr');
const content       = require('./content');
const search        = require('./search');

// export function to list route
module.exports = function(param) {
      search.biasa(param.cityfrom,param.cityto)==''? console.log(content.getcontent(param)):console.log(content.getcontent2(param))
};
