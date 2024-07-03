const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");
 
createbtn.addEventListener("click", () =>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="./trash.png";

    notescontainer.appendChild(inputbox).appendChild(img);
    save();
})

function save(){
   localStorage.setItem("note",notescontainer.innerHTML);
}
function show(){
notescontainer.innerHTML = localStorage.getItem("note");

}
show();

notescontainer.addEventListener("click", function(e){
   if(e.target.tagName === "IMG"){
       e.target.parentElement.remove();
       save();
   }
   else if(e.target.tagName=="P"){
notes = document.querySelectorAll(".input-box");
notes.forEach(notes =>{
    notes.onkeyup = function(){
        save();
    }
})
   }
})

document.addEventListener("keydown", event =>{
if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
}
})
