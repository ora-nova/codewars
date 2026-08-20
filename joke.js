const URL = "http://great.jokes/christmas";

globalThis.fetch = async function(url) {
    return {
        async json() {
            return {
                jokes: [
                    {
                        id: 23,
                        setup: "Why did the programmer go to the Christmas party?",
                        punchLine: "Because he wanted to unwrap some code!"
                    },
                    {
                        id: 101,
                        setup: "Who is Santa's favorite singer?",
                        punchLine: "Elf-is Presley!"
                    }
                ]
            };
        }
    };
};



async function sayJoke(apiUrl, jokeId){
try {
  let response= await fetch(apiUrl);
  let data=await response.json();
  if(!data.jokes){
    throw new Error(`No jokes at url: ${apiUrl}`);
  }
  let findjoke=data.jokes.find(joke=>joke.id===jokeId);
  if(findjoke){
        return {
        saySetup () { return findjoke.setup; },
        sayPunchLine() { return findjoke.punchLine; }
    };
  }
  else{
 throw new Error(`No jokes found id: ${jokeId}`);

  }

  
} catch (error) {
throw error;
}};
async function test(){
 try {
  let solution= await sayJoke(URL,23);
     console.log(solution.saySetup());
        console.log(solution.sayPunchLine());
 } catch (error) {
  console.log(error.message);
 }
}
test();