import React from "react";
import { Menu, Popup } from "semantic-ui-react";

import CartComponent from "../containers/Cart-container";

const HeaderMenu = ({ totalPrice, counter, items }) => (
    <Menu stackable>
        <Menu.Item>
            <img src="images/logo_book.svg" alt="Logo" />&nbsp;
            <b>Магазин книг</b>
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item>
                Итого:&nbsp;<b>{totalPrice}</b>&nbsp;руб.
            </Menu.Item>
            <Popup
                trigger={
                    <Menu.Item>
                        Корзина&nbsp;<b>{counter > 0 && `(${counter})`}</b>
                    </Menu.Item>
                }
                content={items.map(obj => <CartComponent {...obj} key={obj.id} />)}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
);

export default HeaderMenu;
