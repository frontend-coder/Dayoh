<?php

$recepient = "frontendercode@gmail.com";
$sitename  = "Dayoh.local";
$subject   = "тестированине отправки телефона";

$sendemail = trim($_POST["sendemail"]);
$formaone = trim($_POST["formaone"]);

$message = "
С какого сайта пришло сообщение: $sitename  <br>
Место размещения формы в шаблоне: $formaone  <br>

Почтовый ящик: $sendemail";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $subject, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");
?>