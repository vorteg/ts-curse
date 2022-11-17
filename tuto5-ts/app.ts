//Crear una clase para archivos multimedia
// encontrar propiedades en comun para aplicar herencia
class MultimediaFile {
  ObtenerTipo(): string {
    return "Multimedia";
  }
}

class DynamicFile extends MultimediaFile {
  ObtenerTipo(): string {
    return "Dinamico";
  }
}

class StaticFile extends MultimediaFile {
  ObtenerTipo(): string {
    return "Static";
  }
}

class Otherfile extends MultimediaFile {}

let multimedia: MultimediaFile = new MultimediaFile();
const dFile: DynamicFile = new DynamicFile();
const sFile: StaticFile = new StaticFile();
const oFile: Otherfile = new Otherfile();

multimedia = dFile;
console.log(multimedia.ObtenerTipo());

multimedia = sFile;
console.log(multimedia.ObtenerTipo());

multimedia = oFile;
console.log(multimedia.ObtenerTipo());
