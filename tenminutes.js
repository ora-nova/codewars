function isValidWalk(walk) {
    let obj= new Object();

  for(let char of walk){
  if(obj[char]){
    obj[char]++;
  }
  else{
    obj[char]=1;
  }
  };
  for(let char of walk){
    if(walk.length===10){
    if(obj['n']===obj['s']&&obj['e']===obj['w']){
        return true;
    }
    else{
        return false;
    }
}
    else{
        return false;
    }

  };

}
console.log(isValidWalk(['n','n','n','e','s','s','n','s','e','n']));