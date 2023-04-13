import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";

import Logo from "../delivery.png"
import icon_hotdog from "../icon_hotdog.png"

import img_dog from "../asstes/bacon_cheese.jpg"

export default function App() {
    let params = useParams();

    let menu = [
        { id: 1, name: 'Hotdog bacon cheese', price: 10.5, desc:'200gr chicken + cheese  Lettuce + tomato' },
        { id: 2, name: 'Hotdog bacon cheese', price: 16.5, desc:'200gr chicken + cheese  Lettuce + tomato' },
        { id: 3, name: 'Hotdog bacon cheese', price: 8.98, desc:'200gr chicken + cheese  Lettuce + tomato' }
      ];

    const [items, setItems] = useState(menu)
    
    let index = items.findIndex(item => item.id == params.id);
    
    const [item, setItem] = useState(items[index])


    return (
      <>
      
        <div className="top"></div>

        <div className="container">

          <div className="cx">
              <div className="header-cart">
                  <a href="/" className="btn-back">
                      <i className="fa-solid fa-chevron-left"></i>
                  </a>
              </div>

              <div className="panel">
                  <img src={img_dog} alt="hotdog"/>
              </div>
          </div>

          <div className="card-content">

              <h3 className="title"> {item.name} </h3>
              <div className="action">
                  <h4> R$: {item.price} </h4>
                  <i className="fa-solid fa-circle-minus fa-xl"></i>
                  <span> 1 </span>
                  <i className="fa-solid fa-circle-plus fa-xl"></i>
              </div>
              <p> {item.desc} </p>

              <button className="btn" type="submit" name="action">Adicionar</button>
              <a href="/order" className="btn-pay">Pagamento</a>
          </div>
        </div>

      </>
    );
  }
  