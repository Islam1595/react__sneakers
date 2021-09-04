import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context'

import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Orders from './pages/Orders';



function App() {
  let [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


 React.useEffect(() => {
  async function fetchData() {
 try {
    const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
    axios.get('https://610805f6d73c6400170d37b0.mockapi.io/carts'),
    axios.get('https://610805f6d73c6400170d37b0.mockapi.io/favorite'), 
    axios.get('https://610805f6d73c6400170d37b0.mockapi.io/Items'),
    ]);

    setIsLoading(false);
    setCartItems(cartResponse.data);
    setFavorites(favoritesResponse.data);
    setItems(itemsResponse.data);
   } catch (error) {
   alert('Ошибка при отправке запроса ;(')
   console.error(error);
 }
}
  fetchData();
  
}, []);

 const onAddToCart = async (obj) => {
  try {
    const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id)); 
    if (findItem) {
      setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
      await axios.delete(`https://610805f6d73c6400170d37b0.mockapi.io/carts/${findItem.id}`);
    } else {
      setCartItems((prev) => [...prev,  obj]);
      const { data } =  await axios.post('https://610805f6d73c6400170d37b0.mockapi.io/carts', obj);
      setCartItems((prev) =>  prev.map(item => {
        if (item.parentId === data.parentId) {
          return {
            ...item,
            id: data.id
          };
        }
        return item;
      }));
    }
  } catch (error) {
    alert('Ошибка при удалении из корзины');
    console.error(error);
  }
 };

 const onRemoveItem = (id) => {
 try {
  axios.delete(`https://610805f6d73c6400170d37b0.mockapi.io/carts/${id}`);
  setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(id)));
 } catch (error) {
   alert('Ошибка при удалении из корзины');
   console.error(error);
  }
 };

 

 const onAddToFavorite = async (obj) => {
  try {
    if (favorites.find((favobj) => Number(favobj.id) === Number(obj.id))) {
      axios.delete(`https://610805f6d73c6400170d37b0.mockapi.io/favorite/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
    const { data } = await axios.post('https://610805f6d73c6400170d37b0.mockapi.io/favorite', obj);
    setFavorites((prev) => [...prev, data]);
    }
  } catch (error) {
    alert('Не удалось добавить в фавориты');
    console.error(error);
  }
 };  
 
 const onChangeSearchInput =(event) => {
   setSearchValue(event.target.value);
 }

 const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
 }
 
  return (
    <AppContext.Provider value={{ 
      items,
      cartItems,
      favorites,
      isItemAdded,
      onAddToCart,
      onAddToFavorite,
      setCartOpened,
      setCartItems,
     }}>
      <div className="wrapper clear">
      <Drawer items={ cartItems } onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened} /> 
      <Header onClickCart={() => setCartOpened(true)}  />
      
      <Route path="/" exact> 
        <Home 
        cartItems={cartItems}
        items={items} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorite={onAddToFavorite} 
        onAddToCart={onAddToCart}
        isLoading={isLoading}
        />
      </Route>
      <Route path="/favorites" exact> 
        <Favorites />
      </Route>
      <Route path="/orders" exact> 
        <Orders />
      </Route>
       </div>
    </AppContext.Provider>
  );
}

export default App;
