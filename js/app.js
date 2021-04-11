/*  Objetos Literales */

const alumnos = {
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
    function(nombre) {
        return `Hola ${nombre}`;
    }
}
console.log(alumnos.function('Claud'));
console.log(alumnos.nombre[1]);
console.log(alumnos.nombre.length);

delete alumnos.vivo;
alumnos.semestre = 'Quinto semestre';
alumnos.direccion.colonia = ['Tecamac', 'Neza', 'Lima'];

//console.log(Object.entries(alumnos));

const atributos = Object.getOwnPropertyNames(alumnos);
const valores = Object.values(alumnos);

console.table({ atributos, valores });