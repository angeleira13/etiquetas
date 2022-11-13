
    function myFunction(p1, p2) {
      return p1 * p2;
    }
    document.getElementById("demo7").innerHTML = myFunction(4, 3);

    // Creaando objeto
    const car = {type:"Fiat", model:"500", color:"white"};
    // Mostrar algunos datos del objeto
    document.getElementById("demo8").innerHTML = "The car type is " + car.type;

    //contabiliza caracteres de una cadena de texti
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo10").innerHTML = text.length;


    var x = 3.14;
    var y = 3;
    document.getElementById("demo11").innerHTML = x + "<br>" + y;


    var x = 9.656;
    document.getElementById("demo12").innerHTML =
      x.toExponential() + "<br>" + 
      x.toExponential(2) + "<br>" + 
      x.toExponential(4) + "<br>" + 
      x.toExponential(6);


    const cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo13").innerHTML = cars;

    const d = new Date("2022-03-25");
    document.getElementById("demo14").innerHTML = d;

    let t = "";
    
    for (var i = 0; i < 5; i++) {
      t += "El numero  es " + i + "<br>";
    } 
    document.getElementById("demo15").innerHTML = t;

    try {
      adddlert("Bienvenido");
    }
    catch(err) {
      document.getElementById("demo16").innerHTML = err.message;
    }

    //funfion de carrusel de imagenes
    window.onload = function () {
    // Variables
    const IMAGENES = [
        'imgs/g1.jpg',
        'imgs/g2.jpg',
        'imgs/g3.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
} 

//fin de funcion de carrusel de imagenes

    $(document).ready(function(){
      $("#button2").click(function(){
        $("#divC").animate({left: '1200px'});
      });
    });

    $(document).ready(function(){
      $("#button1").click(function(){
        $("#pr").hide("slow", function(){
          alert("Este Mensaje se va a la llamada");
        });
      });
    });


    $(document).ready(function(){
      $("#hide").click(function(){
        $("#p2").hide();
      });
      $("#show").click(function(){
        $("#p2").show();
      });
    });



