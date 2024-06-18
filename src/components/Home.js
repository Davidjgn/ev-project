import { Link } from "react-router-dom";
import Right from "./icons/Right";

function Home({dotCount, setDotCount}) {
    return (
        <section>
            <div className='home-title'>
                <h1>
                    Drive what you love
                </h1>
            </div>
            <div className="explore-button">
                <Link to='/explore' className="Link">
                    <span>Explore the features</span>
                    <div>
                        <Right />
                    </div>
                </Link>
            </div>
            <div className="dot-play">
                <ul className="dots">
                    <li onClick={()=>setDotCount(0)} className={dotCount===0?'dot orange': 'dot'}></li>
                    <li onClick={()=>setDotCount(1)} className={dotCount===1?'dot orange': 'dot'}></li>
                    <li onClick={()=>setDotCount(2)} className={dotCount===2?'dot orange': 'dot'}></li>
                </ul>
            </div>
        </section>
    );
}

export default Home;