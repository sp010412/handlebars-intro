// get a reference to the sms or call radio buttons
var checkedRadioBtn = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");

var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
var callsTotalRadio = 0;
var smsTotalRadio = 0;
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var radioInsta = radioFunction()

function textBillTotal() {
    // get the value entered in the billType textfieldvar checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
    radioInsta.radioFunction1(billItemType)

    // update the correct total

    //update the totals that is displayed on the screen.
    callTotalTwoElem.innerHTML = radioInsta.totalCalls().toFixed(2);
    smsTotalTwoElem.innerHTML = radioInsta.totalSms().toFixed(2);
    totalTwoElem.innerHTML = radioInsta.total().toFixed(2);

    //color the total based on the criteria

    totalTwoElem.classList.add(radioInsta.color());
}


radioBillAddBtnElem.addEventListener('click', textBillTotal);


