class Persona{
    nombre;
    edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(){
        return "El alumno es " + this.nombre + " y tiene " + this.edad + " años";
    }

}

class Estudiante extends Persona{

    profesor;
    
    constructor(nombre, edad, profesor){
        super(nombre,edad);
        this.profesor = profesor;
    }
    estudiando(){ 
        return "Estudiando con " + this.profesor;
    }

    setProfesor(profesor){
        this.profesor = profesor;
    }
}

let estudiante = new Estudiante("Sergio",28,"Christian Dario Nievas");
console.log(estudiante.estudiando());