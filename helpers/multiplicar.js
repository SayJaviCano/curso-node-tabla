const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} es igual a ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} es igual a ${base * i}\n`;
    }

    if (listar) {
      console.log("===========================".green);
      console.log(`        Tabla del ${base}`);
      console.log("===========================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);

    return `tabla-del-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
