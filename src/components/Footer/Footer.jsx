import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/blogo.png';




const Footer = () => {
    return(
        <div className={styles.footer}>
      <div className={styles.grid}>
            <div className={styles.card}>
                <img src={logo} alt="Teebalo Logo" width="150"/>
                 <p>Tee-Balo is a beauty and adornment store that deals in make-up, accessories, 
                    hair products and so much more. Think of us as a one-stop store for 
                    beautification needs. 
                    At Tee-Balo, our aim is to bring out the beauty in every woman</p>
            </div>
            <div className={styles.card}>
                    <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Teebalo Shop</Link></li>
                    <li><Link to="/">Bridal Bookings</Link></li>
                    <li><Link to="/">Non-Bridal Bookings</Link></li>
                 </ul>
            </div>
            <div className={styles.card}>
                    <h3>Contact</h3>
                    <p>............ UK</p>
                    <p>......@teebalo.co.uk</p>
                    <p>+4.........1</p>
            </div>
    
    <div className={styles.card}>
     <h3>Social Media Handles</h3>
     <p>............ UK</p>
     <p>......@teebalo.co.uk</p>
     <p>+4.........1</p>
    </div>
     </div>
    </div>
    );

}
export default Footer;