import image1 from '../assets/car1.jpg';
import image2 from '../assets/car2.jpg';
import image3 from '../assets/car3.jpg';
import image4 from '../assets/car4.jpg';
import './gallery.css';

function Cars () {
    return (
        <>
            <div className="gallery-grid">
                <div>
                    <img src={image1} className='gallery-img' alt='ev-1'/>
                    <p>
                        Volkswagen ID.7
                    </p>
                </div>
                <div>
                    <img src={image2} className='gallery-img' alt='ev-2'/>
                    <p>
                        Hyundai Ioniq 5 N 
                    </p>
                </div>
                <div>
                    <img src={image3} className='gallery-img' alt='ev-3'/>
                    <p>
                        Tesla Model 3 / Tesla Model Y
                    </p>
                </div>
                <div>
                    <img src={image4} className='gallery-img' alt='ev-3'/>
                    <p>
                        Fiat 500 / Abarth 500e
                    </p>
                </div>
            </div>
        </>
    );
}
export default Cars;