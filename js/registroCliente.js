function registroCliente(nombre, apellido, cui, departamento){
    let nombreCliente = document.getElementById("nombre").value;
    let apellidoCliente = document.getElementById("apellido").value;
    let cuiCliente = document.getElementById("cui").value;
    let departamentoCliente = document.getElementById("departamento").value;

    return mostrarCliente(nombreCliente,apellidoCliente,cuiCliente,departamentoCliente);
}

function mostrarCliente(nombres,apellido,cui,departamento){
    
    return "El cliente se registro con exito" +
    "\nNombre: " + nombres +
    "\nApellido: " + apellido +
    "\nCUI: " + cui +
    "\nDepartamento: " + departamento; 
    
}