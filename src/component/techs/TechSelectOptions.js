import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';


const TechSelectOptions = ({ techs, loading, getTechs}) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);
    
    return (
        !loading && techs.length !==0 && (techs.map(tech=>{
        return (
            <option key={tech.id} value={tech.firstName+' '+tech.lastName}>
                {tech.firstName+' '+tech.lastName}
            </option>)
        }))
    );
};

TechSelectOptions.propTypes ={
    getTechs: PropTypes.func.isRequired,
    techs: PropTypes.array,
    loading: PropTypes.bool
};

const mapStateToProps = state =>({
    techs: state.tech.techs,
    loading: state.tech.loading
});

export default connect(mapStateToProps, {getTechs})(TechSelectOptions);
