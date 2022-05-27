class contenedor {
    constructor(){
        this.listaProductos = [];
    }

    getAll(){
        return this.listaProductos;
    }
    save(objeto){
        const longitud = this.listaProductos.length;
        if(longitud == 0){
            objeto.id = 1;
        }else{
            objeto.id = this.listaProductos[longitud - 1].id + 1;
        }
        this.listaProductos.push(objeto);
    }
}

module.exports = contenedor;