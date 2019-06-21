<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        $id = $_GET["id"]
    ?>
    <a href="index.php">Back to index</a>

    <h3 style="margin-top: 0.5em;text-decoration: underline;">Problem <?=$id?>:</h3>
    <h4 id=problem></h4>


    <h3 style="margin-top: 3em;text-decoration: underline;">Solution:</h3>
    <p id="solution"></p>

    <script src="js/<?=$id?>.js"></script>
</body>
</html>