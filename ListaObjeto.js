function Node(valor){
    this.valor = valor;
    this.siguiente = null;
}
function ListaEnlazada(){
    this.primero = null;
    this.esVacia = ListaEnlazadaEsVacia;
    this.agregar = ListaEnlazadaAgregar;
    this.verContenido = ListaEnlazadaVerContenido;  
}
    function ListaEnlazadaEsVacia(){
      return  this.primero == null;
    }
    function ListaEnlazadaAgregar(objeto){
            if(this.esVacia()){
                this.primero = new Node(objeto);
            }else{
                resto = this.primero;
                this.primero = new Node(objeto);
                this.primero.siguiente = resto;
            }
    }
    function ListaEnlazadaVerContenido(){
        if(!this.esVacia()){
            actual = this.primero;
            while(actual.siguiente){
                console.log(actual.valor);
                actual = actual.siguiente;
            }
            console.log(actual.valor);
        }else{
            console.log("la lista esta vacia, no hay nada que mostrar");
        }
    }