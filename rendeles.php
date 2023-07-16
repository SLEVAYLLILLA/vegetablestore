<?php 

$inputs = json_decode( file_get_contents("php://input") );

$name = $inputs->name;
$email = $inputs->email;
$phone = $inputs->phone;
$city = $inputs->city;
$zip = $inputs->zip;
$street = $inputs->street;
$haz = $inputs->haz;
$message = $inputs->message;

$bejegyzes = "<p>$name | $email | $phone | $city | $zip | $street | $haz".date('Y-m-d H:i:s')."</p>
<p>$message</p>
<hr>
";

file_put_contents('megrendeles.txt', $bejegyzes, FILE_APPEND);

print json_encode(['message'=>'Sikeres mentés']);
