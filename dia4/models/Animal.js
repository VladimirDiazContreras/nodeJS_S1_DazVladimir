/*
La herencia permite crear nuevas clases 
a partir de otras, mediante la reutilización de atributos
y métodos.
*/
class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hablar(){
        console.log(`${this.nombre} está haciendo un ruido.`);
    }
}
module.exports = Animal;