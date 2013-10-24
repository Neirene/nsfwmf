//Globales

var fotoCaman;

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
var fotosFinales;
var numFotoEditando = 0;

var fotoActualSubida;


var _tokenFB = "";

var $soporteFotoThu;
 
var _igToken="";
var _listaFotos;

var CLIENT_ID_IG = "6a115ece6f1246a3b77d3593552d28a4";
var REDIRECT_URI = "http://genericwebdomain.com/mille-feuille/token/";



var numeroFotos;
var fotosElegidas = new Array();

var paginaIzq = 0;
var paginaDer = 0;
var miSwipeIzquierda;
var miSwipeDerecha;

var fotosFaltanConvertir;

//relacion1
  
var relacion1;
var relacion2;

var altoEditor;
var anchoEditor;
var escalaFinal;

//var listaCanvas = new Array();
var fotoMod;
var foto64;
var totalFotosAlbum;
var totalFotosCanvas;
var totalFotosSueltas;
/*var idRegField = $('#txtEmailRegister').val();
var idPassField = $('#txtPassRegister').val();
var idRepeatPassField = $('#txtPassRepeatRegister').val();*/


var regIdVal = "Email";
var regPassVal = "Your Password";
var regRepeatPassVal = "Repeat Password";

//paginasFull contiene un array con las posiciones de cada foto en el álbum
var paginasFull = new Array();
//var fi = 0;
var numPagina = 0;
//var pos;
var filter = 0;

//var widthImagen = $("#fullScPic").width();





//objetoprincipal


var datosUsuario = new Object();

    
    


/*******************************
Variables web service (mover plz)
**********************************/
var APP_ID_FB = "382088901918989";
var REDIRECT_URL_FB = "http://genericwebdomain.com/mille-feuille/";

var RUTA_IMAGENES_PORTADA = "http://genericwebdomain.com/mille-feuille/images/decorations/";
var RUTA_IMAGENES_MARCOS = "http://genericwebdomain.com/mille-feuille/images/frames/";


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
	//	if (parseFloat(window.device.version) === 7.0) {
	//		//document.body.style.marginTop = "20px";
	//		$(".btArrow").css("top","25px");
	//	}
      //  trace('Received Event: ' + id);
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


}

/************************************
 Cambio de Orientacion para iPhone
*************************************/

function cambioOrientacion(tipo) {
    //aqui!
    
    
}


/************************************
 Desactivar scroll vertical en iOS
************************************/

$(document).bind('touchmove', function(e){
    e.preventDefault();           
});




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


function conectarFacebook() {
    //abrimos la consola web de autenticaciÃ³n instagram



    var ref = window.open('https://www.facebook.com/dialog/oauth?client_id=' + APP_ID_FB + '&redirect_uri=' + REDIRECT_URL_FB + '&response_type=token&scope=user_photos', '_blank');


    ref.addEventListener('loadstop', function(e) {


        var queURL = e.url;
		//trace("estoy en la url:"+queURL);

        if (queURL.toLowerCase().indexOf(REDIRECT_URL_FB.toLowerCase()) == 0) {
            //ESTOY EN LA REDIRECT URL
			
			//HAY QUE COMPROBAR SI HAY ERROR O VIENE EL TOKEN
			
            var objDevuelto = deserializarQueryString(e.url);

            if (!!objDevuelto.access_token) {
				//VIENE EL TOKEN.

                _tokenFB = objDevuelto.access_token;
                
                datosUsuario.id = _tokenFB; //obtenemos email (ID) objeto principal
                datosUsuario.tipoLogin = "facebook";  // esto es facebook               

                navegaSeccion("#process_select", "slideup");
                
                //recuperarListaFotosFB(/*ir a sigiente pantalla*/);
            } else {
				//ha cancelado o da error
				/*error_reason=user_denied
 				 &error=access_denied
 				 &error_description=The+user+denied+your+request.*/
				// trace("ERROR DE LOGIN FB:"+objDevuelto.error_reason);
                                 
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
			//trace("estoy en la url:"+queURL);
	
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
					// trace("ERROR DE LOGIN FB:"+objDevuelto.error_reason);
	
				}
				ref.close();
	
			}
			
		});
	}else{   
	 
		navegaSeccion("#creation_gallery", "slideup");
		recuperarListaFotosFB();
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


            //
            representarFotos();

        },
        error: function(e) {

            
             for (var x in e){
             //	trace(x+"**"+e);   
             }
        }
    });


}




