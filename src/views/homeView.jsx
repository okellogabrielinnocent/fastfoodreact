import React, { Component } from 'react';
import { connect } from 'react-redux';
import notify from 'msg-notify';
import { getDataThunkPrivate } from '../redux/thunks';
import getMenu from '../redux/actions/HomeActions';
import Home from '../components/HomeComponent';

export class HomeView extends Component {
  state = {
    description: '',
    price: '',
    // error: '',
    success: ''
  }
  componentDidMount() {
    const { getDataThunkPrivate } = this.props;
    getDataThunkPrivate('menu', getMenu);
  }

  handleClick = (event) => {
    event.preventDefault();
    const { postDataThunkPrivate } = this.props;
    postDataThunkPrivate('users/orders', this.state, placeOrder, 'post');
  }

  render() {
    const { menu } = this.props;
    if (menu) {
      return (
        <Home menu={menu['Avialable menu']} />
      );
    }
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menuReducer.menu,
  };
};

const actionCreators = {
  getDataThunkPrivate
};

export default connect(mapStateToProps, actionCreators)(HomeView);