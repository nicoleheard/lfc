<?php
  $name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$recipient = "theard@lfchomerepair.com";
	$subject = "Inquiry From LFCHomeRepair.com";
  if ($name && $email && $message && (strlen($message) > 10)) {
  	$formcontent = "From: $name \nEmail: $email \nMessage: $message";
  	mail($recipient, $subject, $formcontent) or die("Error!");
    $return['msg'] = '<p>Thank you for your inquiry. Someone will get back to you within 1 to 2 business days.</p>';
  } else {
    	$return['msg'] = '<p>There was an error submitting your inquiry. Please try again.</p>';
  }

	echo json_encode($return);
	exit();
?>
