import React from 'react';
import styles from './styles.module.css';
import teebalo from '../../assets/m13.jpg';

const About = () => {
    return(
        <div className={styles.course}>
             <div className={styles.banner}>
             <h1>About Teebalo</h1>
             </div>
            <div className={styles.courses}>
            <div className={styles.grid}>
            <div className={styles.card}>
           <img src={teebalo} alt="Teebalo" />
            </div>
            <div className={styles.card}>
            <p>Tee-Balo is a beauty and adornment store that deals in make-up, accessories, hair products and so much more. Think of us as a one-stop store for 
    beautification needs. At Tee-Balo, our aim is to bring out the beauty in every woman</p>
            </div>
            </div>
            
            </div>
            

    </div>
    );

}
export default About;