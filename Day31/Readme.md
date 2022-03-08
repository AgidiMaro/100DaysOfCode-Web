completed with the redux module of the front end engineering course on Freecodecamp website and learnt the following

- states in redux are immutable, i.t you cannot say state.login=true; in the reducer function instead do state={login:true}
  -subscribe allows you to add listeners to store
- can combine reducers using Redux.combineReducers({a:counterReducer,b:authReducer})
- the sequence for using redux is : create action creator, create reducer to update the store, create a store , dispatch the action creator. Use the store.getState to see the content of the state. The actor creator is a function that returns a object. the object must include type as one of the element. the recuer takes in initial state and action and returns a new state. Use redux.createStore to create state. the redux store takea in a reducer as an argument
- created a counter using only redux
- the spread operator is a great way to enforce immutability of state
- {...state, age:5} to update the age in the state object

started the react-redux module

- used provideder from ReactRedux to link react and redux
