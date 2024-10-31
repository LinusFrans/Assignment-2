var submit = document.getElementById('submitBtn');
var nameInp = document.getElementById('nameInp');
var lastNameInp = document.getElementById('lastNameInp');
var emailInp = document.getElementById('emailInp');

var radio1 = document.getElementsByName('radio1');
var checkbox2 = document.getElementsByName('checkbox2');
var radio3 = document.getElementsByName('radio3');
var select4 = document.getElementById('select4');
var textfield5 = document.getElementById('textfield5');

var question1answered = false;
var question3answered = false;

const errorMsg = document.createElement("div");
errorMsg.id = "errorMsg";
const scoreElement = document.createElement("div");
scoreElement.id = "formScore";

submit.onclick = function() {
    var score = 0; // score

    // check the inputted answers to the questions if they're correct add 1 to score
    if (getValue(radio1) != undefined) {
        if (getValue(radio1) == 3) {
            score++;
        }
        question1answered = true;
    } else {
        question1answered = false;
    }
    if (checkbox2[0].checked && checkbox2[1].checked && checkbox2[2].checked) {
        score++;
    }
    if (getValue(radio3) != undefined) {
        if (getValue(radio3) == 1) {
            score++;
        }
        question3answered = true;
    } else {
        question3answered = false;
    }
    if (select4.value == 2) {
        score++;
    }
    if (textfield5.value.toUpperCase() == "CSS") {
        score++;
    }
    if (question1answered && question3answered) { // check if the required questions are answered
        if (!validateName(nameInp.value)) {
            // set error msg and remove score element if its there
            errorMsg.innerHTML = "Invalid name.";
            const parent = document.querySelector("body");
            try {
                parent.removeChild(scoreElement);
            } catch (Error) {

            }
            parent.appendChild(errorMsg);
            return;
        }
        if (!validateName(lastNameInp.value)) {
            // set error msg and remove score element if its there
            errorMsg.innerHTML = "Invalid last name.";
            const parent = document.querySelector("body");
            try {
                parent.removeChild(scoreElement);
            } catch (Error) {

            }
            parent.appendChild(errorMsg);
            return;
        }
        if (!validateEmail(emailInp.value)) {
            // set error msg and remove score element if its there
            errorMsg.innerHTML = "Invalid email.";
            const parent = document.querySelector("body");
            try {
                parent.removeChild(scoreElement);
            } catch (Error) {

            }
            parent.appendChild(errorMsg);
            return;
        }
        // if there are no errors and everything looks fine
        // print score and answers to all the questions
        scoreElement.innerHTML = "Score: " + score + "/5<br><br>Answers:<br>Question 1: color<br>Question 2: text, date, password<br>Question 3: #<br>Question 4: JavaScript<br>Question 5: CSS";
        const parent = document.querySelector("body");
        // remove error msg if its there
        try {
            parent.removeChild(errorMsg);
        } catch (Error) {

        }
        // append score
        parent.appendChild(scoreElement);
    } else {
        // set error msg and remove score element if its there
        errorMsg.innerHTML = "Please answer all required questions";
        const parent = document.querySelector("body");
        try {
            parent.removeChild(scoreElement);
        } catch (Error) {

        }
        parent.appendChild(errorMsg);
    }
}

function getValue(element) { // get value of element
    for (i = 0; i < element.length; i++) {
        if (element[i].checked) {
            return element[i].value;
        }
    }
}

function validateEmail(email) { // validate email
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateName(nameInp) { // validate name
    if(/[^A-Za-z]/.test(nameInp)) {
        return false;
    } else {
        if (nameInp == "") {
            return false;
        }
        return true;
    }
}
