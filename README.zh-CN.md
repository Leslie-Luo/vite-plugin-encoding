# 为 Vite 打包产物文件添加 charset 编码

[English](README.md) | 简体中文

[![GitHub tag](https://img.shields.io/github/tag/Leslie-Luo/vite-plugin-encoding.svg)](https://github.com/Leslie-Luo/vite-plugin-encoding/releases)
[![NPM Downloads](https://img.shields.io/npm/dm/vite-plugin-encoding.svg?style=flat)](https://npmjs.org/package/vite-plugin-encoding)
[![License](https://img.shields.io/github/license/Leslie-Luo/vite-plugin-encoding)](https://github.com/Leslie-Luo/vite-plugin-encoding/blob/master/LICENSE)

解决服务器在 `Content-Type: text/html; charset=GB2312` 的情况下，页面引入的 `js` 文件内中文乱码，导致页面渲染失败的问题。

## 安装

下载 npm 插件

```bash
npm install vite-plugin-encoding --save-dev
```

or yarn

```bash
yarn add vite-plugin-encoding -D
```

## ReactUse demo

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

## 参数

| Name    | Description     | Type   | Default |
| ------- | --------------- | ------ | ------- |
| charset | charset编码类型 | string | utf-8   |
