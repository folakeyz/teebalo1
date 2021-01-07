import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../assets/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Welcome = () => {
    return(
        <div className={styles.backdrop}> 
                <div className={styles.icons}>
                    <div className={styles.ilogo}>
                        <img src={logo} alt="Teebalo Logo" /> 
                       
                    </div> 
                    <div className={styles.ilogo}>
                       <Link to="/"><FacebookIcon /></Link> 
                       <Link to="/"><TwitterIcon /></Link> 
                       <Link to="/"><InstagramIcon /></Link> 
                       <Link to="/"><YouTubeIcon /></Link> 
                    </div> 
                </div>
            <div className={styles.contents}>
                    {/* <div className={styles.circle}>
                        <img src={logo} alt="Teebalo Logo" />
                    </div> */}
                    <div className={styles.links}>
                    <h1>Welcome to Teebalo</h1>
                    <Link to="/Courses" className={`${styles.btn} ${styles.blue}`}>Book a Makeup Course</Link> 
                    <a href="https://www.youtube.com/playlist?list=PLmUMZyxFm73sS4rMfGjr7051grlCDcdHv" target="blank" className={`${styles.btn} ${styles.magenta}`}>New Youtube Video</a> 
                    <Link to="/shop" className={`${styles.btn} ${styles.gold}`}>ByTeebalo Shop</Link> 
                    <Link to="/" className={`${styles.btn} ${styles.green}`}>Blog</Link> 
                    <Link to="/" className={`${styles.btn} ${styles.crimson}`}>Bridal Availability and Rate</Link> 
                    <Link to="/" className={`${styles.btn} ${styles.purple}`}>All Non Bridal Bookings</Link> 
                        </div>
            </div>
        </div>
    );
} 
export default Welcome;