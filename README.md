# Add charset encoding to Vite packaged product files

English | [简体中文](README.zh-CN.md)

[![GitHub tag](https://img.shields.io/github/tag/Leslie-Luo/vite-plugin-encoding.svg)](https://github.com/Leslie-Luo/vite-plugin-encoding/releases)
[![License](https://img.shields.io/github/license/Leslie-Luo/vite-plugin-encoding)](https://github.com/Leslie-Luo/vite-plugin-encoding/blob/master/LICENSE)

Solve the problem that when the server is `Content-Type: text/html; charset=GB2312`, Chinese garbled characters in the `js` file introduced by the page cause page rendering failure.

## Installation

Install the plugin with npm:

```
npm install vite-plugin-encoding --save-dev
```

or yarn

```
yarn add vite-plugin-encoding -D
```

### ReactUse demo

```js
// vite.config.js
import encodingPlugin from 'vite-plugin-encoding'

export default {
    plugins: [
        encodingPlugin(),
    ],
}
```

### VueUse demo

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import encodingPlugin from 'vite-plugin-encoding'

export default {
    plugins: [
        vue(),
        encodingPlugin(),
    ],
}
```

## Options

| Name    | Description           | Type   | Default |
| ------- | --------------------- | ------ | ------- |
| charset | charset encoding type | string | utf-8   |
