import { combineReducers } from 'redux';
import addedbooks from './addbook';
import returnBook from './returnBook';

export default combineReducers({
    addedbooks,
    returnBook
})