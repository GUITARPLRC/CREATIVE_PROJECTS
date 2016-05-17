<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = "Contact Form";
$content = "From: $name \n Message: $message";
$header = "From: $email \r\n";
$me = "guitarplrc@yahoo.com";
mail($me, $subject, $content, $header) or die ("Error!");
echo "Thank you!";
?>