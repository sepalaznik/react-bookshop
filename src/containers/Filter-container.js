import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as filterAction from "../redux/actions/filter";
import Filter from "../components/Filter";

const mapStateToProps = ({ filter }) => ({
    filterBy: filter.filterBy,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
