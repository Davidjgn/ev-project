import { Outlet, Link } from 'react-router-dom';
import Background from './Background';
import { useState } from 'react';
import './styling/Menu.css';
import Hamburger from './icons/Hamburger';

function Menu({ dotCount }) {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <section className='nav-bar'>
                <div className='logo'>
                    <h1>
                        EV-Company
                    </h1>
                </div>
                <nav className='nav-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/explore'>Explore</Link>
                    <a href={'/#about'}>About</a>
                    <a  href={'/#contact'} className='contact'>Contact</a>
                </nav>
                <div className='nav-drop-down' >
                    <button className='nav-button' onClick={() => setToggle(prev => !prev)}>
                        <div className={toggle? 'icon-tog':''}>
                            <Hamburger />
                        </div>
                    </button>
                    {toggle && (
                        <div className='drop-down' >
                            <Link to='/'>Home</Link>
                            <Link to='/explore'>Explore</Link>
                            <a href={'/#about'}>About</a>
                            <a  href={'/#contact'} className='contact'>Contact</a>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <Outlet />
                <Background dotCount={dotCount} />
            </section>
        </>
    );
}

export default Menu;