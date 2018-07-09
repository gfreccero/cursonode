let deadpool = {
    nombre: 'Yo',
    ape: 'ape',
    poder: 'Rege',
    getNombre: function() {
        return `${this.nombre} ${this.ape} - poder : ${this.poder}`
    }
}

console.log(deadpool.getNombre());