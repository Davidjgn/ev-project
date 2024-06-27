import image1 from './assets/SUV1.png';
import image2 from './assets/SUV2.png';
import image3 from './assets/SUV3.png'; 

function Background({dotCount}) {

    if(dotCount === 0){
        return(
            <img src={image1} className="background" alt='Electric vehicle 1'/>
        );
    }
    if(dotCount === 1){
        return(
            <img src={image2} className="background" alt='Electric vehicle 2'/>
        );
    }
    if(dotCount === 2){
        return(
            <img src={image3} className="background" alt='Electric vehicle 3'/>
        );
    }
}
export default Background;