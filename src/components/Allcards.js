import {Link} from 'react-router-dom'
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
                    
                        <Card img={one} alt="pic1"/>
                        <Card img={two} alt="pic2"/>
                        <Card img={three} alt="pic3"/>
                        <Card img={four} alt="pic4"/>
                </div>
                <br/><br/>
                <div className="tex-align-center" style={{display: "inline-flex"}}>
                        <Card img={five} alt="pic5"/>
                        <Card img={six} alt="pic6"/>
                        <Card img={seven} alt="pic7"/>
                        <Card img={eight} alt="pic8"/>
                </div>
                <br/><br/>

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                        <Link className="page-link" to="/" tabindex="-1" aria-disabled="true">Previous</Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="/">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                        <li className="page-item">
                        <Link className="page-link" to="/">Next</Link>
                        </li>
                    </ul>
                </nav>

            <div className="container col-sm-4"/>
                <div className="tex-align-center" style={{display: "inline-flex"}}>
                    
                        <Card img={one} alt="pic1"/>
                        <Card img={two} alt="pic2"/>
                        <Card img={three} alt="pic3"/>
                        <Card img={four} alt="pic4"/>
                </div>
            </center>
    )
}

export default Allcards;