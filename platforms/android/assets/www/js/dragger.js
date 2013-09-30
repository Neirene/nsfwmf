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
    
    console.log(__queImg,__queContainer);
    $(document).on("mousedown",iniciarMovimiento);
}

function stopMovimiento(){
    
 $(document).off("mousedown");
}

function iniciarMovimiento(e){
    e.preventDefault();
    e.stopPropagation();
        //calcula el punto en todo el documento donde se ha clicado
	__posX = e.offsetX;
	__posY = e.offsetY;
	
        //calcula el punto actual donde esta ubicada la imagen en el documento
	__posXImg = __queImg.position().left;
	__posYImg = __queImg.position().top;
	
	$(document).on("mousemove",moverImagen);
	$(document).on("mouseup", finMovimiento);
	
}


function finMovimiento(e){
    console.log("finMovimiento ",e.offsetX);
	$(document).off("mousemove");
	$(document).off("mouseup");
}

function moverImagen(e){
        console.log("moverImagen ",e.offsetX);
	var distX = e.offsetX - __posX;
	var distY = e.offsetY + __posY;

       //ubicacion futura de la imagen
	var fImgX = Math.round(__posYImg - distX); 
	var fImgY = Math.round(__posXImg - distY);

            if(fImgX < 0) {
                fImgX = 0;
            }
            
        if(fImgY < 0) {
            fImgY = 0;
        }            
            
         
        var widthImagen = __queImg.width();
        var widthContenedor = __queContainer.width(); 

        if(fImgX < -widthImagen+widthContenedor) {
           fImgX = -widthImagen+widthContenedor;
        }            
            
            

            
        var heightImagen = __queImg.height();
        var heightContenedor = __queContainer.height(); 

        if(fImgY < -heightImagen+heightContenedor) {
              fImgY = -heightImagen+heightContenedor;
          } /*  
  */          
        console.log(fImgY,fImgX);    
            
        
	__queImg.css({top:fImgX,left:fImgY});
        

}