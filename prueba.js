class ingreso_datos{
    constructor(id, apellido, nombre, tel, mail, mensaje){
        
        
        this.id = id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.telefono = tel;
        this.mail = mail;
        this.mensaje = mensaje;
    }

    crear_cliente(ingreso_datos){

        let cliente = new ingreso_datos (ingreso_datos.id, ingreso_datos.apellido, ingreso_datos.nombre, ingreso_datos.telefono, ingreso_datos.mail,ingreso_datos.mensaje);
        
        return cliente;

    }


}

