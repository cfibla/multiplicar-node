//REQUIRED
const fs = require('fs');
const colors = require ('colors');

let listarTabla = (base, limite) =>{
	console.log('================='.red);
	console.log(`== TABLA DEL ${base} ==`.red);
	console.log('================='.red);

		for (let i = 1; i <=limite; i++) {
			console.log(`${base} X ${i} = ${base*i}`);
		}	

}

let crearArchivo = (base, limite) => {

	return new Promise((resolve, reject) =>{

		if(!Number(base)) {
			reject(`El valor ${base} no es un número`);
			return;
		}

		let data ='';

		for (let i = 1; i <= limite; i++) {
			console.log(`${base} X ${i} = ${base*i}`);
			data +=`${base} X ${i} = ${base*i}\n`;
		}

		//fs.writeFile('nombre de archivo', 'datos', callback});

		fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

			if (err)
				reject (err);
			else
				resolve(`tabla-${ base }.txt`);
		});
	});
}

module.exports = {
	crearArchivo,
	listarTabla
}