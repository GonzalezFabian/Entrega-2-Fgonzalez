let nombreIngresado = prompt('ingrese nombre');


if (nombreIngresado !==""){
    alert ("Nombre: " + nombreIngresado);
}else{
    alert("Error: Ingresar nombre")
    while(nombreIngresado !=="") {
        alert("Debes registrarte");

        nombreIngresado = prompt("ingrese nombre");
        
}
}




alert(nombreIngresado + " !! " + " Bienvenido a MTB-BIKESTORE")
alert("hora de Comprar " + nombreIngresado)

const productos = [{
        nombre: "cadena",
        precio: 200
    },
    {
        nombre: "frenos",
        precio: 100
    },
    {
        nombre: "camara",
        precio: 120
    },
    {
        nombre: "luces",
        precio: 250
    },
];
let carrito = []

let seleccion = prompt(nombreIngresado + " deseas agregar a tu carrito? si o no")

while (seleccion != "si" && seleccion != "no") {
    alert(nombreIngresado + " Por favor ingresa SI o NO")
    seleccion = prompt(nombreIngresado + " deseas agregar a tu carrito? si o no")
}

if (seleccion == "si") {
    alert("Selecciona los productos")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio);
    alert(todosLosProductos.join(" /- "))
} else if (seleccion == "no") {
    alert("Regresa Pronto!!")
}

while (seleccion != "no") {
    let producto = prompt("agrega a tu carrito")
    let precio = 0

    if (producto == "cadena" || producto == "luces" || producto == "frenos" 
    || producto == "camara") {
        switch (producto){
            case "cadena":
            precio = 200;
            break;

            case "luces":
                precio = 250;
                break;

                case "frenos":
            precio = 100;
            break;

            case "camara":
            precio = 120;
            break;
        default:
            break;

        }

        let unidades = parseInt(prompt("cuantas piezas?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    
    }else{
        alert("No disponible")
    }

seleccion = prompt("desea seguir comprando?")
while(seleccion === "no"){
alert( nombreIngresado + " Gracias por la compra, Vuelve Pronto!")
carrito.forEach((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto},unidades: ${carritoFinal.unidades}, 
    Total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
})
break;
}
}

const total = carrito.reduce((ecc, el) => acc + el.precio * el.unidades, 0)
console.log(`Total a pagar: ${total}`)

//intenté agregar