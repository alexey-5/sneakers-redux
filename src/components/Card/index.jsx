import { useState } from 'react'
import styles from './Card.module.css'
function Card({id,idt,imgSrc,title,prise,onClickPlus, favoritePlus,itemsCart,itemsFavorit,lice=false}){
  //const onClBtn=()=>alert(title) /* Первый параметр от onClick содержит спецобъект по умолчанию*/
                    // если только он не задан аргументом при вызове
  // const [select,setSelect] = useState(false)
   //const [like,setLike] = useState(lice)
  const select = itemsCart.find((item) => item.idt === idt)//если в корзине есть эта карточка - галочка
  const like = itemsFavorit.find((item) => item.idt === idt)//если в фаворитах есть эта карточка - галочка
   
  const Select=()=>{
      onClickPlus({id,idt,imgSrc,title,prise})
   }  
   const Like=()=>{
      favoritePlus({id,idt,imgSrc,title,prise})
      //console.log({id,imgSrc,title,prise})
   }  
   return(
      <div className={styles.card}>
            <img onClick={Like} className={styles.card__like} width={30} height={30} src={like?"img/like32.svg":"img/unlike30.svg" }alt="like" />
            <img width={133} height={112} src={imgSrc} alt= {styles.sneak}/>
            <p className={styles.card__text}>{title}</p>
            <div className={styles.card__prise}>
              <div>
                <p>ЦЕНА</p>
                <b>{prise} руб.</b>
              </div>
                <img onClick={Select} className={styles.card__btn} width={32} height={32} src={select?"img/plus-select.svg":"img/plus32.svg"} alt="plus" />
            </div>
          </div>
   )
}
export default Card