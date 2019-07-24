function Caja(valor){
    this.valor = valor;
    this.siguiente = null;
}
function ListaEnlazadaAlmacen(){
    this.primero = null;
    this.agregarCaja = ListaEnlazadaAgregarCaja;
    this.esVacia = ListaEnlazadaEsVacia;
    this.verContenidoAlmacen = ListaEnlazadaVerContenidoAlmacen;
}

    function ListaEnlazadaEsVacia(){
        return  this.primero == null;
    }
    function ListaEnlazadaAgregarCaja(objeto){
        if(this.esVacia()){
            this.primero = new Caja(objeto);
        }else{
            resto = this.primero;
            this.primero = new Caja(objeto);
            this.primero.siguiente = resto;
        }
    }
    function ListaEnlazadaVerContenidoAlmacen(){
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