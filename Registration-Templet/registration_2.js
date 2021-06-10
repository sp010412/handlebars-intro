var textBox2 = document.querySelector(".plates2")
var addBtn2 = document.querySelector(".add2")
var showBtn2 = document.querySelector(".showTwo")
var resetBtn2 = document.querySelector(".reset2")
var showAllBtn2 = document.querySelector(".showAll2")
var errorElem2 = document.getElementById('error2')
var displayHere = document.getElementById("displayedPlate2")

var templateSource = document.querySelector(".userTemplate3").innerHTML;
var userTemplate1 = Handlebars.compile(templateSource);

/*  
*CA 123 456
*CA 123-456
*CA 12345
*/

var list2;

if (localStorage['blates']) {
    list2 = JSON.parse(localStorage.getItem('blates'))
} else {
    list2 = []
}

var secondInsta = registrationNumbers(list2);

// displayedTemp(list)

secondInsta.setAllPlateIn(list2)

//var regEx = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$/;
function displayedTemp(plateIn) {
    // while (document.getElementById("displayedPlate").hasChildNodes()) {
    //     document.getElementById("displayedPlate").removeChild(document.getElementById("displayedPlate").firstChild)
    // }
    // plateIn = list;
    // document.getElementById("displayedPlate").innerHTML = "";
    displayHere.innerHTML = userTemplate1({ userInsta: plateIn });

}


function addedTemp() {
    errorElem2.style.color = "red"
    if (secondInsta.storePlates(textBox2.value.toUpperCase())) {
        var key = secondInsta.getStorePlates();
        localStorage.setItem('blates', JSON.stringify(key));
        // displayedTemp(key)
        errorElem2.innerHTML = "Plate added!";
        errorElem2.style.color = "green"
        displayHere.innerHTML = userTemplate1({ userInsta: key });

        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3000);
        return;
    }

    else {
        errorElem2.innerHTML = "Registration already exists!";
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;

    }

}
addBtn2.addEventListener('click', addedTemp);

//var valid = /[A-Z]{2} [0-9]{5}/i
//var regEx = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$/;
var valid = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$|^((CA|PA|WC)\s\d{4})$/i;

function conditionsTwo() {

    if (textBox2.value == "") {
        errorElem2.innerHTML = "Enter a registration plate!";

        window.setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }

    else if (valid.test(textBox2.value) != true) {
        errorElem2.innerHTML = "Not a registration plate! eg; CA 12345"
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }

}
addBtn2.addEventListener('click', conditionsTwo);

function removeTemp() {
    if (addBtn2) {
        textBox2.value = ""
    }
}
addBtn2.addEventListener('click', removeTemp);




function showedTemp() {
    if (list2.length > 0) {
        var filteredListA = list2.filter(function (currentElement) {
            return currentElement.startsWith('CA');
        });
        var filteredListB = list2.filter(function (currentElement) {
            return currentElement.startsWith('PA');
        });
        var filteredListC = list2.filter(function (currentElement) {
            return currentElement.startsWith('WC');
        });

        var town = document.querySelector(".slct2");
        if (town.value === "CAA") {
            displayedTemp(filteredListA);
        }
        else if (town.value === "PAA") {
            displayedTemp(filteredListB)
        }
        else if (town.value === "WCC") {
            displayedTemp(filteredListC)
        }
    } else {
        errorElem2.innerHTML = "No registration plates added!";
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;

    }
}
showBtn2.addEventListener('click', showedTemp);

function clearTemp() {
    localStorage.removeItem('blates')
    location.reload()
}
resetBtn2.addEventListener('click', clearTemp);


function allPlatesListTemp() {
    if (secondInsta.getStorePlates()) {
        displayedTemp(list2);
    } if (list2.length === 0) {
        errorElem2.innerHTML = "No registration plates added!";
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }
}
showAllBtn2.addEventListener('click', allPlatesListTemp);


function conditionsTemp() {

    var filteredListA = list2.filter(function (currentElement) {
        return currentElement.startsWith('CA');
    });
    var filteredListB = list2.filter(function (currentElement) {
        return currentElement.startsWith('PA');
    });
    var filteredListC = list2.filter(function (currentElement) {
        return currentElement.startsWith('WC');
    });

    var town = document.querySelector(".slct2");
    errorElem2.style.color = "red";
    if (filteredListA.length === 0 && town.value === "CAA") {
        errorElem2.innerHTML = "No registration plates for Cape Town!";
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }
    if (filteredListB.length === 0 && town.value === "PAA") {
        errorElem2.innerHTML = "No registration plates for Pretoria!";
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }
    if (filteredListC.length === 0 && town.value === "WCC") {
        errorElem2.innerHTML = "No registration plates for Worcester!";
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }
}
showBtn2.addEventListener('click', conditionsTemp);



window.onload = displayedTemp(list2);