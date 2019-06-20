exports.get = function(from,to,price,time) {
  result = {
              "from"        :from,
              "to"          :to,
              "price"       :price,
              "travel_time" :time
            } ;
  return result;
};
