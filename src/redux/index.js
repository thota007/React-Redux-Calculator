import { createStore } from 'redux';
import CalculatorReducer from './reducers/calculator_reducer';

const store = createStore(CalculatorReducer);

export default store;