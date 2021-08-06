// exportar
export class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido
    constructor (nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido
    }

    get Nombre (){
        return this.#nombre
    }

    get Edad (){
        return this.#edad
    }

    get Img (){
        return this.#img
    }

    get Comentarios (){
        return this.#comentarios
    }

    set Comentarios (newComentarios){
        this.#comentarios = newComentarios
    }

    get Sonido (){
        return this.#sonido
    }
    
    playSound(){
        // Buscar Playerr / Modificar SRC / Cargar Sonido / Poner Play
        const player = document.getElementById("player");
        player.setAttribute("src", `/assets/sounds/${this.#sonido}`);
        // cargar player / play player
        player.load();
        player.play();
    }

}

