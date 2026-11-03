const removeDuplicateIds = (objs) => {
    let map= new Map();
    for(let value of Object.entries(objs)){
console.log(value);
    }
};
console.log( removeDuplicateIds( {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}));