function checkedYes(){
    if(document.getElementById('inputBoniYes').checked) {
        var studenti = document.getElementById('inputBoniCost')
        studenti.disabled = false;
    }
}

function checkedNo(){
    if(document.getElementById('inputBoniNo').checked) {
        var studenti = document.getElementById('inputBoniCost')
        studenti.disabled = true;
    }
}
function zaprtoMonday(){
    var checkedMonday = document.getElementById('openMonday');
    var fromMonday = document.getElementById('inputMondayFrom');
    var toMonday = document.getElementById('inputMondayTo');
    if(checkedMonday.checked == true){
        fromMonday.disabled = true;
        toMonday.disabled = true;
    }else{
        fromMonday.disabled = false;
        toMonday.disabled = false;
    }
}

function zaprtoTuesday(){
    var checkedTuesday = document.getElementById('openTuesday');
    var fromTuesday = document.getElementById('inputTuesdayFrom');
    var toTuesday = document.getElementById('inputTuesdayTo');
    if(checkedTuesday.checked == true){
        fromTuesday.disabled = true;
        toTuesday.disabled = true;
    }else{
        fromTuesday.disabled = false;
        toTuesday.disabled = false;
    }
}function zaprtoWednesday(){
    var checkedWednesday = document.getElementById('openWednesday');
    var fromWednesday = document.getElementById('inputWednesdayFrom');
    var toWednesday = document.getElementById('inputWednesdayTo');
    if(checkedWednesday.checked == true){
        fromWednesday.disabled = true;
        toWednesday.disabled = true;
    }else{
        fromWednesday.disabled = false;
        toWednesday.disabled = false;
    }
}function zaprtoThursday(){
    var checkedThursday = document.getElementById('openThursday');
    var fromThursday = document.getElementById('inputThursdayFrom');
    var toThursday = document.getElementById('inputThursdayTo');
    if(checkedThursday.checked == true){
        fromThursday.disabled = true;
        toThursday.disabled = true;
    }else{
        fromThursday.disabled = false;
        toThursday.disabled = false;
    }
}
function zaprtoFriday(){
    var checkedFriday = document.getElementById('openFriday');
    var fromFriday = document.getElementById('inputFridayFrom');
    var toFriday = document.getElementById('inputFridayTo');
    if(checkedFriday.checked == true){
        fromFriday.disabled = true;
        toFriday.disabled = true;
    }else{
        fromFriday.disabled = false;
        toFriday.disabled = false;
    }
}

function zaprtoSaturday(){
    var checkedSaturday = document.getElementById('openSaturday');
    var fromSaturday = document.getElementById('inputSaturdayFrom');
    var toSaturday = document.getElementById('inputSaturdayTo');
    if(checkedSaturday.checked == true){
        fromSaturday.disabled = true;
        toSaturday.disabled = true;
    }else{
        fromSaturday.disabled = false;
        toSaturday.disabled = false;
    }
}

function zaprtoSunday(){
    var checkedSunday = document.getElementById('openSunday');
    var fromSunday = document.getElementById('inputSundayFrom');
    var toSunday = document.getElementById('inputSundayTo');
    if(checkedSunday.checked == true){
        fromSunday.disabled = true;
        toSunday.disabled = true;
    }else{
        fromSunday.disabled = false;
        toSunday.disabled = false;
    }
}
