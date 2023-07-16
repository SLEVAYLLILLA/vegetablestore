<?php 

$inputs = json_decode( file_get_contents("php://input") );

$name = $inputs->name;
$email = $inputs->email;
$message = $inputs->message;

$bejegyzes = "<p>$name | $email | ".date('Y-m-d H:i:s')."</p>
<p>$message</p>
<hr>
";

file_put_contents('bejegyzesek.txt', $bejegyzes, FILE_APPEND);

print json_encode(['message'=>'Sikeres mentés']);


