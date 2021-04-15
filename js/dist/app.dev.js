"use strict";

/*  Objetos Literales */
var alumnos = {
  nombre: ['Aramis', 'Mike', 'Leticia'],
  alias: 'El cantante',
  vivo: true,
  'estado-civil': 'soltero',
  edad: 22,
  'instrumentos-musicales': {
    guitarra: false,
    piano: true,
    flauta: false,
    bajo: true
  },
  'generos-musicales': ['Salsa', 'Mariachi'],
  direccion: {
    cp: '53100',
    calle: 'Toluca',
    colonia: 'Ecatepec'
  },
  "function": function _function(nombre) {
    return "Hola ".concat(nombre);
  }
};
console.log(alumnos["function"]('Claud'));
console.log(alumnos.nombre[1]);
console.log(alumnos.nombre.length);
delete alumnos.vivo;
alumnos.semestre = 'Quinto semestre';
alumnos.direccion.colonia = ['Tecamac', 'Neza', 'Lima']; //console.log(Object.entries(alumnos));

var atributos = Object.getOwnPropertyNames(alumnos);
var valores = Object.values(alumnos);
console.table({
  atributos: atributos,
  valores: valores
});