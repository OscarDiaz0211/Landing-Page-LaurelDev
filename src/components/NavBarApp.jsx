import { NavLink } from "react-router-dom";


const NavBarApp = () => {
    return (
        <header>
            <div className="card card-style pt-3">
                <nav className="nav-style" >
                    <div >
                            <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active':''}`}
                            to="/Home">
                                Inicio
                            </NavLink>

                            <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active':''}`}
                            to="/Services">
                                Servicios
                            </NavLink>

                            <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`}
                            to="/About">
                                Sobre Nosotros
                            </NavLink>
            
                    </div>
                    
                </nav>
            </div>
        </header>
    );
}

export default NavBarApp;