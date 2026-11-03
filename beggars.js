function beggars(values, n) {
  
  if (n === 0) {
    return [];
  }

 
  let result = new Array(n).fill(0);

  for (let i = 0; i < values.length; i++) {
   
    let beggar = i % n;

    result[beggar] += values[i];
  }

  return result;
}

console.log(beggars([1, 2, 3, 4, 5], 2)); 
console.log(beggars([1, 2, 3, 4, 5], 3)); 
console.log(beggars([1, 2, 3], 0));    