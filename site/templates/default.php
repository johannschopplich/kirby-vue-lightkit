<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?= $site->title() ?></title>

  <?php $meta = $page->meta() ?>
  <?= $meta->robots() ?>
  <?= $meta->jsonld() ?>
  <?= $meta->social() ?>

  <link rel="icon" href="/img/favicon.svg" type="image/svg+xml">

  <?= vite()->js() ?>
  <?= vite()->css() ?>

  <script>
    ;(() => {
      const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches
      const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
      if (setting === 'dark' || (prefersDark && setting !== 'light')) {
        document.documentElement.classList.toggle('dark', true)
      }
    })()
  </script>

</head>
<body>

  <div id="app"></div>
  <script id="data-site" type="application/json"><?= \Kirby\Data\Json::encode($data) ?></script>

</body>
</html>
