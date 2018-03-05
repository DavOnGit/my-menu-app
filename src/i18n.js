import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
//import backend from './lib/backendPlugin'
import Expo from 'expo'

import firebase from './firebase'

const languageDetector = {
  type: 'languageDetector',
  async: true, // async detection
  detect: cb => {
    return Expo.Util.getCurrentLocaleAsync()
      .then(lng => { { cb(lng.replace('_', '-')) } })
  },
  init: () => {},
  cacheUserLanguage: () => {}
}

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  //.use(backend)
  .init({
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    //debug: process.env.NODE_ENV === 'development',
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}',
    //   firebaseDb: firebase.database(),
    //   crossDomain: true,
    // },
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
    resources: {
      it: {
        common: {
          beer: 'birre',
          food: 'menu',
          events: 'eventi',
          news: 'novità',
          feedback: 'scrivici',
          address: 'mappa'
        },
        fries: {
          deepfrozen: '* prodotto surgelato all\' origine'
        },
        baguette: {
          main: 'Componi con:',
          addons: '...e completa con:'
        },
        contact: {
          name: 'Nome',
          message: 'Messaggio',
          submit: 'INVIA'
        },
        address: {
          navigate: 'Avvia Navigazione'
        }
      },
      en: {
        common: {
          beer: 'beer',
          food: 'food',
          events: 'events',
          news: 'news',
          feedback: 'feedback',
          address: 'address'
        },
        fries: {
          deepfrozen: '* deep-frozen product'
        },
        baguette: {
          main: 'Compose with:',
          addons: '...and complete with:'
        },
        contact: {
          name: 'Name',
          message: 'Message',
          submit: 'SUBMIT'
        },
        address: {
          navigate: 'Start Navigation'
        }
      }
    }
  })

export default i18n
