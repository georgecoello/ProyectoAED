function Node(valor){
    this.valor = valor;
    this.siguiente = null;
}
function ListaEnlazadaCaja(){
    this.primero = null;
    this.esVacia = ListaEnlazadaCajaEsVacia;
    this.agregarObjeto = ListaEnlazadaCajaAgregarObjeto;
    this.verContenidoCaja = ListaEnlazadaCajaVerContenidoCaja;  
}
    function ListaEnlazadaCajaEsVacia(){
      return  this.primero == null;
    }
    function ListaEnlazadaCajaAgregarObjeto(objeto){
        if(this.esVacia()){
            this.primero = new Node(objeto);
        }else{
            resto = this.primero;
            this.primero = new Node(objeto);
            this.primero.siguiente = resto;
        }
    }
    function ListaEnlazadaCajaVerContenidoCaja(){
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