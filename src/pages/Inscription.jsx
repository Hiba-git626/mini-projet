import { useState } from "react"
import { Input } from "../components/Input.jsx"
import { Checkbox } from "../components/Checkbox.jsx"
import {Put} from "../components/Put.jsx"
import { Homepage } from "../pages/Homepage.jsx"
import { Link } from "react-router-dom"

export function Inscription(){
    const [nom,setNom]=useState('alili')
    const [prenom,setPrenom]=useState('hiba')
    const [tele,setTele]=useState(1234567890)
    const [email,setEmail]=useState('mail')
    const [pass,setPass]=useState("dhj")
    const [showpassword,setShowpassword]=useState(false)
    
    return <div className="d-flex justify-content-center vh-100 align-items-centre bg-light">
        <div style={{width:'400px'}} className="form-container">
        <h2 className="text-center mb-4">S'inscrire</h2>
        <div className="mb-5">
            <label className="form-label">Nom*</label>
            <Input placeholder="Entez votre nom" onChange={setNom}/>
            <label className="form-label">Prénom*</label>
            <Input placeholder="Entez votre prénom" onChange={setPrenom}/>
            <label className="form-label">Numéro téléphone*</label>
            <Input placeholder="Entez votre num téléphone" onChange={setTele}/>
            <label className="form-label">Email*</label>
            <Input placeholder="Entez votre email" onChange={setEmail}/>
            <label className="form-label">Mot de pass*</label>
            <Put   placeholder="Créez un mot de pass" onChange={setPass}/>
            <br/>
            <h5>Confirmer votre mot de pass</h5>
            
            <label className="form-label">Mot de pass*</label>
            <br/>
            <Put placeholder="Confirmez votre mot de pass" />
            <br/>
            <div className="text-center mb-3">
                <Link to="/Homepage">
                <button type="submit" className="btn btn-primary w-100">Envoyer</button>
                </Link>
            </div>
        </div>
        </div>
    </div>
}