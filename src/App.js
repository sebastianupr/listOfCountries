import React from 'react';
import './App.css';
import CountryList from './components/CountryList';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './services/Reducers'

const initialState = {
  countries: [],
  countriesSearch:[],
  regionSelected: '',
}

const store = createStore(reducer, initialState)

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <i class="far fa-moon"></i>
        <CountryList/>
      </div>
    </Provider>
  );
}
