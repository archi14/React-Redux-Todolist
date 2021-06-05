export const add_item=(item)=>{
    
    return {
        type:"ADD_ITEM",
        payload : item
    };
};

export const delete_item=(item)=>{
    return {
        type:"DELETE_ITEM",
        payload:item
    }
};


