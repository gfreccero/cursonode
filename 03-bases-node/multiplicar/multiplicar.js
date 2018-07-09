const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    for (let index = 0; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}\n`);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor del parámetro ${base} no es un número`);
            return;
        }

        let data = '';

        for (let index = 0; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`${base}.txt`)
                //console.log(`Archivo creado de tabla del ${base}`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}