class Autor{
    constructor(id,nombre){
        this.id=id;
        this.nombre=nombre;
        this.libros=[];
    }
    agregarLibro(libro){
        if(!this.libro.includes(libro)==false){
            this.libros.push(libro);
            libro.setAutor(this);
        }
    }
    }
    module.exports= Autor