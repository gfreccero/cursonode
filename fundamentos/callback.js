// setTimeout(() => {
//     console.log("Hola");
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'GDF',
        id
    }

    if (id === 20) {
        callback('Error')
    } else {
        callback(null, usuario);
    }

    //callback(null, usuario);
}

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario ', usuario);
});