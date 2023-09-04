let input = document.getElementById('value');
let output = document.getElementById('result');
let buttons = document.querySelectorAll('button');
let str = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (ev) =>{
        //Result 
        if(ev.target.innerHTML == '='){
            str = eval(str);
            output.value = str;
        }
        //percentage
        else if(ev.target.innerHTML == '%'){
            str = parseFloat(input.value) / 100;
            output.value = str;
        }
        //sign
        else if(ev.target.innerHTML == '+/-'){
            str = parseFloat(input.value) * -1;
            input.value = str;
            output.value = str;
        }
        //Clear 
        else if(ev.target.innerHTML == 'C'){
            str = "";
            input.value = str;
            output.value = str;

        }
        //Backspace
        else if(ev.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else{
            str += ev.target.innerHTML;
            input.value = str;
        }
    })
})