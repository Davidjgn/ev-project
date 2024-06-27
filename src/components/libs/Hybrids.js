import image1 from '../assets/hybrid1.jpg';
import image2 from '../assets/hybrid2.jpg';
import image3 from '../assets/hybrid3.jpg';
import image4 from '../assets/hybrid4.jpg';
import './gallery.css';

function Hybrids() {
    return (
        <>
            <div className="gallery-grid">
                <div>
                    <img src={image1} className='gallery-img' alt='ev-1' />
                    <p>
                        Kia Sportage Hybrid
                    </p>
                </div>
                <div>
                    <img src={image2} className='gallery-img' alt='ev-2' />
                    <p>
                        Hyundai Tucson Hybrid
                    </p>
                </div>
                <div>
                    <img src={image3} className='gallery-img' alt='ev-3' />
                    <p>
                        Toyota Land Cruiser
                    </p>
                </div>
                <div>
                    <img src={image4} className='gallery-img' alt='ev-3' />
                    <p>
                        Mazda CX-90 Hybrid
                    </p>
                </div>
            </div>
        </>
    );
}
export default Hybrids;