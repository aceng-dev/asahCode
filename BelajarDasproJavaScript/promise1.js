import { doSomething } from "./promise2.js";

function fullFilled(doSomethingData){
    console.log(doSomethingData);
}
function rejected (doSomethingEror){
    console.log(doSomethingEror);
}

doSomething().then(fullFilled,rejected);