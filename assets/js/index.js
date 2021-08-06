import { Animal } from "./animal-main.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animals.js"

(async () => {
    // request fetch
    const Response = await fetch("/animales.json");
    const {animales: Animales} = await Response.json();

    const nombreAnimalElement = document.getElementById("animal");
    const nombreEdadElement = document.getElementById("edad");
    const nombreComentariosElement = document.getElementById("comentarios");

    const imgPreviewElement = document.getElementById("preview");
    const btnRegistarElement = document.getElementById("btnRegistrar")

    // caja animal select
    const animalesContainerElement = document.getElementById("Animales-box");

    // tarjeta animal
    const animalCards = [];

    nombreAnimalElement.addEventListener("change", () => {
        const animalElegido = nombreAnimalElement.value
        const animalEncontrado = Animales.find( (animal) => animal.name === animalElegido);

        // CAMBIAR IMG
        imgPreviewElement.setAttribute("src", `/assets/imgs/${animalEncontrado.imagen}`);
    });


    btnRegistarElement.addEventListener("click", () => {
        const nombreAnimal = nombreAnimalElement.value;
        const edadAnimal = nombreEdadElement.value;
        const comentarioAnimal = nombreComentariosElement.value;

        const animalEncontrado = Animales.find( (animal) => animal.name === nombreAnimal);

        const params = [
            nombreAnimal,
            edadAnimal,
            animalEncontrado.imagen,
            comentarioAnimal,
            animalEncontrado.sonido
        ];

        switch(nombreAnimal){
            // leon
            case "Leon":
                animalCards.push(new Leon (...params));
                break;
            
            // lobo
            case "Lobo":
                animalCards.push(new Lobo (...params));
                break;  

            // oso
            case "Oso":
                animalCards.push(new Oso (...params));
                break;
            
            // serpiente
            case "Serpiente":
                animalCards.push(new Serpiente (...params));
                break; 
                
            // aguila
            case "Aguila":
                animalCards.push(new Aguila (...params));
                break;
        }

        // llamar a funcion
        render ();

    });

    function render () {
        animalesContainerElement.innerHTML = "";

        animalCards.forEach( (animal) => {
            const DIVContainer = document.createElement("div");
            const IMGimagen = document.createElement("img");
            // const ButtonSonido = document.createElement("button");
            const DIVCardButton = document.createElement("div");

            DIVContainer.classList.add("card")

            IMGimagen.setAttribute("src", `/assets/imgs/${animal.Img}`)
            IMGimagen.classList.add("img-small")

            DIVCardButton.classList.add("card-footer");

            // Agregar icono sonido
            DIVCardButton.innerHTML = `
            <button class = "btn btn-primary btn-block">
            <img src ="/assets/imgs/audio.svg" style="width: 10px"/>
            </button>`;

            IMGimagen.addEventListener("click", () => {
                console.log("click imagen => ", animal);
                $("#modal").modal("show");

                const modalBodyElement = document.querySelector("#modal .modal-body");
                
                modalBodyElement.innerHTML = `
                <img src="/assets/imgs/${animal.Img}" class="img-small"/>
                <div class="container">
                <ul class="text-center text-white">
                <li>Nombre: ${animal.Nombre}</li>
                <li>Nombre: ${animal.Edad}</li>
                <li>Nombre: ${animal.Comentarios}</li>
                </ul>
                </div>
                `;
            });

            DIVCardButton.addEventListener("click", () => {
                console.log("click!", animal);
                switch (animal.Nombre) {
                    case "Leon" : animal.Rugir();
                    break;
                    case "Lobo" : animal.Aullar();
                    break;
                    case "Oso" : animal.Grunir();
                    break;
                    case "Serpiente" : animal.Sisear();
                    break;
                    case "Aguila" : animal.Chillar();
                    break;
                }
            });

            DIVContainer.appendChild(IMGimagen);
            DIVContainer.appendChild(DIVCardButton);

            animalesContainerElement.appendChild(DIVContainer);
        });

    }

}) ();