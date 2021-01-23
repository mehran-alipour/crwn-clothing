import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selecCurrentUser } from '../../redux/user/user.selectors';
import { cartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden, dispatch }) => (
  <div className='header'>
    <Link className='logo-container' to='/' onClick={() => dispatch(cartHidden())}>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop' onClick={() => dispatch(cartHidden())}>
        SHOP
      </Link>
      <Link className='option' to='/shop' onClick={() => dispatch(cartHidden())}>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => { auth.signOut(); dispatch(cartHidden()) }}>
          SIGN OUT
        </div>
      ) : (
          <Link className='option' to='/signin' onClick={() => dispatch(cartHidden())}>
            SIGN IN
          </Link>
        )}
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selecCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
