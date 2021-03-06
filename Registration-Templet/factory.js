function registrationNumbers(other) {

    var allPlateIn =other || [];


    var valid = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$|^((CA|PA|WC)\s\d{4})$/;

    function storePlates(plateIn) {
        if (plateIn.match(valid)) {

            if (!allPlateIn.includes(plateIn)) {
                allPlateIn.push(plateIn)
                return true
            } else {
                return false
            }
        }
    }



    let filteredList1 = allPlateIn.filter(function (currentElement) {
        return currentElement.startsWith('CA');
    });
    let filteredList2 = allPlateIn.filter(function (currentElement) {
        return currentElement.startsWith('PA');
    });
    let filteredList3 = allPlateIn.filter(function (currentElement) {
        return currentElement.startsWith('WC');
    });

function setAllPlateIn(name){
    allPlateIn = name;
}


    function getfilteredList1() {
        return filteredList1
    }
    function getfilteredList2() {
        return filteredList2
    }
    function getfilteredList3() {
        return filteredList3
    }

    function getStorePlates() {
        return allPlateIn
    }


    return {
        storePlates,
        setAllPlateIn,
        getStorePlates,
        getfilteredList1,
        getfilteredList2,
        getfilteredList3,
    }

}
