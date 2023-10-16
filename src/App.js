import React from 'react'
import CrudTable from './CrudTable';
import Admin from './Admin';
import PassKey from './PassKey';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/crudtable' element={<CrudTable/>}/>
        <Route path='/passkey' element={<PassKey/>}/>
      </Routes>
      
    </Router>
    </div>
  );
}

export default App;
