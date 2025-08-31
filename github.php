<?php
header('Content-Type: application/json');

$username = 'hc8841'; // seu GitHub

$ch = curl_init("https://api.github.com/users/$username/repos?sort=updated&per_page=5");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
$response = curl_exec($ch);
curl_close($ch);

echo $response;
