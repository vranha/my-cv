import './App.scss';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Main, About, Contactme, Projects, Skills, Other } from './pages';
import { AnimatePresence, useCycle } from 'framer-motion';


function App() {
  const location = useLocation();

  const [exitPage, cycleExitPage] = useCycle("0%","-100%", "100%")
  const [exitY, cycleExitY] = useCycle("0%","-100%", "100%")


  return (
    <div className="App">
     <AnimatePresence exitBeforeEnter>
       <Routes key={location.pathname} location={location}>
       <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main exitPage={exitPage} cycleExitPage={cycleExitPage} exitY={exitY} cycleExitY={cycleExitY} />} />
          <Route path="/contactme" element={<Contactme exitY={exitY} cycleExitY={cycleExitY}  />} />
          <Route path="/projects" element={<Projects exitPage={exitPage} cycleExitPage={cycleExitPage} />} />
          <Route path="/skills" element={<Skills exitPage={exitPage} cycleExitPage={cycleExitPage} />} />
          <Route path="/about" element={<About exitY={exitY} cycleExitY={cycleExitY}  />} />
          <Route path="/other" element={<Other />} />
       </Routes>
     </AnimatePresence>
    </div>
  );
}

export default App;
