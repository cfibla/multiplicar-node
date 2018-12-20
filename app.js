//REQUIRE
const argv = require('./config/yargs.js').argv;
const colors = require ('colors');

//DESTRUCTURACION: const o let + {propiedad dentro de un archivo}
const {crearArchivo} = require('./multiplicar/multiplicar');
const {listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
	case 'listar':
		listarTabla (argv.base, argv.limite)
	break;

	case 'crear':
		crearArchivo ( argv.base, argv.limite )
		.then(archivo => console.log(`Archivo creado:`,`${archivo}`.green))
		.catch(e =>{console.log(e)})
	break;

	default:
		console.log('No existe ese comando');
}


//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv);
/*

*/