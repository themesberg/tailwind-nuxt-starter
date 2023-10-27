# Tailwind CSS + Nuxt.js + Flowbite Starter (Vite)

Get started with this starter project based on a Tailwind CSS, Nuxt.js and Flowbite configuration to help you get started building website applications based on the utility classes from Tailwind CSS and components from Flowbite. 

This repository is based on the [Tailwind CSS + Nuxt.js](https://flowbite.com/docs/getting-started/nuxt-js/) guide on the Flowbite website.

## Getting started

Make sure that you have Node.js installed on your project. Run the following command to install all dependencies:

```
npm install
```

Run this command to compile and bundle the source code:

```
npm run dev
```

Run this command to build the project:

```
npm run build
```

## Flowbite Components

Now that you have succesfully installed Nuxt.js, Tailwind CSS and Flowbite you can start importing and using components from the open-source library of [Flowbite](https://flowbite.com) such as modals, navbars, tables, dropdowns, and more.

Let's use the [Modal component](https://flowbite.com/docs/components/modal/) as an example and copy-paste the markup from the documentation inside your `app.vue` page:

```html
<template>
    <div>
        <div class="flex justify-center p-4">
            <button id="button" data-modal-toggle="modal" data-modal-target="modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show modal</button>
        </div>

        <div id="modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Terms of Service
                        </h3>
                        <button id="closeButton" data-modal-hide="modal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
```

### Data attributes

You can automatically make the interactive components work by importing the init functions from the Flowbite package using the onMounted lifecycle method from Nuxt.js.

For example, here's how would initialize all of the modals inside your Vue template:

```javascript
<script setup>
import { onMounted } from 'vue'
import { initModals } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initModals();
})
</script>

<template>
    // Modal HTML markup with data attributes from Flowbite
</template>
```

Here's a full list of available functions to use to initialise the components:

```javascript
<script setup>
import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>
```

Alternatively, you can also use `initFlowbite()` to initialise them all:

```javascript
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
```

Although this will make sure all of the interactive components will work with data attributes from Flowbite, we actually recommend only initialising the ones that you use for every page to optimize load speed.

Check out the [starter guide's](https://github.com/themesberg/tailwind-nuxt-starter) `Events.vue` file to see it in action.

### JavaScript API

To make the component interactive we need to import the Modal object from Flowbite and setup the object parameters, options, and methods to show or hide the modal based on the button click.

```javascript
<script setup>
import { onMounted } from 'vue'
import { Modal } from 'flowbite'

onMounted(() => {
    // setup available elements
    const $buttonElement = document.querySelector('#button');
    const $modalElement = document.querySelector('#modal');
    const $closeButton = document.querySelector('#closeButton');

    // set modal options
    const modalOptions = {
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40'
    }

    // create a new modal instance
    if ($modalElement) {
        const modal = new Modal($modalElement, modalOptions);

        // set event listeners for the button to show the modal
        $buttonElement.addEventListener('click', () => modal.toggle());
        $closeButton.addEventListener('click', () => modal.hide());

    }
})
</script>
```

As you can see we use the onMounted() lifecycle method from Vue 3 to query for the elements that we need to create a modal component and then programatically use the methods such as showing or hiding the modal.

```javascript
// add your own logic and then show the modal
modal.show();

// or you can hide it
modal.hide();
```

Every interactive component page that requires JavaScript has a documentation on Flowbite showing you the available parameters, options, and methods that you can use.

You can find all of the examples inside the `pages/` folder.

## TypeScript

Flowbite also supports TypeScript as of v1.6.0 and it allows use to use type declarations and interfaces for the objects, parameters, and option values for the JavaScript API.

You can import these types or interfaces like this:

```javascript
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

// other code
```

Generally speaking, all of the components have an interface definition that you can use whenever you create a new object to make sure that you’re using the correct types for parameters and methods.

When creating a new modal you can set the ModalInterface as the main type:

```javascript
const modal: ModalInterface = new Modal($modalElement, modalOptions);
```

All of the Flowbite components also support type declaration for the options object. Here's an example:

```javascript
const modalOptions: ModalOptions = {
    placement: 'top-right'
}

const modal: ModalInterface = new Modal($modalElement, modalOptions);
```

Using types can be very benefitial because it makes sure that you only use the allowed types and values for the options that are available. For example, if you used a value such as `yellow` for the placement object, which is a color, TypeScript will throw an error because it does not meet the type requirements from Flowbite.

Here's the full code using types with TypeScript:

```javascript
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

const $buttonElement: HTMLElement = document.querySelector('#button');
const $modalElement: HTMLElement = document.querySelector('#modal');

const modalOptions: ModalOptions = {
    placement: 'top-right'
}

const modal: ModalInterface = new Modal($modalElement, modalOptions);
$buttonElement.addEventListener('click', () => modal.toggle());

modal.show();
```

## Flowbite Vue Library

We also started working on a [standalone Flowbite Vue 3 UI component library](https://github.com/themesberg/flowbite-vue) which when launched in a stable version will be the recommended way of working in a Vue 3 or Nuxt.js environment. Contributions are more than welcome!

## License

This project is open-source under the MIT license.
