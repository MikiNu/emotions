<?php
//header("Content-Type: text/html; charset=UTF-8");

$emotion = json_decode(file_get_contents('php://input'), true);

if(is_numeric($emotion['id'])){
   $smile = json_decode(file_get_contents('smiles.json'), true);
   foreach ($smile as &$subSmile) {
       foreach ($subSmile as &$value) {
           if ($value['id'] == $emotion['id']) {
               $value['category'] = $emotion['category'];
           }
       }
   }
   $newJsonString = json_encode($smile, JSON_UNESCAPED_SLASHES);
   file_put_contents('smiles.json', $newJsonString);
}
else{
   echo "Error";
}
?>
