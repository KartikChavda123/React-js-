import React from 'react'
import ReduxThunk from './Components/ReduxThunk'
import { Provider } from 'react-redux'
import { store } from './Components/store/Store';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ReduxThunk/> 
      </Provider>
    </div>
  )
}
