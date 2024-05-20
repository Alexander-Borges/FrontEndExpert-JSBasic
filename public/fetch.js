const { FormData } = require("node-fetch");


const BASE_API = "http://localhost:8080/api";
const JSON_API = "http://localhost:8080/jsonApi";
const POST_API = "http://localhost:8080/postApi";
const SLOW_API = "http://localhost:8080/slowApi";

// older way without promises
//const request = new XMLHttpRequest();
//request.addEventListener("load", function(){
  //  console.log(this.responseText);
//});

//request.open("GET", BASE_API);
//request.send();


//Sometimes API's can take in parameters
// always start it with a question mark
const url = new URL(BASE_API);
url.searchParams.set("firstName", "Alex");
url.searchParams.set("lastName", "Alex");

const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

fetch(BASE_API + "?firstName=Alex&lastName=Borges")
    .then(res => res.text())
    .then(console.log)
    .catch(error => console.error("Oh no: " + error));

async function onSubmit(event){
    event.preventDefault();

    const options = {
        method: "POST",
        body: new FormData(form)
    };

    try {
        const response = await fetch(POST_API, options);
        //helpful to check the status and create a specific response
        const text = await response.text();
        console.log(text);
}   catch (error){
    console.error("Oh no: " + error);
    }
}

main();
