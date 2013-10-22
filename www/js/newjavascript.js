/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Función para hacer login
function login() {
    //Obtenemos los datos del formulario
    var usuario = $("#usuarioLogin").val();
    var pass = $("#passwordLogin").val();

    var resultado = "";

    //Compruebo que los campos estén rellenos
    if (usuario == "") {
        resultado += "# - El campo usuario es obligatorio.#";
    }

    if (pass == "") {
        resultado += "# - El campo password es obligatorio.#";
    }

    //Si no ha habido ningún error en la comprobación de campos hacemos la llamada AJAX, sino sacamos errores por pantalla
    if (resultado == "") {

        var datos = { "usuario": usuario, "password": pass };

        //LLAMADA AJAX
        $.ajax({
            type: 'POST',
            url: "ws.asmx/login",
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                if (response.d.resultado == "OK") {
                     //Guardo el código encriptado del usuario
                      idUsuario = response.d.mensaje;
                }
                else {
                    //
                }
            },
            error: function (msg, tipo) {
                alert("ERROR EN WS tipo:" + tipo + "::Status:" + msg.status + ":::" + msg.statusText + "*****respuesta:" + msg.responseText);
            }
        });
    }
    else {
        alert(false, resultado);
    }

}




//Función para recuperar las portadas que tengamos
function recuperarPortadas() {
    //LLAMADA AJAX
    $.ajax({
        type: "POST",
        url: "ws.asmx/recuperarPortadas",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            if (response.d.resultado == "OK") {
               //Aquí hago las operaciones oportunas
            }
            else {
                //Preguntar a David que mensaje de error quiere que saquemos
            }
        },
        error: function (msg, tipo) {
                alert("ERROR EN WS tipo:" + tipo + "::Status:" + msg.status + ":::" + msg.statusText + "*****respuesta:" + msg.responseText);
        }
    });
}