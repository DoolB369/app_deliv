import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";

import img_dog from "../asstes/bacon_cheese.jpg"

import axios, * as others from 'axios';

import BtnPay from "../components/btn-pay";

export default function App() {
    let params = useParams();

    const [item, setItem] = useState([])

    useEffect(() => {
  
      axios.get('http://localhost:8080/menu/find/'+params.id)
      .then(function (response) {
        setItem(response.data);
      })
      .catch(function (error) {
        console.error(error)
      })
      
    }, [])

    function addCart(item) {

      if( localStorage.getItem('cart') ){
        let cart = localStorage.getItem('cart')

        console.log("tem um carrino",  cart);

        axios.post('http://localhost:8080/order/update', {

          id: cart,
          item: [item]

        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });


      }else{

        console.log("Não tem um carrino");

        axios.post('http://localhost:8080/order/create', {
          items: [item]
        })
        .then(function (response) {
          console.log(response.data._id);
  
          localStorage.setItem('cart', response.data._id);

          window.location.reload(true);
        })
        .catch(function (error) {
          console.error(error);
        });

      } 
      
    }

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
              </div>
              <p> {item.description} </p>

              <button onClick={() =>  addCart(item._id)} className="btn" type="submit" name="action">Adicionar</button>

              <BtnPay cart={localStorage.getItem('cart')} />

          </div>
        </div>

      </>
    );
  }
  