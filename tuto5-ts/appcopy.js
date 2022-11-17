"use strict";
//Crear una clase para archivos multimedia
// encontrar propiedades en comun para aplicar herencia
class MultimediaFile {
    ObtenerTipo() {
        return "Multimedia";
    }
}
class DynamicFile extends MultimediaFile {
    ObtenerTipo() {
        return "Dinamico";
    }
}
class StaticFile extends MultimediaFile {
    ObtenerTipo() {
        return "Static";
    }
}
class Otherfile extends MultimediaFile {
}
let multimedia = new MultimediaFile();
const dFile = new DynamicFile();
const sFile = new StaticFile();
const oFile = new Otherfile();
multimedia = dFile;
