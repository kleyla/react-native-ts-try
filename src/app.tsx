import { AppNavigator } from './config';
import { ModalBase } from './components';
import { Provider } from 'react-redux';
import { store } from '@context/store';
import React, { ReactElement } from 'react';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <AppNavigator />
      <ModalBase />
    </Provider>
  );
};

export { App };
