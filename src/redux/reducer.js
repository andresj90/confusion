import {DISHES} from '../shared/dishes'; 
import {COMMENTS} from '../shared/comments'; 
import {PROMOTIONS} from '../shared/promotions'; 
import {LEADERS} from '../shared/leaders'; 

/*
  We install react and react-redux , react redux to use with react

  The reducer is the one in charge of handling the states, the states are inmmutable, so that means that for every state update a new state will be created

  It is a pure function, that means it does not change the previous state, this is where the state is set up and passed to the view controller trhought the props

*/


/*
  the initial state contains the data as it is when the app is loaded 
*/
export const initialState = {
    dishes: DISHES, 
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}



/*
Receives the current state and an action, the action is to create the next state or new
*/

//ES6 way to initialize a parameter state = , We apply a default value, so when the app starts, this is the starting point
export const Reducer = (state= initialState, action) => {
    //since we are not modifying any state we are just returning the current state from the reducer
    return state; 
}

