import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { updateLog, clearCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';


const EditLogModal = ({current, updateLog, clearCurrent}) => {

    // const [message, setMessage] = useState('');
    // const [attention, setAttention] = useState(false);
    // const [tech, setTech] = useState('');

    const [log, setLog] = useState({
        message: '',
        attention: false,
        tech: ''
    });

    const { message, attention, tech} = log;

    useEffect(() => {
        if (current !==null){
            setLog(current);
        }
    }, [current]);

    const onSubmit = () =>{
        updateLog(log);
        clearCurrent();
        M.toast({html: `Log with ID #${log.id} has been successfully updated!`});
    };

    const onChange = (e) =>{
        setLog({ ...log, [e.target.name] : e.target.value});
    };

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Edit System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='message' value={message} 
                                onChange={onChange} required />
                        <label htmlFor='message' className='active'>Log Message</label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <select className='browser-default' name='tech' value={tech} onChange={onChange}>
                            <option value='' disabled>Select Technicians</option>
                            <option value='Sam Smith'>Sam Smith</option>
                            <option value='Maria Blitz'>Maria Blitz</option>
                            <option value='Josh Milkman'>Josh Milkman</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                         <p>
                           <label>
                               <input type='checkbox' className='filled-in' checked={attention} 
                                        value={attention} onChange={onChange} />
                               <span>Needs Attention?</span>
                           </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a href='#!' className='modal-close waves-effect blue waves-light btn' onClick={onSubmit}>Save Changes</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
};

EditLogModal.propTypes = {
    current: PropTypes.object.isRequired,
    updateLog: PropTypes.func.isRequired,
    clearCurrent: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    current: state.log.current
});

export default connect(mapStateToProps, {updateLog, clearCurrent})(EditLogModal);
