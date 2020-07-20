import {createStore} from 'redux'; 
import {Reducer, initialState} from './reducer'; 

/*
  this is a file that is optional, other examples will be different

  Create the redux store, so the reduces will pass the states
*/



/*
 This configure store is where the store will be set up

*/
export const ConfigureStore = () => {
    const store = createStore (
       Reducer, initialState  
    );
    //
    return store;  
}

