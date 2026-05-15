import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'WPMoo',
  description: 'Public website for WPMoo Odoo development workflow tooling',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wpmoo-org/wpmoo-odoo' }
    ]
  }
})
