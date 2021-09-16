function changeColor(){
    var randomColor =  '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('button1').style.backgroundColor = randomColor;
   }
function calculate(){
    var num1 = parseFloat(document.getElementById('userNum1').value);
    var num2 = parseFloat(document.getElementById('userNum2').value);
    var select = document.getElementById('calc');
    var symbol = parseInt(select.options[select.selectedIndex].value);
    var output;
    
    switch(symbol){
        case 1:
            output= num1 + num2;
            break;
        case 2:
            output= num1 - num2;
            break;
        case 3:
            output= num1 * num2;
            break;
        case 4:
            output= num1 / num2;
            break;
    }
    document.getElementsByName('outputVal')[0].value = output;
}
