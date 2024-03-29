const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "I'm enjoying the ride.";

sect.appendChild(para);

const text = document.createTextNode(
    " - the premier source for web development knowledge."
);

const linkPara = document.querySelector("p").cloneNode();
linkPara.appendChild(text);

sect.appendChild(linkPara);

document.querySelector("p").onmouseover = function (){
    if(sect.contains(linkPara)) {
        sect.removeChild(linkPara);
    } else {
        sect.appendChild(linkPara);
    }
}

document.querySelector("img").onmouseover = function (){
    if(!sect.contains(linkPara)) {
        sect.appendChild(linkPara);
    }
}

para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";