alert("Te ofrecemos 3 viajes a escoger para que vayas! \n2. Brasil, Punta Cana al caribe! o Uruguay en buckebus! \n2. LO que si! tenes que contar con capital en USD!")


function pedirCantidad() {
    let cantidad = prompt("¿Cuánto dinero quieres gastar?");
    cantidad = parseFloat(cantidad);
    while (isNaN(cantidad)) {
      cantidad = prompt("Por favor, introduce una cantidad válida.");
      cantidad = parseFloat(cantidad); 
    }
    return cantidad;
  }
  function destino() {
    var escogeViaje = prompt("Estos son los lugares que puedes escoger:\n1. Brasil \n2. Uruguay \n3. Punta Cana");
    var viaje = '';
    while (viaje === '') {
      switch (escogeViaje) {
        case '1':
          viaje = 'brasil';
          break;
        case '2':
          viaje = 'uruguay';
          break;
        case '3':
          viaje = 'punta cana';
          break;
        default:
          alert("Pusiste cualquier cosa o pusiste el destino en palabras. Tiene que ser por numero!");
          escogeViaje = prompt("Estos son los lugares que podés escojer:\n1. Brasil \n2. Uruguay \n3. Punta Cana");
      }
  }
  return viaje
}

var cantidad = pedirCantidad();
var destinoViaje = destino();

function bienvenida(){
  var mensaje = '';
  if(destinoViaje === "brasil"){
mensaje = ' Preparate para darle al funk brasileño!'
  }else if(destinoViaje === "punta cana"){
    mensaje = ' prepará ese cuerpo para la playa del caribe!'
  }else if(destinoViaje === "uruguay"){
    mensaje = ' nos vamos a comer un chivito uruguayo papá!'
  }
  return mensaje;
}

if ((cantidad >= 1000 && destinoViaje === 'brasil') || (cantidad >= 3000 && destinoViaje === 'punta cana') || (cantidad >= 500 && destinoViaje === 'uruguay')) {
  var mensajeBienvenida = bienvenida();
  alert("Podés viajar a " + destinoViaje + "!" + bienvenida());
} else if (cantidad < 500 && destinoViaje === 'uruguay') {
  alert("Lo siento bro, el presupuesto para viajar a Uruguay es de al menos 500 USD");
  throw new Error("No se puede viajar a " + destinoViaje);
} else {
  document.write("No podés viajar a " + destinoViaje + " papá!");
  throw new Error("No se puede viajar a " + destinoViaje);
}

//Parte dos


    alert("RECUERDA! al pagar ese precio, puedes escoger 1 acompañante GRATIS!! pero no puede ser mayor de 80 años")


    let persona = {
 nombre: "",
 edad: "",
nacionalidad: ""
    }

    function personaQueViaja() {
      persona.nombre = prompt("Ingresa el nombre de la persona");
      persona.edad = parseInt(prompt("Ingresa la edad de tu acompañante!"));
      while (isNaN(persona.edad)) {
        persona.edad = parseInt(prompt("Cuando te pedí la edad, pusiste cualquier cosa! Dale, poné la edad bien:"));
      }
      persona.nacionalidad = prompt("Ingresa la nacionalidad de tu acompañante");
    }
    
    personaQueViaja();
    

    function nacionalidadPeligrosa(){
      let mensajealerta = '';
      if(persona.nacionalidad === "mexicano" || persona.nacionalidad === "mexico" || persona.nacionalidad === "arabe" || persona.nacionalidad === "arabia"){
        mensajealerta = " Ten en cuenta que debido a su nacionalidad, tendrá que someterse a un check in y check out";
      } else{
        mensajealerta = '';
      }
      return mensajealerta;
    }


