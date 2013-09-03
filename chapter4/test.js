var _ = require('underscore');

function finder(valueFun, bestFun, coll) {
  return _.reduce(coll, function(best, current, index) {
    var bestVal = valueFun(best);
    var currentVal = valueFun(current);
    console.log('iteration' + index + ": ");
    console.log('best: ' + best);
    console.log('current: ' + current);
    return (bestVal === bestFun(bestVal, currentVal)) ? bestVal : currentVal;
  }, 0);
}

finder(_.identity, Math.max, [1,2,3,4,5]);
