import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { ROUTES_ALIASES, DEFAULT_LOCALE, I18N } from '~/config'

Vue.use(VueI18n)

export default ({ app, store }) => {

	app.i18n = new VueI18n({
    	// fallbackLocale: DEFAULT_LOCALE,
    	messages: I18N,
      lazy: true,
      langDir: 'lang/',
      parsePages: false,
      pages: ROUTES_ALIASES
    	// silentTranslationWarn: true
  	})
  	app.i18n.locale = store.state.i18n.currentLocale

  	app.i18n.path = (link) => {
  		
	    if (app.i18n.locale === app.i18n.fallbackLocale) {
	      return `/${link}`;
	    }

    return `/${app.i18n.locale}/${link}`;
  }
}
