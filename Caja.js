
function Nodo(valor){

    this.valor = valor;
    this.siguiente=null;
}

function ListaEnlazada(){
    this.primero = null;
    this.agregarElemento= ListaEnlazadaAgregarElemento;
    this.guardar = ListaEnlazadaGuardar;
}

function ListaEnlazadaAgregarElemento(valor){
    if(!this.primero){
        this.primero = new Nodo(valor);
    }else{
        actual = this.primero;
        this.primero = new Nodo(valor); 
        this.primero.siguiente = actual; 
    }

}

function ListaEnlazadaGuardar(){
    var lista1 = this.agregarElemento;
    var lista = [];
    lista.forEach(function(i){
        alert(i);
    });

    lista = [lista1];
    lista.pop();

    var fs = require('fs'); 
    fs.writeFile("Nuevo.txt", lista, function(err){
        if(err){
            return console.log(err); 
        }
        console.log("Elarchivo fue creado de una manera exitosa. ");
    });

}