/* challenge: fix the typing of this function so that typescri pt knows the returned data is User.

/*interface User{
    id:number;
    name: string;
}

async function getUser(){
    return {
        id:1,
        name: "aline"
    }
}
*/
interface User{
    id:number;
    name: string;
}

async function getUser(): Promise<User>{
    return {
        id:1,
        name: "aline"
    }
}
console.log(getUser())
