import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
)
