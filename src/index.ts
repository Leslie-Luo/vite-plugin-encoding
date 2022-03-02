import { Plugin } from 'vite'

function encodingPlugin(charset: string = 'utf-8'): Plugin[] {
    const plugins: Plugin[] = [
        {
            name: 'vite-plugin-encoding',
            transformIndexHtml(html) {
                return html.replace(/.js">/g, `.js" charset="${charset}">`);
            },
        },
    ]
    return plugins
}

export {
    encodingPlugin as Plugin
}

export default encodingPlugin
