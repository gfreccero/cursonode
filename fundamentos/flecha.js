// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// let holaMundo = () => 'Hola Mundo';

// console.log(holaMundo());

let deadpool = {
    nombre: 'Yo',
    ape: 'ape',
    poder: 'Rege',
    getNombre() {
        return `${this.nombre} ${this.ape} - poder : ${this.poder}`
    }
}

console.log(deadpool.getNombre());