import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import course from '../../assets/bridal.jpg';


const View2 = () => {
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
                    <h2>ONE-DAY INTENSIVE BEAUTY COURSE</h2>
                    <p>Teebalo will observe you as you create any beauty look for your choice at her studio. She will offer a comprehensive critique, following the observation - Teebalo will create a beauty look herself. Sharing her techniques and insider know-how along the way.

Armed with new knowledge, Teebalo will observe as you recreate her beauty look and she will offer guidance while you work.</p>
<div className={styles.label}>
                             <h6>&#x00A3;400</h6>
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
export default View2;