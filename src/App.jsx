import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";
import { fetchCart, fetchCartDel, fetchCartPlus, fetchSneakers, setBaza } from "./store/cartSlice";
import { fetchFavor } from "./store/favorSlice";
/* const arr = [{ imgSrc: "img/sneak/sn1.jpg", title: "Мужские Кроссовки Nike Blazer Mid Suede", prise: 2100 },
{ imgSrc: "img/sneak/sn2.jpg", title: "Мужские Кроссовки Nike Air Max 270", prise: 3400 },
{ imgSrc: "img/sneak/sn3.jpg", title: "Мужские Кроссовки uuu ZZZ Suede", prise: 5600 },] */
  // При перезаписи элементов в корзину id мутирует. Приходится находить соответствие между
  // системным id и своим- внесённым idt.  
function App() {
  const [openCart, setOpenCart] = useState(false);
  const [eventSearch, setEventSearch] = useState(""); //======== */
  // useEffect(() => { // Алексей dynai48@yandex.ru  radio
  const dispatch = useDispatch();
 
    useEffect(() => { //первая загрузка данных
    // Алексей dynai48@yandex.ru  radio
     dispatch(fetchSneakers());
     dispatch(fetchCart());
     dispatch(fetchFavor());
  }, []);

  const addSearch = (event) => {
    setEventSearch(event.target.value);
  };
  return (
    <div className="wrapper">
      {openCart ? (
        <Modal
          cCart={() => setOpenCart(false)}
        />
      ) : null}

      <Header openCart={() => setOpenCart(true)} />

      <Home
        eventSearch={eventSearch}
        addSearch={addSearch}
      />
    </div>
  );
}

export default App;
