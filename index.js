let string="";

let buttons=document.querySelectorAll('.innerButton');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(event.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(event.target.innerHTML == 'AC'){
            string="";
            document.querySelector('input').value = string;
        }
        else{
            console.log(event.target);
            string=string + event.target.innerHTML;
            document.querySelector('input').value = string;
        }
       
    })

})