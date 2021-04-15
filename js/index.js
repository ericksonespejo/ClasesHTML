

var libroAngular = {
    titulo: "Aprendiendo JS",
    autor: "Desconocido",
    paginas: 500,
    formatos:["PDF", "ePub", "Mobi"],
    precio:27,
    publicado: false
};

console.log(libroAngular.titulo);
console.log(libroAngular.paginas);

var propiedad= 'autor';
console.log(libroAngular[propiedad]);
console.log(libroAngular.propiedad);

console.log('*************************************+')
var coche1 = {marca:"Ford", modelo:"Focus"};
var coche2 = {marca:"Ford", modelo:"Focus"};
console.log(coche1===coche2);
console.log(coche1.modelo===coche2.modelo);