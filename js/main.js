/* Variables Globales */
let listaProductos = [
    { nombre: 'Carne', cantidad: 2, precio: 12.34 },
    { nombre: 'Pan', cantidad: 3, precio: 34.56 },
    { nombre: 'Fideos', cantidad: 4, precio: 78.90 },
    { nombre: 'Leche', cantidad: 5, precio: 87.65 },
    { nombre: 'Crema', cantidad: 6, precio: 15.41 }
]

let crearLista = true
let ul
/* Funciones Globales */

function borrarProd(index){
    console.log("asd", index);
    listaProductos.splice(index,1)
    renderLista()
}

function cambiarValorProd(que, cual, el) {
    console.log('cambiarValorProd', que, cual, el);
    console.dir(el)
    const valor = el.value
    if(que == 'cantidad') listaProductos[cual].cantidad = parseInt(valor)
    else if(que == 'precio') listaProductos[cual].precio = parseFloat(valor)
}

function renderLista() {
    if(crearLista){
        ul = document.createElement('ul')
        ul.classList.add('demo-list-icon', 'mdl-list')
    }

    ul.innerHTML = ''

    listaProductos.forEach((producto, index) => {
        ul.innerHTML += `

        <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content w-10">
                <!-- icono del producto -->
                <i class="material-icons mdl-list__item-icon">shopping_cart</i>
            </span>
            <!-- nombre del producto -->
            <span class="mdl-list__item-primary-content w-30">
                ${producto.nombre}
            </span>
            <!-- cantidad de producto -->
            <span class="mdl-list__item-primary-content w-20">
                <!-- Textfield with Floating Label -->
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input onChange="cambiarValorProd('cantidad',${index}, this)" value='${producto.cantidad}' class="mdl-textfield__input" type="text" id="cantidad-${index}">
                    <label class="mdl-textfield__label" for="cantidad-${index}">Cantidad</label>
                </div>
            </span>
   
            <!-- precio de producto -->
            <span class="mdl-list__item-primary-content w-20 ml-item">
                <!-- Textfield with Floating Label -->
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input onchange="cambiarValorProd('precio',${index}, this)" value='${producto.precio}' class="mdl-textfield__input" type="text" id="precio-${index}">
                    <label class="mdl-textfield__label" for="precio-${index}">Precio</label>
                </div>
            </span>
   
            <!-- eliminar producto individual -->
            <span class="mdl-list__item-primary-content w-20 ml-item">
                <!-- Colored FAB button with ripple -->
                <button onClick="borrarProd(${index})"
                    class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i class="material-icons">remove_shopping_cart</i>
                </button>
            </span>
        </li>
        `
    });

    if (crearLista) {
        document.getElementById('lista').appendChild(ul)
    }else{
        componentHandler.upgradeElements(ul)
    }

   
    crearLista = false
}

function configListenersMenu(){
    // boton agregar producto
    document.getElementById('btn-entrada-producto').addEventListener('click',()=> {
        const input = document.getElementById('ingreso-producto')
        const nombre = input.value
        console.log(nombre);

        const producto = {nombre: nombre, cantidad: 1, precio: 0}
        listaProductos.push(producto)

        renderLista()

        input.value = ''
    })

    // boton borrar todos
    document.getElementById('btn-borrar-producto').addEventListener('click',()=> {
        if(confirm("¿Desea borrar todos los productos?"))
        listaProductos = []
        renderLista()
    })
}

function start() {
    console.warn(document.querySelector('title').innerText);

    configListenersMenu()
    renderLista()
}


/* Ejecucion */
start()
