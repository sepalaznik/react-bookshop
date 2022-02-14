import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as cartAction from "../redux/actions/cart";
import CartComponent from "../components/Cart";

const mapStateToProps = ({ cart }, { id }) => ({
    addedCount: cart.items.reduce(
        (count, item) => count + (item.id === id ? 1 : 0),
        0,
    ),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
