//Globales


//tipos de producto
var esAlbum = false;
var esCanvas = false;
var esFoto = false;

//cantidad fotos por producto
var cantidadFotosCanvas = 1;
var cantidadFotosAlbum = 10;
var cantidadFotosSueltas = 5;


//precio foto unitaria
var precioFoto = 4;
var precioCanvas = 2.3;

//totales
var totalAlbum;


/*******************************
Variables web service (mover plz)
**********************************/
var APP_ID_FB = "382088901918989";
var REDIRECT_URL_FB = "http://genericwebdomain.com/mille-feuille/";


var logado = false;
var _userID = "";

var site_URL = "http://genericwebdomain.com/mille-feuille/";

//CORDOVA///////////

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
 
     if (parseFloat(window.device.version) === 7.0) {
          //document.body.style.marginTop = "20px";
          $(".btArrow").css("top","25px");
    }
       
        trace('Received Event: ' + id);
    }
};




function trace(queMsg){
    try{
        console.log(queMsg);
    }catch(err){}
}


/*********************************************************
F U N C I O N E S      G L O B A L E S 
**********************************************************/

/***************************
 Iniciar Elementos DOM cuando
 la pagina este cargada
 **************************/

$(document).ready(function(){

    iniciarDOM();
           
        $soporteFotoThu = $($("#fotos .contenedorpic")[0]);
        $soportecanvas = $($("#fullImage")[0]);
        
        //libro pantalla creation_edit
        
        $soportePagIzq = $("#pagIzqSlider .swipe-wrapTest");
        $soportePagDer = $("#pagDerSlider .swipe-wrapTest");
      
        ////////////////////////////////////////////////////////////////////////////////////TOUCH EVENTS/////
        
        
(function ($) {
    // Detect touch support
    $.support.touch = 'ontouchend' in document;
    // Ignore browsers without touch support
    if (!$.support.touch) {
    return;
    }
    var mouseProto = $.ui.mouse.prototype,
        _mouseInit = mouseProto._mouseInit,
        touchHandled;

    function simulateMouseEvent (event, simulatedType) { //use this function to simulate mouse event
    // Ignore multi-touch events
        if (event.originalEvent.touches.length > 1) {
        return;
        }
    event.preventDefault(); //use this to prevent scrolling during ui use

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
        simulatedType,    // type
        true,             // bubbles                    
        true,             // cancelable                 
        window,           // view                       
        1,                // detail                     
        touch.screenX,    // screenX                    
        touch.screenY,    // screenY                    
        touch.clientX,    // clientX                    
        touch.clientY,    // clientY                    
        false,            // ctrlKey                    
        false,            // altKey                     
        false,            // shiftKey                   
        false,            // metaKey                    
        0,                // button                     
        null              // relatedTarget              
        );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
    }
    mouseProto._touchStart = function (event) {
    var self = this;
    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
        return;
        }
    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;
    // Track movement to determine if interaction was a click
    self._touchMoved = false;
    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');
    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
    };

    mouseProto._touchMove = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
        return;
        }
    // Interaction was not a click
    this._touchMoved = true;
    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
    };
    mouseProto._touchEnd = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
        return;
    }
    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');
    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');
    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {
      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }
    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
    };
    mouseProto._mouseInit = function () {
    var self = this;
    // Delegate the touch handlers to the widget's element
    self.element
        .on('touchstart', $.proxy(self, '_touchStart'))
        .on('touchmove', $.proxy(self, '_touchMove'))
        .on('touchend', $.proxy(self, '_touchEnd'));

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
    };
})(jQuery);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
     
        
});


function iniciarDOM(){

	//comportamiento general de los botones
	
	$(".boton").on("touchstart",function(){
		//$(this).attr("data-opacidadInicial",$(this).css("opacity"));
		$(this).css("opacity",0.5);
	});
	
	$(".boton").on("touchend",function(){
			$(this).css("opacity",1);
	});
	
	$(".boton").on("touchcancel",function(){
			//$(this).css("opacity",$(this).attr("data-opacidadInicial"));
			$(this).css("opacity",1);
	});
        
////////////////////////////////////////////////
	
        $(".btArrow").on("touchstart",function(){
		//$(this).attr("data-opacidadInicial",$(this).css("opacity"));
		$(this).css("opacity",0.5);
	});
	
	$(".btArrow").on("touchend",function(){
			$(this).css("opacity",1);
	});
	
	$(".btArrow").on("touchcancel",function(){
			//$(this).css("opacity",$(this).attr("data-opacidadInicial"));
			$(this).css("opacity",1);
	});

////////////////////////////////////////////////

        $(".buttonIcon").on("touchstart",function(){
		//$(this).attr("data-opacidadInicial",$(this).css("opacity"));
		$(this).css("opacity",0.5);
	});
	
	$(".buttonIcon").on("touchend",function(){
			$(this).css("opacity",1);
	});
	
	$(".buttonIcon").on("touchcancel",function(){
			//$(this).css("opacity",$(this).attr("data-opacidadInicial"));
			$(this).css("opacity",1);
	});

//////////////////////////////////////////////////


        $("boton btAzul").on("touchstart",function(){
		//$(this).attr("data-opacidadInicial",$(this).css("opacity"));
		$(this).css("opacity",0.5);
	});
	
	$("boton btAzul").on("touchend",function(){
			$(this).css("opacity",1);
	});
	
	$("boton btAzul").on("touchcancel",function(){
			//$(this).css("opacity",$(this).attr("data-opacidadInicial"));
			$(this).css("opacity",1);
	});



}




/************************************
 Desactivar scroll vertical en iOS
************************************/

$(document).bind('touchmove', function(e){
    e.preventDefault();           
});


/************************************
Carrousel y Slides presentes en la 
App
************************************/

/*Variables Globales Slides*/
var areaaccion;
var idlista;
var idmarcador;

