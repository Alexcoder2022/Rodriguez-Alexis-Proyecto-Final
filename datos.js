const clave_local_storage = "storageUsuario"

let id = 1;




let boton_crear = document.getElementById("btn_crear");

let coleccion_datos = datos_local_storage();


boton_crear.addEventListener("click",()=>{
    
   

    if (validar_datos()){

        generar_cliente();

        resetear_formulario();

        



    }else{
        alert(" Por favor ingrese todos los datos");
    }

}) 
crear_alert()

function validar_datos(){

    let input_surname = document.getElementById("surname").value;
    let input_name = document.getElementById("name").value;
    let input_tel = document.getElementById("tel").value;
    let input_mail = document.getElementById("mail").value;
    let input_mensaje = document.getElementById("mensaje").value;


    (!input_surname) ? alert("Ingrese su apellido ") : false;
    (!input_name) ? alert("Ingrese su nombre ") : false;
    (!input_tel) ? alert("Ingrese su telefono") : false;
    (!input_mail) ? alert("Ingrese su mail ") : false;
    (!input_mensaje)? alert("Ingrese su mensaje ") : false;
    return true;
   
    
}

function generar_cliente(){

    let apellido = document.getElementById("surname").value;
    let nombre = document.getElementById("name").value;
    let tel = document.getElementById("tel").value;
    let mail = document.getElementById("mail").value;
    let mensaje = document.getElementById("mensaje").value;

    let nuevo_cliente = new ingreso_datos(id, apellido, nombre, tel, mail, mensaje);

    id++ ;

    coleccion_datos.push(nuevo_cliente);

    localStorage.setItem(clave_local_storage,JSON.stringify(coleccion_datos));
    
}

function resetear_formulario(){
    document.getElementById("surname").value = "";
    document.getElementById("name").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("mensaje").value = "";

}

function datos_local_storage(){
    let arreglo = localStorage.getItem(clave_local_storage);

    if (arreglo){

        arreglo = JSON.parse(arreglo);
        for (let i = 0 ; i < arreglo.length; i++){
            let user = arreglo[i];
        }

        return arreglo;
    }
    return new Array();
}

function crear_alert() {
    Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

}