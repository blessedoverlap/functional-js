var _ = require('underscore');

function plucker(FIELD) {
  return function(obj) {
    return (obj && obj[FIELD]);
  };
}

var best = {title: "Infinite Jest", author: "DFW"};

var getTitle = plucker('title');

console.log(getTitle(best));
console.log(getTitle(null));
