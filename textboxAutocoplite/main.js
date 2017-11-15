
// define variables
let targetInput = document.getElementById("country"),
    results = document.getElementById("autcomlite-results"),
    countryList = ["Serbia", "Cuba", "Romania", "Croatia", "Mexico", "Maroco", "Greece", "Hungary"],
    matches = [],
    resultsCursor = 0;
// focus the input
targetInput.focus();

// add event listenerfor the input keydown
targetInput.addEventListener("keydown", function(event) {
    if(event.keyCode == "13") {
        event.preventDefault();
    }
})

// add event listener for the input key
targetInput.addEventListener("keyup", function(event) {
    // key codes
    // enter 13
    // arrow up 38
    // arrrow down 40

    results.innerHTML = "";
    toggleResults("hide");

    if(this.value.length > 0) {
        matches = getMatches(this.value);
    }

    if(matches.length > 0) {
        displayMatches(matches);
    }

    if(results.classList.contains("visible")) {
        switch(event.keyCode) {
            case 13:
                targetInput.value = results.children[resultsCursor].innerHTML;
                toggleResults("hide");
                resultsCursor = 0;
                break;

            case 38:
                if(resultsCursor > 0) {
                    resultsCursor--;
                    moveCursor(resultsCursor);
                }
                break;

            case 40:
            if(resultsCursor < (matches.length - 1)) {
                resultsCursor++;
                moveCursor(resultsCursor);
            }
                break;
        }
    }

});

// define a function for toggling the results
function toggleResults(action) {
    if(action == "show") {
        results.classList.add("visible");
    }
    else if(action == "hide") {
        results.classList.remove("visible");
    }
}

// define a function checking if the input value matches of the coutry names
function getMatches(inputText) {
    let matchList = [];

    for(let i =0; i < countryList.length; i++) {
        if(countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
            matchList.push(countryList[i]);
        }
    }

    return matchList;
}

// define a function for displaying autocomplite res

function displayMatches(matchList) {
    let j = 0;
    while(j < matchList.length) {
        results.innerHTML += "<li class='result'>" + matchList[j] + "</li>";
        j++;
    }

    // the firs child gets class highlight
    moveCursor(resultsCursor);

    // show the res
    toggleResults("show");
}

// define a function for moving the cursor in the results list
function moveCursor(pos) {
    for(let x = 0; x < results.length; x++) {
        results.children[x].classList.remove("highlighted");
    }

    results.children[pos].classList.add("highlighted");
}