function mainslides (areaaccion,idlista,idmarcador,funcionCallBack) {
    

/* Configuracion Slides */
var velscroll = 180;
var easingtype = "swing";

///VARIABLES DE CONTROL///
//!Importante: No es necesario tocar estas//
var tamanoelemento = $(idlista + " li");
var tamanolista = $(tamanoelemento).outerWidth(true);

var numItems = $(idlista).children().length;
var indice = 0;	
$(idlista).css({marginLeft: 0, opacity: "1"});																				
$(idmarcador).find('li').removeClass("selected").eq(indice).addClass("selected");

$(idlista).width(tamanolista*numItems + 100);

//////////////////////
    
	
$(areaaccion).off().on("swipeleft", lefthandler);
$(areaaccion).on("swiperight", righthandler);
	

//Funciones llamadas por los eventos izquierda y derecha

	function lefthandler(e) {
		
		var newIndex = (indice + 1) % numItems;
		var destino = newIndex * -tamanolista;
		indice = newIndex;
		
		$(idlista).animate({marginLeft: destino, opacity: "1"},
                           velscroll,
                           easingtype,
                           function(){
                                if (funcionCallBack){
                                    funcionCallBack(indice);
                                }
                           });
																																					
		
	//Los marcadores de posicion y numero de elementos																
																				
		$(idmarcador).find('li').removeClass("selected").eq(indice).addClass("selected");							
	
        e.preventDefault();
        e.stopPropagation();
																			
	}																		
	
	
	function righthandler(e) {	
	
		var newIndex = (indice - 1);
		if (newIndex<0){
			newIndex=numItems-1;	
		}
		var destino = newIndex * -tamanolista;
		indice = newIndex;

		$(idlista).animate({marginLeft: destino, opacity: "1"},velscroll,easingtype,
                           function(){
                            if (funcionCallBack){
                                funcionCallBack(indice);
                            }
                           });
		
        
		$(idmarcador).find('li').removeClass("selected").eq(indice).addClass("selected");
	
        e.preventDefault();
        e.stopPropagation();
		
	}


}



/************************************
 Transiciones y Saltos de Paginas
************************************/
function navegaSeccion(idSeccionNueva, transicion, esReverse) {

    var miTransicion;
    var esReverse;

    switch (transicion) {

        case "slide":
        case "fade":
        case "flip":
        case "pop":
        case "slidedown":
        case "slideup":
            miTransicion = transicion;
            break;

        default:
            miTransicion = "none";
            break;
    }


    $.mobile.changePage(idSeccionNueva, {"transition": miTransicion, "reverse": esReverse});


}	

/*********************************
 Funciones Facebook
**********************************/

var _tokenFB = "";

function conectarFacebook() {
    //abrimos la consola web de autenticaciÃ³n instagram



    var ref = window.open('https://www.facebook.com/dialog/oauth?client_id=' + APP_ID_FB + '&redirect_uri=' + REDIRECT_URL_FB + '&response_type=token&scope=user_photos', '_blank');


    ref.addEventListener('loadstop', function(e) {


        var queURL = e.url;
		trace("estoy en la url:"+queURL);

        if (queURL.toLowerCase().indexOf(REDIRECT_URL_FB.toLowerCase()) == 0) {
            //ESTOY EN LA REDIRECT URL
			
			//HAY QUE COMPROBAR SI HAY ERROR O VIENE EL TOKEN
			
            var objDevuelto = deserializarQueryString(e.url);

            if (!!objDevuelto.access_token) {
				//VIENE EL TOKEN.

                _tokenFB = objDevuelto.access_token;

                navegaSeccion("#process_select", "slideup");
                //recuperarListaFotosFB(/*ir a sigiente pantalla*/);
            } else {
				//ha cancelado o da error
				/*error_reason=user_denied
 				 &error=access_denied
 				 &error_description=The+user+denied+your+request.*/
				 trace("ERROR DE LOGIN FB:"+objDevuelto.error_reason);
                                 
            }
            ref.close();

        }
    });
}


function conectarFotosFacebook() {
    //abrimos la consola web de autenticaciÃ³n instagram

if (_tokenFB == "") {

    var ref = window.open('https://www.facebook.com/dialog/oauth?client_id=' + APP_ID_FB + '&redirect_uri=' + REDIRECT_URL_FB + '&response_type=token&scope=user_photos', '_blank');


    ref.addEventListener('loadstop', function(e) {


        var queURL = e.url;
		trace("estoy en la url:"+queURL);

        if (queURL.toLowerCase().indexOf(REDIRECT_URL_FB.toLowerCase()) == 0) {
            //ESTOY EN LA REDIRECT URL
			
			//HAY QUE COMPROBAR SI HAY ERROR O VIENE EL TOKEN
			
            var objDevuelto = deserializarQueryString(e.url);

            if (!!objDevuelto.access_token) {
				//VIENE EL TOKEN.

                _tokenFB = objDevuelto.access_token;

            navegaSeccion("#creation_gallery", "slideup");
recuperarListaFotosFB(/*ir a sigiente pantalla*/);
            } else {
				//ha cancelado o da error
				/*error_reason=user_denied
 				 &error=access_denied
 				 &error_description=The+user+denied+your+request.*/
				 trace("ERROR DE LOGIN FB:"+objDevuelto.error_reason);

            }
            ref.close();

        }
        
    });
}else{   
 
navegaSeccion("#creation_gallery", "slideup");
recuperarListaFotosFB(/*ir a sigiente pantalla*/);
}
 
}



   

function recuperarListaFotosFB() {
	
	//recupera las fotos del usuario

   $("#fotos").html("<div class='loadingOverlay'>LOADING</div>");


    var url_base = "https://graph.facebook.com/me/photos/";
    var datos = {"access_token": _tokenFB, "limit": 200, fields:"height,id,width,images" };

    $.ajax({
        type: 'GET',
        data: datos,
        url: url_base,
        success: function(datosRecibidos) {
            //trace(data);
            var listaFotosTemp = datosRecibidos.data;

            _listaFotos = new Array();

            for (var i = 0; i < listaFotosTemp.length; i++) {
                //recupera la lista de fotos
                var low = listaFotosTemp[i].images[4].source;
                var med = listaFotosTemp[i].images[2].source;
                var high = listaFotosTemp[i].images[0].source;

                _listaFotos.push({id: listaFotosTemp[i].id, low: low, med: med, high: high});
            }


            //aquÃ­ ya ten
            representarFotos();

        },
        error: function(e) {

            
             for (var x in e){
             	trace(x+"**"+e);   
             }
        }
    });


}




/*********************************
 Funciones Instagram
 ********************************/
 
var $soporteFotoThu;
 
var _igToken="";
var _listaFotos;

