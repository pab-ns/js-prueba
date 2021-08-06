
import { Animal } from "./animal-main.js"

// leon
export class Leon extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }

    Rugir(){
        // funcion playSound en Animales Main
        this.playSound();
    }
}

// lobo
export class Lobo extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }

    Aullar(){
        // console.log("aullar")
        this.playSound();
    }
}

// oso
export class Oso extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }

    Grunir(){
        this.playSound();
    }
}

// serpiente
export class Serpiente extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }

    Sisear(){
        this.playSound();
    }
}

// aguila
export class Aguila extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido)
    }

    Chillar(){
        this.playSound();
    }
}
