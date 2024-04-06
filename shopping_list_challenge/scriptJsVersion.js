const inputNode = document.querySelector("input");
const addBtn = document.getElementById("add-btn");

window.addEventListener('click', () => {
    inputNode.focus();
});

let newListElement;

function deleteElement(node) {
    const ulist = document.querySelector("ul");
    ulist.removeChild(node);
}

addBtn.onclick = function() {
    if(inputNode.value !== "") {
        newListElement = inputNode.value;
        inputNode.value = "";

        // I select the unordered list
        const ulist = document.querySelector("ul");

        // I creat the list item, add the name of the item
        // and the button that will go with it
        const newEl = document.createElement("li");
        const newElBtn = document.createElement("button")
        const buttonText = document.createTextNode("Delete");
        const text = document.createTextNode(newListElement);

        newElBtn.addEventListener('click', () => {
            ulist.removeChild(newEl);
            inputNode.focus();
        });
        // I append all the elements together
        newElBtn.appendChild(buttonText);
        newEl.appendChild(text);
        newEl.appendChild(newElBtn);
        ulist.appendChild(newEl);

        newElBtn.style.margin = "10px";

        inputNode.focus();
    }
}