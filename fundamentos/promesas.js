let empleados = [{
        id: 1,
        nombre: 'Yo'
    },
    {
        id: 2,
        nombre: 'El'
    },
    {
        id: 3,
        nombre: 'Ella'
    }
];

let salario = [{
        id: 1,
        monto: 2000
    },
    {
        id: 2,
        monto: 3000
    }
];

let getEmpleado = (id, callback) => {

    return new Promise((resolve, reject) => {
        let empleadoDb = empleados.find(empleado => empleado.id === id);
        if (!empleadoDb) {
            reject(`No existe Empleado con ID ${id}`)
        } else {
            // console.log(empleadoDb);
            resolve(empleadoDb);
        }
    });
}


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDb = salario.find(salario => salario.id === empleado.id);
        if (!salarioDb) {
            reject(`Sin salario para el usuario ${empleado.nombre}`)
        } else {
            // console.log(empleadoDb);
            resolve({
                nombre: empleado.nombre,
                salario: salarioDb.monto,
                id: empleado.id
            });
        }
    });

}

// getEmpleado(1).then(empleado => {
//     console.log('Empleado de DB', empleado);

//     getSalario(empleado).then(resp => {
//         console.log(`El Salario de  ${resp.nombre} es de ${resp.salario}`);
//     })

// }, (err) => {
//     console.log(err);
// })

getEmpleado(1).then(empleado => {
    return getSalario(empleado);
})