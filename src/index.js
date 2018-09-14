/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var c = 0;

  for (var i = 0; i < preferences.length; i++) {
    
    var j = preferences[i];
    if (j - 1 > preferences.length) continue;
    var z = preferences[j-1];
    if (z - 1 > preferences.length) continue;
    if (i === preferences[z-1]-1) {
      c++;
    }
  }
  return Math.floor(c / 3);
};
