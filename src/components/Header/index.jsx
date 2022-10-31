import styles from './Header.module.css'
function Header({openCart}) {
   return (
      <header className={styles.header}>
         <div className={styles.header__left}>
            <img width={40} height={40} src="img/header.png" alt="header" />
            <div>
               <h2 className={styles.header__left}>REACT SNEAKERS</h2>
               <p className={styles.header__left_p}>Магазин лучших кроссовок</p>
            </div>
         </div>
         <ul className={styles.header__right}>
            <li onClick={openCart} className={styles.cart}>
               <img width={18} height={18} src="img/cart18.svg" alt="cart" /><span>1205 руб.</span>
            </li>
            <li>
               <img className={styles.header__right_like} width={20} height={20} src="img/like20.svg" alt="like20" />
               <img width={20} height={20} src="img/login20.svg" alt="login20" />
            </li>
         </ul>
      </header>
   )
}
export default Header