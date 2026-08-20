function pigLatin(string){
let vowels="aeiou";
let low=string.toLowerCase();
let array=low.split('');
let vowel=vowels.split('');
let alpha=/^[a-z]+$/;
if(!alpha.test(low)){
    return null;
}
if(low.startsWith("a")|| low.startsWith("e")||low.startsWith("i") || low.startsWith("o")|| low.startsWith("u")){
    return low+="way";
};
if(array.every(char=>!vowels.includes(char))){
        return array.join('') + "ay";
};
while(!vowels.includes(array[0])){
        array.push(array.shift());
};


    return array.join('') +"ay";
}
console.log(pigLatin("hgoll3"));