/*********************************
 Funciones Instagram
 ********************************/
 




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


//var cn = $(".contenedorpic");

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
		fotosFinales = selectedlist;
	
        
		e.preventDefault();
        e.stopPropagation();
	});

        
}


/************************************
 Canvas y tratado de fotos 
 seleccionadas del carrete/IG/FB
************************************/





function convertirCanvas(objFoto) {

    
    var dataURL;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    
    var img = new Image();
    
    
    img.onload = function() {
            
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            dataURL = canvas.toDataURL(); 
           // fotosFull.push(dataURL);
		  // trace("meto canvas:"+dataURL+"**en:"+objFoto.id);
            objFoto.canvas = dataURL;
            
            //
            fotosFaltanConvertir--;
            if( fotosFaltanConvertir <= 0) {
                rellenarAlbum();
            }
            
     };
     img.setAttribute('crossOrigin','anonymous');
     img.src = "http://genericwebdomain.com/mille-feuille/proxy.php?URL="+objFoto.url;
 
        //miFoto.canvas = canvas;
       
}






function rellenarAlbum() {

   // trace("fotosElegidas: " + fotosElegidas.length)
    
    $soportePagIzq.html('');
    $soportePagDer.html('');
    
    var cadena = "";
	
	//se rellenan ambas páginas del libro
    for (i=0;i<fotosElegidas.length;i++) {
       // var miImagen = $("<div></div>").addClass("imgIzq").css("background-image","url("+fotosFull[i]+")");
        //var miImagen = "<div class='imgIzq' style='background-image:url("+ fotosFull[i] +")'></div>";
        var miImagen ="<img class='fotoAlbum_" + i + "' src="+ fotosElegidas[i].canvas +"  />";
        //cadena += miImagen;
    
        $soportePagIzq.append("<div>" + miImagen + "</div>");
        $soportePagDer.append("<div>" + miImagen + "</div>");
    }


	//
	ponerImagenFull(fotosElegidas[0].canvas);
    
    numFotoEditando = 0;

    miSwipeIzquierda = new Swipe(document.getElementById("pagIzqSlider"),{
		direction:'y',
		disableScroll:true,
		continuous:true,
		speed:300,
		stopPropagation:true,
		callback: function(pos,elem){
                   // trace("posIzq: "+pos+"**elem:"+elem); 
                    
					ponerImagenFull(fotosElegidas[pos].canvas);
					
					
                    //paginaIzq = pos;
                    paginasFull[numPagina] = pos;
                    numFotoEditando = pos;
                    
                    fotosElegidas[pos].orden = numPagina;
                 } 
    });
    
    
     miSwipeDerecha = new Swipe(document.getElementById("pagDerSlider"),{
		 direction:'y',
		 disableScroll:true,
		 continuous:true,
		 speed:300,
		 stopPropagation:true,
		 callback: function(pos){
			//trace("posDer: "+pos); 
			ponerImagenFull(fotosElegidas[pos].canvas);
			//paginaDer = pos;
			numFotoEditando = pos;
			paginasFull[numPagina+1] = pos;
                        
                        fotosElegidas[pos].orden = numPagina+1;
                 }
    });  
	
	
	//programar el cambio de página del libro
	
	paginasFull = new Array();
	//preasignamos una foto para cada página
	for (var i=0;i<fotosElegidas.length;i++){
   		 paginasFull.push(i);
	};
	
	//fi = 0;
	numPagina = 0;
	
    $('.book').off().on("swipeleft", function(e){
		cambiarPagina(1,e)
		//trace("cambia pág libro 1");
	});
    $('.book').on("swiperight", function(e){
		cambiarPagina(-1,e);
		//trace("cambia pág libro 1");
	});
	
	//ponerFotoAlbum(0, "izq");
	//ponerFotoAlbum(1, "der");
	
    
    
}

function ponerImagenFull(queImg){

	$("#fullScPic").attr("src", queImg);
	$("#fullScPic").css("height","auto");
	$("#fullScPic").css("width","auto");
	
}


