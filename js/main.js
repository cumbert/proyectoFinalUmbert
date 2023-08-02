
const productos = [

    {
        id: "pantalon_01",
        titulo: "Pantalón 01",
        imagen: "./images/pantalones/pantalon_01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10000
    },
    {
        id: "pantalon_02",
        titulo: "Pantalón 02",
        imagen: "./images/pantalones/pantalon_02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10000
    },
    {
        id: "pantalon_03",
        titulo: "Pantalón 03",
        imagen: "./images/pantalones/pantalon_03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10000
    },
    {
        id: "pantalon_04",
        titulo: "Pantalón 04",
        imagen: "./images/pantalones/pantalon_04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10000
    },
    {
        id: "pantalon_05",
        titulo: "Pantalón 05",
        imagen: "./images/pantalones/pantalon_05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10000
    },
    {
        id: "pantalon_06",
        titulo: "Pantalón 06",
        imagen: "./images/pantalones/pantalon_06.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10000
    },
    {
        id: "pantalon_07",
        titulo: "Pantalón 07",
        imagen: "./images/pantalones/pantalon_07.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10000
    },
    {
        id: "pantalon_08",
        titulo: "Pantalón 08",
        imagen: "./images/pantalones/pantalon_08.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10000
    },
    {
        id: "pantalon_09",
        titulo: "Pantalón 09",
        imagen: "./images/pantalones/pantalon_09.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 10000
    },
    {
        id: "pollera_01",
        titulo: "Pollera 01",
        imagen: "./images/polleras/pollera_01.jpg",
        categoria: {
            nombre: "Polleras",
            id: "polleras"
        },
        precio: 10000
    },
    {
        id: "pollera_02",
        titulo: "Pollera 02",
        imagen: "./images/polleras/pollera_02.jpg",
        categoria: {
            nombre: "Polleras",
            id: "polleras"
        },
        precio: 10000
    },
    {
        id: "pollera_03",
        titulo: "Pollera 03",
        imagen: "./images/polleras/pollera_03.jpg",
        categoria: {
            nombre: "Polleras",
            id: "polleras"
        },
        precio: 10000
    },
    {
        id: "pollera_04",
        titulo: "Pollera 04",
        imagen: "./images/polleras/pollera_04.jpg",
        categoria: {
            nombre: "Polleras",
            id: "polleras"
        },
        precio: 10000
    },
    {
        id: "campera_01",
        titulo: "Campera 01",
        imagen: "./images/camperas/campera_01.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 10000
    },

    {
        id: "campera_02",
        titulo: "Campera 02",
        imagen: "./images/camperas/campera_02.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 10000
    },
    {
        id: "campera_03",
        titulo: "Campera 03",
        imagen: "./images/camperas/campera_03.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 10000
    },
    {
        id: "campera_04",
        titulo: "Campera 04",
        imagen: "./images/camperas/campera_04.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 10000
    }/* ,
    {
        id: "campera_05",
        titulo: "Campera 05",
        imagen: "./images/camperas/campera_05.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 10000
    } */

]


////////////////////////////////

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloProducto = document.querySelector("#titulo");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""; // vacia el contenedor

    productosElegidos.forEach(producto => {         

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt=${producto.titulo}>
            <div class="producto-detalles">
                <h2 class="producto-titulo">${producto.titulo}</h2>
                <h3 class="producto-precio">$${producto.precio}</h3>
                <button class="producto-agregar" id=${producto.id}>Agregar</button>
            </div>
        `;         

        contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "home") {

            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id); // para ajustar los titulos de cada pestaña
            tituloProducto.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        } else {
            tituloProducto.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

 function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

     actualizarNumerito(); 
     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); 

}

 function actualizarNumerito() {

    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
    

} 







