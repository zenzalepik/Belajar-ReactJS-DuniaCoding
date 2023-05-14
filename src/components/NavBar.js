import { Link } from "react-router-dom";

const NavBar = ({brand}) => {
    return ( 
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>{brand}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='#' className="nav-link">Features</Link>
              </li>
              <li className="nav-item">
                <Link to='#' className="nav-link">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link to='#' className="nav-link disabled">Disabled</Link>
              </li>
              <li className="nav-item">
                <Link to='/add' className="nav-link"><b>Tambah Blog</b></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
}
 
export default NavBar;