var CLIENT_ID_IG = "6a115ece6f1246a3b77d3593552d28a4";
var REDIRECT_URI = "http://genericwebdomain.com/mille-feuille/token/";



function deserializarQueryString(queUrl) {
    var tempObj = {};

    var query = queUrl.split("#")[1];

    try {
        var arrVariables = query.split("&");
        for (var i = 0; i < arrVariables.length; i++) {
            var comps = arrVariables[i].split("=");
            tempObj[comps[0]] = comps[1];
        }
    } catch (err) {
    }

    return tempObj;
}


function conectarInstagram() {
    //abrimos la consola web de autenticaciÃ³n instagram



    var ref = window.open('https://api.instagram.com/oauth/authorize/?client_id=' + CLIENT_ID_IG + '&redirect_uri=' + REDIRECT_URI + '&response_type=token', '_blank');



    ref.addEventListener('loadstop', function(e) {


        var queURL = e.url;

        if (queURL.toLowerCase().indexOf(REDIRECT_URI.toLowerCase()) == 0) {
            //buscar token
			
			///REVISAR ESTE MÉTODO


            var objDevuelto = deserializarQueryString(e.url);

            if (!!objDevuelto.access_token) {

                _igToken = objDevuelto.access_token;

                navegaSeccion("#creation_gallery", "slideup");
                recuperarListaFotosIG(/*ir a sigiente pantalla*/);
            } else {

            }
            ref.close();

        }
    });
}

function activarZonaFotosFalso() {
    /// BORRAR ESTA FUNCIÓN

    navegaSeccion("#creation_gallery", "slideup");

    $("#fotos").html("<div class='loadingOverlay'>LOADING</div>");



    var listaFotosTemp = dataTest.data;

    _listaFotos = new Array();

    for (var i = 0; i < listaFotosTemp.length; i++) {
        //recupera la lista de fotos
        var low = listaFotosTemp[i].images.thumbnail.url;
        var med = listaFotosTemp[i].images.low_resolution.url;
        var high = listaFotosTemp[i].images.standard_resolution.url;




        _listaFotos.push({id: listaFotosTemp[i].id, low: low, med: med, high: high});
    }


    //aquÃ­ ya ten
    representarFotos();

}

function recuperarListaFotosIG() {

    $("#fotos").html("<div class='loadingOverlay'>LOADING</div>");




    var url_base = "https://api.instagram.com/v1/users/self/media/recent/";
    var datos = {"access_token": _igToken, "count": 100};

    $.ajax({
        type: 'GET',
        data: datos,
        url: url_base,
        success: function(datosRecibidos) {
            //trace(data);
            var listaFotosTemp = datosRecibidos.data;

            _listaFotos = new Array();

            for (var i = 0; i < listaFotosTemp.length; i++) {
                //recupera la lista de fotos
                var low = listaFotosTemp[i].images.thumbnail.url;
                var med = listaFotosTemp[i].images.low_resolution.url;
                var high = listaFotosTemp[i].images.standard_resolution.url;




                _listaFotos.push({id: listaFotosTemp[i].id, low: low, med: med, high: high});
            }


            //aquÃ­ ya ten
            representarFotos();

        },
        error: function(e) {

            /*
             for (var x in e){
             trace(x+"**"+e.);   
             }*/
        }
    });


}


  var cn = $(".contenedorpic");
function representarFotos(){

        $("#fotos").html("");

	for (var i=0;i<_listaFotos.length;i++){
		
                
                var $miSoporte = $soporteFotoThu.clone();
                $miSoporte.css("background","url("+_listaFotos[i].med+")");
                $miSoporte.attr("id",_listaFotos[i].id);
               
                $("#fotos").append($miSoporte);

		
	}
	
	$("#fotos .contenedorpic").off("tap").on("tap",function(e){ 
	
        
                $(e.currentTarget).children(".checkboxpic").toggleClass("selectioncomplete");
                
            if($(e.currentTarget).hasClass("COLOR")){
               $(e.currentTarget).removeClass("COLOR");
              
               
            }else {
               $(e.currentTarget).addClass("COLOR");
            }
                    

           

                
                var selectedlist = $(".selectioncomplete").length;
             
            if(selectedlist > numeroFotos){
                $("#selectStat").css("color","red");
            }else if(selectedlist < numeroFotos) {
                $("#selectStat").css("color","grey");
            }else if(selectedlist == numeroFotos) {
                $("#selectStat").css("color","green");
            }
                
             
                $("#selectedpics").text(selectedlist);
                fotosfinales = selectedlist;
	
        
	e.preventDefault();
        e.stopPropagation();
	});

        
}


/************************************
 Canvas y tratado de fotos 
 seleccionadas del carrete/IG/FB
************************************/

var numeroFotos;
var fotosElegidas;




function convertirCanvas (id, urlFoto, soyUltimo) {

    
    var dataURL;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    
    var img = new Image();
    
    
    img.onload = function() {
            
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            dataURL = canvas.toDataURL(); 
            fotosFull.push(dataURL);
            
            //
            fotosFaltanConvertir--;
            if( fotosFaltanConvertir <= 0) {
                rellenarLibro(0);
            }
            
     };
     img.setAttribute('crossOrigin','anonymous');
     img.src = "http://genericwebdomain.com/mille-feuille/proxy.php?URL="+urlFoto;
 
        //miFoto.canvas = canvas;
    
        
       
}


var paginaIzq;
var paginaDer;

function rellenarLibro() {
    
        trace("FotosFull: " + fotosFull.length)
    
    $soportePagIzq.html('');
    $soportePagDer.html('');
    
    var cadena = "";
    for (i=0;i<fotosFull.length;i++) {
       // var miImagen = $("<div></div>").addClass("imgIzq").css("background-image","url("+fotosFull[i]+")");
        //var miImagen = "<div class='imgIzq' style='background-image:url("+ fotosFull[i] +")'></div>";
            var miImagen ="<img src="+ fotosFull[i] +"  />";
        //cadena += miImagen;
    
        $soportePagIzq.append("<div>"+miImagen+"</div>");
        $soportePagDer.append("<div>"+miImagen+"</div>");
    }


    SwipeV(document.getElementById("pagIzqSlider"),{direction:'y',disableScroll:true,continuous:true,speed:300,stopPropagation:true,callback: function(pos){
        trace("posIzq: "+pos); 
        $("#fullScPic").attr("src", "" + fotosFull[pos] + "");
        
        paginaIzq = pos;
        
        } 
    });
    
    
    SwipeV(document.getElementById("pagDerSlider"),{direction:'y',disableScroll:true,continuous:true,speed:300,stopPropagation:true,callback: function(pos){
        trace("posDer: "+pos); 
        $("#fullScPic").attr("src", "" + fotosFull[pos] + "");
        
        paginaDer = pos;
        
        } 
    });  
    
    
}


