//Declaro y creo objetos
const hotelBali = {
  ubicacion: "Mendoza",
  camas: 3,
  aceptaMascotas: true,
  precioNoche: 50,
  nochesDisponibles: 10,
  aceptaMascotas: false,
  servicios: [
    "wifi",
    "piscina",
    "hidromasaje",
    "cocina",
    "sala de entretenimiento",
  ],
};

const hotelVillaPotrerillos = {
  ubicacion: "Mendoza",
  camas: 2,
  aceptaMascotas: false,
  precioNoche: 40,
  nochesDisponibles: 5,
  servicios: ["spa", "piscina", "cocina", "televisor", "cabalgata"],
};

const hotelDelSol = {
  ubicacion: "Mendoza",
  camas: 1,
  aceptaMascotas: false,
  precioNoche: 30,
  nochesDisponibles: 7,
  servicios: [
    "piscina",
    "masajes",
    "desayunador",
    "baño de barro",
    "trekking guiado",
  ],
};
const hotelElFaro = {
  ubicacion: "Cordoba",
  camas: 2,
  aceptaMascotas: false,
  precioNoche: 60,
  nochesDisponibles: 4,
  servicios: [
    "hidromasaje",
    "comida exotica",
    "paseo en barco",
    "cena romantica",
    "vista a la montaña",
  ],
};
const hotelBelgrano = {
  ubicacion: "Cordoba",
  camas: 4,
  aceptaMascotas: true,
  precioNoche: 80,
  nochesDisponibles: 3,
  servicios: ["piscina", "gimnasio", "cocina", "televisor", "jardin"],
};
const hotelBistro = {
  ubicacion: "Jujuy",
  camas: 1,
  aceptaMascotas: false,
  precioNoche: 20,
  nochesDisponibles: 5,
  servicios: [
    "desayuno",
    "sala de entretenimiento",
    "vista a la ciudad",
    "piscina climatizada",
    "televisor",
  ],
};
const hotelEncantado = {
  ubicacion: "Jujuy",
  camas: 1,
  aceptaMascotas: true,
  precioNoche: 60,
  nochesDisponibles: 2,
  servicios: [
    "paseo en bicicleta",
    "cena romantica",
    "spa",
    "masajes",
    "vista a la montaña",
  ],
};
const hotelHilton = {
  ubicacion: "Buenos Aires",
  camas: 2,
  aceptaMascotas: false,
  precioNoche: 40,
  nochesDisponibles: 4,
  servicios: [
    "piscina",
    "gimnasio",
    "cocina",
    "televisor",
    "sala de conferencias",
  ],
};
const hotelLaPlata = {
  ubicacion: "Buenos Aires",
  camas: 1,
  aceptaMascotas: true,
  precioNoche: 50,
  nochesDisponibles: 3,
  servicios: [
    "vista al rio",
    "paseo en barca",
    "cocina",
    "sala de entretenimiento",
    "churrasquera",
  ],
};
const hotelAteneo = {
  ubicacion: "Buenos Aires",
  camas: 3,
  aceptaMascotas: false,
  precioNoche: 40,
  nochesDisponibles: 5,
  servicios: ["piscina", "gimnasio", "sala de teatro", "biblioteca", "cocina"],
};

//Declaro Variables
//Array de hoteles
const hoteles = [
  hotelBali,
  hotelVillaPotrerillos,
  hotelDelSol,
  hotelElFaro,
  hotelBelgrano,
  hotelBistro,
  hotelEncantado,
  hotelHilton,
  hotelLaPlata,
  hotelAteneo,
];

//variables de busqueda
let ubicacion = "";
let cantidadNoches = 0;
let personas = 0;
let mascotas = false;

//Declaro funciones para leer resultados
function traducirMascotas(mascotas) {
  if (mascotas == "Si") {
    return true;
  } else if (mascotas == "No") {
    return false;
  }
}

//Declaro funciones de busqueda
function buscarPorUbicacion(ubicacion, hoteles) {
  hoteles = [
    { hotel: "hotelBali", ubicacion: "Mendoza" },
    { hotel: "hotelVillaPotrerillos", ubicacion: "Mendoza" },
    { hotel: "hotelDelSol", ubicacion: "Mendoza" },
    { hotel: "hotelElFaro", ubicacion: "Cordoba" },
    { hotel: "hotelBelgrano", ubicacion: "Cordoba" },
    { hotel: "hotelBistro", ubicacion: "Jujuy" },
    { hotel: "hotelEncantado", ubicacion: "Jujuy" },
    { hotel: "hotelHilton", ubicacion: "Buenos Aires" },
    { hotel: "hotelLaPlata", ubicacion: "Buenos Aires" },
    { hotel: "hotelAteneo", ubicacion: "Buenos Aires" },
  ];
  ubicacion = ["Mendoza", "Cordoba", "Jujuy", "Buenos Aires"];
  //Recorrer la lista de hoteles y quitar de la lista los que no cumplan la condicion
}

function buscarPorCamas(personas, hoteles) {
  //Recorrer la lista de hoteles y quitar de la lista los que no cumplan la condicion
}

function buscarSiAceptaMascotas(mascotas, hoteles) {
  //Recorrer la lista de hoteles y quitar de la lista los que no cumplan la condicion
}

function buscarNochesDisponibles(noches, hoteles) {
  //Recorrer la lista de hoteles y quitar de la lista los que no cumplan la condicion
}

//Declaro funciones para mostrar resultados
function mostrarLosServicios(hoteles) {}

function mostrarPrecioNoches(hoteles) {}

function mostrarHoteles(hoteles) {
  mostrarLosServicios(hoteles);
  mostrarPrecioNoches(hoteles);
}

//---------------------------------------------------------------------------------------------------------------------------

//Leer las variables del usuario
ubicacion = prompt("Ingrese la ubicacion del hotel");
cantidadNoches = prompt("Ingrese la cantidad de noches que desea alojarse");
personas = prompt("Ingrese la cantidad de personas");
mascotas = prompt("Usted posee mascotas? ingrese Si o No");
mascotas = traducirMascotas(mascotas);

//-----------------------------------------------------------------------------------------------------------------------------

//Procesar resultados

hoteles = buscarPorUbicacion(ubicacion, hoteles);
hoteles = buscarPorCamas(personas, hoteles);
hoteles = buscarSiAceptaMascotas(mascotas, hoteles);
hoteles = buscarNochesDisponibles(noches, hoteles);

//-----------------------------------------------------------------------------------------------------------------------------

//Muestro los resultados

mostrarHoteles(hoteles);

//-----------------------------------------------------------------------------------------------------------------------------
