import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './component/layout/SearchBar';
import Logs from './component/logs/Logs';
import AddBtn from './component/layout/AddBtn';
import AddLogModal from './component/logs/AddLogModal';
import EditLogModal from './component/logs/EditLogModal';
import AddTechModal from './component/techs/AddTechModal';
import TechListModal from './component/techs/TechListModal';
import {Provider} from 'react-redux';
import store from './store';


function App() {
  useEffect(()=>{
    // Initailizes Materialize javascript
    M.AutoInit();
  });
  return (
    <Provider store={store}>
    <>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </>
    </Provider>
  );
}

export default App;
