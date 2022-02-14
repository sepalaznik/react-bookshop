const initialState = {
    items: []
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_GOODS_TO_CART":
            return {
                ...state,
                items: [
                    ...state.items, 
                    action.payload
                ],
            };
        case "REMOVE_GOODS_FROM_CART":
            return {
                ...state,
                items: state.items.filter(obj => obj.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cart;
