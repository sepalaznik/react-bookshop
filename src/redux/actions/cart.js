export const addGoodsToCart = obj => ({
    type: "ADD_GOODS_TO_CART",
    payload: obj,
});

export const removeGoodsFromCart = id => ({
    type: "REMOVE_GOODS_FROM_CART",
    payload: id,
});
