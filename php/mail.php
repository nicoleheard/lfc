<?php 
    $name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$recipient = "theard@lfchomerepair.com";
	$subject = "Inquiry From LFCHomeRepair.com";
	$formcontent = "From: $name \nEmail: $email \nMessage: $message";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	
	$return['msg'] = '<p>Thank you for your inquiry. Someone will get back to you within 1 to 2 business days.</p>';
	echo json_encode($return);
	exit();
?>