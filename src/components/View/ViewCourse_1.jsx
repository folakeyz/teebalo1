import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import course from '../../assets/blackwoman.jfif';



const View = () => {
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
                    <h2>WATCH AND LEARN : 3-HOUR BEAUTY COURSE</h2>
                    <p>3-Hour Intensive workshop, held at Teebalo's  studio, where you'll watch a beauty look come together from start to finish - from prepping the skin to the last eyebrow hair being put in place.

Observe, learn, take notes and ask questions! At the end of the look, Teebalo sets up a portrait shoot to capture the final look, perfect for aspiring Makeup Artists and Content Creators who want to learn the basics about lighting and photography.</p>
<div className={styles.label}>
                             <h6>&#x00A3;300</h6>
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
export default View;