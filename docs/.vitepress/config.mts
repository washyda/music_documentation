import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Music Api",
  description: "API about music",
  base: "/music_documentation/",
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
