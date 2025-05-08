import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Music Api",
  description: "API about music",
  base: "/music_documentation/",
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      // link: '/zh-CN' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Apis', link: '/apis' }
    ],

    sidebar: [
      {
        text: 'Apis',
        items: [
          { text: 'Markdown Examples', link: '/apis/test' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/washyda/nest_qq_music_api' }
    ]
  }
})
