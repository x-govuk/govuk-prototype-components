const _ = require('lodash')

/**
 * Use a simplified version of the summaryList parameters to make prototyping
 * easier. You can continue to use the old syntax as normal, where the shorter
 * one isn’t helpful
 *
 * For example:
 * {
 *   key: 'Name',
 *   value: 'Paul',
 *   href: '/change/name'
 * }
 *
 * becomes:
 *
 * {
 *   key: {
 *     text: 'Name'
 *   },
 *   value: {
 *    text: 'Paul'
 *   },
 *   actions: {
 *     items: [
 *       text: 'Change',
 *       visuallyHiddenText: 'Change name',
 *       href: '/change/name'
 *     ]
 *   }
 * }
 *
 * @param {string} params - Summary list component parameters
 * @returns {Object} Updated component parameters
 */
exports.decorateRows = function (params) {
  let rows = params.rows
  const { data } = this.ctx
  if (!data || !rows) {
    return params
  }

  rows = rows
    .map(r => {
      if (typeof r.key === 'string') {
        // Generate a default hidden text based on the key
        if (!r.visuallyHiddenText) {
          r.visuallyHiddenText = r.key.toLowerCase()
        }

        // Map `key: 'thing'` to `key: {text: 'thing'}`
        r.key = {
          text: r.key
        }
      }

      // Get a value from session data
      if (typeof r.data === 'string' && !r.value) {
        r.value = _.get(data, _.toPath(r.data))
        delete r.data
      }

      // Map `value: 'thing'` to `value: {text: 'thing'}`
      if (typeof r.value === 'string') {
        r.value = {
          text: r.value
        }
      }

      // Map `href: 'http://google.com'` to an array of actions with a single
      // action that points to the href, with the text change:
      if (r.href && !r.actions) {
        r.actions = {
          items: [{
            text: r.action || 'Change',
            visuallyHiddenText: r.visuallyHiddenText,
            href: r.href
          }]
        }

        delete r.visuallyHiddenText
        delete r.href
      }

      return r
    })

  return params
}
