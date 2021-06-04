function calculate() {

    function calculate2(billString) {
        var billTotal = 0;
        var billItems = billString.split(",");

        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }
        }
        return billTotal;
    }

    // function total() {
    //     var billTotal = 0;
    //     return  billTotal;
    // }

    function color(billString) {

        if (calculate2(billString) >= 20 && calculate2(billString) < 30) {
            return "warning";
        }
        if (calculate2(billString) >= 30) {
            return "danger";
        }
    }


    return {
        calculate2,
        // total,
        color,
    }
}