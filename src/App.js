import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Ruhi from './components/Ruhi/Ruhi';
import Home from './home/Home';



function App() {

  
  return (
    <>
      
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="/ruhi" element={<Ruhi />} />
      </Routes>
    </>
  );
}

export default App;