function magicWandSet(filter) {

    
    console.log(filter);
    
	// Listen to a single instance only
        
	//hago  una copia de la imagen para aplicar filtros
	 var canvasFinal = document.createElement("canvas");
	 canvasFinal.height = $("#fullScPic").height();
	 canvasFinal.width = $("#fullScPic").width();
	 var context = canvasFinal.getContext('2d');
	 
	 var fotoOriginal =  fotosElegidas[numFotoEditando].canvas;

	// var img = document.getElementById("fullScPic");
	var img = new Image();
	img.src = fotoOriginal;
	
	context.drawImage(img,0,0,$("#fullScPic").width()/escalaFinal,$("#fullScPic").height()/escalaFinal,0,0,$("#fullScPic").width(),$("#fullScPic").height());
   
   
	var c = Caman(canvasFinal);
	
	Caman.Event.listen(c, "processStart", function () {
	  console.log("Working!");
	});
	
	
		
		
	Caman(canvasFinal, function () {
		// If such an effect exists, use it:
		if( filter in this){
			
			this.revert();
			this[filter]();
			this.render(function(){
				
				console.log("DONE!");
                               console.log(this.toBase64());
                               $("#fullScPic").attr("src",this.toBase64());
                               
			});
		}
	});
    
    
}






function resizeEditorPic() {


    relacion1 = $(".borderEffect").width() / $(".borderEffect").height();
    relacion2 = $("#fullScPic").width() / $("#fullScPic").height();
    
    console.log(relacion1);
    console.log(relacion2);
    
    //TRABAJAR AQUI
        
 if (relacion1 <= relacion2) {
      //ajustamos imagen al ALTO
      altoEditor = $(".borderEffect").height();
      anchoEditor = altoEditor * relacion2;
      console.log("aca?")
  }else{
      //ajustamos imagen al ANCHO
     console.log("Aqui?");
     //imgHeight = $("#fullScPic").height();
     anchoEditor = $(".borderEffect").width();
     altoEditor = anchoEditor * $("#fullScPic").height()/$("#fullScPic").width();

  }

   escalaFinal =  anchoEditor / $("#fullScPic").width(); 

  
  $("#fullScPic").css("width",anchoEditor);
  $("#fullScPic").css("height",altoEditor);
  
  var miTop = $(".borderEffect").offset().top;
  var miLeft = $(".borderEffect").offset().left;
  
  $("#fullScPic").offset({"top":miTop,"left":miLeft});
  
 
    
}
   




