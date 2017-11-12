console.log("test");
////////////////////////////
// defining the variables
// calculate thje document height and set the offset to the quarter of the value
//add event listiner to the scroll
////////////////////////////

let btt = document.getElementById("back-to-top"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos,
    docHeight,
    isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

// calculate document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight,docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if(docHeight != "undefined") {
    offset = docHeight / 4;
}

// add scroll event listener
window.addEventListener("scroll", () => {
   scrollPos = body.scrollTop || docElem.scrollTop;
   // turnery operator
   btt.className = (scrollPos > offset) ? "visible" : "";
});

// add click event litener
btt.addEventListener("click", (e) => {
    e.preventDefault;

    if(isFirefox) {
        docElem.scrollTop = 0;
    } else {
        body.scrollTop = 0;
    }

});
