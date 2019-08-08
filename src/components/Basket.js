import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Basket = ({ selectedPhones, removePhone }) => (
  <div>
    <h1 className="basket-title">Added items</h1>

    {selectedPhones.length < 1
      ? <p className="basket-text">Shopping Cart is empty</p>
      : (
        <ul className="shopping-list">
          {selectedPhones.map(phone => (
            <li className="phone-card">
              <Link to={`/phones/${phone.id}`}>
                <img
                  src={phone.image}
                  alt="phone"
                  className="shopping-list__img"
                />
              </Link>

              <Link
                to={`/phones/${phone.id}`}
                className="shopping-list__item-link"
              >
                {phone.id}
              </Link>

              <div>
                {`${phone.quantity} item(s)`}
              </div>

              <button
                type="button"
                className="cart-btn remove-btn"
                onClick={() => removePhone(phone.id)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      )
    }
  </div>
);

Basket.propTypes = {
  selectedPhones: PropTypes.arrayOf(PropTypes.object).isRequired,
  removePhone: PropTypes.func.isRequired,
};

export default Basket;
