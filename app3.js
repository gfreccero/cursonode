console.log('Inicio');

setTimeout(function() {
    console.log('Primero');
}, 3000);
setTimeout(function() {
    console.log('Segundo');
}, 0);

setTimeout(function() {
    console.log('Tercero');
}, 1500);

console.log('Fin');