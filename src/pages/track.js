
export default function App() {
    return (
      <>
        <div class="top"></div>

        <div className="container">

            <div class="header-order">
                <a class="btn-back">
                    <i class="fa-solid fa-house"></i>
                </a>
            </div>

            <div class="card-content">
                <div class="cx-track">
                    <div class="track-in">
                        <div class="animate__animated animate__bounce animate__infinite	infinite">
                            <i class="fa-regular fa-clock fa-xl"></i>
                        </div>
                        <p> Preparando <span> ~20 min </span> </p>
                    </div>

                    <div class="separator">
                        <span> . </span>
                        <span> . </span>
                        <span> . </span>
                    </div>

                    <div class="track-out">
                        <div>
                            <i class="fa-solid fa-motorcycle fa-xl"></i>
                        </div>
                        <p> Saiu para entregar <span> ~15 min </span> </p>
                    </div>
                </div>

                <a class="btn-track">
                    <i class="fa-brands fa-whatsapp"></i>
                    <span>Whastapp</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </div>
        </div>

        
        
      </>
    );
  }
  