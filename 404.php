<?php include $_SERVER['DOCUMENT_ROOT'] . '/php/head.php';?>

 	<?php include $_SERVER['DOCUMENT_ROOT'] . '/php/load.php';?>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/php/header.php';?>

    <div id="error404" class="panel one fullscreen">
    	<div class="container">
        	<div class="one">
            	<h3 style="padding-top:10%">Sorry, the page you are looking for can't be found.</h3>
                <div class="content" style="padding-bottom:10%">
                    <p>You may have mistyped the address or the page may have moved. Please visit our <a href="/index.php">homepage</a> or check below to find the page you were looking for.</p>
                    <?php include $_SERVER['DOCUMENT_ROOT'] . '/php/pages.php';?>
             	</div>
            </div>
        </div>
    </div>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/php/footer.php';?>

</body>
</html>