//relacion1
  
var relacion1;
var relacion2;

var altoEditor;
var anchoEditor;
var escalaFinal;

//var widthImagen = $("#fullScPic").width();


function resizeEditorPic() {


    
    relacion1 = $(".fullImage").width() / $(".fullImage").height();
    relacion2 = $("#fullScPic").width() / $("#fullScPic").height();
    
    console.log(relacion1);
    console.log(relacion2);
    
    //TRABAJAR AQUI
        
 if (relacion1 <= relacion2) {
      //ajustamos imagen al ALTO
      altoEditor = $(".fullImage").height();
      anchoEditor = altoEditor * relacion2;
      console.log("aca?")
  }else{
      //ajustamos imagen al ANCHO
     console.log("Aqui?");
     
     diff = anchoEditor - jQuery("#fullScPic").width();
     
     $("#fullScPic").draggable({
     axis:'x',
     containment: [-diff,0,0,0]
     });      
    
     
     
     altoEditor = anchoEditor * relacion2;
     anchoEditor = $(".fullImage").width();
   


  }


   escalaFinal =  anchoEditor / $("#fullScPic").width(); //disminuir tamano x2

  
  $("#fullScPic").attr("width",anchoEditor);
  $("#fullScPic").attr("height",altoEditor);
  

 

    
}
   

var listaCanvas = new Array();


function cropCanvas() {
    
	//corta la imagen
	
   canvasFinal = document.createElement("canvas");
   canvasFinal.height = 250;
   canvasFinal.width = 415;
   var context = canvasFinal.getContext('2d');
       
   
   $(".borderEffect").html(canvasFinal);
   
   
   var queImagen = document.getElementById("fullScPic");
   //coordenadas de corte en la imagen grande
   var sourceX = -$("#fullScPic").offset().left;
   var sourceY = -$("#fullScPic").offset().top;
   var sourceWidth = $(".fullImage").width();
   var sourceHeight = $(".fullImage").height();
   
    
   var destX = 0;
   var destY = 0;
   var destWidth = sourceWidth;
   var destHeight = sourceHeight;
   
   
   
   
   trace("Imagen: "+queImagen);
   trace("Source X Pos: "+sourceX);
   trace("Source Y Pos: "+sourceY);
   trace("Source Width: "+sourceWidth);
   trace("Source Height: "+sourceHeight);
   
   
   trace("Destination X: "+destX);
   trace("Destination Y: "+destY);
   trace("Destination Width: "+destWidth);
   trace("Destination Height: "+destHeight);
   
     //Leyenda      (imageObj,   c.x,     c.y,      c.w,           c.h,          0, 0, canvas.width, canvas.height);
   //context.drawImage(queImagen, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
   
context.drawImage(queImagen, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
   
   listaCanvas.push(canvasFinal);
   canvasFinal.toDataURL();
   trace(listaCanvas[0]);
}

/**************************************
 * pantallas de pedido
 ***********************************/

var totalFotosAlbum;
var totalFotosCanvas;
var totalFotosSueltas;
function calcularPrecioFinal() {
    
    if(esAlbum == true) {
        totalFotosAlbum = fotosFull.length;

        totalAlbum = totalFotosAlbum * precioFoto;


        $("#photoNumber").val(cantidadFotosAlbum);
        $("#totalPrice").val(totalAlbum+"€")

    }

    if(esCanvas == true) {
        totalFotosCanvas = fotosFull.length;

        totalCanvas = (totalFotosCanvas * precioFoto)*precioCanvas;


        $("#photoNumber").val(cantidadFotosCanvas);
        $("#totalPrice").val(totalCanvas+"€")

    }

    if(esFoto == true) {
        totalFotosSueltas = fotosFull.length;

        totalFotos = totalFotosSueltas * precioFoto;


        $("#photoNumber").val(cantidadFotosCanvas);
        $("#totalPrice").val(totalFotos+"€")

    }    
    
}



/***********************************************************************
*             P A N T A L L A S  
**********************************************************************/

/************************************
Pantalla de splash
************************************/

$(document).delegate("#splash", "pageshow", function () {


    $(document).on("tap", function (ev) {

        ev.preventDefault();
        ev.stopPropagation();
        $(this).off("tap");

        navegaSeccion("#welcome", "slideup");

    });


});


/************************************
Pantalla de introduccion/home
************************************/
$(document).delegate("#welcomearea", "pageshow", function (e) {



    $("#btLogin").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#logintype", "slideup");

    });

    $("#btStart").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#logintype", "slideup");

    });


    Swipe(document.getElementById("slideArrowLink"),{continuous:false,stopPropagation:true,transitionEnd: function() {

            navegaSeccion("#aboutus", "slide");
            
            }
     });


  
  e.preventDefault();
e.stopPropagation();
});

/************************************
Pantalla de "acerca de"
************************************/
$(document).delegate("#aboutus", "pageshow", function () {

    //navegacion

    $("#btSign").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#register", "slideup");

    });


    $("#btLog").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#logintype", "slideup");

    });


    //slides
    //mainslides("#about01", "#listaabout", "#marcadoresabout");
    Swipe(document.getElementById("sliderAbout"),{continuous:false,stopPropagation:true,callback: function(pos) {

            var i = checkAbout.length;
            while (i--) {
              checkAbout[i].className = ' ';
            }
            checkAbout[pos].className = 'selected';

            }
     });


    var checkAbout = document.getElementById('marcadoresabout').getElementsByTagName('li');


});

/************************************
Pantalla de registro cuentas MF
************************************/
var idRegField = $('#txtEmailRegister').val();
var idPassField = $('#txtPassRegister').val();
var idRepeatPassField = $('#txtPassRepeatRegister').val();


