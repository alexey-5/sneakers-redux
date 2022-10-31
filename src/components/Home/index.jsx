import Card from "../Card";
import CardFavor from "../CardFavor";
function Home({
  items,
  eventSearch,
  cartPlus,
  addSearch,
  favoritePlus,
  itemsCart,
  itemsFavorite,
  delItemFavor,
  itemsFavorit
}) {
  return (
    <div className="content">
      <div className="content__search">
        <h1>{eventSearch ? `поиск по:${eventSearch}` : "Все кроссовки"}</h1>
        <div className="content__search-block">
          <img width={14} height={14} src="img/search14.svg" alt="search" />
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
