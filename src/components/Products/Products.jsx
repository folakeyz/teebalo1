import React from 'react';
import styles from './styles.module.css';
import data from './data'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Products(props){
    return(
        <div className={styles.products}>
             <div className={styles.headingsection}>
<span className={styles.subheading}>FEATURED PRODUCTS</span>
</div>
     <div className={styles.grid}>
         {
             data.products.map(product =>
                
                <div className={styles.card}>
                <div className={styles.cardImg}>
                   <img src={product.img} alt="Teebalo Products"/>
               </div>
               <div className={styles.cardText}>
                   <div className={styles.cardLabel}> 
                       <h6>{product.category}</h6>
                       <small>{product.name}</small>
                       <h3>&#x00A3;{product.price}</h3>
                   </div>
                   <div className={styles.cardbtn}> 
                   <div className={styles.bgrid}> 
                   <Link to={'/viewProduct/' + product._id} className={styles.view}>View</Link>
                       <Link to="/" className={styles.cart}>Add to Cart</Link>
                       <Link to="/" className={styles.buy}>Buy</Link>
                   </div>
                   </div>
               </div>
        </div>
                
        )
         }
     </div>
        </div>
    )
}
export default Products;
