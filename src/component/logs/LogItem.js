import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const Logitem = ({log, deleteLog, setCurrent}) => {

    const onEdit = () =>{
        setCurrent(log);
    };

    const onDelete = () =>{
        deleteLog(log.id);
        M.toast({html: `Log with ID = ${log.id} was successfully deleted!`})
    };

    return (
        <li className='collection-item'>
            <div>
                <a className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} 
                    href='#edit-log-modal' onClick={onEdit}> {log.message} 
                </a>
                <br />
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id} </span> last updated by {' '}
                    <span className='black-text'> {log.tech} </span> on {' '}
                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href='#!' className='secondary-content' onClick={onDelete}>
                    <i className='material-icons grey-text'>delete</i>
                </a>
                
            </div>
        </li>
    );
};

Logitem.propTypes = {
   log: PropTypes.object.isRequired,
   deleteLog: PropTypes.func.isRequired,
   setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(Logitem);