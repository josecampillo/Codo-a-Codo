let user = document.getElementById("user");
let pass = document.getElementById("pass");
let conf = document.getElementById("conf");
let email = document.getElementById("email");
let prov = document.getElementById("prov");

document.getElementById("form").addEventListener("submit",validar);

function validar(evento){
    evento.preventDefault();
    if(user.value === ""){
        alert("Ingrese un nombre de usuario");
        return;
    }
    if(pass.value.length < 8){
        alert("Ingrese una contraseña de al menos 8 caracteres");
        return;
    }
    if(pass.value != conf.value){
        alert("Las contraseñas no son iguales");
        return;
    }
    const emailValido = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    if(!emailValido(email.value)){
        alert("E-mail Inválido");
        return;
    }
    if(prov.value === "Seleccione"){
        alert("Seleccione su provincia");
        return;
    }
    this.submit();
}


