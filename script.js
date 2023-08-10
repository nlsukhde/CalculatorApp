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

var input1;
var operator;
var input2;
var equalPressed;

console.log(input1);

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
                if (equalPressed){
                    input1 = undefined;
                    input2 = undefined;
                    operator = undefined;
                    document.getElementById("result").value = "";
                    document.getElementById("expression").value = "";
                    const value = input.value;
                    numPress(value);
                    equalPressed = undefined;
                }else{
            console.log("number pressed");
            const value = input.value;
            numPress(value);
            }
        }

            if(input.className == "op"){ //at this point you need to add the expression to the sub window,if it is the second time hitting an operator  
                //the first calculation needs to be done before moving on to the third number 
                document.getElementById("expression").value += document.getElementById("result").value + input.value;
                if (input1 != undefined){//second time hitting an operator 
                    input2 = document.getElementById("result").value;
                    var tempResult = operate(operator,Number(input1),Number(input2));
                    console.log(tempResult);
                    input1 = tempResult;
                    document.getElementById("result").value = "";
                    operator = input.value;
                if(equalPressed == true){

                    document.getElementById("expression").value = document.getElementById("result").value + input.value;
                    document.getElementById("result").value = "";
                    equalPressed = undefined;

                }
                }else{ //fist time hitting an operator
                input1 = document.getElementById("result").value;
                operator = input.value;
                console.log("operator pressed");
                document.getElementById("result").value = "";
                
            }
        }

            if(input.id == "equal"){ //when equal is pressed you need to store whatever value is on the screen as input2

                console.log("equal pressed");
                equalPressed = true;
                input2 = document.getElementById("result").value
                var result = operate(operator,Number(input1),Number(input2));
                console.log("first :" + input1);
                console.log("second :" + input2);
                console.log(result);
                document.getElementById("expression").value += document.getElementById("result").value; 
                document.getElementById("result").value = String(result);
                


            }

            if(input.value == "Clear"){ //needs to clear input values 
                input1 = undefined;
                input2 = undefined;
                operator = undefined;
                console.log("Clear pressed");
                document.getElementById("result").value = "";
                document.getElementById("expression").value = "";
            }
        })
    });

});
    

    
//current problems: functionality after equal is pressed an user wants to continue on the number they were on



  


