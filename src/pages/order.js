import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";

import img_dog from "../asstes/bacon_cheese.jpg"

import axios, * as others from 'axios';
// import * as axios from 'axios';

export default function App() {
    let params = useParams();

    const [cart, setCart] = useState([])
    const [cart_sum, setCart_sum] = useState(0)

    const [form_end, setForm_end] = useState("Endereço: Rua , N° , Bairro")
    const [form_name, setForm_name] = useState("")
    const [form_contato, setForm_contato] = useState("")

    const [msg, setMsg] = useState("")

    useEffect(() => {
  
        axios.get('http://localhost:8080/order/cart/'+params.id)
        .then(function (response) {
            setCart(response.data);
        })
        .catch(function (error) {
            console.error(error)
        })

        axios.get('http://localhost:8080/order/cart/sum/'+params.id)
        .then(function (response) {
            setCart_sum(response.data);
        })
        .catch(function (error) {
            console.error(error)
        })
      
    }, [])

    const phoneMask = (value) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
    }

    const validar = (pay_typer) => {
        let andress =  form_end
        let name = form_name
        let contato = form_contato

        if(andress === "") {
            setMsg("Diga seu endereço")
            return false
        }else if(andress === "Endereço: Rua , N° , Bairro"){
            setMsg("Diga seu endereço")
            return false
        }else if(name === "") {
            setMsg("Diga seu nome")
            return false
        }else if(contato === "") {
            setMsg("Seu numero de whatsapp")
            return false
        }else{
            setMsg("")
            pay(pay_typer)
            return true
        }

    }

    function pay(pay_typer) {

        if(pay_typer === 0) {
            console.log("pix");

            window.location.href = "/pix"

        }else if(pay_typer === 1) {
            console.log("cartão");
        }else{
            console.log("pagamento não definido");
        }


    }



    return (
      <>
        <div className="top"></div>

        <div className="container">

            <div className="cx-order">
                <div className="header-order">
                    <a href="/" className="btn-back">
                        <i className="fa-solid fa-house"></i>
                    </a>
                </div>

                <div className="card-content">

                    {
                        cart.map( (cart) => (

                            <div className="item" key={cart.item._id}>
                                <img src={img_dog} alt="hotdog"/>
                                <div className="content">
                                    <h3 className="title-order"> {cart.item.name} </h3>
                                    <p> {cart.item.description} </p>
                                    <span>Quant.{cart.total}  R$:{cart.item.price} </span>
                                </div>
                            </div>

                        ) )
                    }

                    <span className="amount">Total R$: {cart_sum} </span>

                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <span> { form_end } </span>
                    </div>

                    <form className="form_info">
                        <input type="text" value={form_end} onChange={(e) => setForm_end(e.target.value)} name="end" placeholder="Endereço"/>
                        <input type="text" value={form_name} onChange={(e) => setForm_name(e.target.value)} name="name" placeholder="Nome"/>
                        <input type="tel" maxLength="15" value={ phoneMask(form_contato) } onChange={(e) => setForm_contato(e.target.value)} name="telefone" placeholder="Whatsapp"/>

                        <span className="msg"> { msg } </span>

                    </form>                    

                    <div className="Payment_Options">
                        <span>Pagamento online</span>

                        <a onClick={ () => validar(0) } className="btn-pay">
                            <i className="fa-brands fa-pix"></i>
                            <span>Pague com pix</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                        <a onClick={ () => validar(1) }  className="btn-pay">
                            <i className="fa-regular fa-credit-card"></i>
                            <span>Cartão de crédito</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>

                        <div className="att">
                            <span>Pagamento no local</span>
                            <p>indisponível no momento</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>


      </>
    );
  }
  