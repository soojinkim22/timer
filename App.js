import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
      // provider 컴포넌의 안의 스토어를 복사해서 칠드런 컴포넌트에 넣음
      <Provider store={store}>
        <Timer />
      </Provider>
    )
  }
}
