import React, {useEffect} from 'react';
// import Preloader from '../layout/Preloader';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TechListModal = ({ techs, loading, getTechs }) => {

    useEffect(()=>{
        getTechs();
        // eslint-disable-next-line
    }, []);

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
    );
};
 
TechListModal.propTypes ={
    techs: PropTypes.array,
    loading: PropTypes.bool,
    getTechs: PropTypes.func.isRequired
};

const mapStateToProps =(state)=>({
    techs: state.tech.techs,
    loading: state.tech.loading
});

export default connect(mapStateToProps, {getTechs})(TechListModal);