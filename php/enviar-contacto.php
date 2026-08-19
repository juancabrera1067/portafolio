<?php
/* php/enviar-contacto.php
   Recibe el formulario de contacto y envía el mensaje por correo usando mail().
   Requiere un hosting con PHP (la mayoría lo incluye).

   CONFIGURACIÓN OBLIGATORIA: cambia TU_CORREO por tu dirección real.
   Opcional: usa SMTP (PHPMailer) si tu hosting bloquea mail(). */

$DESTINATARIO = 'juandedioscabrerasanchez@gmail.com';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
    exit;
}

// Campo trampa antispam (si está lleno, es un bot y no respondemos)
if (!empty($_POST['website'])) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Recibido.']);
    exit;
}

$name        = trim($_POST['name'] ?? '');
$email       = trim($_POST['email'] ?? '');
$projectType = trim($_POST['project-type'] ?? '');
$budget      = trim($_POST['budget'] ?? 'No especificado');
$message     = trim($_POST['message'] ?? '');

// Validación básica del lado del servidor
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Faltan campos requeridos.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Correo inválido.']);
    exit;
}

$subject = "Nuevo mensaje desde tu portafolio - $projectType";

$body  = "Nombre: $name\n";
$body .= "Correo: $email\n";
$body .= "Tipo de proyecto: $projectType\n";
$body .= "Presupuesto estimado: $budget\n\n";
$body .= "Mensaje:\n$message\n";

$headers  = "From: Portafolio CabTec <no-reply@tu-dominio.com>\r\n";
$headers .= "Reply-To: $email\r\n";

$enviado = @mail($DESTINATARIO, $subject, $body, $headers);

if ($enviado) {
    echo json_encode(['success' => true, 'message' => '¡Mensaje enviado con éxito! Te responderé en menos de 24 horas.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'No se pudo enviar. Intenta de nuevo o escríbeme por WhatsApp.']);
}