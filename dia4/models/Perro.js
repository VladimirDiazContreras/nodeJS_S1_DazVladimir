const Animal = require("./Animal");
/* 
El polimorfismo permite que métodos con el mismo
nombre se comporten de manera diferente, según el objeto
que los invoque.
*/
class Perro extends Animal{
    //Sobreescritura de método
    hablar(){
        console.log(`${this.nombre} está ladrando.`);
    }
}
/*
Aquí, Perro hereda de Animal, lo cual
evita la duplicación de código, facilitando
el mantenimiento del mismo y la extensión de
comportamientos con facilidad.
*/
module.exports=Perro;