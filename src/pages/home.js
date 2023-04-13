import React, { useState, useEffect }  from "react";
import Logo from "../logo.png"

import img_dog from "../asstes/bacon_cheese.jpg"

import axios, * as others from 'axios';

export default function App() {

  const [items, setItems] = useState([])

  useEffect(() => {

    axios.get('http://localhost:8080/menu/all')
    .then(function (response) {
      setItems(response.data);
    })
    .catch(function (error) {
      console.error(error)
    })
    
  }, [])

    return (
      <>
        <div className="top"></div>

        <div className="container">

          <header>
            <img src={Logo} alt="logo" height="80px"/>
            <h1> King hotdog </h1>
          </header>

          <section  className="container">

            <div className="divider">
              <div className="tags">
                  <h2> hot dogs </h2> 
              </div>
            </div>

            {
              items.map( (item)=>(

                <a href={'/cart/'+item._id} className="btn" key={item._id}>
                  <div className="card">
                    <img src={img_dog} alt="hotdog"/>
                    <h3 className="card-title"> {item.name} </h3>
                    <p> {item.description} </p>

                    <div className="card-action">
                      <h4> R$: {item.price} </h4>
                      <i className="fa-solid fa-circle-plus fa-xl"></i>
                    </div>
                  </div>
                </a>

              ) )
                
            }      
          
          </section>
        </div>

      </>
    );
  }
  