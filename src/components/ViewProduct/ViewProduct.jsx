import React from 'react';
import styles from './styles.module.css';
import kit1 from '../../assets/kit1.jpg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Cart(props){
    console.log(props.match.params.id);
    return(
        <div className={styles.products}>
     <div className={styles.grid}>
     <div className={styles.card}>
  <img src={kit1} alt="Teebalo Products" />
  </div>
  <div className={styles.card}>
  <h2>MakeUp Kits</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur.
</p>
<h1>&#x00A3;30</h1>
<div className={styles.cardinput}>
    <h4>Quantity</h4>
<input type="number" name="qty" />
</div>

<div className={styles.cardbtn}>
<div className={styles.bgrid}>
<Link to="/" className={styles.cart}>ADD TO CART</Link>
<Link to="/" className={styles.view}>BUY NOW</Link>
</div>
</div>
     </div>
     </div>
        </div>
    )
}
export default Cart;
