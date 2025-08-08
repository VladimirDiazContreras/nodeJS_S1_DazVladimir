class Libro{
    constructor(isbn,titulo){
        this.isbn=isbn;
        this.titulo = titulo;
        this._autor=null;
    }
    setAutor(autor){
        this._autor=autor
    }

    }