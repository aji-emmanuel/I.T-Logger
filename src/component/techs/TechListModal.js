import React, {useEffect, useState} from 'react';
// import Preloader from '../layout/Preloader';
import TechItem from './TechItem';

const TechListModal = () => {

    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        loadTechs();
        // eslint disable-next-line
    }, []);

    const loadTechs = async () =>{
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
        setLoading(false);
    };


    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                    <h4 className='center'>System Technicians</h4>
                <ul className='collection'>
                    {!loading && techs.length === 0 ? 
                        (<h5 className='center'>No Technicians to show....</h5>) :
                        (techs.map((tech)=>(
                            <TechItem tech={tech} key={tech.id} />
                        )))
                    }
                </ul>
            </div>
            <div className='modal-footer'>
                <a href='#!' className='modal-close waves-effect blue waves-light btn'>Close</a>
            </div>
        </div>
    )
}

export default TechListModal;