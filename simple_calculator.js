var numberField = document.getElementById("numberF");
numberField.value = '0';

var plusButton = document.getElementById("plusB");
var minusButton = document.getElementById("minusB");
var multiplyButton = document.getElementById("multiplyB");
var divisionButton = document.getElementById("divisionB");
var equalsButton = document.getElementById("equalsB");
var backButton = document.getElementById("backB");
var resetButton = document.getElementById("resetB");

var number0Button = document.getElementById("B0");
number0Button.onclick = function () {
    numberField.value = numberField.value + "0";
    numberField.value = parseInt(numberField.value);
}

var number1Button = document.getElementById("B1");
number1Button.onclick = function () {
    numberField.value = numberField.value + "1";
    numberField.value = parseInt(numberField.value);
}

var number2Button = document.getElementById("B2");
number2Button.onclick = function () {
    numberField.value = numberField.value + "2";
    numberField.value = parseInt(numberField.value);
}

var number3Button = document.getElementById("B3");
number3Button.onclick = function () {
    numberField.value = numberField.value + "3";
    numberField.value = parseInt(numberField.value);
}

var number4Button = document.getElementById("B4");
number4Button.onclick = function () {
    numberField.value = numberField.value + "4";
    numberField.value = parseInt(numberField.value);
}

var number5Button = document.getElementById("B5");
number5Button.onclick = function () {
    numberField.value = numberField.value + "5";
    numberField.value = parseInt(numberField.value);
}

var number6Button = document.getElementById("B6");
number6Button.onclick = function () {
    numberField.value = numberField.value + "6";
    numberField.value = parseInt(numberField.value);
}

var number7Button = document.getElementById("B7");
number7Button.onclick = function () {
    numberField.value = numberField.value + "7";
    numberField.value = parseInt(numberField.value);
}

var number8Button = document.getElementById("B8");
number8Button.onclick = function () {
    numberField.value = numberField.value + "8";
    numberField.value = parseInt(numberField.value);
}

var number9Button = document.getElementById("B9");
number9Button.onclick = function () {
    numberField.value = numberField.value + "9";
    numberField.value = parseInt(numberField.value);
}

var previousNumber = 0;
// Operations will be one of:
// * none
// * plus
// * minus
// * multiply
// * division
var operation = 'none';

function resolveOperation() {
    if (operation == 'plus') {
        var currentNumber = parseInt(numberField.value);
        previousNumber = previousNumber + currentNumber;
    }
    else if (operation == 'minus') {
        var currentNumber = parseInt(numberField.value);
        previousNumber = previousNumber - currentNumber;
    }

    else if (operation == 'multiply') {
        var currentNumber = parseInt(numberField.value);
        previousNumber = previousNumber * currentNumber;
    }

    else if (operation == 'division') {
        var currentNumber = parseInt(numberField.value);
        previousNumber = previousNumber / currentNumber;
    }
    else {
        var currentNumber = parseInt(numberField.value);
        previousNumber = currentNumber;
    }
}

function resetAllStyles() {
    plusButton.style = '';
    minusButton.style = '';
    divisionButton.style = '';
    multiplyButton.style = '';
}

plusButton.onclick = function () {
    resolveOperation();

    numberField.value = '0';

    operation = 'plus';
    resetAllStyles();
    plusButton.style = "color:white";

}

minusButton.onclick = function () {
    resolveOperation();

    numberField.value = '0';

    operation = 'minus';
    resetAllStyles();
    minusButton.style = "color:white";

}

multiplyButton.onclick = function () {
    resolveOperation();

    numberField.value = '0';
    operation = 'multiply';
    resetAllStyles();
    multiplyButton.style = "color:white";

}

divisionButton.onclick = function () {
    resolveOperation();

    numberField.value = '0';
    operation = 'division';
    resetAllStyles();
    divisionButton.style = "color:white";

}

equalsButton.onclick = function () {
    resolveOperation();
    numberField.value = previousNumber;
    resetAllStyles();
}

backButton.onclick = function () {
    numberField.value = parseInt(numberField.value / 10);
}


resetButton.onclick = function () {
    numberField.value = 0;
    operation = 'none';
    resetAllStyles();
}


