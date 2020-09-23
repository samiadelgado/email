//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

const formulario=document.getElementById('enviar-mail');


//EventListener

eventListeners();


function eventListeners(){
    //inicio de la aplicacion, deshabilita submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);
    // boton de enviar en el submit
    btnEnviar.addEventListener('click', enviarEmail);
}





//Funciones

function inicioApp(){
    //deshabilitamos el envio
    btnEnviar.disabled=true;
}

function validarCampo(){
    //Se valida la longitud del texto y que no esté vacio.
    //this me vale para saber luego en que clase de input se esta aplicando
    validarLongitud(this);
    
    if(this.type==='email'){
        validarEmail(this);
    }
    
    //cuento si hay algun input con la clase error
    let errores = document.querySelectorAll('.error');
    
    if (email.value!=='' && asunto.value!=='' && mensaje.value!==''){
        //si ya no hay inputs con clase error, habilito boton
        if(errores.length===0){
            btnEnviar.disabled=false;
        }   
    }
}

//cuando se envia el email
function enviarEmail(e){
    e.preventDefault();
    const loaders= document.getElementById('loaders');
    //al presionar enviar, sale el spinner
    const spinnerGif=document.querySelector('#spinner');
    spinnerGif.style.display='block';

    //gif de email enviado
    const enviado= document.createElement('img');
    enviado.src="img/mail.gif";
    enviado.style.display='block';

    //ocultar el spinner y mostrar enviado
    setTimeout(() => {
        spinnerGif.style.display='none';
        loaders.appendChild(enviado);
        setTimeout(() => {
            enviado.remove();
            formulario.reset();

        }, 5000);
        
    }, 3000);


}

//verifica la longitud del texto en los campos.
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor= 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor= 'red';
        campo.classList.add('error');
    }
}

function validarEmail(email){
    if(email.value.indexOf('@')!==-1){
        email.style.borderBottomColor= 'green';
        email.classList.remove('error');
    }else{
        email.style.borderBottomColor= 'red';
        email.classList.add('error');
    }
}