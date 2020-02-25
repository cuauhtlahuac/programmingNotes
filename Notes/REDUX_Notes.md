- Single State Object
- The State is housed in the Redux Store (Update store must do so through the Redux store ).
- createStore() : Is a Reducer method.
- Redux Methods are available from a Redux Object and provides other several methods.

-  getState() is a Redux Method that retrieve (recupera) the current state. For example - store.getState() - ;

- ACTIONS:  Is a simply js object. Sometimes also carries some data is optional.  Must carry TYPE property. Like messengers, Redux actions inform about the app events to  Dispatchers. When an event happend the action responsible are activated and goes to dispatcher.

- ACTIONS CREATORS sending action to the store, is likely action but with logic. Is a simple js Function and returns an action. Is convenient, because you can add logic and return a some specific action. thats it.

- DISPATCHERS: dispatch the action to Redux Store. Recall action creators or an object with a type property. Then the dispatch method dispatches the action type to the Reducers. Is like the loud voice in the Walmart, that say what happen. State Update is triggered by dispatching actions. 

- REDUCER (Handle an Action in the Store):  Responsible State modification in response to actions. Takes a STATE and ACTION as arguments and always return a new State, this is the only role to the reducer. The state is Read-Only, so Reducer must always return a new copy of state and never modify state directly. 

- Use a SWITCH Statement to Handle Multiple Actions. You can tell the Redux store how to handle multiple action types.

- ACTION TYPES: Make action types as constants strings, for read only, and refer this constants wherever they are used. Constants also can used in switch statement like "case LOGIN: 'code...' "

- SUBSCRIBE: Register a Store Listener. "store.subscribe()" is a REDUX method that subscribe listener function to the store, are called whenever an action is despatched against the store. Simply logs a message (simplemente registra un mensaje) every time an action is received and the store is updated.

- COMBINE MULTIPLE REDUCERS: Divide State into multiple pieces with multiple reducers. Need a root reducer to pass to createStore(). In order to let us combine multiple reducers together, Redux provides the combineReducers() method. 

- SEND ACTION DATA TO THE STORE: Action can send other information than a type. Is common that action send extra data by user interactions.

- MIDDLEWARE: **Use Middleware to Handle Asynchronous Actions (Redux Thunk middleware). **.  Use If you need to call asynchronous endpoints. To include, pass it as an argument and a second optional parameter to the createStore(). like: "const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);" Quote of origin source: "To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware(). This statement is then provided as a second optional parameter to the createStore() function. Take a look at the code at the bottom of the editor to see this. Then, to create an asynchronous action, you return a function in the action creator that takes dispatch as an argument. Within this function, you can dispatch actions and perform asynchronous requests."

- NEVER MUTATE STATE: You shouldn't mutate redux state..check this doc: https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/




Notes: 
* State immutability: Is an object whose state cannot be modified after is created.
• Callback function: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

Hay caso en el que un reductor puede decirle a otros reductores que hacer, esos despachadores no escuchan al despachador.

Los reductores son como los que escuchan la accion y hacen algo, todos los reductores escuchan la accion, pero no todos hacen algo:
por ejemplo en un walmart llega una caja de tomates y en el altavoz lo dicen, y todos los demas pasillos escuchan, el pasillo de jitomates va por la caja y la suma, la  tienda cambia, pero el de bolillos se queda parado y su pasillo no cambia , regresa su pasillo como está, en cambio el pasillo de jugos debe poner una promoción. La accion cerrar la tienda indica a todos que deben poner un listón y apagar sus luces. Todas las acciones potencialmente afectan de alguna forma la tienda; por default regresan el state. Puede haber multiples tiendas.

* ! En el reductor me equivoque, regrese el Initial state, pero tenia que regrear el current store.


Sample Code...
```js
// Type to reducer
import typeToReducer from "type-to-reducer";
import { store } from "../../../App";

const INITIAL_STATE = {
  toggle: false
};

// Creo dos acciones, una para motrar y otra para ocultar
const SHOW_TOGGLE_MODAL = "puf/app/show/toggle/modal";
const HIDE_TOGGLE_MODAL = "puf/app/hide/toggle/modal";

// Action Creator
function toggleModalMentions(toggle = false) {
  if (toggle)
    return {
      type: SHOW_TOGGLE_MODAL,
      payload: toggle
    };
  else {
    return {
      type: HIDE_TOGGLE_MODAL,
      payload: toggle
    };
  }
}

// * Aqui despacho la accion que se va a ejecutar
export function dispatchToggleAction(toggle) {
  console.log({ toggle });
  store.dispatch(toggleModalMentions(toggle));
}

// Type to reducer
/*
const toggleModal = typeToReducer({
  [SHOW_TOGGLE_MODAL]: (state, action) => {
    return Object.assign({}, state, { toggle: true });
  },
  INITIAL_STATE
});
*/

// Reducer, escucha la accion

const toggleModal = (state = INITIAL_STATE, action) => {
  if (action.type === SHOW_TOGGLE_MODAL) {
    console.log("%c REDUCER WAS EJECUTED", "color: deeppink; font-size: 8pt");
    return Object.assign({}, state, { toggle: true });
  } else if (action.type === HIDE_TOGGLE_MODAL) {
    return Object.assign({}, state, { toggle: false });
  } else {
    return state;
  }
};

export default toggleModal;

```



