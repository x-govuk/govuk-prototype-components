const Autocomplete = require('./autocomplete/autocomplete.js')
const Edge = require('./edge/edge.js')

/**
 * Get module name.
 *
 * @example
 * _getModuleName(selectable-table) // SelectableTable
 *
 * @access private
 * @param {string} string - Original value
 * @returns {string} data Updated data
 */
const _getModuleName = (string) => {
  // Convert string to camel case
  string = string.replace(/-([a-z])/g, (g) => g.charAt(1).toUpperCase())

  // Capitalise first letter
  string = string.charAt(0).toUpperCase() + string.slice(1)

  return string
}

/**
 * Find and initiate component modules.
 *
 * @example
 * [data-module="foo-bar"] initiates GOVUKPrototypeComponents.FooBar()
 */
module.exports = (function () {
  const GOVUKPrototypeComponents = window.GOVUKPrototypeComponents || {}

  // Initiate all component modules
  GOVUKPrototypeComponents.initAll = function (container) {
    container = container || document.documentElement
    const modules = container.querySelectorAll('[data-module]')

    modules.forEach((module, i) => {
      const element = modules[i]
      const name = _getModuleName(element.dataset.module)
      const started = element.dataset.moduleStarted

      if (typeof GOVUKPrototypeComponents[name] === 'function' && !started) {
        module = new GOVUKPrototypeComponents[name]()
        module.start(element)
        element.dataset.moduleStarted = true
      }
    })
  }

  // Add component modules to GOVUKPrototypeComponents object
  GOVUKPrototypeComponents.Autocomplete = Autocomplete
  GOVUKPrototypeComponents.Edge = Edge

  // Add GOVUKPrototypeComponents to window global
  window.GOVUKPrototypeComponents = GOVUKPrototypeComponents

  return GOVUKPrototypeComponents
})()
