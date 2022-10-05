import HeaderName from "./components/Header/HeaderName";
import HeaderMain from "./components/Header/HeaderMain";
import AboutMain from "./components/About/AboutMain"
import WorkMain from "./components/Works/WorkMain";
import BlogMain from "./components/Blog/BlogMain"
import { Route, Routes} from 'react-router-dom';
import Omachine from "./components/Works/OmMain/WorkIntroduction";
import OtherMain from "./components/Other/OtherMain";
import ThesisMain from "./components/Works/Thesis/ThesisMain";
import EPCH from "./components/Works/EPCH/EPCH";
import Comhair from "./components/Works/Comhair/Comhair";
import OP from "./components/Works/OP/OP";
import MBank from "./components/Works/MBank/MBank";
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
