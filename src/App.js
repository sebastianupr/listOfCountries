import React, { useState, useEffect } from 'react'
import './App.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './services/Reducers'
import Home from './views/Home'
import NavBar from 'src/components/Navbar'
import CountryDetail from './views/CountryDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

const initialState = {
  countries: [],
  countriesSearch:[],
  regionSelected: ''
}

const store = createStore(reducer, initialState)

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if(isDark) setDarkMode(true)
  },[setDarkMode])

  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/country/:capital" component={CountryDetail}/>
            </Switch>
          </Router>
        </div>
      </Provider>
    </main>
  );
}
