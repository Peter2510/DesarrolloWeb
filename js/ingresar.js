function ingresar(email,pass){
    let correo = document.getElementById("email").value;
    let contraseña = document.getElementById("pass").value;
    
    if(correo.length>0 && contraseña.length>0){
        return "El correo electronico es: " + correo + " y la contraseña es: " + contraseña;        
    }else{
        return "Los campos no pueden estar vacios"
    }
}