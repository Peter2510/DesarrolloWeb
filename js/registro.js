function registro(nombrelet,apellidolet,mail,pass1,pass2){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("mail").value;
    let contrasenia1 = document.getElementById("pass1").value;
    let contrasenia2 = document.getElementById("pass2").value;

    if(nombre.length>0&&apellido.length>0&&correo.length>0 && contrasenia1.length>0 
        && contrasenia2.length>0){
        if(contrasenia1==contrasenia2){
            return "Usuario registrado con exito\n" + 
            "nombre: " + nombre + "\napellido: " + apellido + "\ncorreo electronico: " + correo
            + "\ncontraseña: " + contrasenia1;
            

        }else{
            return "Las contraseñas no coinciden";
        }
    }else{
        return "Ningun campo pueden estar vacio";
    }

}