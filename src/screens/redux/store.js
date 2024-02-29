import {applyMiddleware, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import Reducer from './reducer/reducer';

const Store = createStore(Reducer, applyMiddleware(thunk));

Store.subscribe(async () => {
  // console.log('STATE=>', store.getState());
});
export {Store};
