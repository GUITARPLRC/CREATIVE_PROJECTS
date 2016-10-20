<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];
$human = $_REQUEST['human'];
$subject = "Contact Form";
$content = "From: $name \n Message: $message";
$header = "From: $email \r\n";
$me = "guitarplrc@yahoo.com";

if ($name === "") {
  echo "<div>Sorry, your name is a required field.</div>";
} // name field empty
else if ($email === "") {
  echo "<div>Sorry, your email is a required field.</div>";
} // email field empty
else if ($message === "") {
  echo "<div>Please include a message.</div>"
} // message field empty
else {
  mail($me, $subject, $content, $header) or die("Error!");
  echo "Thank you! Your message has been sent.";
} // SUCCESS

?>