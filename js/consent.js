/*
** This js file works with index.html to direct the user to the correct
** path depending on wether they own a smart home device or not. If they
** do, they are catergorized an owner and take the owner path. If not,
** they are catergorized as a guest and take the guest path.
*/

// type of user, Owner or Guest
let consent = "";
let age = "";
let us = "";
let moveOn = "";
let andorid = "";
// Checks if the radio form was filled out. If filled out returns true,
// if not filled out, returns false.
function checkUnanswered() {
    if(consent == "" || age == "" || us == "" || andorid == "") {
        return false;
    }
    return true;
}

// Checks which scenario to move to based on the type of user adn moves
// them to the correct html file depending.
function goToDef() {

    //start timer for entire survey
    localStorage.clear()
    localStorage.setItem('surveyBegin', Date.now());

    // Checks the radio form and sets the value with the check box to the
    // typeOfUser, either yes or no (owner or not)
    var consent1 = document.getElementsByName('consent');
    checkUnanswered();

    for(i = 0; i < consent1.length; i++) {
        if(consent1[i].checked){
            consent  = consent1[i].value;
        }
    }
    var age1 = document.getElementsByName('age');
    for(i = 0; i < age1.length; i++) {
        if(age1[i].checked){
            age  = age1[i].value;
        }
    }
    var us1 = document.getElementsByName('us');
    for(i = 0; i < us1.length; i++) {
        if(us1[i].checked){
            us  = us1[i].value;
        }
    }
    var andorid1 = document.getElementsByName('android');
    for(i = 0; i < andorid1.length; i++) {
        if(andorid1[i].checked){
            andorid  = andorid1[i].value;
        }
    }
    // If yes, sets the type of user to owner
    if (consent == "I disagree" || age == "no" || us == "no" || andorid == "no") {
        moveOn = "no"
    }
    // Calls checkUnanswered to make sure that the radio form is filled out.
    if (checkUnanswered()) {
        // If yes, stores the type of user in local storage
        if (moveOn == "no") {
            location.replace("../html/sorry.html");
        }
        else {
            location.replace("../html/ID.html");
        }
    }
    // If the radio form is not filled out, it gives an error message and does
    // not let the user move on.
    else{
        window.alert("Please answer all questions before moving on!");
    }
}
