// get a reference to the sms or call radio buttons
var checkedRadioBtn = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");

var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");

var templateSource1 = document.querySelector(".userTemplate2").innerHTML;
var userTemplate2 = Handlebars.compile(templateSource1);

var callsTotalRadio = 0;
var smsTotalRadio = 0;

var radioInsta = radioFunction()

function textBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    var billItemType = checkedRadioBtn.value

    radioInsta.radioFunction1(billItemType)


    callTotalTwoElem.innerHTML = userTemplate2({callTotalTwo: radioInsta.totalCalls().toFixed(2)});
    smsTotalTwoElem.innerHTML = userTemplate2({smsTotalTwo: radioInsta.totalSms().toFixed(2)});
    totalTwoElem.innerHTML = userTemplate2({totalTwo: radioInsta.total().toFixed(2)});

    totalTwoElem.classList.add(radioInsta.color());
}


radioBillAddBtnElem.addEventListener('click', textBillTotal);


