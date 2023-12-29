import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

function Navbar() {

    return (
        <section id="header">
        <Link to="/">
            <img src='https://i.imgur.com/sCpE8Nu.png' className="logo" alt=" " /> 
            <img src="https://i.imgur.com/HPvl1Be.png" className="logo" alt="Page202" />
        </Link>
        <div>
            <ul id="navbar">
                
                <li><Link className=" navA" to='/'>Home</Link></li>
                {/* <li><Link className='navA ' to="/shop">Shop</Link></li> */}
                {/* <li><Link className='navA' to="/about">About</Link></li> */}
                <li id="lg-bag"><Link to="/cart" ><i className="fa fa-shopping-cart"></i></Link></li>
                {/* <a href="/" id="close"><i className="fa fa-times"></i></a> */}
            </ul>
        </div>
     

    </section>
  )
}

export default Navbar