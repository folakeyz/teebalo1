import React from 'react';
import styles from './styles.module.css';
import p1 from '../../assets/m1.jpg';
import p2 from '../../assets/m2.jpg';
import p3 from '../../assets/m3.jpg';
import p4 from '../../assets/m4.jpg';
import p5 from '../../assets/m5.jpg';
import p6 from '../../assets/m6.jpg';
import p7 from '../../assets/m7.jpg';
import p11 from '../../assets/m11.jpg';
import p12 from '../../assets/m12.jpg';
import p13 from '../../assets/m13.jpg';



const Port = () => {
    return(
        <div className={styles.course}>
             <div className={styles.banner}>
           <h1>Our Portfolio</h1>
           </div>
            <div className={styles.courses}>
            <div className={styles.grid}>
            <div className={styles.card}>
           <img src={p1} alt="Teebalo Portfolio" />
           </div>
           <div className={styles.card}>
           <img src={p2} alt="Teebalo Portfolio" />
           </div>
           <div className={styles.card}>
           <img src={p3} alt="Teebalo Portfolio" />
           </div>
           <div className={styles.card}>
           <img src={p4} alt="Teebalo Portfolio" />
           </div>
           <div className={styles.card}>
           <img src={p5} alt="Teebalo Portfolio" />
           </div>
           <div className={styles.card}>
           <img src={p6} alt="Teebalo Portfolio" />
           </div>
           <div className={styles.card}>
           <img src={p7} alt="Teebalo Portfolio" />
           </div>
        
           <div className={styles.card}>
           <img src={p11} alt="Teebalo Portfolio" />
           </div>
           <div className={styles.card}>
           <img src={p12} alt="Teebalo Portfolio" />
           </div>
           <div className={styles.card}>
           <img src={p13} alt="Teebalo Portfolio" />
           </div>
            </div>
            </div>
            

    </div>
    );

}
export default Port;