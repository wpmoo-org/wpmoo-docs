// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp() {
    if (typeof window === 'undefined') {
      return
    }

    const win = window as Window & Record<string, boolean>

    if (win.__wpmooFeatureGlowInstalled) {
      return
    }

    win.__wpmooFeatureGlowInstalled = true

    window.addEventListener(
      'pointermove',
      (event) => {
        const target = event.target instanceof Element ? event.target : null
        const card = target?.closest('.VPHomeFeatures .VPFeature .box')

        if (!(card instanceof HTMLElement)) {
          return
        }

        const rect = card.getBoundingClientRect()

        card.style.setProperty('--wpmoo-glow-x', `${event.clientX - rect.left}px`)
        card.style.setProperty('--wpmoo-glow-y', `${event.clientY - rect.top}px`)
      },
      { passive: true },
    )
  }
} satisfies Theme
