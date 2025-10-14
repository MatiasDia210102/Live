import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/header.jsx';
import Footer from "./componentes/footer.jsx";
import Main from "./componentes/Main.jsx" 
import About from "./componentes/SobreMi.jsx"
import Content from "./componentes/Contenido.jsx"
import Encuesta from "./componentes/Encuesta.jsx"
import StaffPage from "./componentes/StaffPage.jsx"; 
import ScrollToTopOrHash from './componentes/ScrollToTopOrHash.jsx';


function HomePage() {
  return (
    <>
      <Main />
      <About />
      <Content />
      <Encuesta />
    </>
  );
}

function StaffWithMainPage() {
  return (
    <>
      <Main />
      <StaffPage />
    </>
  );
}

function App() {
 return (
  <BrowserRouter>
    <ScrollToTopOrHash /> 
    <div className="relative w-full min-h-screen">
    
      <div className="relative z-20">
        
        <NavBar /> 
        
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/staff" element={<StaffWithMainPage  />} />
        </Routes>
        
        <Footer />
      </div>
    </div>
  </BrowserRouter>
 );
}

export default App;