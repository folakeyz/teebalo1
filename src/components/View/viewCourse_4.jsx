import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import course from '../../assets/mudblog.jpg';


const View4 = () => {
    return(
        <div className={styles.course}>
           
            <div className={styles.courses}>
            <h2> Online Beauty Courses</h2>
            <p>Whether you wish to turn your hobby into a home business or simply want to learn the tricks of the trade from top beauty professionals, our beauty courses will equip you with the practical skills to perform skincare, 
                make up and body treatments with knowledge and confidence.</p>
            <div className={styles.grid}>
                 <div className={styles.card}>
                       <img src={course} alt="Makeup Courses" />
                    </div>
                    <div className={styles.card}>
                    <h2>VIRTUAL KIT EDIT</h2>
                    <p>Teebalo shares bespoke product knowledge and advises how to maintain your tool kit as well as how to improve your beauty collection. </p>
<div className={styles.label}>
                             <h6>&#x00A3;900</h6>
                             </div>
                             <div className={styles.btnBlock}>
                             <Link to="/" className={`${styles.btn} ${styles.purple}`}>Enroll Now</Link>
                             </div>
                    </div>
            </div>
        </div>
        </div>

        
    );
}
export default View4;