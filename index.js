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
  document.write("Puedes viajar a " + destinoViaje + "!" + bienvenida());
} else {
  document.write("No puedes viajar a " + destinoViaje + " papá!");
}