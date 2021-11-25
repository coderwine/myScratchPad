import '../Styles/Navbar.css'
import { Link, Outlet } from 'react-router-dom';

function Navbar(props) {
    
    return(
        <div className="navbar">
            <nav className="links">
                {props.items.map((i,key) => {
                    return(
                        <Link key={key} to={`/${i.path.toLowerCase()}`}>{`${i.path}`}</Link>
                    )
                })}
            </nav>
            <Outlet />
        </div> 
        )
    }
    
export default Navbar;


//! Working With SASS




