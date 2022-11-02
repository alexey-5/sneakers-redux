import { useDispatch, useSelector } from 'react-redux';
import { fetchCartDel, fetchCartPlus } from '../../store/cartSlice';
import { fetchfavtDel } from '../../store/favorSlice';
import styles from './CardFavor.module.css'

function CardFavor({id,idt,imgSrc,title,prise}){
  const dispatch = useDispatch();
  const itemsCart = useSelector((state) => state.cart.cart);
  const select = itemsCart.find((item) => item.idt === idt)//если в корзине есть эта карточка - галочка
  const obj = { id, idt, imgSrc, title, prise }

  const Select=()=>{
    const snik = itemsCart.find((item) => item.idt === idt);
    if (itemsCart.find((item) => item.idt === idt)) {
      dispatch(fetchCartDel(snik.id)); // удаление из корзины по аргументу - id
    } else {
      // или запись
      dispatch(fetchCartPlus(obj));
    }
   }  
   
   return(
      <div className={styles.card}>
            <img onClick={()=>dispatch(fetchfavtDel(id))} className={styles.card__like} width={30} height={30} src={require(`../../img/cart-del.svg`).default}alt="del" />
            <img width={133} height={112} src={require(`../../${imgSrc}`)} alt= {styles.sneak}/>
            <p className={styles.card__text}>{title}</p>
            <div className={styles.card__prise}>
              <div>
                <p>ЦЕНА</p>
                <b>{prise} руб.</b>
              </div>
                <img onClick={Select} className={styles.card__btn} width={32} height={32} src={select?require(`../../img/plus-select.svg`).default:require(`../../img/plus32.svg`).default} alt="plus" />
            </div>
          </div>
   )
}
export default CardFavor