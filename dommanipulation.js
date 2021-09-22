// getElementById
document.getElementById('title');
let InstituteName = document.getElementById('title');
InstituteName.innerText="AchieversIT Training Institute";
InstituteName.style.backgroundColor = "orange";

// getElementsByClassName


let courseName = document.getElementsByClassName('course');
console.log(courseName)
courseName[0].innerText="REACTJS";

let head2 = document.getElementsByTagName('h2');
head2[0].innerText="green";
head2[0].style.backgroundColor="red";


let body = document.body;
let div = document.createElement('span');
div.innerHTML = "hello World";
body.append(div);

// difference between innerText and innerHTML

let div2 = document.createElement('div');
// div2.innerText = "<h2>Welcome to AcieversIT</h2>";
div2.innerHTML = "<h2>Welcome to AcieversIT</h2>";
body.append(div2);

// difference between append and appendchild

let span = document.createElement('p');
span.innerText = "This is span tag";

body.appendChild(span);

body.append("Javascript Training");

// body.appendChild("angular Training");

let products = document.querySelector("#product");
console.log(products.getAttribute('id'));

let unorderlist = document.querySelector("ul");
unorderlist.setAttribute("title","list-of-courses");

let listitems = document.querySelectorAll("li");
console.log(listitems);
listitems[0].style.color= "blue";