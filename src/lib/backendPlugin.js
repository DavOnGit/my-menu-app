const defaultOptions = {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
  addPath: 'locales/add/{{lng}}/{{ns}}',
  allowMultiLoading: false,
  parse: JSON.parse,
  crossDomain: false
}

class Backend {
  constructor(services, options = {}) {
    this.init(services, options)
    this.type = 'backend'
  }

  init(services, options = {}) {console.log('init', services, options)
    this.services = services;
    this.options = Object.assign({}, defaultOptions, options)
    this.db = this.options.firebaseDb;
  }

  readMulti(languages, namespaces, callback) {
    let loadPath = this.options.loadPath;
    if (typeof this.options.loadPath === 'function') {
	    loadPath = this.options.loadPath(languages, namespaces)
    }

    const url = this.services.interpolator.interpolate(loadPath, { lng: languages.join('+'), ns: namespaces.join('+') })

    this.loadUrl(url, callback)
  }

  read(language, namespace, callback) {console.log('read:', language, namespace)
    let loadPath = this.options.loadPath;
    if (typeof this.options.loadPath === 'function') {
	    loadPath = this.options.loadPath([language], [namespace])
    }

    const url = this.services.interpolator.interpolate(loadPath, { lng: language, ns: namespace });

    this.loadUrl(url, callback);
  }

  loadUrl(url, callback) {console.log('loadUrl', this, url)
    return this.db.ref(url).once('value')
      .then((snapshot) => {
        return snapshot;
      })
      .then((snapshot) => {
        callback(null, snapshot.val())
      })
      .catch((err) => {
        callback(err, false)
      })
  }

  create(languages, namespace, key, fallbackValue) {
    if (typeof languages === 'string') languages = [languages];

    let payload = {};
    payload[key] = fallbackValue || ''

    languages.forEach(lng => {
      // let url = this.services.interpolator.interpolate(this.options.addPath, { lng: lng, ns: namespace });

      // this.options.ajax(url, this.options, function(data, xhr) {
        //const statusCode = xhr.status.toString();
        // TODO: if statusCode === 4xx do log
      // }, payload);
    })
  }
}

Backend.type = 'backend'

export default Backend
