import React from 'react';
import ContentLoader from "react-content-loader";

import AppContext from '../../context';

import styles from './Card.module.scss';

function Card({ 
  id,
  title,
  imageUrl, 
  price, 
  onFavorite, 
  onPlus, 
  favorited = false, 
  loading = false
}) {
  const { isItemAdded } = React.useContext(AppContext);  
  const [isFavorite, setIsFavorite] = React.useState(favorited)


  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price }); 
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
};

   return (
   <div className={styles.card}>
     {loading ? ( <ContentLoader 
    speed={2}
    width={170}
    height={217}
    viewBox="0 0 170 217"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
    <rect x="0" y="107" rx="10" ry="10" width="150" height="15" /> 
    <rect x="-2" y="181" rx="10" ry="10" width="80" height="24" /> 
    <rect x="121" y="181" rx="10" ry="10" width="32" height="32" /> 
    <rect x="0" y="133" rx="10" ry="10" width="100" height="15" />
  </ContentLoader> ) : ( 
    <>
    <div classnName={styles.favorite} onClick={onClickFavorite}>
         <img src={isFavorite ? '/img/unliked.svg' : '/img/liked.svg'} alt="Ошибка!"/>
         </div>
          <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
              <img 
              className={styles.plus} 
              onClick={onClickPlus} 
              src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
              alt="Ошибка!"
              /> 
          </div>
    </>
  )
  }
        
        </div>
        );
}

export default Card