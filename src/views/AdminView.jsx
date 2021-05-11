import React, { Component } from 'react';
import { connect } from 'react-redux';
import notify from 'msg-notify';
import AdminComponent from '../components/AdminComponent';
import getOrders from '../redux/actions/AdminActions'
import { getDataThunkPrivate, postDataThankPrivate } from '../redux/thunks';


class AdminView extends Component {
    state = {
        orderid: '',
        description: '',
        quantity: '',
        price: '',
        order_date: '',
        error: '',
        success: ''
    };
    componentDidMount() {
        const { getDataThunkPrivate } = this.props;
        getDataThunkPrivate('orders', getOrders);
    };
    handleClick = (event) => {
        event.preventDefault();
        const { postDataThunkPrivate } = this.props;
        postDataThunkPrivate('users/orders', this.state, placeOrder, 'post');
    }
    render() {
        const { order } = this.props;

        if (order) {
            // console.log('1234567890==============>', order['Orders'])
            return (
                <AdminComponent order={order['Orders']} onClick={this.handleClick} />
            );
        }
        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.getOrderReducer.order
    }

}
const actionCreators = {
    getDataThunkPrivate,
    // postDataThankPrivate,
};
// this is used to update the store throught the reducer
export default connect(mapStateToProps, actionCreators)(AdminView);
