import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';


/*  We update the app to use the application store, the provider component is where we create the main ntry point to get the state from the store and pass it to the
    hierarchy of views
*/

import {Provider} from 'react-redux'; 
import {ConfigureStore} from './redux/configureStore';
const store = ConfigureStore();

//component
class App extends Component{
  //HERE WE LIFT THE STATE UP AND PASS THE PROPS TO THE CHILDREN COMPONENT , MENU
  render() {
    return (
      //the store will be avaible to all of the components in the Main heirarchy
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
            <Main/>
        </div>
      </BrowserRouter>  
    </Provider>  
  );
  }
}


export default App;
