import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './screens/Nav';
import { createStore, combineReducers } from 'redux'
import oneReducer from './store/reducers/one';
import twoReducer from './store/reducers/two';
import { Provider } from 'react-redux';

export default function App() {
  const rootReducer = combineReducers({
    one: oneReducer,
    two: twoReducer
  });

  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
