exports.get = function(str) {
  var find    = ["hour","minutes","seconds"];
  var replace = ['h','m','s'];
  for (var i = 0; i < find.length; i++) {
      str     = str.replace(new RegExp(find[i], 'gi'), replace[i]);
  }
  return str;
};
