import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { updateLog, clearCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';


const EditLogModal = ({current, updateLog, clearCurrent}) => {

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

         if(message==='' || tech===''){
            M.toast({html: 'Please enter a message and select a tech!'});
        } else{
            
            updateLog(log);
            console.log(log.attention)
            clearCurrent();
            M.toast({html: `Log with ID #${log.id} updated by ${tech}!`});
        };
    };

    const onChange = (e) =>{
        setLog({ ...log, [e.target.name] : e.target.value});
    };

    const setAttention = (value) =>{
        setLog({
            ...log,
            attention : value
        });
    }

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Edit System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='message' value={message} 
                                onChange={onChange} required />
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
                                        value={attention} onChange={e=> setAttention(!attention)} />
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
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
    clearCurrent: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    current: state.log.current
});

export default connect(mapStateToProps, {updateLog, clearCurrent})(EditLogModal);
