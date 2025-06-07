<?php
$galleryDir = __DIR__ . "/gallery";

if (!file_exists($galleryDir)) {
    mkdir($galleryDir, 0777);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['image'])) {
    $file = $_FILES['image'];

    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (in_array($file['type'], $allowedTypes)) {
        $filename = basename($file['name']);
        $targetPath = $galleryDir . '/' . $filename;
        move_uploaded_file($file['tmp_name'], $targetPath);
    }

    header('Location: ' . $_SERVER['PHP_SELF']);
    exit;
}

$images = array_filter(scandir($galleryDir), function($file) use ($galleryDir) {
    $path = $galleryDir . '/' . $file;
    return is_file($path) && preg_match('/\.(jpe?g|png|gif)$/i', $file);
})
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" enctype="multipart/form-data">
        <input type="file" name="image" accept="image/*" required>
        <button type="submit">Download</button>
    </form>

    <div class="gallery">
        <?php foreach ($images as $img): ?>
            <img src="gallery/<?= htmlspecialchars($img) ?>" alt="image">
        <?php endforeach; ?>
    </div>
</body>
</html>