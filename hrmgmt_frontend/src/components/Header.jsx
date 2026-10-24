import './Header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div>
            <div class="header">
            <Link to ="/">Home</Link>
            <Link to="/About">Aboutus</Link>
            <Link to="/Contact">Contact us</Link>
            <Link to="/Services">services us</Link>
            <Link to="/Login">Login us</Link>
            </div>
        </div>
    )
}

export default Header