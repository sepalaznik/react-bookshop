import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const GoodsCard = (item) => {
    const { title, authorName, author, imageUrl, price, rating, addGoodsToCart, addedCount } = item;
    return (
        <Card>
            <Image src={imageUrl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{authorName}&nbsp;{author}</span>
                </Card.Meta>
                <Card.Description>
                    {rating}
                    <Icon name='star' color="yellow" />
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='rub' />
                {price}
            </Card.Content>
            <Button onClick={addGoodsToCart.bind(this, item)} color="green">
                Добавить в корзину {addedCount > 0 && `(${addedCount})`}
            </Button>
        </Card>
    )
};

export default GoodsCard;