function cropCanvas() {
   
	//corta la imagen
	
   var canvasFinal = document.createElement("canvas");
   canvasFinal.height = $(".borderEffect").height();
   canvasFinal.width = $(".borderEffect").width();
   var context = canvasFinal.getContext('2d');
       
   
  // $(".borderEffect").html(canvasFinal);
   
   
   var queImagen = document.getElementById("fullScPic");
   //coordenadas de corte en la imagen grande
   var sourceX = ($(".borderEffect").offset().left-$("#fullScPic").offset().left)/escalaFinal;
   var sourceY = ($(".borderEffect").offset().top-$("#fullScPic").offset().top)/escalaFinal;
   var sourceWidth = $(".borderEffect").width()/escalaFinal;
   var sourceHeight = $(".borderEffect").height()/escalaFinal;
   
    
   var destX = 0;
   var destY = 0;
   var destWidth = $(".borderEffect").width();
   var destHeight =  $(".borderEffect").height();
   
   
   /*
   
   trace("Imagen: "+queImagen);
   trace("Source X Pos: "+sourceX);
   trace("Source Y Pos: "+sourceY);
   trace("Source Width: "+sourceWidth);
   trace("Source Height: "+sourceHeight);
   
   
   trace("Destination X: "+destX);
   trace("Destination Y: "+destY);
   trace("Destination Width: "+destWidth);
   trace("Destination Height: "+destHeight);
   */
     //Leyenda      (imageObj,   c.x,     c.y,      c.w,           c.h,          0, 0, canvas.width, canvas.height);
   //context.drawImage(queImagen, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
   
context.drawImage(queImagen, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
   
  // listaCanvas.push(canvasFinal);
  
  //var topCuadro = $(".borderEffect").offset().top;
  //var leftCuadro = $(".borderEffect").offset().top
  
   $("#fullScPic").removeAttr("width");
   $("#fullScPic").removeAttr("height");
   $("#fullScPic").attr("src", canvasFinal.toDataURL());
   $("#fullScPic").offset($(".borderEffect").offset());
   
   
   stopMovimiento();
   //salimos fuera de fullscreen al album
   navegaSeccion("#creation_edit", "fade");
   
   actualizarFotoAlbum(canvasFinal.toDataURL());
   
    
    
}

function actualizarFotoAlbum(dataURL) {
    
   fotosElegidas[numFotoEditando].canvasModificado = dataURL;
   $(".fotoAlbum_"+numFotoEditando).attr("src", dataURL);
    
    
    
}

/**************************************
 * pantallas de pedido
 ***********************************/



function calcularPrecioFinal() {
    
    
     var precioTotal = 0;       
     var totalFotos = fotosElegidas.length;
              
    if(esAlbum == true) {
       

        precioTotal = totalFotos * precioFoto;

    }

    if(esCanvas == true) {
       // totalFotosCanvas = fotosElegidas.length;

        precioTotal = (totalFotos * precioFoto)*precioCanvas;


    }

    if(esFoto == true) {
        //totalFotosSueltas = fotosElegidas.length;

        precioTotal = totalFotos * precioFoto;

    }    
    
     $("#photoNumber").val(totalFotos);
     $("#totalPrice").val(precioTotal+"€");
     
    datosUsuario.numeroImagenes = totalFotos;
    datosUsuario.cantidad = parseInt($("#orderresume #cantidad").val());
    datosUsuario.precioTotal = precioTotal;
    
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


    var miSwipe = new Swipe(document.getElementById("slideArrowLink"),{continuous:false,stopPropagation:true,transitionEnd: function() {

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
    var miSwipe = new Swipe(document.getElementById("sliderAbout"),{continuous:false,stopPropagation:true,callback: function(pos) {

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

    /*$("#txtEmailRegister").focus(function() {
       
       var userName = $("#txtEmailRegister").val();
       
	   if (userName == $(this).attr("data-default")){
           $("#txtEmailRegister").val("");
	   }
       
       $("body").offset({top:0});

    });
    
    $("#txtEmailRegister").blur(function() {
		
       var userName = $("#txtEmailRegister").val();
	   
       if (userName == ""){
           $("#txtEmailRegister").val($(this).attr("data-default"));      
		}
       
       $(document).scrollTop(0);
	   
    });*/
	
	$("input").bind("focus",function(){
		if ($(this).val()==$(this).attr("data-default")){
			//
			
			$(this).removeClass("textoApagado");
			if ($(this).attr("data-type")=="password"){
				//hacemos copia
				var copia = $(this).clone(true);
				copia.attr("type","password");
				copia.val("");
				
				$(this).replaceWith(copia);
				copia.focus();
			}else{
				$(this).val("");	
				
			}
			// $(this).css('background-position-x', 'center');
		}
		
	});
	
	$("input").bind("blur",function(){
		if ($(this).val()==""){
			//
			$(this).addClass("textoApagado");
			
			if ($(this).attr("data-type")=="password"){
				//
				var copia = $(this).clone(true);
				copia.attr("type","text");
				copia.val($(this).attr("data-default"));
				
				$(this).replaceWith(copia);
			}else{
				$(this).val($(this).attr("data-default"));	
			}
			//$(this).css('background-position-x', '0px');
		}
		
		$(document).scrollTop(0);
		
	});
    
   /* $("#txtPassRegister").focus(function() {

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
	
	*/
    
   /* $("#txtPassRepeatRegister").focus(function() {

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
       
    });*/

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
        
        datosUsuario.id = ""; //obtenemos email (ID) objeto principal
        datosUsuario.tipoLogin = "anonimo";  // esto es millefeuille anonimo
        
        navegaSeccion("#process_select", "slideup");

    });

});


/************************************
Pantalla de login MF
************************************/
$(document).delegate("#loginaccess", "pageshow", function () {
    
   // var idField = $("#txtUserNameMF").val();
   // var passField = $("#txtPassMF").val();
    
    
   // var loginIdVal = "User";
   // var loginPassVal = "Password";

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

   /* $("#txtUserNameMF").focus(function() {

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
    });*/

});

/************************************
Pantalla de Olvide Password
************************************/
$(document).delegate("#rememberPass", "pageshow", function () {
   // var RePassField = $("#recoveryEmail").val();
   // var RePassVal = "EMAIL";

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
    
    
    /*$("#recoveryEmail").focus(function() {
       
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

       

    });*/
    

});

/************************************
Pantalla de seleccion tipo producto
************************************/
$(document).delegate("#process_select", "pageshow", function () {
    
    $("#debugScreen").off("tap").on("tap", function (e) {
          $("#debugScreen").css("display","none");
          });
    
   
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

  
   

    $("#btCreateNewAlbum").off().on("tap", function (e) {

        //recorre los elementos buscando el elegido
        $.each($("#process_select #marcadoresproceso").children(), function (pos, value) {

            
            if ($(value).hasClass("selected")) {
          
                
                datosUsuario.tipoPedido = pos;
            }

        });


        var destino;

        switch (datosUsuario.tipoPedido) {

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
                destino = "#process_source";
                
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




   var miSwipe = new Swipe(document.getElementById("sliderProductType"),{continuous:false,stopPropagation:true,callback: function(pos) {

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
  
  
   

});

/************************************
Pantalla de seleccion marco
************************************/
$(document).delegate("#process_frames", "pageshow", function () {

    $("#btFrameBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_edit", "slidedown");

    });

    $("#btFrameSource").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_title", "slideup");

    });



 



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


$(document).delegate("#creation_gallery","pageshow",function(e) {


    $("#btCreationSource").off("tap").on("tap",function(e){
        
        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_source","slide",true);
        
    });



    $("#btCreationEdit").off("tap").on("tap",function(e){
        
		//trace("fotosFinales:"+fotosFinales+"**numfotos:"+numeroFotos);
        if(fotosFinales == numeroFotos){
            
          //  trace("has seleccionado 10");
          //  trace("Final checkpoint!");
             
            //navegaSeccion("#creation_edit","slide");
        
            
            var elegidas = $("#fotos .contenedorpic .selectioncomplete").parent();
            fotosFaltanConvertir = elegidas.length;
            
            var urlelegidas;
            urlelegidas = new Array();
            
           
            idElegidas = new Array();
            
            
            fotosElegidas = new Array();
           // fotosFull = new Array();

            
          
            for (i=0;i<elegidas.length;i++){
                
                var idFoto = $(elegidas[i]).attr("id");
                var urlFoto = $(elegidas[i]).css("background-image");
                var urlFotoLimpia = urlFoto.substring(4,urlFoto.length-1);
                
             
			   var miFoto = new Object();
			   miFoto.id = idFoto;
			   miFoto.url = urlFotoLimpia;
			   miFoto.canvas = null;
                           miFoto.canvasModificado = null;
			   
			   
			   convertirCanvas(miFoto);
			   fotosElegidas.push(miFoto);
                
            }
            
             cambioOrientacion("horizontal");
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
//var fotosFull = new Array();
 //fotosfull = ["default.jpg", "p01.jpg", "p02.jpg", "p03.jpg", "gal01.jpg"];



$(document).delegate("#creation_edit", "pageshow", function () {

    $("#btEditBack").off("tap").on("tap", function (e) {
        e.preventDefault();
        e.stopPropagation();
        cambioOrientacion("vertical");
        navegaSeccion("#creation_gallery", "slidedown");
       // fotosFull = [];
		fotosElegidas = [];
        
    });

    $("#btEditTitle").off("tap").on("tap", function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        if(esAlbum == true) {
            cambioOrientacion("vertical");
            getPortadas();
            navegaSeccion("#process_decoration", "slideup"); 
        }else if(esCanvas == true){
            cambioOrientacion("vertical");
            getMarcos();
            navegaSeccion("#process_frames", "slideup"); 
            
        }else{
            cambioOrientacion("vertical");
            navegaSeccion("#creation_title", "slideup");
        }

    });

    $(".btEditFullScreen").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        cambioOrientacion("horizontal");
        
		 //PASO1: remover ID data-caman del canvas, PASO2: iniciar CAMAN de nuevo 
	 
		$("#fullScPic").removeAttr("data-caman-id");
		/*if ($(e.currentTarget).attr("data-id")=="derecha"){
			miPagina = paginaDer;
		}else{
			 miPagina = paginaIzq;
		}*/
	
	//	fotoCaman = Caman("#fullScPic", fotosElegidas[numFotoEditando].canvas , function () {      
	//		this.render(function(){/*callback*/ });
	//   });

       // $("#fullScPic").css("top","0px","left","0px");
        navegaSeccion("#creation_full","fade");

    });
    
    $("#veloIzq").off("tap").on("tap", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#veloDer").show();
        $(this).hide();
        $(".book").animate({left:"120px"},500);

    });   
    
    $("#veloDer").off("tap").on("tap", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#veloIzq").show();
        $(this).hide();
        $(".book").animate({left:"-100px"},500);

    });   

});

function ponerFotoAlbum(queIndiceFoto, tipo){
	//MUESTRA LA FOTO ELEGIDA EN LA PÁGINA ELEGIDA
	
	switch(tipo){
		case "izq":
			miSwipeIzquierda.slide(queIndiceFoto,50);
		break;
		case "der":
			miSwipeDerecha.slide(queIndiceFoto,50);
		break;
	}
	//
	
}

function lanzarAnimacionLibro(queDireccion){
	//lanza una animación con efecto de pasar página para simular el efecto de paso de páginas.	
	
}

 function cambiarPagina(direccion,e) {
	 
		lanzarAnimacionLibro(direccion);
		
		//centramos el texto y mostramos las páginas
        $(".book").animate({left:"10px"},500);
        $("#veloIzq").show();
        $("#veloDer").show();
		
        /*if (paginasFull[numPagina] != fi){
            paginasFull[numPagina] = fi;
		}*/
        
		//trace("numPagina antes de pinchar: " + numPagina);
		
	    if(direccion > 0) { 
			numPagina+=2
	    }else{   
			numPagina-=2;
       	}
        
       // trace("numPagina después de pinchar: " + numPagina);

        if (numPagina < 0) {
            numPagina = paginasFull.length - 2;
        }
        if (numPagina > paginasFull.length - 2) {
            numPagina = 0;
        }
        
        //fi = paginasFull[numPagina];
		//////////////////////////////////CAMBIAMOS AMBAS PÁGINAS//////////////////////////////////
		//trace("cambiamos páginas");
	   
	   	//mostramos páginas numeradas desde la 1
		$('#txtDer').text('Page ' + parseInt(numPagina + 2));
		$('#txtIzq').text('Page ' + parseInt(numPagina + 1));
		
		ponerFotoAlbum(paginasFull[numPagina], "izq");
		ponerFotoAlbum(paginasFull[numPagina+1], "der");

        e.preventDefault();
        e.stopPropagation();
}


/************************************
Pantalla Foto FullScreen
************************************/



$(document).delegate("#creation_full", "pageshow", function () {

       /* Caman("#fullScPic", fotosElegidas[pos].canvas , function () {
            this.render(function(){ });
        });*/

		/*$("#fullScPic").on("pinchout","#fullPicSc", function(event) {
			$("#fullScPic").css("height","150%"); 
		});
		
		$("#fullScPic").on("pinchin","#fullPicSc", function(event) {
			$("#fullScPic").css("height","100%"); 
		});*/
				
		resizeEditorPic();

		startMovimiento($("#fullScPic"),$(".borderEffect"));
	 
		$("#btFullScreen").off("tap").on("tap", function (e) {
	
			e.preventDefault();
			e.stopPropagation();
                        
                        actualizarFotoAlbum($("#fullScPic").attr("src"));
                        stopMovimiento();
                        cambioOrientacion("horizontal");
			navegaSeccion("#creation_edit", "fade");
			
			
		});
		
	
		$("#wandBt").off("tap").on("tap", function (e) {
					
			
			if (filter >= 6) {
				filter = 0;
			}
			
			
			
				filter++;
				
		switch(filter) {
		case 1:
			magicWandSet("herMajesty");
		break;
		
		case 2:
			magicWandSet("vintage");
		break;
		
		case 3:
			magicWandSet("sinCity");
		break;
		
		case 4:
			magicWandSet("lomo");
		break;
		
		case 5:
			magicWandSet("pinhole");
		break;
	
		case 6:
			magicWandSet("revert");
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
                 cambioOrientacion("vertical");
       		 navegaSeccion("#process_decoration","slide");    
        }else if(esCanvas == true){
            
                cambioOrientacion("vertical");
       		 navegaSeccion("#process_frames","slide");
            
            
        }else{
                cambioOrientacion("horizontal");
      		 navegaSeccion("#creation_edit", "slide", true);
        }

    });

    $("#btTitleSave").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        datosUsuario.tituloAlbum = $("#tituloAlbum").val();
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

    $("#creation_saved .titular02").html(datosUsuario.tituloAlbum);

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
        trace("boton");
        if(datosUsuario.tipoLogin == "anonimo") {
            $("#passwordSet").show();
            $("#idSet").show();
            navegaSeccion("#address", "slideup");
        }else{
            $("#passwordSet").hide();
            $("#idSet").hide();
            navegaSeccion("#address", "slideup");
        }
         

    });


    
    $("#orderresume #cantidad").on("change",function(){
        calcularPrecioFinal();
    })

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
        
        
        //llamada server final guardar TOOOODOS LOS DATOS
        //llamar al upload de imagenes
        datosUsuario.nombre = $("#name").val();
        datosUsuario.telefono = $("#phone").val();
        datosUsuario.direccion = $("#addr1").val()+"###"+$("#zip").val()+"###"+$("#city").val()+"###"+$("#country").val();
        
        enviarPedido();
        //subirImagenes();
        
        
        
        //navegaSeccion("#payment", "slideup");

    });
    


});

/************************************
Pantalla Upload Fotos
************************************/
function actualizarProgreso(){
    
    $("#contadorUpload").html(fotoActualSubida+1);
    $("#totalUpload").html(fotosElegidas.length);
   
    
}

$(document).delegate("#upload_screen", "pageshow", function () {

fotoActualSubida = 0;
actualizarProgreso();
//colocar el array para mostrar el orden de páginas

enviarFoto(fotoActualSubida);

    $("#btUpBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#address", "slide", true);

    });

    $("#btUpFinish").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#finish", "slideup");

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
        fotosFinales = 0;
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
           // trace(e);
        }
    });


}

