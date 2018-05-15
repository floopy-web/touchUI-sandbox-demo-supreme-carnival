import app from './app.ui'

let options = {
  app: app,
  i18n: {
    locale: 'en',
    components: require('./i18n/components.json'),
    messages: {
      'zh-cn': require('./i18n/zh-cn.json'),
      'en': require('./i18n/en.json')
    }
  }
}
ui.start(options)