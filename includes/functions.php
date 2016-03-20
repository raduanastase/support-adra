<?php
	function refresh($url)
	{
		header("Refresh:0;URL=".$url);
		//echo '<a href="'.$url.'">Pagina se incarca aici</a>';
		exit();
	}	
?>