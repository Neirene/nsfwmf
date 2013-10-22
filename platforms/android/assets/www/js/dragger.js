/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var __posX;
var __posY;
var __posXImg;
var __posYImg;
var __queImg;
var __queContainer;

function startMovimiento(queImg,queContainer){
    __queImg = queImg;
    __queContainer = queContainer;
   
    trace("inicio el movimiento")
   
    $(document).on("vmousedown",iniciarMovimiento);
}

function stopMovimiento(){
    
 $(document).off("vmousedown");
 $(document).off("vmousemove");
 $(document).off("vmouseup");
}

function iniciarMovimiento(e){
    trace("inicio movimiento en "+e.pageX+"**"+e.pageY);
        //calcula el punto en todo el documento donde se ha clicado
	__posX = e.pageX;
	__posY = e.pageY;
	
     //calcula el punto actual donde esta ubicada la imagen en el documento
	__posXImg = __queImg.position().left;
	__posYImg = __queImg.position().top;
	
	$(document).on("vmousemove",moverImagen);
	$(document).on("vmouseup", finMovimiento);
	
    e.preventDefault();
    e.stopPropagation();
}


function finMovimiento(e){
   // trace("finMovimiento ",e.offsetX);
	$(document).off("vmousemove");
	$(document).off("vmouseup");
}

function moverImagen(e){
    trace("moverImagen :" + e.pageX +"**"+ e.pageY);
    trace("--------------------------------------");
	var distX = e.pageX - __posX;
	var distY = e.pageY - __posY;

       //ubicacion futura de la imagen
	var fImgX = __posXImg + distX;
	var fImgY = __posYImg + distY;
    trace("ubicacionImagen :" + fImgX +"**"+ fImgY);
    
             
        
        var offsetX = $(".borderEffect").offset().left;
        var offsetY = $(".borderEffect").offset().top;
            
        if(fImgX > offsetX) {
            fImgX = offsetX;
        }
            
        if(fImgY > offsetY) {
            fImgY = offsetY;
        } 
         
        var widthImagen = __queImg.width();
        var widthContenedor = __queContainer.width(); 

        if(fImgX < -widthImagen+widthContenedor+offsetX) {
           fImgX = -widthImagen+widthContenedor+offsetX;
        }            
            
            

            
        var heightImagen = __queImg.height();
        var heightContenedor = __queContainer.height(); 

        if(fImgY < -heightImagen+heightContenedor+offsetY) {
              fImgY = -heightImagen+heightContenedor+offsetY;
          } 
 
       // trace(fImgY,fImgX);
            __queImg.css({top:fImgY,left:fImgX});
        
	//__queImg.css({top:fImgX,left:fImgY});
        

}