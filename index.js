const form = document.querySelector('#form');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    nameValid();
    emailValid();
    passValid();

})


function setError(index){
    campos[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block'
}
function removeError(index){
    campos[index].style.border = '';
    span[index].style.display = 'none'
}

function nameValid(){
    if(campos[0].value.length < 5){
        setError(0);

    }else{
        removeError(0)
    }
}

function emailValid(){
    if(!emailRegex.test(campos[1].value))
        {
        setError(1);
    }
    else{
        removeError(1);
    }
}

function passValid(){
    if(campos[2].value.length < 8){
        setError(2);
    }
    else{
        removeError(2);
    }

}
