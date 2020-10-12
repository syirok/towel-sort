
// You should implement your task here.

module.exports = function towelSort (matrix) {
let res = [];

/*for (let i in matrix){
  if (i%2 == 0) {
    for (let j in matrix[i]) {
      res.push(matrix[i][j])
    }
  } else {
    for (j=matrix[i].length-1; j>=0; j--) {
      res.push(matrix[i][j])
    }
  }
}*/

for (let i in matrix) {
  i % 2 == 0 ? matrix[i].map(el => res.push(el)) : matrix[i].reverse().map(el => res.push(el))
}


  return res;
}