function loginUser() {
    var datos = { "user": $('#txtUserNameMF').val(), "password": $('#txtPassMF').val() };
    
    console.log($('#txtUserNameMF').val());
    console.log($('#txtPassMF').val());
    $.ajax({
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(datos),
        url: site_URL+'ws.asmx/login',
        success: function (data) {
        var cadenaJSON = JSON.parse(data.d);


            if (cadenaJSON.resultado == "OK") {
                
                logado = true;
                _userID = $('#txtUserNameMF').val();
                
                datosUsuario.id = cadenaJSON.mensaje; //obtenemos email (ID) objeto principal
                datosUsuario.tipoLogin = "millefeuille";  // esto es millefeuille
                
            navegaSeccion("#process_select", "slideup");
            

            
            }
            else {
                $('#spanErrorLogin').html('Wrong user ID or Password');
            }
        },
        error: function (e) {
         //   trace('error login: ' + e);
        }
    });


}

function getPortadas() {
    //decoracionnnnnnnnnnnnnnnnnnnnnnnnnnn
    trace("recuperando portadas");
    
    
    $.ajax({

       type: 'POST',
        dataType: "json",
        contentType: 'application/json',
      
        url: site_URL+'ws.asmx/recuperarPortadas',
        success: function(data) {
            trace(data);
        var cadenaJSON = JSON.parse(data.d);
        
        console.log(cadenaJSON);
        
        if(cadenaJSON.resultado == "OK") {

              $(".listadecoracion").html("");
              $("#bgdecoracion .divPaginationDots #marcadordecoracion").html("");
              
              for (var i=0;i<cadenaJSON.mensaje.portadas.length;i++){
                  var imgPortada = cadenaJSON.mensaje.portadas[i].img;
                  var idPortada =  cadenaJSON.mensaje.portadas[i].id;
                  $(".listadecoracion").append("<div><img src='"+RUTA_IMAGENES_PORTADA+imgPortada+"' data-id='"+idPortada+"'></div>");
                  $("#bgdecoracion .divPaginationDots #marcadordecoracion").append("<li></li>");
              }
              
               $($("#marcadordecoracion li")[0]).addClass("selected");
              
            var miSwipe = new Swipe(document.getElementById("sliderDeco"),{continuous:false,stopPropagation:true,callback: function(pos) {

                 $("#marcadordecoracion li").removeClass("selected");      
                 $($("#marcadordecoracion li")[pos]).addClass("selected");
                 datosUsuario.deco = $($(".listadecoracion div")[pos]).find('img').attr("data-id");
                 
                 }
          });

          }else{
              //se ha producido un error al recuperar portadas
              trace("error al recuperar portadas"+data.d);
        }
          
        },
        error: function(e) {
          trace("error de conexión: " + e);
            

            
        }
    });
}


