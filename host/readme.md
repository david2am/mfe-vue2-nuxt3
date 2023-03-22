# Nuxt 3 setup

Add `package.json`

```json
{
    "name": "host",
    "version": "0.0.0",
    "private": true,
    "author": "author name",
    "license": "MIT",
    "scripts": {
        "dev": "nuxt dev",
        "build": "nuxt build",
        "generate": "nuxt generate",
        "preview": "nuxt preview",
        "postinstall": "nuxt prepare"
    },
    "dependencies": {
        "nuxt": "^3.1.1"
    }
}
```

Run

```sh
yarn install
````

Create `pages` folder and add an `index.vue` file

```js
<template>
    <div>
        <Head>
            <Title>Home</Title>
        </Head>
        <h1>Page Section</h1>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/posts/1">Go to post number 1</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/restricted">Go restricted route</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
```

Run

```sh
yarn dev
```

Verify that everything runs properly

# Module Federation setup

```sh
yarn add -D @originjs/vite-plugin-federation
```

