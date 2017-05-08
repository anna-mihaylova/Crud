<?php
session_start();

$data = [
		'name' => empty($_POST['name']) ? '' : $_POST['name'],
		'quantity' => empty($_POST['quantity']) ? '' : $_POST['quantity'],
		'price' => empty($_POST['price']) ? '' : $_POST['price'],
];

$key = isset($_POST['key']) ? $_POST['key'] : null;

if (empty($key)) {
	$_SESSION['list'][] = $data;	
} else {
	$_SESSION['list'][$key] = $data;
}

echo json_encode(['success' => true]);
