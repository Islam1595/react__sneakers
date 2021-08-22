import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context'

import Favorites from './pages/Favorites';
import Home from './pages/Home';



const arr = [ ];

function App() {
  let [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

 React.useEffect(async () => {
  async function fetchData() {
    const itemsResponse = await axios.get('https://610805f6d73c6400170d37b0.mockapi.io/Items');
    const cartResponse = await axios.get('https://610805f6d73c6400170d37b0.mockapi.io/carts');
    const favoritesResponse = await axios.get('https://610805f6d73c6400170d37b0.mockapi.io/favorite')

    setIsLoading(false);
    setCartItems(cartResponse.data);
    setFavorites(favoritesResponse.data);
    setItems(itemsResponse.data);
 
  }

  fetchData();
 }, []);

 const onAddToCart = (obj) => {
  if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
    axios.delete(`https://610805f6d73c6400170d37b0.mockapi.io/carts/${obj.id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
  } else {
  axios.post('https://610805f6d73c6400170d37b0.mockapi.io/carts', obj);
  setCartItems((prev) => [...prev, obj]);
  }
 };

 const onRemoveItem = (id) => {
   console.log(id);
  axios.delete(`https://610805f6d73c6400170d37b0.mockapi.io/carts/${id}`);
  setCartItems((prev) => prev.filter(item  => item.id !== id));
 };

 

 const onAddToFavorite = async (obj) => {
  try {
    if (favorites.find((favobj) => favobj.id === obj.id)) {
      axios.delete(`https://610805f6d73c6400170d37b0.mockapi.io/favorite/${obj.id}`);
    } else {
    const { data } = await axios.post('https://610805f6d73c6400170d37b0.mockapi.io/favorite', obj);
    setFavorites((prev) => [...prev, data]);
    }
  } catch (error) {
    alert('Не ууудалось добавить в фавориты');
  }
 };  

 const onChangeSearchInput =(event) => {
   setSearchValue(event.target.value);
 }

 const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
 }
 
  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded }}>
      <div className="wrapper clear">
      {cartOpened && (<Drawer items={ items,cartItems,favorites } onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> )}
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
        <Favorites onAddToFavorite={onAddToFavorite} />
      </Route>
       </div>
    </AppContext.Provider>
  );
}

export default App;
