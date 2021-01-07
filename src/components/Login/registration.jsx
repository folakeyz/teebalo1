import React from 'react';
import styles from './styles.module.css';





const Registration = () => {
    return(
        <div className={styles.course}>
      <div className={styles.courses}>
      <div className={styles.login}>
        <h2>SignUp</h2>
     <form>
     <div className={styles.group}>
     <label>First Name</label>
     <input type="text" name="fname" />
     </div>
     <div className={styles.group}>
     <label>Last Name</label>
     <input type="text" name="lname" />
     </div>
     <div className={styles.group}>
     <label>Email</label>
     <input type="email" name="email" />
     </div>
     <div className={styles.group}>
     <label>Password</label>
     <input type="password" name="pwd" />
     </div>
     <div className={styles.group}>
     <label>Confirm Password</label>
     <input type="password" name="cpwd" />
     </div>
     <div className={styles.group}>
     <input type="submit" name="login" value="Signup" className={`${styles.btn} ${styles.purple}`} />
     </div>
     </form>
     </div>
     </div>
    </div>
    );

}
export default Registration;