const initialState = {
    isLoading: false,
    items: null,
};

const goods = (state = initialState, action) => {
    switch (action.type) {
        case "SET_GOODS":
            return {
                ...state,
                items: action.payload,
                isLoading: true,
            };
        case "SET_IS_LOADED":
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default goods;
