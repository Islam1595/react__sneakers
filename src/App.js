
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center"> 
        <img width={40} height={40} src="img/logo.png"/>
        <div>
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших крассовок</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src="img/cart.svg"/>
            <span>1205 руб.</span>
          </li>
          <li>
           <img width={18} height={18} src="img/User.svg"/>
          </li>
        </ul>
      </header>
      <div className="content p-40"> 
      <h1 className="mb-40">Все кроссовки</h1>
     <div className="d-flex">
     <div className="card">
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

        <div className="card">
          <img width={133} height={112} src="img/sneakers/2.jpg" alt=""/>
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

        <div className="card">
          <img width={133} height={112} src="img/sneakers/3.jpg" alt=""/>
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

        <div className="card">
          <img width={133} height={112} src="img/sneakers/4.jpg" alt=""/>
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
        </div>
     </div>
       </div>
  );
}

export default App;
