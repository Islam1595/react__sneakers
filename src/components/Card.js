function Card() {
   return (
   <div className="card">
         <div classnName="favorite">
         <img src="img/heart-unliked.svg" alt="Ошибка!"/>
         </div>
          <img width={133} height={112} src="img/sneakers/1.jpg" alt=""/>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб.</b>
            </div>
            <button className="button">
              <img width={21} height={21} src="img/plus.svg" alt="Ошибка!"/>
            </button>
          </div>
        </div>
        );
}

export default Card