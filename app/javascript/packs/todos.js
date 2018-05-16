import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import App from './components/App'

let store = createStore(todo)

const Todos = ({}) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
      </Provider>,
    document.getElementById('content')
  );
});
//export default Todos
