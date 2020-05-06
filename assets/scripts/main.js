'use strict';




// let p = document.getElementsByTagName('p');
let h1 = document.getElementsByTagName('h1');
let h2 = document.getElementsByTagName('h2');
let h3 = document.getElementsByTagName('h3');
let h6 = document.getElementsByTagName('h6');

let els = [...h1, ...h2, ...h3, , ...h6];


function SetStyleBody() {

    for (let el of els) {
        el.onmouseenter = e => {
            let len = el.innerText.length;
            let newSpan = document.createElement('myTag');
            newSpan.innerText = el.innerText.substr(len / 2, len);

            el.innerText = el.innerText.substr(0, len / 2);
            el.appendChild(newSpan);
        }
    }
}

SetStyleBody();