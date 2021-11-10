import React from 'react';
import { NavLink} from 'react-router-dom'

function Header(){
    return(
        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
            
                <div className="navbar-nav">
                    <ul className="navbar-nav ">
                        <NavLink exact to="/" className="nav-item p-3" >Todo</NavLink>
                        <NavLink exact to="/Weather" className="nav-item p-3" >weather</NavLink>

                   </ul>
                </div>
         </nav>
        </div>
    );
}

export default Header;