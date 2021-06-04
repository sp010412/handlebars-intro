function radioFunction() {

    var theCallTotal = 0;
    var theSmsTotal = 0;

    function radioFunction1(checkedRadioBtn) {

        var billItemType = checkedRadioBtn

        if (billItemType === "call") {
            theCallTotal += 2.75
        }
        else if (billItemType === "sms") {
            theSmsTotal += 0.75;
        }
    }

    function totalCalls() {
        return theCallTotal;
    }

    function totalSms() {
        return theSmsTotal;
    }

    function total() {
        return theCallTotal + theSmsTotal;
    }

    function color() {

        if (total() >= 30 && total() < 50) {
            return "warning"
        }
        if (total() >= 50) {
            return "danger"
        }
    }

    return {
        radioFunction1,
        totalCalls,
        totalSms,
        total,
        color,


    }

}