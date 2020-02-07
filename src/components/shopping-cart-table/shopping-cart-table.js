import React from 'react';
import './shopping-cart-table.css';
import {connect} from 'react-redux';
import {bookAddedToCart, subtractItem, bookDeletedFromCart} from '$actions';

const ShoppingCartTable = (props) => {
  const {
    items,
    total,
    onIncrease,
    onDecrease,
    onDelete
  } = props;

  const renderRaw = (item, index) => {
    const { id, name, count, total } = item;

    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash"/>
          </button>

          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle"/>
          </button>

          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle"/>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        </thead>

        <tbody>
        {items.length !== 0 ? items.map(renderRaw) : <tr>
          <td>Товар не выбран...</td>
        </tr>}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.orderTotal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => {
      dispatch(bookAddedToCart(id))
    },
    onDecrease: (id) => {
      dispatch(subtractItem(id))
    },
    onDelete: (id) => {
      dispatch(bookDeletedFromCart(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
