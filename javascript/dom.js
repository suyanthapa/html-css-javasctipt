let div1= document.querySelector("div");
console.dir(div1);

let head2= document.querySelector("h2");
console.dir(head2);  

let head3= document.querySelector("h3");
console.dir(head3);

head3.innerText= head3.innerText+ "apna college111";

let divBox= document.querySelectorAll(".box");

// for (div of divBox){
//   console.log(div.innerText);
// }
divBox[0].innerText=" new   unique value";
//set attribute
let para1= document.querySelector("p");
console.log(para1.setAttribute("id","new"));

//insert elements
let newBtn=document.createElement("button");
newBtn.innerText="Click here!";

let boxDiv=document.querySelector(".box1");
boxDiv.append(newBtn);

// Create a new button element. Give it a text "Click Me". background color of Red and texr color of White
// Insert thr button as the first element inside the body tag

let btn1= document.createElement("button");
btn1.innerText="Click Me!";

btn1.style.color="White";
btn1.style.backgroundColor="Red";

document.querySelector("body").prepend(btn1);


// Create a <p>tag in html, give it a class and some styling
// Now create a new class and try to append ths class to the <p> element 

let que= document.querySelector("p");

que.classList.add("newClass"); 
