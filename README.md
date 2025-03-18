# Tailwind 4 Nuxt Starter

If you [follow this guide](https://flowbite.com/docs/getting-started/nuxt-js/) you will learn how to install the latest version 3 of Nuxt with Tailwind CSS v4 and Flowbite and also show you how to use the TypeScript version.

## Create a Nuxt project

Before continuing make sure that you have Node.js and NPM installed on your local machine.

1. Create a new Nuxt project by running the following command in your terminal:

```bash
npx nuxi init flowbite-app
cd flowbite-app
```

2. Install the project dependencies by executing the following command:

```bash
npm install
```

3. Run the following command to start a local development server on `http://localhost:3000/`:

```bash
npm run dev
```

This will make the Nuxt project accessible via the browser.

## Install Tailwind CSS

Now that you have locally set up a Nuxt project we will proceed by installing Tailwind CSS.

1. Require and install the NuxtTailwind module by installing it via NPM:

```bash
npm install tailwindcss @tailwindcss/vite --save
```

2. Configure the Nuxt configuration file to include the Tailwind module:

```javascript
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/input.css'], // you'll have to create this file
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
```

3. Create a new CSS file `./assets/css/input.css` and import Tailwind:

```css
@import "tailwindcss";
```

Tailwind CSS is now configured in your project and if you add the utility classes anywhere in your Vue template files the CSS will be generated and included.

## Install Flowbite

After installing both Nuxt and Tailwind CSS inside your project we can proceed by installing Flowbite.

1. Install Flowbite as a dependency using NPM by running the following command:

```bash
npm install flowbite --save
```

2. Import the default theme variables from Flowbite inside your main `input.css` CSS file:

```css
@import "flowbite/src/themes/default";
```

3. Import the Flowbite plugin file in your CSS:

```css
@plugin "flowbite/plugin";
```

4. Configure the source files of Flowbite in your CSS:

```css
@source "../../node_modules/flowbite";
```

## Flowbite Components

Now that you have successfully installed Nuxt, Tailwind CSS and Flowbite you can start importing and using components from the open-source library of [Flowbite](https://flowbite.com) such as modals, navbars, tables, dropdowns, and more.
