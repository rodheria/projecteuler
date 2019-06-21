<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project Euler</title>
</head>
<body>
    <?php
        $dir = "js/";
        $exercises = glob($dir."*.js");
        $excount = 0;
    ?>

    <h1>Exercises from <a href="https://projecteuler.net/" target="_blank">https://projecteuler.net/</a></h1>

    <ul style="list-style:none;">
        <?php foreach ($exercises as $id => $exercise): ?>
            <li><a style="font-size:2em;" href="exercise.php?id=<?=$id+1?>">Exercise <?=$id+1?></a></li>
        <?php 
        $excount++;
        endforeach; ?>
    </ul>




    
</body>
</html>