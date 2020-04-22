<?php
	$project_name = "Заявка с сайта Полотенцесушители";
	$from_email = "leylalola292@gmail.com";
	$to_email = "leylalola292@gmail.com";

	$message = "Имя: ".trim($_POST["name"]);
	$message .= "; Телефон: ".trim($_POST["tel"]);
	$message .= "; Телефон: ".trim($_POST["city"]);
	$message .= "; Сумма заказа: ".trim($_POST["summ"]);
	if(isset($_POST["message"])) $message .= "; Сообщение: ".trim($_POST["message"]);
	$message .= "; Сумма заказа: ".trim($_POST["summ"]);
	$headers = "From: $from_email \r\n";
	$headers .= "Content-type: text/html; charset=utf-8";
	
	$send_mail = mail($to_email, $project_name, $message, $headers);
	if($send_mail){
		
	}
	else{
		
	}
?>
