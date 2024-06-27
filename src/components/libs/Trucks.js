import image1 from '../assets/truck1.jpg';
import image2 from '../assets/truck2.jpg';
import image3 from '../assets/truck3.jpg';
import image4 from '../assets/truck4.jpg';
import './gallery.css';

function Trucks() {
    return (
        <>
            <div className="gallery-grid">
                <div>
                    <img src={image1} className='gallery-img' alt='ev-1' />
                    <p>
                        Rivian R1T
                    </p>
                </div>
                <div>
                    <img src={image2} className='gallery-img' alt='ev-2' />
                    <p>
                        Tesla Cybertruck
                    </p>
                </div>
                <div>
                    <img src={image3} className='gallery-img' alt='ev-3' />
                    <p>
                        GMC Hummer EV Pickup
                    </p>
                </div>
                <div>
                    <img src={image4} className='gallery-img' alt='ev-3' />
                    <p>
                        GMC Sierra EV
                    </p>
                </div>
            </div>
        </>
    );
}
export default Trucks;