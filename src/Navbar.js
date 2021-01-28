import { Link } from 'react-router-dom';


const Navbar = () => {
    return (

        <nav>
            <div className="container nav-wrapper">
                <Link className="brand-logo" to="/"> Fitness Journey </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link>Sign Out</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
