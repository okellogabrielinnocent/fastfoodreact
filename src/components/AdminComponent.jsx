import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdminComponent extends Component {
  // componentDidMount() {
  //   const elems = document.querySelectorAll('.table');
  //   const options = {};
  //   const instances = M.Modal.init(elems, options);
  // }
  render() {
    const { order } = this.props;
    console.log('1234567890============>', order)
    return (
      <div>
        <div className="topnav">
          <div className="topnav-list">
            <ul>
              <li><a href="admin.html"> Home</a></li>
              <li><a href="addItem.html"> Add Menu</a></li>
              <li><a href="addedlist.html"> Menu List</a></li>
              <li><a href="/" onClick="logout()" >Log out</a></li>
            </ul>
          </div>
        </div>

        <div className="main" >
          <div className="table" id="user_orders">
            <h3>Orders</h3>
            <table>
              <thead>
                <tr>
                  <th className="narrow">Order Number</th>
                  <th>Details</th>
                  <th>Order Status</th>
                  <th>Quantity</th>
                  <th className="narrow">Amount Due (Ugsh)</th>
                  <th>Order Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {order.map((menuItem, i, k) => <tr key={i}>
                  <td key={i}>{menuItem.orderid}</td>
                  <td key={k}>{menuItem.description}</td>
                  <td key={k}>{menuItem.order_status}</td>
                  <td key={k}>{menuItem.quantity}</td>
                  <td key={k}>{menuItem.price}</td>
                  <td key={k}>{menuItem.order_date}</td>
                  <td>
                    <button className="complete order-button">Complete </button>
                    <button className="decline order-button">Decline </button>
                  </td>
                </tr>)}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    )
  }
}
// AdminComponent.propTypes = {
//   onClick: PropTypes.func,

// }

export default AdminComponent;