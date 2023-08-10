
//global variables to keep track of current arithmetic and if the equal button has 
//been pressed
var input1;
var operator;
var input2;
var equalPressed;

//functions for basic arithmetic
function addNum(num1, num2){
    return num1 + num2;
}

function subNum(num1, num2){
    return num1 - num2;
}

function multNum(num1, num2){
    return num1 * num2;
}

function divNum(num1, num2){
    return num1 / num2;
} 

function operate(operator, input1, input2){

    if (operator == '+'){
        return addNum(input1,input2);
    }

    if (operator == '-'){
        return subNum(input1,input2);
    }

    if (operator == '*'){
        return multNum(input1,input2);
    }

    if (operator == '/'){
        return divNum(input1,input2);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    function numPress(num) {

        var currScreen = document.getElementById("result").value;
        var outPut = currScreen + num;
        document.getElementById("result").value = outPut;
    }

    function movetoUp(op){

        var currScreen = document.getElementById("expression").value;
        var outPut = currScreen + num;
        document.getElementById("expression").value = outPut;

    }

    const buttons = document.querySelectorAll('input');

    buttons.forEach(input => {

        input.addEventListener('click', function() {

            if(input.className == "num"){
                if (equalPressed){ // reset calc after 
                    input1 = undefined;
                    input2 = undefined;
                    operator = undefined;
                    document.getElementById("result").value = "";
                    document.getElementById("expression").value = "";
                    const value = input.value;
                    numPress(value);
                    equalPressed = undefined;
                }else{ //normal button press
            const value = input.value;
            numPress(value);
            }
        }

            if(input.className == "op"){ 
                if(equalPressed == true){
                    input1 = document.getElementById("result").value;
                    document.getElementById("expression").value = document.getElementById("result").value + input.value;
                    document.getElementById("result").value = "";
                    operator = input.value;
                    equalPressed = undefined;
                }
                else if (input1 != undefined){//second time hitting an operator 
                    document.getElementById("expression").value += document.getElementById("result").value + input.value;
                    input2 = document.getElementById("result").value;
                    var tempResult = operate(operator,Number(input1),Number(input2));
                    input1 = tempResult;
                    document.getElementById("result").value = "";
                    operator = input.value;
                
                }else{ //fist time hitting an operator
                document.getElementById("expression").value += document.getElementById("result").value + input.value;
                input1 = document.getElementById("result").value;
                operator = input.value;
                document.getElementById("result").value = "";
                
            }
        }

            if(input.id == "equal"){ //when equal is pressed you need to store whatever value is on the screen as input2
                equalPressed = true;
                input2 = document.getElementById("result").value
                var result = operate(operator,Number(input1),Number(input2));
                document.getElementById("expression").value += document.getElementById("result").value; 
                document.getElementById("result").value = String(result);
                


            }

            if(input.value == "Clear"){ //needs to clear input values 
                input1 = undefined;
                input2 = undefined;
                operator = undefined;
                document.getElementById("result").value = "";
                document.getElementById("expression").value = "";
            }
        })
    });

});
    




  


