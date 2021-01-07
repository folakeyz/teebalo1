import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import course from '../../assets/blackwoman.jfif';
import course2 from '../../assets/bridal.jpg';
import course3 from '../../assets/m3.jpg';
import course4 from '../../assets/mudblog.jpg';


const Courses = () => {
    return(
        <div className={styles.course}>
           
            <div className={styles.courses}>
            <h2> Online Beauty Courses</h2>
            <p>Whether you wish to turn your hobby into a home business or simply want to learn the tricks of the trade from top beauty professionals, our beauty courses will equip you with the practical skills to perform skincare, 
                make up and body treatments with knowledge and confidence.</p>
            <div className={styles.grid}>
                 <div className={styles.card}>
                        <div className={styles.img}>
                            <img src={course} alt="MakeUp Course" />
                        </div>
                        <div className={styles.text}>
                        <div className={styles.label}>
                            <h4>WATCH AND LEARN : 3-HOUR BEAUTY COURSE </h4>
                            </div>
                            <div className={styles.label}>
                             <h6>&#x00A3;300</h6>
                             </div>
                             <div className={styles.btnBlock}>
                             <Link to="/Course1" className={`${styles.btn} ${styles.gold}`}>View</Link>
                             <Link to="/login" className={`${styles.btn} ${styles.purple}`}>Enroll Now</Link>
                             </div>
                         </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <img src={course2} alt="MakeUp Course" />
                        </div>
                        <div className={styles.text}>
                        <div className={styles.label}>
                            <h4>ONE-DAY INTENSIVE BEAUTY COURSE</h4>
                            </div>
                            <div className={styles.label}>
                             <h6>&#x00A3;400</h6>
                             </div>
                             <div className={styles.btnBlock}>
                             <Link to="/Course2" className={`${styles.btn} ${styles.gold}`}>View</Link>
                             <Link to="/login" className={`${styles.btn} ${styles.purple}`}>Enroll Now</Link>
                             </div>
                         </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <img src={course3} alt="MakeUp Course" />
                        </div>
                        <div className={styles.text}>
                        <div className={styles.label}>
                            <h4>TWO-DAY PRO INTENSIVE COURSE + WORK EXPERIENCE</h4>
                            </div>
                            <div className={styles.label}>
                             <h6>&#x00A3;900</h6>
                             </div>
                             <div className={styles.btnBlock}>
                             <Link to="/Course3" className={`${styles.btn} ${styles.gold}`}>View</Link>
                             <Link to="/login" className={`${styles.btn} ${styles.purple}`}>Enroll Now</Link>
                             </div>
                         </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <img src={course4} alt="MakeUp Course" />
                        </div>
                        <div className={styles.text}>
                        <div className={styles.label}>
                            <h4>VIRTUAL KIT EDIT</h4>
                            </div>
                            <div className={styles.label}>
                             <h6>&#x00A3;45</h6>
                             </div>
                             <div className={styles.btnBlock}>
                             <Link to="/Course4" className={`${styles.btn} ${styles.gold}`}>View</Link>
                             <Link to="/login" className={`${styles.btn} ${styles.purple}`}>Enroll Now</Link>
                             </div>
                         </div>
                    </div>
            </div>
        </div>
        </div>

        
    );
}
export default Courses;