function getMarcos() {
    
    trace("recuperando marcos");
    
    
    $.ajax({

       type: 'POST',
        dataType: "json",
        contentType: 'application/json',
      
        url: site_URL+'ws.asmx/recuperarMarcos',
        success: function(data) {
            trace(data);
        var cadenaJSON = JSON.parse(data.d);
        
        console.log(cadenaJSON);
        
        if(cadenaJSON.resultado == "OK") {

              $(".listaframes").html("");
              $("#bgframes .divPaginationDots #marcadorframes").html("");
              
              for (var i=0;i<cadenaJSON.mensaje.marcos.length;i++){
                  var imgMarcos = cadenaJSON.mensaje.marcos[i].img;
                  var idMarcos =  cadenaJSON.mensaje.marcos[i].id;
                  $(".listaframes").append("<div><div class='decoframecont'><img src='"+RUTA_IMAGENES_MARCOS+imgMarcos+"' data-id='"+idMarcos+"' /></div></div>");
                  $("#bgframes .divPaginationDots #marcadorframes").append("<li></li>");
              }
              
               $($("#marcadorframes li")[0]).addClass("selected");
              
            var miSwipe = new Swipe(document.getElementById("sliderFrames"),{continuous:false,stopPropagation:true,callback: function(pos) {

                 $("#marcadorframes li").removeClass("selected");      
                 $($("#marcadorframes li")[pos]).addClass("selected");
                 
                 datosUsuario.frame = $($(".decoframecont")[pos]).find('img').attr("data-id");
                 

                 }
                 
                 
          });

          }else{
              //se ha producido un error al recuperar portadas
              trace("error al recuperar marcos"+data.d);
        }
          
        },
        error: function(e) {
          trace("error de conexión: " + e);
            

            
        }
    });
}

