// Write your code here!
let  newHeader= document.getElementById("victory");
const element = document.createElement("div")
document.body.append(element);



for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }