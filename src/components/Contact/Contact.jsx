import React from 'react';
import styles from './styles.module.css';




const Contact = () => {
    return(
        <div className={styles.course}>
            <div className={styles.banner}>
             <h1>CONTACT US</h1>
             </div>
            <div className={styles.courses}>
           <form>
           <div className={styles.grid}>
                <div className={styles.formGroup}>
                    <input type="text" name="name" className="" />
                    <label>FullName</label>
                </div>
                <div className={styles.formGroup}>
                    <input type="text" name="email" className="" />
                    <label>Email</label>
                </div>
                <div className={styles.formGroup}>

                    <input type="text" name="subject" className="" />
                    <label>Subject</label>
                </div>
                <div className={styles.textGroup}>
                    <textarea name="msg" className=""></textarea>
                    <label>Message</label>
                </div>
                <div className={`${styles.formGroup} ${styles.btn} ${styles.purple}`}>
                    <input type="submit" name="send" value="Send" />
                </div>
            </div>
           </form>
            </div>
            

    </div>
    );

}
export default Contact;