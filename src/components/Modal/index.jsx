import { useDispatch, useSelector } from "react-redux";
import { fetchCartDel } from "../../store/cartSlice";
import styles from "./Modal.module.css";

function Modal({ cCart}) {
  const dispatch = useDispatch();
  const itemsCart = useSelector((state)=>state.cart.cart)
  return (
    <div className={styles.modal} /* style={{display:'none'}} */>
      <div className={styles.modal__cart}>
        <h2>
          Корзина{" "}
          <img
            onClick={cCart}
            className={styles.cart_del}
            width={32}
            height={32}
            src={require(`../../img/cart-del.svg`).default}
            alt="cart-del"
          />
        </h2>

        {itemsCart.length > 0 ? (
          <>
            <div className={styles.cart_items}>
              {itemsCart.map((obj, index) => (
                <div key={index} className={styles.cart_item}>
                  <img width={70} height={70} src={require(`../../${obj.imgSrc}`)} alt="sneak" />
                  <div className={styles.cart_info}>
                    <p>{obj.title}</p>
                    <b>{obj.prise} руб.</b>
                  </div>
                  <img
                    onClick={()=>dispatch(fetchCartDel(obj.id))}
                    className={styles.cart_del}
                    width={32}
                    height={32}
                    src={require(`../../img/cart-del.svg`).default}
                    alt="cart-del"
                  />
                </div>
              ))}
            </div>

            <ul className={styles.modal_bottom}>
              <li>
                <span>Итого: </span>
                <div className={styles.modal_dot}></div>
                <b>21 000 руб. </b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div className={styles.modal_dot}></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className={styles.modal_btn}>
              Оформить заказ{" "}
              <img
                className={styles.modal_arr}
                width={13}
                height={13}
                src={require(`../../img/arr-r13.svg`).default}
                alt="like20"
              />
            </button>
          </>
        ) : (
          <div className={styles.cart_empty}>
            <img
              className={styles.cart_del}
              width={120}
              height={120}
              src={require(`../../img/cart-empty.png`)}
              alt="cart"
            />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={cCart} className={styles.modal_btn}>
              {" "}
              <img
                className={styles.modal_left}
                width={13}
                height={13}
                src={require(`../../img/arr-left.svg`).default}
                alt="like20"
              />{" "}
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Modal;
