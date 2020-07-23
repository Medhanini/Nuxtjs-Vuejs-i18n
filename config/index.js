// i18n messages
const en = require('../lang/translations/en.json')
const fr = require('../lang/translations/fr.json')

// i18n config
const LOCALES = [
    { code: 'fr', iso: 'fr-FR', name: 'FR' }
    ,{ code: 'en', iso: 'en-US', name: 'EN' }
]
const DEFAULT_LOCALE = 'fr'
const I18N = {
  en,
  fr
}

// Define custom paths for localized routes
// If a route/locale is omitted, defaults to Nuxt's generated path
const ROUTES_ALIASES = {
    'index': {
       fr: '/',
       en: '/'
    },
    'about': {
       fr: '/a-propos',
       en: '/contact'
    }
}

module.exports = {
  LOCALES,
  DEFAULT_LOCALE,
  I18N,
  ROUTES_ALIASES
}
