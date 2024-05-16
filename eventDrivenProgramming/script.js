const button = document.querySelector("button");

button.addEventListener("click", onClick, {
    // capture works like a boolean
    // Event listener fires during capture phase instead of default bubbling phase
    capture: true,
    // once adds event listener only one time
    once: true,
    // passive says if it is true do not call event.preventDefault in the browser
    passive: true,
    // can abort an event - clickme will not work in this instance
    signal: AbortController.signal
});
// does the exact opposite of add
button.removeEventListener("click", onclick);

function onClick(event){
    // The stopPropagation method in JavaScript is used to prevent further propagation of the current event in the capturing and bubbling phases. It stops the event from bubbling up the DOM or capturing down to the target element's descendants. This is particularly useful when you want to ensure that an event does not trigger handlers beyond the current one.
    //event.stopPropagation();
    // preventDefault stops whatever the default behavior is for the browser for that event is

    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(this);
    console.log("You Clicked the button");
}

// keydown listens for when you press a keydown
window.addEventListener("keydown", event => {
    console.log(event.code);

});


//const scrollable = document.getElementById("scrollable");
// drag and drop
//const button = document.querySelector("button");

scrollable.addEventListener("scroll", event => {
    console.log(event.target.scrollTop);
});

button.addEventListener("dragstart", event =>{
    console.log(event);
});

scrollable.addEventListener("drop", event =>{
    scrollable.prepend(button);
});

scrollable.addEventListener("dragover", event =>{
    event.preventDefault();
});

// the more event listensers we have on the page, the slower the page will be
// delegating the target and more efficient
scrollable.addEventListener("click",event =>{
    if(event.target !== this) {
        event.target.textContent = "Clicked";
    }
});