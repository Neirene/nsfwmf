<?php

header('Content-Type: image/png');
header('Access-Control-Allow-Origin: *');  

if (isset($_GET["URL"])) {
    $url = $_GET["URL"];
    $imagen = file_get_contents($url);
    echo $imagen;
    
}else {
    
}
    
   
?>



