var billTypeTextElement = document.querySelector(".billTypeText");
addToBillBtnElement = document.querySelector(".addToBillBtn");

var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

var callsTotal = 0;
var smsTotal = 0;


var textInsta= textBillTotal1()

function textBillTotal(){
    var billTypeEntered = billTypeTextElement.value.trim();
    // get the value entered in the billType textfield
textInsta.textBillTotal2(billTypeEntered)
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = userTemplate({callTotalOne: textInsta.totalCalls().toFixed(2)});
    smsTotalElem.innerHTML = userTemplate({smsTotalOne:textInsta.totalSms().toFixed(2)});
    totalCostElem.innerHTML = userTemplate({totalOne:textInsta.total().toFixed(2)});

    totalCostElem.classList.add(textInsta.color());

}


addToBillBtnElement.addEventListener('click', textBillTotal);


