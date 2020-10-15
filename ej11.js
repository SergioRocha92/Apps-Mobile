class Persona
{
    constructor(nombre, edad)
    {
        this.nombre= nombre;
        this.edad= edad;
    }
    presentarse()
    {
        return "Hola me llamo " + this.nombre + " y tengo "+ this.edad +" años";
    }
}
var pepe = new Persona("Pepe", 23);
console.log(pepe.presentarse());