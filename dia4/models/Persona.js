// ###################
// P.O.O - Abstracción
// ###################

class Persona{
    //Atributos en JS se integran en
    //el constructor.
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

module.exports = Persona;
/*
Aqui podemos evidenciar el uso de la abstracción, por el simple hecho que la 
clase Persona representa una entidad del mundo real, donde cada instancia puede
tener sus propios valoers
 */