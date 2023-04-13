import success from "../asstes/success.png"

export default function App() {
    return (
      <>
        <div class="top"></div>

        <div className="container">

          <div class="cx-success">
              <img src={success} alt="success"/>
          </div>

          <span class="confirmed">Confirmado id: </span>

          <div class="card-content">
              <button class="btn-track" type="submit" name="action">
                  Acompanhar pedido
              </button>
          </div>
        </div>
        
      </>
    );
  }
  