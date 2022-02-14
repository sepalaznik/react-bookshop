import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uniqBy from "lodash/uniqBy";

import * as cartAction from "../redux/actions/cart";
import HeaderMenu from "../components/Menu";

const mapStateToProps = ({ cart }) => ({
    totalPrice: cart.items.reduce((total, goods) => total + goods.price, 0),
    counter: cart.items.length,
    items: uniqBy(cart.items, obj => obj.id),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
