import {Outlet, Link} from 'react-router-dom';
import Background from './Background';

function Menu({dotCount}){
    return(
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
                    <Link to='/about'>About</Link>
                    <Link to='/contact' className='contact'>Contact</Link>
                </nav>
            </section>
            <section className='content'>
                <Outlet />
                <Background dotCount={dotCount}/>
            </section>
        </>
    );
}

export default Menu;