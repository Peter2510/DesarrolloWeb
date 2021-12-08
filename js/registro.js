function registro(mail,pass1,pass2){

    let correo = document.getElementById("mail").value;
    let contrasenia1 = document.getElementById("pass1").value;
    let contrasenia2 = document.getElementById("pass2").value;

    if(correo.length>0 && contrasenia1.length>0 && contrasenia2.length>0){
        if(contrasenia1==contrasenia2){
            return "Usuario registrado con exito, con correo " + correo + " y contraseña " + contrasenia1;

        }else{
            return "Las contraseñas no coinciden";
        }
    }else{
        return "Ningun campo pueden estar vacio";
    }

}