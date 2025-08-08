/*
Comando super()

En una clase que hereda (extends) de otra, super() es una llamada
especial que hace referencia al constructor o métodos de la 
clase padre.
- Dentro del construcutor de una clase hija, super() se usa para invocar
el constructor de la clase padre
*/
const Animal = require("./Animal");
class Pajaro extends Animal{


    constructor(nombre,raza){
        super(nombre);
        this.raza=raza;
    }

    hablar(){
        console.log(`El ${this.nombre} es un ${this.raza}!!!`);
    }
}

module.exports = Pajaro;