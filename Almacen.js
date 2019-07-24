function Node(valor){
    this.valor = valor;
    this.siguiente = null;
}
    function ListaEnlazadaCajas(){
        this.primero = null;
        caja = new ListaEnlazada();

        this.esVacia = ListaEnlazadaEsVacia;
        this.agregarObjeto = ListaEnlazadaAgregarObjeto;
        this.verContenidoCaja = ListaEnlazadaVerContenidoCaja;  
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