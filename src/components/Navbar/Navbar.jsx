import React,  {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../assets/logos.png';
import SortIcon from '@material-ui/icons/Sort';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <div className={styles.navbar}>
        <div className={styles.grid}>
        <div className={styles.logo}>
        <Link to="/">
        <img src={logo} alt="Teebalo Logo" />
        </Link>
        <div className={styles.bar} onClick={handleClick}>
             { click ?  <CloseIcon fontSize="large" />  :  <SortIcon fontSize="large" />}
             </div>
        </div>
        <div className={click ? styles.navActive : styles.navLinks}>
        <ul>
            <li><Link to="/courses">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
        <div className={click ? styles.regActive : styles.reg}>
        <Link to ="/registration" className={`${styles.btn} ${styles.gold}`}>SignUp</Link>
        <Link to ="/login" className={`${styles.btn} ${styles.purple}`}>Login</Link>
        </div>
        </div>
        </div>

        
    );
}
export default Navbar;