import './styling/Explore.css';
import Contact from './Contact';
import Right from './icons/Right';
import { useState } from 'react';
import Cars from './libs/Cars';
import SUVs from './libs/SUVs';
import Hybrids from './libs/Hybrids';
import Trucks from './libs/Trucks';

function Explore() {
    const [gallery,setGallery] = useState(0);

    return (
        <>
            <section className="explore">
                <h1 className='explore-title'>
                    Explore
                </h1>
                <div className='exp-flex'>
                    <div>
                        <nav className='categories'>
                            <button onClick={()=>setGallery(0)} className={gallery===0? 'selected' : ''}>
                                <span>SUVs</span>
                                <Right />
                            </button>
                            <button onClick={()=>setGallery(1)} className={gallery===1? 'selected' : ''}>
                                <span>Cars</span>
                                <Right />
                            </button>
                            <button onClick={()=>setGallery(2)} className={gallery===2? 'selected' : ''}>
                                <span>Hybrids</span>
                                <Right />
                            </button>
                            <button onClick={()=>setGallery(3)} className={gallery===3? 'selected' : ''}>
                                <span>Trucks</span>
                                <Right />
                            </button>
                        </nav>
                        <nav className='categories2'>
                            <button onClick={()=>setGallery(0)} className={gallery===0? 'selected' : ''}>
                                SUVs
                            </button>
                            <button onClick={()=>setGallery(1)} className={gallery===1? 'selected' : ''}>
                                Cars
                            </button>
                            <button onClick={()=>setGallery(2)} className={gallery===2? 'selected' : ''}>
                                Hybrids
                            </button>
                            <button onClick={()=>setGallery(3)} className={gallery===3? 'selected' : ''}>
                                Trucks
                            </button>
                        </nav>
                    </div>
                    <div className='box2'>
                        {gallery === 0 && (
                            <>
                                <SUVs />
                            </>
                        )}
                        {gallery === 1 && (
                            <>
                                <Cars />
                            </>
                        )}
                        {gallery === 2 && (
                            <>
                                <Hybrids />
                            </>
                        )}
                        {gallery === 3 && (
                            <>
                                <Trucks />
                            </>
                        )}
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}

export default Explore;