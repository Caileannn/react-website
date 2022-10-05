
import { Route, Routes} from 'react-router-dom';
import Ruhi from "./components/Ruhi/Ruhi";
import Home from "./directory/Home";



function App() {

  
  return (
    <>
      
      <Routes>
          
          <Route path="/ruhi" element={<Ruhi />} /> 
          <Route path="/*" element={<Home />} /> 
      </Routes>
    </>
  );
}

export default App;
