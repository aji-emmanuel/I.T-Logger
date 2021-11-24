import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const AddTechModal = ({ addTech }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () =>{
        if(firstName==='' || lastName===''){
            M.toast({html: 'Please enter a First Name and Last Name!'});
        } else{
           const tech = {
               firstName: firstName,
               lastName: lastName
           };

           addTech(tech);
           M.toast({html: 'New tech added successfully!', classes:'rounded'});
            //Clear fields
            setFirstName('');
            setLastName('');
        };
    };

    return (
        <div id='add-tech-modal' className='modal'>
            <div className='modal-content'>
                <h4>Add New Tech</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='firstName' value={firstName} 
                                onChange={e =>{setFirstName(e.target.value)}} />
                        <label htmlFor='firstName' className='active'>Enter First Name</label>
                    </div>
                </div>

                 <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='lastName' value={lastName} 
                                onChange={e =>{setLastName(e.target.value)}} />
                        <label htmlFor='lastName' className='active'>Enter Last Name</label>
                    </div>
                </div>

               
            </div>
            <div className='modal-footer'>
                <a href='#!' className='modal-close waves-effect blue waves-light btn' onClick={onSubmit}>Save</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes ={

};

export default connect(null, { addTech })(AddTechModal);
