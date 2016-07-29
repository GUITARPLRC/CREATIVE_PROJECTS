<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];
$subject = "Contact Form";
$content = "From: $name \n Message: $message";
$header = "From: $email \r\n";
$me = "guitarplrc@yahoo.com";

if ($name === "") :
  echo "<div>Sorry, your name is a required field.</div>";
endif; // name field empty

if ($email === "") :
  echo "<div>Sorry, your email is a required field.</div>";
endif; // email field empty

if ( !(preg_match('[A-Za-z]+', $name)) ):
  echo "<div>Sorry, your name must only contain letters</div>";
endif;

mail($me, $subject, $content, $header) or die("Error!");
echo "Thank you! Your message has been sent."

?>