function enviarPedido() {
    
   var datos = {'idUser':datosUsuario.id,
                'nombre':datosUsuario.nombre,
                'direccion':datosUsuario.direccion,
                'telefono':datosUsuario.telefono,
                'tipoPedido':datosUsuario.tipoPedido,
                'tipoPersonalizacion':2, //datosUsuario.deco !!!!!
                'cantidad':datosUsuario.cantidad,
                'numeroImagenes':datosUsuario.numeroImagenes,
                'costeUnidad':precioFoto,
                'costeTotal':datosUsuario.precioTotal
                };
            
            
    trace("enviando pedido al servidor");
    
    
    $.ajax({

       type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(datos),
        url: site_URL+'ws.asmx/pedido',
        success: function(data) {
            trace(data);
        var cadenaJSON = JSON.parse(data.d);
        
        trace(cadenaJSON);
        
        if(cadenaJSON.resultado == "OK") {
            trace("recibo respuesta correcta");
           trace(cadenaJSON);
           
           navegaSeccion("#upload_screen","slide");
           datosUsuario.idPedido = cadenaJSON.mensaje.idPedido;

          }else{
              //se ha producido un error al recuperar portadas
              trace("error al enviar "+data.d);
        }
          
        },
        error: function(e) {
          trace("error de conexión: " + e);
            

            
        }
    });
}

