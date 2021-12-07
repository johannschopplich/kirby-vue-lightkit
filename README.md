<p align="center">
  <img src="./.github/icon.svg" alt="Logo of Kirby + Vue.js Lightkit" width="114" height="114">
</p>

<h3 align="center">Kirby + Vue.js Lightkit</h3>

<p align="center">
  Simple SPA for straightforward frontend projects<br>
  <a href="https://kirby-vue-lightkit.jhnn.dev"><strong>Explore the lightkit live »</strong></a>
</p>

<br>

## Kirby + Vue.js Lightkit

### Key Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next) & [Vite](https://vitejs.dev)
- 📦 [Components auto importing](./src/components/)
- 📑 [Nuxt-inspired module system](./src/modules/)
- 🗂 [File-based routing](./src/pages) like Nuxt.js
- 🧩 [Layout system](./src/layouts)
- 🎨 [Windi CSS](https://github.com/windicss/windicss) – Next generation utility-first CSS framework
- 😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)
- 🔍 SEO-friendly: server-side generated meta tags

### Introduction

> [Or jump right to the setup](#setup).

When your project uses a _predefined_ folder structure which doesn't require adjustability by the user, this kit is for you.

It's aimed to be a straightforward Vue single-page application, while keeping Kirby in the background to deliver server-generated meta tags as well as backend-editing of content.

Think of this lightkit as the little brother of my [Kirby + Vue.js Starterkit](https://github.com/johannschopplich/kirby-vue3-starterkit).

Why not use Vue.js with [Kirby QL](https://github.com/getkirby/kql)? Well, for some projects I don't like the idea of an API user which has complete read access to the panel. I want to control, what a user can fetch from the project. Hence, [`controllers`](./site/controllers).

### 🗂 File-Based Routing

File components in the [`src/pages`](./src/pages) directory correspond to the frontend's route structure. The Vue Router is automatically populated by generated routes using [Vite](https://vitejs.dev)'s [glob import](https://vitejs.dev/guide/features.html#glob-import).

#### Basic Routing

Pages will automatically map files from the [`pages`](./src/pages) directory to a route with the same name:

- `src/pages/todo.vue` -> `/todo`

#### Index Routes

Files named `index` are treated as the index page of a route:

- `src/pages/index.vue` -> `/`

#### Dynamic Routes

Dynamic routes are denoted using square brackets. Both directories and pages can be dynamic:

- `src/pages/article/[id].vue` -> `/article/:id` (`/article/kirby-rocks`)

Dynamic parameters will be passed to the page as props.

#### Catch-all Routes

Not found routes are denoted with square brackets containing an ellipsis:

- `src/pages/[...all].vue` -> `/*` (`/non-existent-page`)

The text after the ellipsis will be used both to name the route, and as the name of the prop in which the route parameters are passed.

### Controllers for Data

- The [`site/controllers/default.php`](./site/controllers/default.php) controller returns data which is embedded in the index template and available with the `useSite()` hook. Use it for data required for the first screen that's displayed to avoid a extra roundtrip.
- Every other controller can be called via the `useController()` hook. When fetched once from the network, it is then cached in store. Use it for data not required for the initial paint of your web application.

> ℹ️ Note: Each controller has to return it's data nested inside the `data` key. Take a look into the examples provided to get an idea.

### Folder Structure

Some notes about the folder structure with some additional comments on important files.

<details>
<summary><b>Expand folder tree</b></summary>

```sh
kirby-vue-lightkit/
|
|   # Main entry point of the website, point your web server to this directory
├── public/
|   |
|   |   # Frontend assets generated by Vite (not tracked by Git)
|   ├── dist/
|   |
|   |   # Static images like icons
|   ├── img/
|   |
|   |   # Kirby's media folder for thumbnails and more (not tracked by Git)
|   └── media/
|
|   # Kirby's core folder containing templates, blueprints, etc.
├── site/
|   ├── blueprints/
|   ├── config/
|   |
|   |   # Create data objects fetchable via the `useController()` hook
|   ├── controllers/
|   |   |
|   |   |   # Acts as global site object similar to Kirby's `$site`
|   |   └── default.php
|   |
|   ├── plugins/kirby-vite/
|   |   |
|   |   |   # Core of the Vite integration plugin, mainly registers routes
|   |   ├── index.php
|   |   |
|   |   |   # Routes to handle controller requests
|   |   └── routes.php
|   |
|   └── templates/
|       |
|       |   # Index page and main entry point for the web application
|       └── default.php
|
|   # Includes all frontend-related sources
├── src/
|   |
|   |   # All components will be auto imported on-demand
|   ├── components/
|   |
|   |   # Hooks for common actions
|   ├── hooks/
|   |   |
|   |   |   # Fetch data of a controller by id
|   |   ├── useController.js
|   |   |
|   |   |   # Provides a object corresponding to Kirby's global `$site`
|   |   └── useSite.js
|   |
|   |   # File-based routing
|   ├── pages/
|   |
|   ├── App.vue
|   ├── index.css
|   ├── index.js
|   └── router.js
|
|   # Contains everything content and user data related (not tracked by Git)
├── storage/
|   ├── accounts/
|   ├── cache/
|   ├── content/
|   ├── logs/
|   └── sessions/
|
|   # Kirby CMS and other PHP dependencies (handled by Composer)
├── vendor/
|
|   # Environment variables for both Kirby and Vite (to be duplicated as `.env`)
├── .env.example
|
|   # Configuration file for Vite
└── vite.config.js
```

</details>

## Prerequisites

- Node.js with npm (only required to build the frontend)
- PHP 7.4+

> Kirby is not a free software. You can try it for free on your local machine but in order to run Kirby on a public server you must purchase a [valid license](https://getkirby.com/buy).

## Setup

### Composer

Kirby-related dependencies are managed via [Composer](https://getcomposer.org) and located in the `vendor` directory. To install them, run:

```bash
composer install
```

### Node Dependencies

Install npm dependencies:

```bash
npm ci
```

### Environment Variables

Duplicate the [`.env.example`](.env.example) as `.env`::

```bash
cp .env.example .env
```

Optionally, adapt it's values.

### Static Assets

_During development_ Kirby can't access static files located in the `src` folder. Therefore it's necessary to create a symbolic link inside of the public folder:

```bash
ln -s $PWD/src/assets ./public/assets
```

## Usage

### Build Mode

During development a `.lock` file will be generated inside the `src` directory to let the backend now it runs in development mode. This file is deleted when running the build command.

> ℹ️ Alternatively, you can set a `KIRBY_MODE` env variable containing either `development` or `production` to set the app mode programmatically and overwrite the `.lock` file mechanism. This may ease setups with Docker.

### Development

You can start the development process with:

```bash
# Runs `npm run kirby` in parallel to `vite`
npm run dev
```

Afterwards, visit the app in your browser: [`http://127.0.0.1:8080`](http://127.0.0.1:8080)

> For Valet users: Of course you can use a virtual host alternatively!

Vite is used in combination with [backend integration](https://vitejs.dev/guide/backend-integration.html) and only serves frontend assets, not the whole app. Thus, `http://localhost:3000` won't be accessible.

The backend is served by the PHP built-in web server on `http://127.0.0.1:8080` by default, but you can adapt the location in your `.env` file.

### Production

Build optimized frontend assets to `public/dist`:

```bash
npm run build
```

Vite will generate a hashed version of all assets, including images and fonts saved inside `src/assets`. It will further create a `manifest.json` file with hash records etc.

### Deployment

> ℹ️ See [ploi-deploy.sh](./scripts/ploi-deploy.sh) for exemplary deployment instructions.

> ℹ️ Some hosting environments require to uncomment `RewriteBase /` in [`.htaccess`](public/.htaccess) to make site links work.

## License

[MIT](./LICENSE) License © 2021 [Johann Schopplich](https://github.com/johannschopplich)