function expectativa(){
  let mensajeExpectativa = ''
  if(destinoViaje === "brasil"){
    mensajeExpectativa = " ya me los veo completamento en pedo de cerveza bailando zamba en el CRISTO REDENTOR!"
  }else if(destinoViaje === "uruguay"){
    mensajeExpectativa = " DALE BO' QUE ESE CHIVITO URUGUAYO NO LOS COMEMOS LOS DOS!"
  }else if(destinoViaje === "punta cana"){
    mensajeExpectativa = " ya me los veo con dos morochas en la isla SAONA tomandose un cuba libre!!"
  }
  return mensajeExpectativa;
}

if(persona.edad >= 80){
  alert("Perdona man! pero no puede viajar... \n Es muy grande de edad y no tenemos seguro medico para ofrecer... :(")
  throw new Error("no tienes acompañante para viajar");
}else if(persona.edad < 17){
  alert("naaa papu!! es muy chico! por lo menos que sea mayor de edad! que vaya a la escuela ese infante!")
  throw new Error("menor de edad no se puede");
}else{
  alert("BUENÍSIMO! VIAJA CON VOS!" + expectativa())
}

alert("También es probable que la persona que te acompañe tenga un descuento por ser miembro de la empresa. Dejame checkearlo!");

let listaPersonasArgentinas = ["Juan", "Maria", "Pedro", "marcelo"];

listaPersonasArgentinas.push(persona.nombre);

let tieneDescuento = listaPersonasArgentinas.find(nombre => nombre.toLowerCase() === persona.nombre);

if (tieneDescuento === "Juan" || tieneDescuento === "Maria" || tieneDescuento === "Pedro" || tieneDescuento === "marcelo") {
  alert("Tienes un descuento por ser miembro de la empresa." + nacionalidadPeligrosa());
} else {
  alert("alpiste, papá! no tenes descuento!" + nacionalidadPeligrosa());
}


function Conclusion(){
  let personasQueViajaron = [];
personasQueViajaron.push(persona.nombre);
return personasQueViajaron
}


function Confirmado() {
  let respuesta = prompt("Buenísimo! Entonces para confirmar, ¿este es el acompañante con el que vas a ir? \n" + Conclusion() + "\n Si o No");
  
  while(respuesta.toLowerCase() !== "si" && respuesta.toLowerCase() !== "no") {
    respuesta = prompt("TENES QUE DECIR SI SÍ O SI NO, PAPÁ! DALE QUE TE QUEDÁS SIN VIAJE SINO EH!");
  }
  
  if(respuesta.toLowerCase() === "si"){
    return "BIEN! JOYA PAPÁ! Ya anoté todo!";
  } else {
    return "uhh flaco sos re complicado... ya fue... andá solo mejor";
  }
}

function sorteo() {
  const usuarios = [
    { nombre: "juan", edad: 25, completado: true },
    { nombre: "maria", edad: 32, completado: false },
    { nombre: "pedro", edad: 40, completado: true },
    { nombre: "marcelo", edad: 28, completado: false }
  ];
  
  const nombreBuscado = prompt("¿Quién fue la persona que elegiste?").toLowerCase();
  
  const usuarioEncontrado = usuarios.find(usuario => usuario.nombre.toLowerCase() === nombreBuscado);
  
  if (usuarioEncontrado) {
    if (usuarioEncontrado.completado) {
      alert(`¡SI PAPÁ! ${nombreBuscado} TIENE DESCUENTO Y TE LO GANASTE!! DISFRUTEN EL VIAJE!.`);
    } else {
      alert(`Ah no! ${nombreBuscado}, no tiene descuentos! Lo estamos por hechar... imaginate!.`);
    }
  } else {
    alert(`Lo siento, no encontramos a ningún usuario con el nombre ${nombreBuscado}.`);
  }
}

function validarSorteo() {
  
  if(persona.nombre === "pedro" || persona.nombre === "maria" || persona.nombre === "juan" || persona.nombre === "marcelo") {
    alert("Sabes que la persona que elegiste es uno de los miembros de la empresa y, algunos de los miembros, tienen más descuentos!");
    sorteo();
  }
}

validarSorteo();







