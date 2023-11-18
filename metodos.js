var cubos = [
    { nombre: "Valk3", costo: 120000 },
    { nombre: "Valk4", costo: 150000 },
    { nombre: "AosuGTS", costo: 130000 },
    { nombre: "Wushuang", costo: 170000 },
    { nombre: "Salil 3x3", costo: 30000 },
    { nombre: "M3RFS M", costo: 60000 },
    { nombre: "Mirror", costo: 15000 }
];

var preciosBajos = cubos.filter(function (articulo) {
    return articulo.costo <= 70000;
});

var nombres = cubos.map(function (nombre) {
    return nombre.nombre;
});