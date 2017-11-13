let current = document.getElementById("current");
let thumb = document.getElementsByClassName("thumb");

for(let i = 0; i < thumb.length; i++) {
    thumb[i].addEventListener("click", display);
}

function display() {
    let img = this.getAttribute("src");
    current.setAttribute("src", img);
    current.style.opacity = 1;

}


// with arrow function do not work bug (|)
// let current = document.getElementById("current");
// let thumb = document.getElementsByClassName("thumb");
// for(let i = 0; i < thumb.length; i++) {
//     thumb[i].addEventListener("click", ()=> {
//         let img = this.getAttribute("src");
//         current.setAttribute("src", img);       
//     });
// }
