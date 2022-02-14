import React from "react";
import { List, Button, Image } from "semantic-ui-react";

const CartComponent = ({ title, id, imageUrl, addedCount, removeGoodsFromCart }) => (
    <List selection divided verticalAlign="middle">
        <List.Item>
            <List.Content floated="right">
                <Button onClick={removeGoodsFromCart.bind(this, id)} color="red">
                    Удалить
                </Button>
            </List.Content>
            <Image avatar src={imageUrl} />
            <List.Content>{title} ({addedCount})</List.Content>
        </List.Item>
    </List>
);

export default CartComponent;
