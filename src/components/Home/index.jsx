import { useSelector } from "react-redux";
import Card from "../Card";
import CardFavor from "../CardFavor";

function Home({
  eventSearch,
  cartPlus,
  addSearch,
  favoritePlus,
  itemsCart,
  itemsFavorite,
  delItemFavor,
  itemsFavorit
}) {
  const items = useSelector((state)=>state.cart.baza)
  console.log('hom-snik--',items);
  return (
    <div className="content">
      <div className="content__search">
        <h1>{eventSearch ? `поиск по:${eventSearch}` : "Все кроссовки"}</h1>
        <div className="content__search-block">
          <img width={14} height={14} src={require(`../../img/search14.svg`).default} alt="search" />
          <input onChange={addSearch} placeholder="Поиск..." />
        </div>
      </div>
      <div className="content__inner">
        {items
          .filter((val) =>
            val.title.toLowerCase().includes(eventSearch.toLowerCase())
          )
          .map((item, index) => (
            <Card
              {...item}
              key={index}
              onClickPlus={cartPlus}
              favoritePlus={favoritePlus}
              itemsCart={itemsCart}
              itemsFavorit={itemsFavorit}
            />
          ))}
      </div>
      <h1>Мои закладки</h1>
      <div className="content__inner">
        {itemsFavorite.map((item, index) => (
          <CardFavor
            {...item}
            key={index}
            onClickPlus={cartPlus}
            favoritePlus={favoritePlus}
            itemsCart={itemsCart}
            delItemFavor={delItemFavor}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
