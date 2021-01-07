import React from 'react';
import styles from './styles.module.css';





const Login = () => {
    return(
        <div className={styles.course}>
      <div className={styles.courses}>
      <div className={styles.login}>
        <h2>Login</h2>
     <form>
     <div className={styles.group}>
     <label>Email</label>
     <input type="email" name="email" />
     </div>
     <div className={styles.group}>
     <label>Password</label>
     <input type="password" name="pwd" />
     </div>
     <div className={styles.group}>
     <input type="submit" name="login" value="Login" className={`${styles.btn} ${styles.purple}`} />
     </div>
     </form>
     </div>
     </div>
    </div>
    );

}
export default Login;