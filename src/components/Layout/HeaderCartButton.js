import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const [isBtnHighligthed, setIsBtnHighligthed] = useState(false);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasse = `${classes.button}  ${
    isBtnHighligthed ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighligthed(true);

    const timer = setTimeout(() => setIsBtnHighligthed(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasse} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
