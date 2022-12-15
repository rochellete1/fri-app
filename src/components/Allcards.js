import Card from './Card'
import one from '../assets/img/pic1.jpg'
import two from '../assets/img/pic2.jpg'
import three from '../assets/img/pic3.jpg'
import four from '../assets/img/pic4.jpg'
import five from '../assets/img/pic5.jpg'
import six from '../assets/img/pic6.jpg'
import seven from '../assets/img/pic7.jpg'
import eight from '../assets/img/pic8.jpg'


function Allcards(){
    return(
        <center>
            <h1>Welcome Shoppers!</h1>
            <div className="container col-sm-4"/>
                <div className="tex-align-center" style={{display: "inline-flex"}}>
                    
                        <Card img={one}/>
                        <Card img={two}/>
                        <Card img={three}/>
                        <Card img={four}/>
                </div>
                <br/><br/>
                <div className="tex-align-center" style={{display: "inline-flex"}}>
                        <Card img={five}/>
                        <Card img={six}/>
                        <Card img={seven}/>
                        <Card img={eight}/>
                </div>
                <br/><br/>

                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>

            <div className="container col-sm-4"/>
                <div className="tex-align-center" style={{display: "inline-flex"}}>
                    
                        <Card img={one}/>
                        <Card img={two}/>
                        <Card img={three}/>
                        <Card img={four}/>
                </div>
            </center>
    )
}

export default Allcards;