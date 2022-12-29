import dog1 from '../assets/img/dog1.jpg'
import dog2 from '../assets/img/dog2.jpg'
import dog3 from '../assets/img/dog3.jpg'

function Pricing(){
    return(
        <center>
        <h1>Pricing</h1>
      
        <div className="container-fluid d-flex center" style={{"height" : "800px"}}>
            <div className="container d-flex">
                <div id="carouselKo" 
                className="carousel slide carousel-dark text-align-center justify-content-center d-flex" 
                data-bs-interval="2000"
                data-bs-ride="carousel"
                >
     
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={dog1} alt="dog1"
                        className="d-block w-auto"/>
                        <div className="carousel-caption d-none d-md-block text-black">
                            <h5> Dog 1 </h5>
                            <p>Mysteries of the ancestral home of the Locke Family located in Matheson, 
                                Massachusetts were discovered by the Three siblings.</p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={dog2} alt="dog2"
                        className="d-block w-auto"/>
                        <div className="carousel-caption d-none d-md-block text-black background-color: skyblue;">
                            <h5> Dog 2 </h5>
                            <p>Unlocking more secrets to the unknown</p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={dog3} alt="dog3"
                        className="d-block w-auto"/>
                        <div className="carousel-caption d-none d-md-block text-black">
                            <h5> Dog 3 </h5>
                            <p>To finally close it</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </div>

     
            <button className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselKo"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon"
                aria-hidden="true">
                </span>
                <span className="visually-hidden">Previous
                </span>

            </button>
            <button className="carousel-control-next"
                type="button"
                data-bs-target="#carouselKo"
                data-bs-slide="next">
                <span className="carousel-control-next-icon"
                aria-hidden="true">
                </span>
                <span className="visually-hidden">Next
                </span>
            </button>

        </center>
    )
}

export default Pricing;