import React from 'react'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store/store';
import { Provider } from 'react-redux';

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider