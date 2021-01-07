import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import course from '../../assets/m3.jpg';


const View3 = () => {
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
                    <h2>TWO-DAY PRO INTENSIVE COURSE + WORK EXPERIENCE</h2>
                    <p>An intensive 2-day course teaching pro tips and tricks in an intimate 1-to-1 setting at Teebalo studio. Allowing you to put them to work immediately.

Day 1 (5hrs) Teebalo will observe as you create any beauty look of your choice on a model. She will then offer comprehensive critique following the observation. She will then create a beauty look sharing her techniques and insider know-how along the way.

Day 2 (5hrs) The day starts with your creating another look of your choice with Teebalo on hand to provide guidance. In addition to this, Teebalo will teach the business of makeup from negotiating your rates, contracts and marketing your skills.

Bonus day! Shadow Teebalo at a beauty booking as work experience.</p>
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
export default View3;