var regIdVal = "Email";
var regPassVal = "Your Password";
var regRepeatPassVal = "Repeat Password";

$(document).delegate("#registerarea", "pageshow", function () {


    $("#createAcc").off("tap").on("tap", function (e) {

        registerUser();
        e.preventDefault();
        e.stopPropagation();
        //navegaSeccion("#login", "slideup");

    });

    $("#btRegHome").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#logintype", "slide", true);

    });

    $("#txtEmailRegister").focus(function() {
       
       //if (idField == loginIdVal) {
           $("#txtEmailRegister").val("");
       //}
        $("body").offset({top:0});

    });
    
    $("#txtEmailRegister").blur(function() {
       var userName = $("#txtEmailRegister").val();
       if (userName == "" || userName == regIdVal){
           $("#txtEmailRegister").val(regIdVal);       }
       else {
           regIdVal = $("#txtEmailRegister").val();
           
       }
       $(document).scrollTop(0);
    });
    
    $("#txtPassRegister").focus(function() {

       $("#txtPassRegister").val("");

       

    });
    
    $("#txtPassRegister").blur(function() {
       var pass = $("#txtPassRegister").val();
       if (pass == "" || pass == regPassVal){
           $("#txtPassRegister").val(regPassVal);       }
       else {
           regPassVal = $("#txtPassRegister").val();
           
       }
       $(document).scrollTop(0);
    });
    
    $("#txtPassRepeatRegister").focus(function() {

        $("#txtPassRepeatRegister").val("");

        

    });
    
    $("#txtPassRepeatRegister").blur(function() {
       var pass = $("#txtPassRepeatRegister").val();
       if (pass == "" || pass == regRepeatPassVal){
           $("#txtPassRepeatRegister").val(regRepeatPassVal);       }
       else {
           regRepeatPassVal = $("#txtPassRepeatRegister").val();
           
       }
       $(document).scrollTop(0);
       
    });

});

/************************************
Pantalla de tipos de login
************************************/
$(document).delegate("#logintype", "pageshow", function () {


    $("#btLogTypeFB").off("tap").on("tap", function (e) {
        //hazLogin();
	conectarFacebook();
        e.preventDefault();
        e.stopPropagation();
        //navegaSeccion("#access", "slideup");

    });


    $("#btLogTypeMF").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#access", "slideup");

    });

    $("#btLogTypeHome").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#welcomearea", "slide", true);

    });

    $("#btLogTypeNone").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_select", "slideup");

    });

});


/************************************
Pantalla de login MF
************************************/
$(document).delegate("#loginaccess", "pageshow", function () {
    
    var idField = $("#txtUserNameMF").val();
    var passField = $("#txtPassMF").val();
    
    
    var loginIdVal = "User";
    var loginPassVal = "Password";

    $("#btLoginMF").off("tap").on("tap", function (e) {
        loginUser();
        e.preventDefault();
        e.stopPropagation();
        //navegaSeccion("#process_select", "slideup");

    });

    $("#btLogHome").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#logintype", "slide", true);

    });

    $("#txtUserNameMF").focus(function() {

           $("#txtUserNameMF").val("");
        
    });
    
    $("#txtUserNameMF").blur(function() {
       var userName = $("#txtUserNameMF").val();
       if (userName == "" || userName == loginIdVal){
           $("#txtUserNameMF").val(loginIdVal);       }
       else {
           loginIdVal = $("#txtUserNameMF").val();
           
       }
      $(document).scrollTop(0);
    });
    
    $("#txtPassMF").focus(function() {
       
       
        $("#txtPassMF").val("");
       
       

    });
    
    $("#txtPassMF").blur(function() {
       var pass = $("#txtPassMF").val();
       if (pass == "" || pass == loginPassVal){
           $("#txtPassMF").val(loginPassVal);       }
       else {
           loginPassVal = $("#txtPassMF").val();
           
       }
       $(document).scrollTop(0);
    });

});

/************************************
Pantalla de Olvide Password
************************************/
$(document).delegate("#rememberPass", "pageshow", function () {
    var RePassField = $("#recoveryEmail").val();
    var RePassVal = "EMAIL";

    $("#btRePassRecover").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#loginaccess", "slideup");

    });

    $("#btRePassHome").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#loginaccess", "slide", true);

    });
    
    
    $("#recoveryEmail").focus(function() {
       
       //if (idField == loginIdVal) {
           $("#recoveryEmail").val("");
       //}
        $("body").offset({top:0});

    });
    
    $("#recoveryEmail").blur(function() {

       if (RePassField == "" || RePassField == RePassVal){
           $("#recoveryMail").val(RePassVal);       }
       else {
           RePassVal = $("#recoveryEmail").val();
           
       }
       $(document).scrollTop(0);
    });
    
    $("#recoveryEmail").focus(function() {

       $("#recoveryEmail").val("");

       

    });
    

});

/************************************
Pantalla de seleccion tipo producto
************************************/
$(document).delegate("#process_select", "pageshow", function () {
    
    var tipoProducto = ["CREATE A NEW ALBUM","CREATE PHOTO FRAME","PRINT YOUR PHOTOS"];
                     
    //slides
   /* mainslides("#process_select", "#listaproceso", "#marcadoresproceso",function(index){
               trace("elige producto:"+index);
              $("#btCreateNewAlbum").text(tipoProducto[index]);
    });
*/

    $("#btHistory").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_history", "slideup");

    });

    $("#btProcessBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#logintype", "slide", true);

    });

    //objeto global que contiene todos los datos del pedido
    var datosPedido = {};
    datosPedido.tipoPedido = -1;
 
   

    $("#btCreateNewAlbum").off().on("tap", function (e) {

        //recorre los elementos buscando el elegido
        $.each($("#process_select #marcadoresproceso").children(), function (pos, value) {

            
            if ($(value).hasClass("selected")) {
          
                
                datosPedido.tipoPedido = pos;
            }

        });


        var destino;

        switch (datosPedido.tipoPedido) {

            case 0:
                //album
                destino = "#process_source";
                
                esAlbum = true;
                esCanvas = false;
                esFoto = false;
                
                numeroFotos = cantidadFotosAlbum;
                $("#totalPics").text(cantidadFotosAlbum);
                break;

            case 1:
                //marco
                destino = "#process_frames";
                
                esAlbum = false;
                esCanvas = true;
                esFoto = false;  
                
                numeroFotos = cantidadFotosCanvas;
                $("#totalPics").text(cantidadFotosCanvas);
                break;

            case 2:
                //fotos
                destino = "#process_source";
                
                esAlbum = false;
                esCanvas = false;
                esFoto = true;   
                
                numeroFotos = cantidadFotosSueltas;
                $("#totalPics").text(cantidadFotosSueltas);
                break;

        }


        navegaSeccion(destino, "slideup");
        e.preventDefault();
        e.stopPropagation();
    });




    Swipe(document.getElementById("sliderProductType"),{continuous:false,stopPropagation:true,callback: function(pos) {

            var i = checkType.length;
            while (i--) {
              checkType[i].className = ' ';
            }
            checkType[pos].className = 'selected';
            
             $("#btCreateNewAlbum").text(tipoProducto[pos]);
             
             
            }
     });


    var checkType = document.getElementById('marcadoresproceso').getElementsByTagName('li');


});

