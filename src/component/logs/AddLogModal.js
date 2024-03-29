import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';


const AddLogModal = ({ addLog }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () =>{
        if(message==='' || tech===''){
            M.toast({html: 'Please enter a message and select a tech!'});
        } else{

            const newLog ={
                message,
                attention,
                tech,
                date: new Date()
            }
            addLog(newLog);
            M.toast({html: `Log added successfully by ${tech}`});
            //Clear fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='message' value={message} 
                                onChange={e =>{setMessage(e.target.value)}} required />
                        <label htmlFor='message' className='active'>Log Message</label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <select className='browser-default' name='tech' value={tech} onChange={e=>{setTech(e.target.value)}}>
                            <option value='' disabled>Select Technicians</option>
                           < TechSelectOptions />
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
                <a href='#!' className='modal-close waves-effect blue waves-light btn' onClick={onSubmit}>Save Log</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
};

AddLogModal.propTypes ={
    addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal);
