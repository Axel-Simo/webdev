const inputEL = document.querySelector("input");
const uList = document.getElementsByTagName("ol") [0];
window.onblur = inputEL.focus();

const addBtn = document.getElementById("add-btn").addEventListener("click", () => {
    if(inputEL.value !== "" && inputEL.value !== null) {
        const newListElement = document.createElement("li");
        newListElement.textContent = inputEL.value;
    
        const delButton = document.createElement("button");
        delButton.textContent = "delete";
        delButton.style.margin = "10px";

        delButton.addEventListener("click", () => {
            uList.removeChild(newListElement);
        });
    
        newListElement.appendChild(delButton);
        uList.appendChild(newListElement);
        inputEL.value = "";
        window.addEventListener('click', () => {
            inputEL.focus();
        })
    }

    console.log(uList.children);
});