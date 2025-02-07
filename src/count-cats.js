const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// let matriX = [[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ];
function countCats(backyard) {
  // throw new NotImplementedError('Not implemented');
  let count = 0;
  for(let elem of backyard) {
    for (let i = 0; i < elem.length; i++) {
      if(elem[i] === '^^') {
        count++;
      }
    }
  }
  return count;
}


module.exports = {
  countCats
};
