<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?= $site->title() ?></title>

  <?php $meta = $page->meta() ?>
  <?= $meta->robots() ?>

  <link rel="icon" href="/img/favicon.svg" type="image/svg+xml">

  <?= vite()->client() ?>
  <?= vite()->css() ?>

</head>
<body>

  <div id="app"></div>
  <script id="data-site" type="application/json">
    <?= \Kirby\Data\Json::encode($data) ?>
  </script>

  <?= vite()->js() ?>

</body>
</html>
