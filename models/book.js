export class Books{
    #isbn;
    #titulo;
    #autor;
    #cantidad
    constructor(isbn,titulo,autor,cantidad){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#cantidad = cantidad;


    }
    //lectura
    get getIsbn(){
        return this.#isbn
    }
    //escritura
    set setIsbn(valorIsbn){
        this.#isbn = valorIsbn;
        
    }

    get getTitulo(){
        return this.#titulo
    }
    set setTitulo(valorTitulo){
        this.#titulo = valorTitulo;
        
    }
    get getAutor(){
        return this.#autor
    }
    set setAutor(valorAutor){
        this.#autor = valorAutor;

    }
    get getCantidad(){
        return this.#cantidad
    }
    set setCantidad(valorCantidad){
        this.#cantidad = valorCantidad;

    }
    compra()

}
