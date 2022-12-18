/* ---------- CALCULATOR ----------*/

const firstValEl = document.getElementById("first_value");
const secondValEl = document.getElementById("second_value");
const operatorValEl = document.getElementById("operator");
const resultValEl = document.getElementById("res_calc");

/* ---------- ARRAY SUM -----------*/

const itemValEl = document.getElementById("item_input");
const sumValEl = document.getElementById("sum_item");
let array = [];
let arrayLength = 0;

/* -------- REVERSE RESULT --------*/

const inputValEl = document.getElementById("number_input");
const reverseValEl = document.getElementById("reverse_result");


function calc() {

    const firstValue = +firstValEl.value;
    const secondValue = +secondValEl.value;
    var resultCalc = 0;

    switch (operatorValEl.value) {

        case '+':
            resultCalc = firstValue + secondValue;
            break;

        case '-':
            resultCalc = firstValue - secondValue;
            break;
        case '*':
            resultCalc = firstValue * secondValue;
            break;
        case '/':
            if (secondValue == 0)
                        alert("Error: Division by 0!");
                else resultCalc = firstValue / secondValue;
            break;
    }

    resultValEl.innerHTML = resultCalc;
}

function addItem() {

    let sum = 0;
    let index = 0;

    array[arrayLength++] = +itemValEl.value;

    do {

        sum = sum + array[index];

    } while (++index < arrayLength);

    sumValEl.innerHTML = sum;

}


function reverseNumber() {

    let a = '';
    let i = 0;
    let index = inputValEl.value.length - 1;

    do {

        a = a + inputValEl.value[index];

    } while (index-- > 0);


    reverseValEl.innerHTML = a;

}





