<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0;">
<title>LFC Services Home Repair Division</title>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,300,400,600,700,800' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:300italic,400italic,700italic,400,300,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="/css/main.css" />
<?php
  $pathname = explode("/", dirname($_SERVER['SCRIPT_NAME']));
  if(count($pathname) > 1) {
    $folder = $pathname[1];
    if($folder != "") {
      echo '<link rel="stylesheet" type="text/css" href="/css/' . $folder . '.css" />' . "\n";
    }
  }
?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>
<script src="/js/skrollr.js"></script>
<script src="/js/waypoints.js"></script>
<script src="/js/waypoints-sticky.js"></script>
<?php
   if(count($pathname) <= 1 || $folder == "") {
     echo '<script src="/js/testimonials.js"></script>' . "\n";
     echo '<script src="/js/form.js"></script>' . "\n";
     echo '<script src ="/js/menu.js"></script>' . "\n";
     echo '<script src ="/js/scroll.js"></script>' . "\n";
   }
?>
<script src="/js/load.js"></script>
<script src="/js/ready.js"></script>
</head>
<body>
