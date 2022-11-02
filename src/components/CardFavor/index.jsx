import { useState } from 'react'
import styles from './CardFavor.module.css'
function CardFavor({id,idt,imgSrc,title,prise,onClickPlus, delItemFavor,itemsCart,lice=false}){
  // const [select,setSelect] = useState(false)
   //const [like,setLike] = useState(lice)
  const select = itemsCart.find((item) => item.idt === idt)//если в корзине есть эта карточка - галочка
   
  const Select=()=>{
      onClickPlus({id,idt,imgSrc,title,prise})
   }  
   
   return(
      <div className={styles.card}>
            <img onClick={()=>delItemFavor(id)} className={styles.card__like} width={30} height={30} src={require(`../../img/cart-del.svg`).default}alt="del" />
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