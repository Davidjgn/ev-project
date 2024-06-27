import image1 from '../assets/SUV5.png';
import image2 from '../assets/SUV4.png';
import image3 from '../assets/SUV3.png';
import image4 from '../assets/SUV6.png';
import './gallery.css';

function SUVs() {
    return (
        <>
            <div className="gallery-grid">
                <div>
                    <img src={image1} className='gallery-img' alt='ev-1' />
                    <p>
                        Volvo EX30
                    </p>
                </div>
                <div>
                    <img src={image2} className='gallery-img' alt='ev-2' />
                    <p>
                        Mini Countryman Electric
                    </p>
                </div>
                <div>
                    <img src={image3} className='gallery-img' alt='ev-3' />
                    <p>
                        NIO EL7
                    </p>
                </div>
                <div>
                    <img src={image4} className='gallery-img' alt='ev-3' />
                    <p>
                        Hyundai Kona Electric
                    </p>
                </div>
            </div>
        </>
    );
}
export default SUVs;