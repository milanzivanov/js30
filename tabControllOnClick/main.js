// add an event listener for document click
// define a function that filters the unwanted click events on the document

// add an event listener for document click
document.addEventListener("click", tabClick);

// define a function that filters the unwanted click events on the document
function tabClick(e) {
    let elem = event.target,
        elemHref = elem.getAttribute("href"),
        tabs = document.querySelectorAll(".tabs li a"),
        tabContents = document.querySelectorAll(".tab-contents div");
    // console.log(elem);
    // console.log(elemHref);

    // if we click an element whos href contains -tab, proceed
    if(elemHref != null && elemHref.indexOf("tab-") != -1) {
        e.preventDefault();

        // if we did not click an active item, switch tabs
        if(elem.className.indexOf("active") == -1) {
            // remove active class from the tabs and the visible class from the tab content
            for(let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("active");
                tabContents[i].classList.remove("visible");
            }
            // add the active class to the clicked element and the visible class to the coresponding tab
            elem.classList.add("active");
            document.getElementById(elemHref).classList.add("visible");
        }
    }
}