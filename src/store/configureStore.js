import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenseReducer';

const rootReducer = combineReducers({
    expenses: expenseReducer,
  // Add more reducers here if needed
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
