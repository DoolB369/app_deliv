import React from "react";

export default function Btn_pay( param ) {

    console.log(param.cart);

    if(param.cart === null){

        return(
            <>
                <div></div>
            </>
        )

    }else{
        return(
            <>
                <a href={"/order/"+param.cart} className="btn-pay"> Pagamento </a>
            </>
        )
    }


  
}