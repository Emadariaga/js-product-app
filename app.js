class Product {
    constructor(nombre,precio,año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;

    }

}

/* CLASE INTERFAZ */
class UI {

    addProduct(product){

        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML =  `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre producto</strong>: ${product.nombre}
                    <strong>Precio producto</strong>: ${product.precio}
                    <strong>Año producto</strong>: ${product.año}
                    <a href="#" class="btn btn-danger" name="borrar">Borrar</a>
                </div>
            </div>
        `; 

    
        

        productList.appendChild(element);
        this.resetForm();

    }

    resetForm(){

        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name === 'borrar'){

            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Producto borrado satisfactoriamente', 'info')
        }

    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`
        div.appendChild(document.createTextNode(message))
        /* SHOW DOM */
         const container = document.querySelector('.container')
         const app = document.querySelector('#app');
         container.insertBefore(div,app)
         setTimeout(function(){

            document.querySelector('.alert').remove()
         }, 3000)

    }
}

/* DOM EVENTS*/
document.getElementById('product-form').addEventListener('submit', function (e) { 
    e.preventDefault(); 

    const nombre = document.getElementById('name').value
    const precio = document.getElementById('price').value
    const año = document.getElementById('year').value
    //console.log(name,price,year)

    const product = new Product(nombre,precio,año)

    /* NUEVA INSTANCIA DE LA CLASE UI */
    const ui = new UI();

    /* VALIDACION DE CAMPOS VACIOS */
    if( nombre === '' || precio === '' || año === ''){

        return ui.showMessage('complete los campos', 'danger')
    }
    ui.addProduct(product)
    ui.showMessage('Producto agregado satisfactoriamente', 'success')

})

document.getElementById('product-list').addEventListener('click', function (e) {  
    
    /* NUEVA INSTANCIA DE LA CLASE UI */
    const ui = new UI();
    ui.deleteProduct(e.target) 

})
