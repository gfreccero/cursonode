const argv = require('yargs')
    .command('listar', 'Imprime por consola', {
        base: {
            demand: true
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crear archivo', {
        base: {
            demand: true
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('NO RECONOCIDO');
        break;
}

// let base = 67;

// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = process.argv[2];
// let base = parametro.split('=')[1];

//console.log(argv.base);

//console.log(argv2);