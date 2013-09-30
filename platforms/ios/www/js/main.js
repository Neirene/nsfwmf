
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
      /*
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        */
       
        console.log('Received Event: ' + id);
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
        $soportecanvas = $($("#testcv")[0]);
        
        
        $("#fullScPic").draggable();
        
        //////////////////////////SWIIPE TOP SWIPE DOWN/////////////////////////////
 
 (function() {
    var supportTouch = $.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
    $.event.special.swipeupdown = {
        setup: function() {
            var thisObject = this;
            var $this = $(thisObject);
            $this.bind(touchStartEvent, function(event) {
                var data = event.originalEvent.touches ?
                        event.originalEvent.touches[ 0 ] :
                        event,
                        start = {
                            time: (new Date).getTime(),
                            coords: [ data.pageX, data.pageY ],
                            origin: $(event.target)
                        },
                        stop;

                function moveHandler(event) {
                    if (!start) {
                        return;
                    }
                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[ 0 ] :
                            event;
                    stop = {
                        time: (new Date).getTime(),
                        coords: [ data.pageX, data.pageY ]
                    };

                    // prevent scrolling
                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                        event.preventDefault();
                    }
                }
                $this
                        .bind(touchMoveEvent, moveHandler)
                        .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                                Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                    .trigger("swipeupdown")
                                    .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
            });
        }
    };
    $.each({
        swipedown: "swipeupdown",
        swipeup: "swipeupdown"
    }, function(event, sourceEvent){
        $.event.special[event] = {
            setup: function(){
                $(this).bind(sourceEvent, $.noop);
            }
        };
    });

})();
        
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

function mainslides (areaaccion,idlista,idmarcador) {
           
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
		
		$(idlista).animate({marginLeft: destino, opacity: "1"},velscroll,easingtype,function() {});
																																					
		
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

		$(idlista).animate({marginLeft: destino, opacity: "1"},velscroll,easingtype,function() {});
		
                
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

    $("#fotos").html("LOADING");


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

    $("#fotos").html("LOADING");



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

    $("#fotos").html("LOADING");




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

var numeroFotos = 9;
var fotosElegidas;




function convertirCanvas () {

    
    var dataURL;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    
    var img = new Image();
    
    
    img.onload = function() {
            
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            dataURL = canvas.toDataURL(); 
            fotosfull.push(dataURL)
     };
     img.setAttribute('crossOrigin','anonymous');
     img.src = "http://genericwebdomain.com/mille-feuille/proxy.php?URL="+miFoto.url;
 
        //miFoto.canvas = canvas;
        
        console.log(fotosfull);

                
        
        var $dibujacanvas = $soportecanvas.clone();
            $dibujacanvas.attr("id",miFoto.id);
        
           $("#testcv").append(miFoto.canvas);
               
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
$(document).delegate("#welcomearea", "pageshow", function () {

    $("#debugm").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        testnavi();

    });

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

    $("#swipejump a").off().on("swipeleft", pagejump);
    $("#swipejump a").on("swiperight", pagejump);

    function pagejump(e) {
        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#aboutus", "slide");

    }


});

/************************************
Pantalla de "acerca de"
************************************/
$(document).delegate("#aboutus", "pageshow", function (e) {

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
    mainslides("#about01", "#listaabout", "#marcadoresabout");



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

});

/************************************
Pantalla de seleccion tipo producto
************************************/
$(document).delegate("#process_select", "pageshow", function () {

    //slides
    mainslides("#process_select", "#listaproceso", "#marcadoresproceso");


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

    var tipoproducto = new Array();
        tipoProducto = ["CREATE A NEW ALBUM","CREATE PHOTO FRAME","PRINT YOUR PHOTOS"];

    $("#btCreateNewAlbum").off().on("tap", function (e) {

        //recorre los elementos buscando el elegido
        $.each($("#process_select #marcadoresproceso").children(), function (index, value) {

            
            if ($(value).hasClass("selected")) {

                jQuery("#btCreateNewAlbum").text(tipoProducto[index]);
                
                datosPedido.tipoPedido = index;
            }

        });


        var destino;

        switch (datosPedido.tipoPedido) {

            case 0:
                //album
                destino = "#process_decoration";
                break;

            case 1:
                //marco
                destino = "#process_frames";  
                break;

            case 2:
                //fotos
                destino = "#process_source";
                break;

        }


        navegaSeccion(destino, "slideup");
        e.preventDefault();
        e.stopPropagation();
    });



});

