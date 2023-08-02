const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");


if (productosEnCarrito) {

    contenedorCarritoVacio.classList.add("disabled");
    /* contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");
 */

    /* productosEnCarrito.forEach(producto => {

        const div = document.createElement("div");

        div.classList.add("carrito-producto");
        div.innerHTML = `
            <img class="carrito-producto-img" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h3>Abrigo 01</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>1</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$1000</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$1000</p>
            </div>
            <button class="carrito-producto-eliminar"><i class="bi bi-trash3"></i></button>
        `;

    })
 */
}