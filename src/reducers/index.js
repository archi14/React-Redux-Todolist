import { combineReducers } from 'redux';

const items = ( itemList = [], action)=>{
    if(action.type === 'ADD_ITEM'){
        return [...itemList, action.payload];
    }
    if(action.type === 'DELETE_ITEM'){
        console.log('jere');
        return itemList.filter(item=> item !== action.payload)
    }
    return itemList;
};

export default combineReducers(
    {itemList: items}
);