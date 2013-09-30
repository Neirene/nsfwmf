$(document).delegate("#process_select","pageshow",function() {

///////////////////YUMMY SLIDES////////////////////

/**********************************************
Este es el script principal que inicia los
efecto de sliders presentes en muchas pantallas
del app es el mismo codigo reutilizado muchas
veces solo variando los nombres de variables y
elementos seleccionados a traves de jQuery
**********************************************/	



/*************************************************
				Variables Del Script
**************************************************/

//////////////GLOBALS///////////////
var areaaccion = "#process_select";
var velscroll = 50

//////////VARIABLES DE LAS LISTAS////////////
var idlista = "#listaproceso";
var idmarcador = "#marcadoresproceso";


///VARIABLES DE CONTROL///
//!Importante: No es necesario tocar estas//
var tamanoelemento = $(idlista + " li img");
var tamanolista = $(tamanoelemento).outerWidth(true);
var indice = 0;	

var i = 1;

/*****************************************************
Estos son los eventos principales que llaman a
las funciones de movimiento son eventos pre
configurados que pertenecen a la API de jQuery
Mobile y se definen con el codigo:
$(elemento).on("swipeleft" (o right), nombrefuncion);
******************************************************/

	
$(areaaccion).on("swipeleft", lefthandler);
$(areaaccion).on("swiperight", righthandler);
	

//Funciones llamadas por los eventos izquierda y derecha

	function lefthandler() {
		
		
		 $(idlista + ' li:first').effect("slide", {direction: "right"} ,500, function () { 
		 /*$(this).appendTo($(idlista))*/ });
				
		
		
		/*
		$(idlista).animate({marginLeft: -1 * tamanolista},velscroll,"easeInOutCirc",function() {
			
			$(this).find("li:last").after($(this).find("li:first")); 												//Ubicamos el ultimo elemento de la lista y lo ponemos antes del primer elemento

			$(idlista).hide(0,																						//El elemento anterior ya visto desaparece instantaneamente y da paso al siguiente pero 'oculto' todavia
			
			
							function() {																			//Asi que llamamos a esta funcion que se encargara de dos cosas:
							$(idlista).animate({marginLeft: tamanolista},velscroll,"easeInOutCirc",					//mover el elemento (todavia oculto) hasta el otro lado de la pantalla y
																													//mostrarlo en pantalla (pero todavia oculto fuera de pantalla)
																													//y por ultimo moverlo hasta la posicion inicial (dentro del div) para que el usuario lo vea
										function() {																//con esto se consigue el efecto de slide infinito
										$(this).show().animate({marginLeft:0})
										});
										

							});
			
			$(this).find("li:eq(0)").show()																			//Para evitar conflictos y gente ociosa que quiera petar el codigo tenemos esta ultima funcion de
																													//'mostrar' el primer elemento de la lista nuevamente en caso de que el usuario decida
		});																											//llamar a la funcion derecha antes de que acabe el recorrido de la izquierda y viceversa
		
*/
	//Los marcadores de posicion y numero de elementos

		indice = (indice + 1) % 3;																					//Esta variable definida anteriormente lo que va a hacer es actuar como contador parecido a un i++
																													//solo que esta vez sumara 1 valor hasta que este sea igual al resto (%) 3 
		$(idmarcador).find('li').removeClass("selected").eq(indice).addClass("selected");							//cuando el valor llega al resto 3 se vuelve a inicializar en 0 y asi sucesivamente
		
																													//A nivel de jQuery la linea es, buscame el li, quitale la clase actual 'selected', pasamos al otro li 
	}																												//con .eq(variablecontadorindex), y agregamos la class 'selected' al proximo li y asi sucesivamente.
	
	
	
	
	function righthandler() {	

		$(idlista).animate({marginLeft: 1 * tamanolista},velscroll,"easeInOutCirc",function() {						//Lo mismo que arriba solo que varia los valores negativos/positivos del marginleft
		
			$(this).find("li:last").after($(this).find("li:first"));
			
			$(idlista).hide(0,
			
			
							function() {
							$(idlista).animate({marginLeft: -1 * tamanolista},velscroll,"easeInOutCirc",
							
							
										function() {
										$(this).show().animate({marginLeft:0})
										});
										
										
							});
			
			
			$(this).find("li:eq(0)").show()
			
		});
	
		
			if (indice == 0) {
			
				indice = 2;
			
			} else {
			
				indice = (indice - 1) % 3;
			
			}
		
		$(idmarcador).find('li').removeClass("selected").eq(indice).addClass("selected");
		
		
	}
	
	
	
});
	