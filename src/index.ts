let cantDeProductos: number = 3;
let productos: string[] = [];
let stocks: number[] = [];
let precios: number[] = [];
let compra: string = "";
let cantidad: number = 0;

function producto(indice: number): void {
  productos[indice] = String(prompt("ingrese un producto"));
  stocks[indice] = Number(prompt("ingrese el stock de " + productos[indice]));
  precios[indice] = Number(prompt("ingrese el precio de " + productos[indice]));
}

function compraDeUnProducto(
  producto: string,
  stock: number,
  precio: number
): number {
  if (stock > 0 && precio > 0) {
    stock = stock - 1;
  } else {
    console.log("el stock o precio ingresados son menores o igual a cero");
  }
  return stock;
}

function comprar(): void {
  while (cantidad <= 0) {
    cantidad = Number(prompt("que cantidad desea comprar?"));
  }
  for (let i: number = 0; i < cantidad; i++) {
    compra = String(prompt("que producto desea comprar?"));

    if (compra === productos[0] && cantidad <= stocks[0]) {
      stocks[0] = compraDeUnProducto(productos[0], stocks[0], precios[0]);
    } else if (compra === productos[1] && cantidad <= stocks[1]) {
      stocks[1] = compraDeUnProducto(productos[1], stocks[1], precios[1]);
    } else if (compra === productos[2] && cantidad <= stocks[2]) {
      stocks[2] = compraDeUnProducto(productos[2], stocks[2], precios[2]);
    } else {
      console.log(`no tenemos ese producto (${compra})`);
    }
  }
  for (let i: number = 0; i < productos.length; i++) {
    console.log(
      "el precio de " +
        productos[i] +
        " es de $" +
        precios[i] +
        " y el stock es de " +
        stocks[i]
    );
  }
}

const presentacionProd = (i: number): void => {
  console.log(
    "la/el " +
      productos[i] +
      " esta $" +
      precios[i] +
      " pesos , y el stock es de " +
      stocks[i]
  );
};

console.log("Bienvenido al Super");

for (let i: number = 0; i < cantDeProductos; i++) {
  producto(i);
  presentacionProd(i);
}

comprar();
