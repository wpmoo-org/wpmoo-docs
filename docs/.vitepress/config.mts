import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'WPMoo Toolkit',
  description: 'Free MIT-licensed tooling for calmer Odoo development workflows',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/guide/getting-started' },
      { text: 'Commands', link: '/reference/commands' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Cockpit', link: '/guide/cockpit' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Commands', link: '/reference/commands' },
          { text: 'Generated Environments', link: '/reference/generated-environments' },
        ],
      },
      {
        text: 'Operations',
        items: [
          { text: 'Recovery', link: '/operations/recovery' },
          { text: 'Acknowledgements', link: '/acknowledgements' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wpmoo-org/wpmoo-toolkit' }
    ]
  }
})
