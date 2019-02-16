import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer";  
//异步action
const store  = createStore(reducers,applyMiddleware(thunk));

export default store;