import React from 'react'
import HeaderName from "../components/Header/HeaderName";
import HeaderMain from "../components/Header/HeaderMain";
import AboutMain from "../components/About/AboutMain"
import WorkMain from "../components/Works/WorkMain";
import BlogMain from "../components/Blog/BlogMain"
import { Route, Routes} from 'react-router-dom';
import Omachine from "../components/Works/OmMain/WorkIntroduction";
import OtherMain from "../components/Other/OtherMain";
import ThesisMain from "../components/Works/Thesis/ThesisMain";
import EPCH from "../components/Works/EPCH/EPCH";
import Comhair from "../components/Works/Comhair/Comhair";
import OP from "../components/Works/OP/OP";
import MBank from "../components/Works/MBank/MBank";

function Home() {
  return (
    <>
        <HeaderName />
        <HeaderMain />
        <Routes>
          <Route path="about" element={<AboutMain />} />
          <Route path="works" element={<WorkMain />} />
          <Route path="other-projects" element={<OtherMain />} />
          <Route path="log" element={<BlogMain/>} />
          <Route path="works/o-machine" element={<Omachine />} />
          <Route path="works/electronic-image" element={<ThesisMain />} />
          <Route path="works/EPCH" element={<EPCH />} />
          <Route path="works/Comhair" element={<Comhair />} />
          <Route path="works/online-persona" element={<OP />} />
          <Route path="works/memory-bank" element={<MBank />} />
      </Routes>
    </>
  )
}

export default Home