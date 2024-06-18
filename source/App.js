import React from 'react';
import Navigation from './navigation';
import {SafeAreaWrapper} from './components';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaWrapper>
        <Navigation isAuthenticagted={true} />
      </SafeAreaWrapper>
    </Provider>
  );
};

export default App;
