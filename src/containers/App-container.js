import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import orderBy from "lodash/orderBy";

import * as goodsAction from "../redux/actions/goods";
import App from "../components/App";

const sortBy = (goods, filterBy) => {
    switch (filterBy) {
        case "popular":
            return orderBy(goods, "rating", "desc");
        case "author":
            return orderBy(goods, "author", "asc");
        case "price_down":
            return orderBy(goods, "price", "desc");
        case "price_up":
            return orderBy(goods, "price", "asc");
        case "all":
        default:
            return goods;
    }
};

const filterGoods = (goods, searchQuery) =>
    goods.filter(
        obj => 
            obj.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            obj.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    ); 

const findedGoods = (goods, filterBy, searchQuery) => {
    return sortBy(filterGoods(goods, searchQuery), filterBy);
};

const mapStateToProps = ({ goods, filter }) => ({
    goods:
        goods.items && 
        findedGoods(goods.items, filter.filterBy, filter.searchQuery),
    isLoading: goods.isLoading
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(goodsAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
