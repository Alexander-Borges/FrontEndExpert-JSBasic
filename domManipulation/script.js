// getElementById selects an element in the HTML code
const secondLi = document.getElementById("second-li");
// querySelector Returns the first element that matches the specified CSS selector 
const firstLi = document.querySelector("li");
// querySelectorAll gets every element that matches the selector, not just the first
const listItems = document.querySelectorAll("li");
console.log(listItems);
console.log(secondLi);
console.log(firstLi);
console.log(listItems.length);

// forEach logs out every item in the list
// only major function for node lists
listItems.forEach(li => {
    console.log(li);
});

// takes in a CSS class
// Does not allow forEach function
console.log(document.getElementsByClassName("list-item"));

// getElementsByTagName takes in an HTML tag
// does not allow forEach function
console.log(document.getElementsByTagName("li"));

//Any element can be modified
listItems[0].style.backgroundColor = 'green';
// textContent changes the text
listItems[0].textContent = "HEY!";
//value affects the value of the order of the list items
//so in this example the list on the page is changed to 5,6,7 because 5 is now the zeroeth element
listItems[0].value = 5;

//setAttribute takes in an HTML attribute
//can change any attribute
listItems[1].setAttribute("value","999");
listItems[2].setAttribute("class","blue big");
//.remove delets elements
listItems[2].classList.remove("big");
// .add does the opposite
// .toggle() adds a class if it is not already present and deletes one if the class is present
listItems[0].classList.toggle("small");

// We can also add elements to the page from our JS
const p = document.createElement("p");
p.textContent = "Hello World";
//append adds to the end of file
document.body.append(p);
// prepend adds to the beginning of file
document.body.prepend(p);

// only recommended to use an empty string to clean out the entire element. 
document.body.innerHTML += "<p>HTML test string</p>";
// Never use innerHTML when you have something like user comments or any user inputs

// Adding elements to the DOM
const parent = document.querySelector("ol");
const fragment = document.createDocumentFragment();
const listItemsToAdd = [];

for (let i = 0; i < 3; i++){
    const li = document.createElement("li");
    li.textContent = `List item with i =${i}`;
    fragment.append(li);
}

parent.append(fragment);

// Removing elements from the DOM
listItems[0].remove();

// innerHeight and innerWidth print out how much height and weight in the page in pixels
console.log(window.innerWidth);
console.log(window.innerHeight);

// getComputedStyle gets the font size of an element

// clientheight returns the height of the element plus the padding

// offsetHeight returns the height plus the border

// scrollHeight returns the total heigtht including what is not in view

// offseTop is the scrollable container is from the top of the page
console.log(scrollable.offsetTop);

//scrollIntoView() automatically scrolls the content in the scollable container to a specific spot 
