var textBox2 = document.querySelector(".plates2")
var addBtn2 = document.querySelector(".add2")
var showBtn2 = document.querySelector(".show2")
var resetBtn2 = document.querySelector(".reset2")
var showAllBtn2 = document.querySelector(".showAll2")
var errorElem2 = document.getElementById('error2')

var list2;

if (localStorage['plates2']) {
    list2 = JSON.parse(localStorage.getItem('plates2'))
} else {
    list2 = []
}

var userInsta = registrationNumbers();

var templateSource = document.querySelector(".userTemplate3").innerHTML;
var userTemplate1 = Handlebars.compile(templateSource);

// var userInsta

function displayed(plateIn1) {
    var see = document.getElementById("displayedPlate2").innerHTML
    see = userTemplate1({userInsta: plateIn1 });
}


function added1() {
    errorElem2.style.color = "red"
    if (userInsta.storePlates2(textBox2.value.toUpperCase())) {
        var key2 = userInsta.getStorePlates2();
        localStorage.setItem('plates2', JSON.stringify(key2));
        for (var i = 0; i < key2.length; i++) {
            displayed(key2[i]);
        }
        errorElem2.innerHTML = "Plate added!";
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
addBtn2.addEventListener('click', added1);

var valid = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$|^((CA|PA|WC)\s\d{4})$/i;

function conditions() {

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
addBtn2.addEventListener('click', conditions);

function remove() {
    if (addBtn2) {
        textBox2.value = ""
    }
}
addBtn2.addEventListener('click', remove);


var filteredlist21 = list2.filter(function (currentElement) {
    return currentElement.startsWith('CA');
});
var filteredlist22 = list2.filter(function (currentElement) {
    return currentElement.startsWith('PA');
});
var filteredlist23 = list2.filter(function (currentElement) {
    return currentElement.startsWith('WC');
});


function showed() {
    if (list2.length > 0) {
        var filteredlist21 = list2.filter(function (currentElement) {
            return currentElement.startsWith('CA');
        });
        var filteredlist22 = list2.filter(function (currentElement) {
            return currentElement.startsWith('PA');
        });
        var filteredlist23 = list2.filter(function (currentElement) {
            return currentElement.startsWith('WC');
        });

        var towns = document.querySelector(".slct1");
        if (towns.value === "CA") {
            displayed(filteredlist21);
        }
        else if (towns.value === "PA") {
            displayed(filteredlist22)
        }
        else if (towns.value === "WC") {
            displayed(filteredlist23)
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
    localStorage.removeItem("plates2")
    location.reload()
}
resetBtn2.addEventListener('click', clear);


function allPlateslist2() {
    if (userInsta.getStorePlates2()) {
        displayed(list2)
    } if (list2.length === 0) {
        errorElem2.innerHTML = "No registration plates added!";
        setTimeout(function () {
            errorElem2.innerHTML = ""
        }, 3500);
        return;
    }
}
showAllBtn2.addEventListener('click', allPlateslist2);

if (list2 !== []){
window.onload = displayed(list2);
}

function conditions3() {

    var towns = document.querySelector(".slct1");

    if (filteredlist21.length == 0 && towns.value === "CA") {
        return errorElem2.innerHTML = "No registration plates for Cape Town!";
    }
    if (filteredlist22.length == 0 && towns.value === "PA") {
        return errorElem2.innerHTML = "No registration plates for Pretoria!";
    }
    if (filteredlist23.length == 0 && towns.value === "WC") {
        return errorElem2.innerHTML = "No registration plates for Worcester!";
    }
}
showBtn2.addEventListener('click', conditions3);


