
// You should implement your task here.

// module.exports = function towelSort (matrix) {
//   let result = [];

//   if (matrix == undefined) {
//     return result;;
//   }
  
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (i % 2 == 0) {
//         result.push(matrix[i][j]);
//       } else {
//         result.push(matrix[i][matrix[i].length - 1 - j]);
//       }
//     }
//   }

//   return result;
// }

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];

  return matrix.reduce((acc, item, index) => {
    if (index % 2 !== 0) {
      return acc.concat(item.reverse());
    } else return acc.concat(item);
  }, []);
}