import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HomePage } from "./home_page";
import { Sale } from "./sale";
import { NuestrasMarcas } from "./nuestras_marcas";
import { Servicios } from "./servicios";
import { TuProximoPlan } from "./tu_proximo_plan";
import { Informacion } from "./informacion";
import { Blog1 } from "./blog1.js";
import { Blog2 } from "./blog2.js";
import { Blog3 } from "./blog3.js";
import { Blog4 } from "./blog4.js";
import { Blog5 } from "./blog5.js";
import { Blog6 } from "./blog6.js";
import { Blog7 } from "./blog7.js";
import { SmartParking } from "./smart_parking";
import { Biciparking } from "./bici_parking";
import { Electrolineras } from "./electrolineras";
import { SillasDeRuedas } from "./sillas_de_ruedas";
import { BodegasM3 } from "./bodegas_m3";
import { Enfermeria } from "./enfermeria";
import CookieConsentBanner from "./components/cookieConsentBanner";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Nuestras_marcas" element={<NuestrasMarcas/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/servicios" element={<Servicios/>}/>
        <Route path="/TuProximoPlan" element={<TuProximoPlan/>}/>
        <Route path="/Informacion" element={<Informacion/>}/>
        <Route path="/smart_parking" element={<SmartParking/>}/>
        <Route path="/bici_parking" element={<Biciparking/>}/>
        <Route path="/electrolineras" element={<Electrolineras/>}/>
        <Route path="/sillas_de_ruedas" element={<SillasDeRuedas/>}/>
        <Route path="/bodegas_m3" element={<BodegasM3/>}/>
        <Route path="/enfermeria" element={<Enfermeria/>}/>
        <Route path="/Blog1" element={<Blog1/>}/>
        <Route path="/Blog2" element={<Blog2/>}/>
        <Route path="/Blog3" element={<Blog3/>}/>
        <Route path="/Blog4" element={<Blog4/>}/>
        <Route path="/Blog5" element={<Blog5/>}/>
        <Route path="/Blog6" element={<Blog6/>}/>
        <Route path="/Blog7" element={<Blog7/>}/>
                

      </Routes>
      <CookieConsentBanner />
    </Router>
    

  )


}

export default App;
