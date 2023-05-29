let saludobeta:string = "hello"
let saludo:string = saludobeta.toLowerCase();

switch(saludo){
    case "hello":
        console.log("El idioma es ingles")
    break;

    case "ciao":
        console.log("El idioma es Italiano")
    break;

    case "salut":
        console.log("El idioma es Frances")
    break;

    case "hallo":
        console.log("El idioma es Aleman")
    break;

    case "hola":
        console.log("El idioma es Español")
    break;

    case "ahoj":
        console.log("El idioma es checo")
    break;

    case "czesc":
        console.log("El idioma es Polaco")
    break;
    
    default:
        console.log(`No se ha reconocido el idioma del mensaje: ${saludobeta}`)
    break;
}