# vue-netlify-lambda-prerender

This is a basic starter project for a prerendered [Vue](https://vuejs.org/) frontend with a [Netlify lambda function](https://www.netlify.com/docs/functions/) backend.

##### [You can view the deployed app here](https://vue-netlify-lambda-prerender.netlify.com/)

The Vue app is prerendered for improved SEO - you can learn more about server-side rendering and prerendering with Vue [here](https://ssr.vuejs.org/#ssr-vs-prerendering). Includes [vue-router](https://router.vuejs.org/), [vuex](https://vuex.vuejs.org), [axios](https://github.com/axios/axios), the [vue-cli-plugin-netlify-lambda](https://github.com/netlify/vue-cli-plugin-netlify-lambda), and the [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin).

**NOTE:** this project can only be deployed via Netlify with [continuous deployment](https://www.netlify.com/docs/continuous-deployment/) enabled.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Prerendering configuration

**NOTE:** for prerendering to work correctly, routes for those pages must be added to `vue.config.js`:

```js
module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/about',
        ],
      }),
    ],
  },
};
```