function enviarFoto(numFoto) {
    
    var canvasFoto;
    
    if(!!fotosElegidas[numFoto].canvasModificado){
        
        canvasFoto = fotosElegidas[numFoto].canvasModificado;
    }else{
        canvasFoto = fotosElegidas[numFoto].canvas;
    }
    
    var datos = {'idPedido':parseInt(datosUsuario.idPedido),
                 //'ordenFoto':fotosElegidas[numFoto].orden,
                 'ordenFoto':1,
                 'nombreImagen':canvasFoto
             };
    
 $.ajax({

       type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(datos),
        url: site_URL+'ws.asmx/uploadImg',
        success: function(data) {
            trace(data);
        var cadenaJSON = JSON.parse(data.d);
        
        trace(cadenaJSON);
        
        if(cadenaJSON.resultado == "OK") {
           trace("recibo respuesta correcta");
           trace(cadenaJSON);
           
           //navegarSeccion("#upload_screen","slide");
           //comprobamos si hemos terminado o hay que subir más fotos
           fotoActualSubida++;
           
           if (fotoActualSubida>=fotosElegidas.length){
               //he terminado
               navegaSeccion("#upload_screen","slide");
           }else{
               //hay que subir más fotos
               actualizarProgreso();
               enviarFoto(fotoActualSubida);
           }

          }else{
              //se ha producido un error al recuperar portadas
              trace("error al enviar "+data.d);
        }
          
        },
        error: function(e) {
          trace("error de conexión: " + e);
            

            
        }
    });    

    
}