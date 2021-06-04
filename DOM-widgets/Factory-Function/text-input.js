function textBillTotal1() {
    var callsTotal = 0;
    var smsTotal = 0;

    function textBillTotal2(billTypeTextElement) {
        var billTypeEntered = billTypeTextElement.trim();
        if (billTypeEntered === "call") {
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms") {
            smsTotal += 0.75;
        }
    }

    function totalCalls() {
        return callsTotal;
    }

    function totalSms() {
        return smsTotal;
    }

    function total() {
        return callsTotal + smsTotal;
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
        textBillTotal2,
        totalCalls,
        totalSms,
        total,
        color,
    }
}