import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store';
import { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
console.log("main.jsx rendered");

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading...</div>}
      persistor={persistor}
      onBeforeLift={() => {
        console.log("PersistGate before lift");
      }}
    >      <App />
    </PersistGate>
</Provider>,
)
