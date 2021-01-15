# Ionic Vue starter with custom state management

A very Typescripty [@ionic/vue](https://ionicframework.com/docs/vue/overview) starter.

Inspired by this [article](https://medium.com/@mario.brendel1990/vue-3-the-new-store-a7569d4a546f).

## Background

Angular has been a great fit for Ionic because of its various first-class citizens that simplify architecting large apps, namely Typescript, single-use components _and files_ and services.

Vue 3 lays the foundation for bringing these same benefits to Vue developers, however it is still early days for the latest iteration of this great JS framework and the best patterns for larger apps are not yet clear.

This starter app wires up a custom state management solution (thanks [Mario Brendel](https://github.com/Mario-Brendelhttps://github.com/Mario-Brendel) :wave:) and testing to provide a base for an Ionic Vue app with Typescript thoroughly baked in.

## Installation

You will need [Node](https://github.com/nvm-sh/nvm) and the [Ionic](https://ionicframework.com/docs/intro/cli) and [Vue](https://v3.vuejs.org/guide/installation.html#cli) CLIs. With Node installed, run:

    npm i -g @ionic/cli @vue/cli

    git clone https://github.com/alex-steinberg/ionic-vue-custom-state-management your-app-name

    cd your-app-name

    npm i

    ionic serve

## Roadmap

- Replicate the idea of Angular services so that things like HTTP calls are not done directly from components.

## Notes

While [ESLint](https://eslint.org/) comes standard with the Ionic starters, I ripped it out as it creates unnecessary noise especially during projects such as this with a high level of experimentation.

## Acknowledgements

This project wouldn't be possible without the support of [Humanstate](https://www.humanstate.com/).