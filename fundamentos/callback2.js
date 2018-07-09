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
        nombre: 2000
    },
    {
        id: 2,
        nombre: 3000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDb = empleados.find(empleado => empleado.id === id);
    if (!empleadoDb) {
        callback(`No existe Empleado con ID ${id}`)
    } else {
        // console.log(empleadoDb);
        callback(null, empleadoDb);
    }
}

let getEmpleado2 = (id, callback) => {
    let empleadoDb = empleados.find(empleado => empleado.id === id);
    if (!empleadoDb) {
        callback(`No existe Empleado con ID ${id}`)
    } else {
        return empleadoDb;
    }
}

let getSalario = (empleado, callback) => {
    let salarioDb = salario.find(salario => salario.id === empleado.id);

    if (!salarioDb) {
        callback(`Sin salario para el usuario ${empleado.nombre}`);
    } else {
        callback({
            nombre: empleado.nombre,
            salario: salarioDb.nombre,
            id: empleado.id
        });
    }

}