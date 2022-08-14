const accessibleAutocomplete = require('accessible-autocomplete')

module.exports = function () {
  this.init = ($module) => {
    // Autocomplete options get passed from Nunjucks params to data attributes
    const params = $module.dataset

    accessibleAutocomplete.enhanceSelectElement({
      selectElement: $module,
      defaultValue: $module.value,
      autoselect: params.autoselect === 'true',
      displayMenu: params.displayMenu,
      minLength: params.minLength ? parseInt(params.minLength) : 0,
      showAllValues: params.showAllValues === 'true',
      showNoOptionsFound: params.showNoOptionsFound === 'true'
    })
  }
}