/************************************
Pantalla de seleccion decoracion
************************************/
$(document).delegate("#process_decoration", "pageshow", function () {

    $("#btDecoBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_edit", "slidedown");
        
    });

    $("#btDecoSource").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_title", "slideup");
        
    });


    //slides
  //  mainslides("#process_decoration", "#listadecoracion", "#marcadordecoracion");
  
  
      Swipe(document.getElementById("sliderDeco"),{continuous:false,stopPropagation:true,callback: function(pos) {

            var i = checkDeco.length;
            while (i--) {
              checkDeco[i].className = ' ';
            }
            checkDeco[pos].className = 'selected';
         
             
             
            }
     });


    var checkDeco = document.getElementById('marcadordecoracion').getElementsByTagName('li');


});

/************************************
Pantalla de seleccion marco
************************************/
$(document).delegate("#process_frames", "pageshow", function () {

    $("#btFrameBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_select", "slide", true);

    });

    $("#btFrameSource").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_source", "slide");

    });



    Swipe(document.getElementById("sliderFrames"),{continuous:false,stopPropagation:true,callback: function(pos) {

            var i = checkFrames.length;
            while (i--) {
              checkFrames[i].className = ' ';
            }
            checkFrames[pos].className = 'selected';

            }
     });


    var checkFrames = document.getElementById('marcadorframes').getElementsByTagName('li');



});

/************************************
Pantalla de historico albumes
************************************/
$(document).delegate("#process_history", "pageshow", function () {

    $("#btHistoryBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_select", "slide", true);

    });

});

/************************************
Pantalla de seleccion origen fotos
************************************/
$(document).delegate("#process_source", "pageshow", function () {

    $("#btSourceBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_select", "slide", true);

    });

    $("#btSourcePhone").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        //navegaSeccion("#creation_landing", "slideup");

    });

    $("#btSourceFB").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        conectarFotosFacebook();

    });

    $("#btSourceInsta").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        conectarInstagram();

    });

});

/************************************
Pantalla de landing editor
************************************/
$(document).delegate("#clanding", "pageshow", function () {

    $("#btLandingContinue").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_gallery", "slideup");

    });

});


/************************************
Pantalla Galeria Carrete
************************************/

var miFoto = new Object();

var fotosFaltanConvertir;

$(document).delegate("#creation_gallery","pageshow",function(e) {


    $("#btCreationSource").off("tap").on("tap",function(e){
        
        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_source","slide",true);
        
    });



    $("#btCreationEdit").off("tap").on("tap",function(e){
        

        if(fotosfinales == numeroFotos){
            
            trace("has seleccionado 10");
            trace("Final checkpoint!");
             
            //navegaSeccion("#creation_edit","slide");
        
            
            var elegidas = $("#fotos .contenedorpic .selectioncomplete").parent();
            fotosFaltanConvertir = elegidas.length;
            
            var urlelegidas;
            urlelegidas = new Array();
            
           
            idElegidas = new Array();
            
            
            fotosElegidas = new Array();
            fotosFull = new Array();

            
          
            for (i=0;i<elegidas.length;i++){
                
                var idFoto = $(elegidas[i]).attr("id");
                var urlFoto = $(elegidas[i]).css("background-image");
                var urlFotoLimpia = urlFoto.substring(4,urlFoto.length-1);
                
             
               miFoto.id = idFoto;
               miFoto.url = urlFotoLimpia;
               miFoto.canvas = null;
               
               
               convertirCanvas(miFoto.id,miFoto.url);
               
                fotosElegidas.push(miFoto);
                
            }
            
             navegaSeccion("#creation_edit","slide");
            
            
           // recojofotos(); // envio fotos a las variables globales
        
	}else{
            
            if(esAlbum == true) {
                trace("debes seleccionar: " + cantidadFotosAlbum + " fotos para album");
            }
            
            if(esCanvas == true) {
                trace("debes seleccionar: " + cantidadFotosCanvas + " fotos para Canvas");
            }
            
            if(esFoto == true) {
                trace("debes seleccionar: " + cantidadFotosSueltas + " fotos para impresion");
            }
            
        }
        

        
        e.preventDefault();
        e.stopPropagation();
        
        
    });






    //////////////////////////////////////////////////
    $("#btGalleryGrid").off("tap").on("tap", function (e) {

        $("#btGalleryList").removeClass("btListSelect").addClass("btList");
        $("#btGalleryGrid").addClass("btGridSelect");

        $(".contenedorpic").addClass("thumb");
        $(".checkboxpic").removeClass("selectedpiclist").addClass("selectedpicgrid");

    });


    $("#btGalleryList").off("tap").on("tap", function (e) {

        $("#btGalleryGrid").removeClass("btGridSelect").addClass("btGrid");
        $("#btGalleryList").addClass("btListSelect");

        $(".contenedorpic").removeClass("thumb");
        $(".checkboxpic").removeClass("selectedpicgrid").addClass("selectedpiclist");
    });




    $('#creation_gallery').bind('touchmove', function (e) {
        e.stopPropagation();
        $(this).off("tap");
    });




});

/************************************
Pantalla Seleccion/Edicion Fotos
************************************/
var fotosFull = new Array();
 //fotosfull = ["default.jpg", "p01.jpg", "p02.jpg", "p03.jpg", "gal01.jpg"];

