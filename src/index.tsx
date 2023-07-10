import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'inversify-react'
import 'reflect-metadata'
import { Provider as ReduxProvider } from 'react-redux';

import './index.scss';
import App from './App';
import { appConfig } from './config'
import { bindAppContainerRegistry } from './config/container'
import globalStore from './core/store/store'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const createApp = () => {

  root.render(
    <Provider container={() => {
      return bindAppContainerRegistry(appConfig)
    }}>
      <React.StrictMode>
        <ReduxProvider store={ globalStore }>
          <App />
        </ReduxProvider>
      </React.StrictMode>
    </Provider>
  );
}

createApp()
