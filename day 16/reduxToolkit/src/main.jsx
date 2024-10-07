
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Counter from './Counter.jsx'
import './index.css'
import store from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Counter />
  </Provider>

)
