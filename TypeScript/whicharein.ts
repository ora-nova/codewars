export function inArray(a1: string[], a2: string[]): string[] {
 let result=a1.filter(word=>a2.some(str=>str.includes(word)))
 .sort();
 return result;
}
