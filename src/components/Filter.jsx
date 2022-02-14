import React from "react";
import { Input, Menu } from "semantic-ui-react";

const Filter = ({ filterBy, setFilter, searchQuery, setSearchQuery }) => (
    <Menu secondary stackable>
        <Menu.Item
            active={filterBy === "all"}
            onClick={setFilter.bind(this, "all")}>
            Все книги
        </Menu.Item>
        <Menu.Item
            active={filterBy === "popular"}
            onClick={setFilter.bind(this, "popular")}>
            Популярные
        </Menu.Item>
        <Menu.Item
            active={filterBy === "author"}
            onClick={setFilter.bind(this, "author")}>
            По автору
        </Menu.Item>
        <Menu.Item
            active={filterBy === "price_down"}
            onClick={setFilter.bind(this, "price_down")}>
            По убыванию цены
        </Menu.Item>
        <Menu.Item
            active={filterBy === "price_up"}
            onClick={setFilter.bind(this, "price_up")}>
            По возрастанию цены
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item>
                <Input 
                    icon="search" 
                    onChange={event => setSearchQuery(event.target.value)}
                    value={searchQuery} 
                    placeholder="Поиск по книгам..." />
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export default Filter;
