/**
 * @param {HTMLElement} $module - Module
 */
export default function ($module) {
  this.init = () => {
    if (!$module) {
      return
    }

    this.$codeSamples = $module.querySelectorAll('a[aria-controls]')

    // Add bindings to each code Sample link
    this.$codeSamples.forEach(($codeSample) => {
      $codeSample.addEventListener('click', (event) => this.onClick(event))
    })

    this.$module = $module;
  }

  this.resetPanels = () => {

    const expandedLinks = this.$module.querySelectorAll('a.x-govuk-example__list-item-link[aria-expanded]')

    expandedLinks.forEach((expandedLink) => {
      expandedLink.removeAttribute('aria-expanded')
      expandedLink.parentElement.classList.remove('x-govuk-example__list-item--current')

      const expandedLinkControlsId = expandedLink.getAttribute('aria-controls')
      const $panel = document.getElementById(expandedLinkControlsId)
      $panel.classList.add('x-govuk-example__code-container--hidden')
    })


  }

  this.onClick = (event) => {
    event.preventDefault()
    const linkClicked = event.target

    const panelId = linkClicked.getAttribute('aria-controls')

    const $panel = document.getElementById(panelId)
    const isPanelAlreadyOpen = linkClicked.getAttribute('aria-expanded') === 'true'

    // If the panel that's been called is already open, close it.
    // Otherwise, close all panels and open the one requested.
    if (isPanelAlreadyOpen) {
      $panel.classList.add('x-govuk-example__code-container--hidden')
      linkClicked.removeAttribute('aria-expanded')
      linkClicked.parentElement.classList.remove('x-govuk-example__list-item--current')
    } else {
      this.resetPanels()
      $panel.classList.remove('x-govuk-example__code-container--hidden')
      linkClicked.setAttribute('aria-expanded', 'true')
      linkClicked.parentElement.classList.add('x-govuk-example__list-item--current')
    }


  }
}
