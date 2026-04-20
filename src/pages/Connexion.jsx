import { useState } from "react"
import { Input } from "../components/Input.jsx"
import { Checkbox } from "../components/Checkbox.jsx"
import { Navbar } from "../components/Navbar.jsx"
import { Link } from "react-router-dom"
import { Put } from "../components/Put.jsx"
export function Connexion(){
    const [firstname,setFirstname]=useState("Hiba")
    const [password,setPassword]=useState("Mot de pass")
    const [checked,setChecked]=useState(false)
    const checking=()=>{
       setChecked(!checked)
      }
    return <div className="d-flex justify-content-center vh-100 align-items-center bg-light" >
        <div style={{width:'400px'}}>
        <h2 className="text-center mb-4">Connexion</h2>
        <div className="mb-3">
        <label className="form-label">Nom d'utilisateur</label>
        <Input  placeholder={"hiba@gmail.com"} onChange={setFirstname}/>
        </div>
        <label className="form-label">Mot de pass</label>
        <Put  placeholder={"#1@/kls"} onChange={setPassword}/>
        <Checkbox onChange={checking}/>
        <div className="text-center ">
        <Link to = "/Homepage">
        <button type="submit"className="btn btn-primary w-70">Se connecter</button>
        </Link>
        <br/>
        <div className="btn">
        <Navbar/>
        </div>
        </div>
        </div>
      </div>
    
}