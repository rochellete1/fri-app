import {Link} from 'react-router-dom'

// <a = <Link including the closure, href="#" change it to to="/"

function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Website</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;