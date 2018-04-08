function stray(numbers) {
var newNums = numbers.sort();
if (newNums[0] === newNums[1]) {
  return newNums[newNums.length-1]
}  else {
  return newNums[0]
}

}
