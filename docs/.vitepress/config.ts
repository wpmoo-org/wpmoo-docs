import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wpmoo-docs/',  // Base path for GitHub Pages deployment
  title: 'WPMoo Framework',
  description: 'Documentation for the WPMoo Micro Object Oriented Framework for WordPress',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wpmoo/wpmoo' }
    ]
  }
})