/************************************
Pantalla de seleccion decoracion
************************************/
$(document).delegate("#process_decoration", "pageshow", function () {

    $("#btDecoBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_select", "slide", true);

    });

    $("#btDecoSource").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_source", "slide");

    });


    //slides
    mainslides("#process_decoration", "#listadecoracion", "#marcadordecoracion");


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


    //slides
    mainslides("#process_frames", "#listaframes", "#marcadorframes");



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
$(document).delegate("#creation_gallery","pageshow",function(e) {


    $("#btCreationSource").off("tap").on("tap",function(e){
        
        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#process_source","slide",true);
        
    });



    $("#btCreationEdit").off("tap").on("tap",function(e){
        

        if(fotosfinales > numeroFotos){
            
            console.log("has seleccionado 10");
            console.log("Final checkpoint!");
             
            //navegaSeccion("#creation_edit","slide");
        
            
            var elegidas = $("#fotos .contenedorpic .selectioncomplete").parent();
            
            
            var urlelegidas;
            urlelegidas = new Array();
            
           
           idElegidas = new Array();
            
            
            fotosElegidas = new Array();

            
            
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
            console.log("Seleciona al menos 10!");
            
            
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
var fotosfull = new Array();
//fotosfull = ["default.jpg", "p01.jpg", "p02.jpg", "p03.jpg", "gal01.jpg"];

var paginasFull = new Array(10);
$(paginasFull).each(function (index) {
    paginasFull[index] = 0;
});

var fi = 0;
var pi = 0;


$(document).delegate("#creation_edit", "pageshow", function () {


//navigator.screenOrientation.set('portrait');
    $("#btEditBack").off("tap").on("tap", function (e) {



        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_gallery", "slidedown");
        
        fotosfull = [];
        
    });

    $("#btEditTitle").off("tap").on("tap", function (e) {


        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_title", "slideup");

    });

    $(".btEditFullScreen").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_full","fade");
        $("body").css({backgroundColor:"black",backgroundImage:""}).fadeIn();

    });

    $("#arrowUp1").off("tap").on("tap", function (e) {


        fi++;
        console.log(fi);
        if (fi >= fotosfull.length) {
            fi = 0;
        }

        $("#imgIzq").css("background-image","url("+  fotosfull[fi] + ")");
        $("#fullScPic").attr("src", "" + fotosfull[fi] + "");
        //$("#fullScPic").css("background-image","url("+fotosfull[fi]+")");

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
        console.log(fi);


        e.preventDefault();
        e.stopPropagation();

    });

    $("#arrowUp2").off("tap").on("tap", function (e) {


        fi++;
        console.log(fi);
        if (fi >= fotosfull.length) {
            fi = 0;
        }

        $("#imgDer").css("background-image","url("+  fotosfull[fi] + ")");
        $("#fullScPic").attr("src", "" + fotosfull[fi] + "");


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
        console.log(fi);


        e.preventDefault();
        e.stopPropagation();

    });
    
    $('.book').on("swipeup", paginaIzquierda);
    $('.book').on("swipedown", paginaDerecha);

    function paginaDerecha() {
        if (paginasFull[pi] != fi)
            paginasFull[pi] = fi;
        console.log("pi antes de pinchar: " + pi);
        pi--;
        console.log("pi desués de pinchar: " + pi);

        if (pi < 0) {
            pi = paginasFull.length - 1;
        }
        fi = paginasFull[pi];
        if (pi % 2 == 1) {
            //////////////////////////////////CAMBIAMOS AMBAS PÁGINAS//////////////////////////////////
            console.log("cambiamos páginas");
            $('#veloDer').fadeOut();
            $('#veloIzq').fadeIn();
            $('#txtDer').text('Page ' + parseInt(pi));
            $('#txtIzq').text('Page ' + parseInt(pi + 1));
            $("#imgDer").css("background-image","url("+ fotosfull[paginasFull[pi]] + ")");
            $("#imgIzq").css("background-image","url("+ fotosfull[paginasFull[pi - 1]] + ")");

        }
        else {
            console.log("no cambiamos páginas");
            $('#veloDer').fadeIn();
            $('#veloIzq').fadeOut();
            $('#txtIzq').text('Page ' + parseInt(pi));
            $('#txtDer').text('Page ' + parseInt(pi + 1));
        }

        e.preventDefault();
        e.stopPropagation();
    }

    function paginaIzquierda() {
        if (paginasFull[pi] != fi)
            paginasFull[pi] = fi; //fotosfull[fi];
        console.log("pi antes de pinchar: " + pi);
        pi++;
        console.log("pi después de pinchar: " + pi);

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
            $("#imgDer").css("background-image","url("+ fotosfull[paginasFull[parseInt(pi + 1)]] + ")");
            $("#imgIzq").css("background-image","url("+ fotosfull[paginasFull[pi]] + ")");
        }
        else {
            $('#txtIzq').text('Page ' + parseInt(pi + 1));
            $('#txtDer').text('Page ' + parseInt(pi));
            $('#veloDer').fadeOut();
            $('#veloIzq').fadeIn();
        }

        e.preventDefault();
        e.stopPropagation();
    }

    $("#pagIzq").off("tap").on("tap", function (e) {
        if (paginasFull[pi] != fi)
            paginasFull[pi] = fi;
        console.log("pi antes de pinchar: " + pi);
        pi--;
        console.log("pi desués de pinchar: " + pi);

        if (pi < 0) {
            pi = paginasFull.length - 1;
        }
        fi = paginasFull[pi];
        if (pi % 2 == 1) {
            //////////////////////////////////CAMBIAMOS AMBAS PÁGINAS//////////////////////////////////
            console.log("cambiamos páginas");
            $('#veloDer').fadeOut();
            $('#veloIzq').fadeIn();
            $('#txtDer').text('Page ' + parseInt(pi));
            $('#txtIzq').text('Page ' + parseInt(pi + 1));
            $("#imgDer").css("background-image","url("+ fotosfull[paginasFull[pi]] + ")");
            $("#imgIzq").css("background-image","url("+ fotosfull[paginasFull[pi - 1]] + ")");

        }
        else {
            console.log("no cambiamos páginas");
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
        console.log("pi antes de pinchar: " + pi);
        pi++;
        console.log("pi después de pinchar: " + pi);

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
            $("#imgDer").css("background-image","url("+ fotosfull[paginasFull[parseInt(pi + 1)]]+")");
            $("#imgIzq").css("background-image","url("+ fotosfull[paginasFull[pi]]+")");
        }
        else {
            $('#txtIzq').text('Page ' + parseInt(pi + 1));
            $('#txtDer').text('Page ' + parseInt(pi));
            $('#veloDer').fadeOut();
            $('#veloIzq').fadeIn();
        }

        e.preventDefault();
        e.stopPropagation();

    });

});


/************************************
Pantalla Foto FullScreen
************************************/
var filter = 0;
$(document).delegate("#creation_full", "pageshow", function () {

    $("#btFullScreen").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_edit", "fade");

    });
    

    $("#wandBt").off("tap").on("tap", function (e) {
        

        
        
        
        if (filter >= 4) {
            filter = 0
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
    }

        e.preventDefault();
        e.stopPropagation();


    });








});



/************************************
Pantalla Vista Preliminar
************************************/
$(document).delegate("#creation_title", "pageshow", function () {

    $("#btTitleBack").off("tap").on("tap", function (e) {

        e.preventDefault();
        e.stopPropagation();
        navegaSeccion("#creation_edit", "slide", true);

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
            console.log(data);
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
            console.log('error: ' + e);
        }
    });


}


