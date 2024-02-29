const noteContainer = document.querySelector(".note-container"); //(".className")
const createBt = document.querySelector(".btn-53");
let notes = document.querySelectorAll(".input");

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorege() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBt.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorege();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorege();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})