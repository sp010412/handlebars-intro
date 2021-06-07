var textBox2= document.querySelector(".plates2")
var addBtn2 = document.querySelector(".add2")
var showBtn2 = document.querySelector(".show2")
var resetBtn2 = document.querySelector(".reset2")
var showAllBtn2 = document.querySelector(".showAll2")
var errorElem2 = document.getElementById('error2')
var displayHere =document.getElementById("displayedPlate2")

var templateSource = document.querySelector(".userTemplate3").innerHTML;
var userTemplate1 = Handlebars.compile(templateSource);

/*  
*CA 123 456
*CA 123-456
*CA 12345
*/

var list;

if (localStorage['blates']) {
    list = JSON.parse(localStorage.getItem('blates'))
} else {
    list = []
}

var secondInsta = registrationNumbers(list);

//var regEx = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$/;
function displayedTemp(plateIn) {
    // while (document.getElementById("displayedPlate").hasChildNodes()) {
    //     document.getElementById("displayedPlate").removeChild(document.getElementById("displayedPlate").firstChild)
    // }
    document.getElementById("displayedPlate").innerHTML = "";
    displayHere.innerHTML = userTemplate1({userInsta: plateIn});

}


function addedTemp() {
    errorElem2.style.color = "red"
    if (secondInsta.storePlates(textBox2.value.toUpperCase())) {
        var key = secondInsta.getStorePlates();
        localStorage.setItem('blates', JSON.stringify(key));
        
        errorElem2.innerHTML= "Plate added!";
        errorElem2.style.color = "green"
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

function conditions() {
    
    if (textBox2.value == "") {
        errorElem2.innerHTML = "Enter a registration plate!";

        window.setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }

    else if (valid.test(textBox2.value)!= true) {
        errorElem2.innerHTML = "Not a registration plate! eg; CA 12345"
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }

}
addBtn2.addEventListener('click', conditions);

function remove() {
    if (addBtn2) {
        textBox2.value = ""
    }
}
addBtn2.addEventListener('click', remove);


var filteredList1 = list.filter(function (currentElement) {
    return currentElement.startsWith('CA');
});
var filteredList2 = list.filter(function (currentElement) {
    return currentElement.startsWith('PA');
});
var filteredList3 = list.filter(function (currentElement) {
    return currentElement.startsWith('WC');
});


function showed() {
    if (list.length > 0) {
        var filteredList1 = list.filter(function (currentElement) {
            return currentElement.startsWith('CA');
        });
        var filteredList2 = list.filter(function (currentElement) {
            return currentElement.startsWith('PA');
        });
        var filteredList3 = list.filter(function (currentElement) {
            return currentElement.startsWith('WC');
        });
        
        var towns = document.querySelector(".slct1");
        if (towns.value === "CA") {
            displayedTemp(filteredList1);
        }
        else if (towns.value === "PA") {
            displayedTemp(filteredList2)
        }
        else if (towns.value === "WC") {
            displayedTemp(filteredList3)
        }
    } else {
        errorElem2.innerHTML = "No registration plates added!";
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;

    }
}
showBtn2.addEventListener('click', showed);

function clear() {
    localStorage.removeItem('blates')
    location.reload()
}
resetBtn2.addEventListener('click', clear);


function allPlatesList() {
    if (secondInsta.getStorePlates()) {
        displayedTemp(list)
    } if (list.length === 0) {
        errorElem2.innerHTML = "No registration plates added!";
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }
}
showAllBtn2.addEventListener('click', allPlatesList);




window.onload = displayedTemp(list);


function conditions3() {

    var towns = document.querySelector(".slct1");

    if (filteredList1.length == 0 && towns.value === "CA") {
        return errorElem2.innerHTML = "No registration plates for Cape Town!";
    }
    if (filteredList2.length == 0 && towns.value === "PA") {
        return errorElem2.innerHTML = "No registration plates for Pretoria!";
    }
    if (filteredList3.length == 0 && towns.value === "WC") {
        return errorElem2.innerHTML = "No registration plates for Worcester!";
    }
}
showBtn2.addEventListener('click', conditions3);