var paginasFull = new Array(10);
$(paginasFull).each(function (index) {
    paginasFull[index] = 0;
});

var fi = 0;
var pi = 0;


$(document).delegate("#creation_edit", "pageshow", function () {

    $("#btEditBack").off("tap").on("tap", function (e) {



        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_gallery", "slidedown");
        
        fotosFull = [];
        
    });

    $("#btEditTitle").off("tap").on("tap", function (e) {


        e.preventDefault();
        e.stopPropagation();
        
        if(esAlbum == true) {
           navegaSeccion("#process_decoration", "slideup"); 
        }else{
        
        navegaSeccion("#creation_title", "slideup");
        }

    });

    $(".btEditFullScreen").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        $("#fullScPic").css("top","0px","left","0px");

        $(".borderEffect").remove("canvas");
        navegaSeccion("#creation_full","fade");
        
        

    });
    
    $("#veloIzq").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        $("#veloDer").css("display","block")
        $(this).css("display","none");
        $(".book").animate({left:"120px"},500);

    });   
    
    $("#veloDer").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        $("#veloIzq").css("display","block")
        $(this).css("display","none");
        $(".book").animate({left:"-100px"},500);

    });   
    
/*
    $("#arrowUp1").off("tap").on("tap", function (e) {


        fi++;
        trace(fi);
        if (fi >= fotosfull.length) {
            fi = 0;
        }

        $("#imgIzq").css("background-image","url("+  fotosfull[fi] + ")");
        $("#fullScPic").attr("src", "" + fotosfull[fi] + "");
        
        $("#fullScPic").css("top","0","left","0");
        

        e.preventDefault();
        e.stopPropagation();

    });

    $("#arrowDown1").off("tap").on("tap", function (e) {

        fi--;
        if (fi <= 0) {
            fi = fotosfull.length - 1;
        }

        $("#imgIzq").css("background-image","url("+  fotosfull[fi] + ")");
        $("#fullScPic").attr("src", "" + fotosfull[fi] + "");
        //fsCanvas(fotosfull[fi]);
        $("#fullScPic").css("top","0","left","0");
        trace(fi);


        e.preventDefault();
        e.stopPropagation();

    });

    $("#arrowUp2").off("tap").on("tap", function (e) {


        fi++;
        trace(fi);
        if (fi >= fotosfull.length) {
            fi = 0;
        }

        $("#imgDer").css("background-image","url("+  fotosfull[fi] + ")");
        $("#fullScPic").attr("src", "" + fotosfull[fi] + "");
        //fsCanvas(fotosfull[fi]);
        $("#fullScPic").css("top","0","left","0");


        e.preventDefault();
        e.stopPropagation();

    });

    $("#arrowDown2").off("tap").on("tap", function (e) {

        fi--;
        if (fi <= 0) {
            fi = fotosfull.length - 1;
        }

        $("#imgDer").css("background-image","url("+  fotosfull[fi] + ")");
        $("#fullScPic").attr("src", "" + fotosfull[fi] + "");
        //fsCanvas(fotosfull[fi]);
        $("#fullScPic").css("top","0","left","0");
        trace(fi);


        e.preventDefault();
        e.stopPropagation();

    });
  */  
    $('.book').on("swipeleft", function(){cambiarPag(-1)});
    $('.book').on("swiperight", function(){cambiarPag(1)});

    function cambiarPag(direccion) {
        $(".book").animate({left:"10px"},500);
        $("#veloIzq").css("display","block");
        $("#veloDer").css("display","block");
        if (paginasFull[pi] != fi)
            paginasFull[pi] = fi;
        trace("pi antes de pinchar: " + pi);
       if(direccion > 0) { 
            pi++
       }else{   
            pi--;
        }+
        
        
        trace("pi desués de pinchar: " + pi);

        if (pi < 0) {
            pi = paginasFull.length - 1;
        }
        if (pi > paginasFull.length - 1) {
            pi = 0;
        }
        
        fi = paginasFull[pi];
        if (pi % 2 == 1) {
                   
        //$(".book").animate({"margin-top","80px"});
            //////////////////////////////////CAMBIAMOS AMBAS PÁGINAS//////////////////////////////////
           /* trace("cambiamos páginas");
            $('#veloDer').fadeOut();
            $('#veloIzq').fadeIn();
            $('#txtDer').text('Page ' + parseInt(pi));
            $('#txtIzq').text('Page ' + parseInt(pi + 1));
            $("#imgDer").css("background-image","url("+ fotosfull[paginasFull[pi]] + ")");
            $("#imgIzq").css("background-image","url("+ fotosfull[paginasFull[pi - 1]] + ")");*/

        }
        else {
                   //  $(".book").animate({"top":"-80px"})
          /*  trace("no cambiamos páginas");
            $('#veloDer').fadeIn();
            $('#veloIzq').fadeOut();
            $('#txtIzq').text('Page ' + parseInt(pi));
            $('#txtDer').text('Page ' + parseInt(pi + 1));*/
        }

        e.preventDefault();
        e.stopPropagation();
    }

 

   /* $("#pagIzq").off("tap").on("tap", function (e) {
        if (paginasFull[pi] != fi)
            paginasFull[pi] = fi;
        trace("pi antes de pinchar: " + pi);
        pi--;
        trace("pi desués de pinchar: " + pi);

        if (pi < 0) {
            pi = paginasFull.length - 1;
        }
        fi = paginasFull[pi];
        if (pi % 2 == 1) {
            //////////////////////////////////CAMBIAMOS AMBAS PÁGINAS//////////////////////////////////
            trace("cambiamos páginas");
            $('#veloDer').fadeOut();
            $('#veloIzq').fadeIn();
            $('#txtDer').text('Page ' + parseInt(pi));
            $('#txtIzq').text('Page ' + parseInt(pi + 1));
            $("#imgDer").css("background-image","url("+ fotosFull[paginasFull[pi]] + ")");
            $("#imgIzq").css("background-image","url("+ fotosFull[paginasFull[pi - 1]] + ")");

        }
        else {
            trace("no cambiamos páginas");
            $('#veloDer').fadeIn();
            $('#veloIzq').fadeOut();
            $('#txtIzq').text('Page ' + parseInt(pi));
            $('#txtDer').text('Page ' + parseInt(pi + 1));
        }

        e.preventDefault();
        e.stopPropagation();

    });

    $("#pagDer").off("tap").on("tap", function (e) {
        if (paginasFull[pi] != fi)
            paginasFull[pi] = fi; //fotosfull[fi];
        trace("pi antes de pinchar: " + pi);
        pi++;
        trace("pi después de pinchar: " + pi);

        if (pi > paginasFull.length - 1) {
            pi = 0;
        }
        fi = paginasFull[pi];
        if (pi % 2 == 0) {
            //////////////////////////////////CAMBIAMOS AMBAS PÁGINAS//////////////////////////////////
            $('#txtDer').text('Page ' + parseInt(pi + 1));
            $('#txtIzq').text('Page ' + parseInt(pi));
            $('#veloDer').fadeIn();
            $('#veloIzq').fadeOut();
            $("#imgDer").css("background-image","url("+ fotosFull[paginasFull[parseInt(pi + 1)]]+")");
            $("#imgIzq").css("background-image","url("+ fotosFull[paginasFull[pi]]+")");
        }
        else {
            $('#txtIzq').text('Page ' + parseInt(pi + 1));
            $('#txtDer').text('Page ' + parseInt(pi));
            $('#veloDer').fadeOut();
            $('#veloIzq').fadeIn();
        }

        e.preventDefault();
        e.stopPropagation();

    });*/

});


