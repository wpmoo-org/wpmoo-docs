import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',  // Base path for custom domain (root path)
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
          { text: 'Introduction', link: '/introduction' },
          { text: 'CLI Tool', link: '/cli' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wpmoo-org/wpmoo' }
    ]
  }
})