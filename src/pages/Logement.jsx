import { Link } from "react-router-dom"
import { Input } from "../components/Input"
import { useState } from "react"
import "../components/Nav.css";
export function Logement(){
    const [recherche,setRecherche]=useState("")
    const [profil,setProfil]=useState(false)
    return <>
    <header >
        <div style={{backgroundColor:"linear-gradient(135deg, #0f2027, #1e3c72, #2a5298)",height:"70px"}}>
            <ul className="navbar"> 
                <Link to="/Homepage">
                <li className="ac"><strong>Acceuil</strong></li>
                </Link>
                <Link to="/Logement">
                <li className="acceuil"><strong>Logement</strong></li>
                </Link>
                <Link to="">
                <li className="euil"><strong>Colocation</strong></li>
                </Link>
                <li style={{position:"relative"}}>
                <Link onClick={()=>setProfil(!profil)} title="Mon Profil" style={{
                    display:'flex', alignItems:'center', justifyContent:'center', width:'50px', height:'50px',
                    borderRadius:'50px', background:'rgba(255, 255, 255, 0.2)', border:'2px solide rgba(255,255,255,0.6)', 
                    color:'white', padding:"5px", marginRight:"50px"
                }}>
                <svg width='18px' height='18px' viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                </Link>
                {profil && (
               <div style={{
               position: 'absolute', top: '50px', right: '0',
      background: 'white', borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      padding: '16px', minWidth: '250px', zIndex: 1000
    }}>
      {/* Avatar */}
      <div style={{ textAlign: 'center', marginBottom: '12px' }}>
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'blue', display: 'flex', alignItems: 'center',
          justifyContent: 'center', margin: '0 auto 8px',
          fontSize: '24px', color: 'white', fontWeight: 'bold'
        }}>H</div>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#111' }}>Hiba</p>
        <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>hiba@email.com</p>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '12px 0' }}/>

      {/* Liens */}
      <Link to="/Profil" onClick={() => setProfil(false)}
        style={{ display: 'block', padding: '8px 12px', color: '#333',
          textDecoration: 'none', borderRadius: '8px' }}>
        👤 Mon contacte:
      </Link>
      <Link to="/Connexion" onClick={() => setProfil(false)}
        style={{ display: 'block', padding: '8px 12px', color: '#e53e3e',
          textDecoration: 'none', borderRadius: '8px' }}>
        🚪 Se déconnecter
      </Link>
     </div>
  )}
    </li>
    </ul>       
    </div>
    </header>
    <div className="recherche" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', padding: '0 20px' }} >
        <input type="text" className="form-control "  placeholder="Rechercher..."  onChange={(e)=>setRecherche(e.target.value)}
        style={{ maxWidth: '500px', width: '100%' }}/>
    </div>
    <div className="sugg">
        <h3>Suggestion:</h3>
    </div>

    </>
}