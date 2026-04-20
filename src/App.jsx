import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Connexion } from "./pages/Connexion"
import { Inscription } from "./pages/Inscription"
import { Layout } from "./Layout"
import {Homepage} from "./pages/Homepage"
import { Annonces } from "./pages/Annonces"
import { Logement } from "./pages/Logement"
import { Profil } from "./pages/Profil"


function App(){
  
  return (
  <Router>
    <Routes>
      <Route  element={<Layout/>}/>
      <Route path="/" element={<Connexion/>}/>
      <Route path="/Inscription" element={<Inscription/>}/>
      <Route path="/Homepage" element={<Homepage/>}/>
      <Route path="/Annonces" element={<Annonces/>}/>
      <Route path="/Logement" element={<Logement/>}/>
      <Route path="/Profil" element={<Profil/>}>
      </Route>
    </Routes>
  </Router>
  )
}
       
export default App