/************************************
Pantalla Foto FullScreen
************************************/
var filter = 0;


$(document).delegate("#creation_full", "pageshow", function () {

        
resizeEditorPic();




    //startMovimiento($("#fullScPic"),$(".fullImage"));
 
    $("#btFullScreen").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_edit", "fade");
        
    });
    

    $("#wandBt").off("tap").on("tap", function (e) {
                
        
        if (filter >= 4) {
            filter = 0;
        }
        
        
        
            filter++;
            
    switch(filter) {
    case 1:
        $("#fullScPic").css("-webkit-filter","grayscale(100%)");
    break;
    
    case 2:
        $("#fullScPic").css("-webkit-filter","hue-rotate(120deg)");
    break;
    
    case 3:
        $("#fullScPic").css("-webkit-filter","blur(10px)");
    break;
    
    case 4:
        $("#fullScPic").css("-webkit-filter","grayscale(0%)");
    break;
    
    case 5:
        $("#fullScPic").pixastic("invert");
    break;
    }

        e.preventDefault();
        e.stopPropagation();


    });



    $("#btCrop").off("tap").on("tap", function (e) {

            e.preventDefault();
            e.stopPropagation();
                   

            
            cropCanvas();
        });


    $("#btCompleteEdit").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_edit", "fade");
        
    });



});



/************************************
Pantalla Vista Preliminar
************************************/
$(document).delegate("#creation_title", "pageshow", function () {

    $("#btTitleBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        if(esAlbum == true) {
        navegaSeccion("#process_decoration","slide");    
        }else{
        navegaSeccion("#creation_edit", "slide", true);
        }

    });

    $("#btTitleSave").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_saved", "slide");

    });
    
    


});

/************************************
Pantalla preview fotos album
************************************/
$(document).delegate("#creation_preview", "pageshow", function () {

    $("#btPreviewBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_title", "slide", true);

    });

});


/************************************
Pantalla final titulo album
************************************/
$(document).delegate("#creation_saved", "pageshow", function () {

    $("#btSavedBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_title", "slide", true);

    });

    $("#btSavedPreview").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_preview", "slideup");

    });

    $("#btSavedBuy").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#order", "slideup");
        
        calcularPrecioFinal();

    });

});

/************************************
Pantalla Pedido
************************************/
$(document).delegate("#orderresume", "pageshow", function () {


    $("#btOrderBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_saved", "slide", true);

    });

    $("#btOrderContinue").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#address", "slideup");

    });

    $("#orderresume input").blur(function() {
        $(document).scrollTop(0);
    });

});

/************************************
Pantalla Direccion/Datos Personales
************************************/
$(document).delegate("#addressresume", "pageshow", function () {

    $("#btAddressBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#order", "slide", true);

    });

    $("#btAddressContinue").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#payment", "slideup");

    });
    
    $("#addressresume input").blur(function() {
        $(document).scrollTop(0);
    });    

});


/************************************
Pantalla Pagos
************************************/
$(document).delegate("#paymentresume", "pageshow", function () {

    $("#btPayBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#address", "slide", true);

    });

    $("#btPayFinish").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#finish", "slideup");

    });
    


});

/************************************
Pantalla Final
************************************/
$(document).delegate("#finishscreen", "pageshow", function () {

    $("#btFinish").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#welcome", "slide");
        esAlbum = false;
        esCanvas = false;
        esFoto = false;
        fotosfinales = 0;
    });

});

/***********************************************************************
 W E B    S E R V I C E S // A J A X  // C O N T.   D I N A M I C O S
************************************************************************/


//FUNCIONES AJAX, LLAMADAS A WS (REGISTRO, LOGIN)

function registerUser() {
    var email = $('#txtEmailRegister').val();
    var password = $('#txtPassRegister').val(); ;
    var repeatPassword = $('#txtPassRepeatRegister').val();
    if (password != repeatPassword) {
        $('#txtErrorRegister').html('Password does not match.');
        return;
    }
    var datos = { "email": email, "password": password };
    $.ajax({
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(datos),
        url: site_URL+'ws.asmx/registro',
        success: function (data) {
            
            //navegaSeccion("#login", "slideup");
            navegaSeccion("#process_select", "slideup");
        },
        error: function (e) {
            $('#txtErrorRegister').html('An error has occured while registering your account.');
            trace(e);
        }
    });


}

function loginUser() {
    var datos = { "user": $('#txtUserNameMF').val(), "password": $('#txtPassMF').val() };
    $.ajax({
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(datos),
        url: site_URL+'ws.asmx/login',
        success: function (data) {
            //trace(data);
            trace(data);
            if (data.d.resultado == "OK") {
                logado = true;
                _userID = $('#txtUserNameMF').val();
            navegaSeccion("#process_select", "slideup");
            }
            else {
                $('#spanErrorLogin').html('Wrong user ID or Password');
            }
        },
        error: function (e) {
            trace('error login: ' + e);
        }
    });


}


