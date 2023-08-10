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

    const buttons = document.querySelectorAll('input');

    buttons.forEach(input => {

        input.addEventListener('click', function() {

            if(input.className == "num"){
            console.log("number pressed");
            const value = input.value;
            numPress(value);
            }

            if(input.className == "op"){ //when operator is pressed you need to store whatever value is on the screen as input1
                input1 = document.getElementById("result").value;
                operator = input.value;
                console.log("operator pressed");
                document.getElementById("result").value = "";
                
            }

            if(input.id == "equal"){ //when equal is pressed you need to store whatever value is on the screen as input2
                console.log("equal pressed");
                input2 = document.getElementById("result").value
                var result = operate(operator,Number(input1),Number(input2));
                console.log("first :" + input1);
                console.log("second :" + input2);
                console.log(result);
                document.getElementById("result").value = String(result);


            }

            if(input.value == "Clear"){ //needs to clear input values 
                console.log("Clear pressed")
                document.getElementById("result").value = "";
            }
        });
    });

});
    

    




  


