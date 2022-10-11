var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
for(item of btn){
    item.addEventListener('click',(e)=>{
        var btnText = e.target.innerText;
         if(btnText == 'x'){
             btnText = '*';
         }
         if(btnText == '÷'){
             btnText = '/';
         }
         screen.value += btnText;
    })
} 

function backspc(){
    screen.value= screen.value.substr(0,screen.value.length-1);
}