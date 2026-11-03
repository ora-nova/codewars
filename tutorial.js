async function getWeather(){
      try{
        let promise=new Promise(function(resolve,reject){ 
            setTimeout(()=> {
                resolve("sunny,25C")}, 2000)});
             let result= await promise;
             console.log(result);
             
            }

              catch(error){
                console.log(error.message);
              }
            }
            getWeather()