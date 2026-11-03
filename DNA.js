function dnaStrand(dna){
    let string="";
    for(let char of dna){
        if(char==='A'){
            char='T';
            string+= char;
        }
        else if(char==='T'){
            char='A';
  string+= char;
        }
        else if(char==='C'){
            char='G';
              string+= char;
        }
        else{
            char='C';
              string+= char;
        }
    }
  return string;
}
console.log(dnaStrand("ATTCG"));