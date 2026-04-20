import { useState } from "react"
import { Input } from "../components/Input"
import { Link } from "react-router-dom"

export function Annonces(){
    const [titre,setTitre]=useState("titre")
    const [quartier,setQuartier]=useState("quartier")
    const [descript,setDescript]=useState("descript")
    const [image,setImage]=useState(null)
    const [prix,setPrix]=useState("prix")
    const [type,setType]=useState("type")
    const [preview,setPreview]=useState(null)
    const handelimage=(e)=>{
        const file=e.target.files[0]
        setImage(file)
        setPreview(URL.createObjectURL(file))
    }
    
    return <div className="d-flex justify-content-center vh-100 align-items-center bg-light">
        <div style={{width:'400px'}} >
            <h3 className="Div">Ajouter une anonce</h3>
            <div className="mb-5">
            <label className="form-label">Titre:</label>
            <Input placeholder={titre} onChange={setTitre}/>
            <label className="form-label">Type:</label>
            <div className="form-label">
            <select className="form-control" value={type} onChange={(e)=>setType(e.target.value)}>
                <option value="">Choisir un type</option>
                <option value="logement">Logement</option>
                <option value="collocation">Collocation</option>
            </select>
            </div>
            <br/>
            <label className="form-label">Quartier:</label>
            <Input placeholder={quartier} onChange={setQuartier}/>
            <label className="form-label">Description:</label>
            <Input  placeholder="description" onChange={setDescript}/>
            <label className="form-label">Ajouter une photo:</label>
            <input type="file" multiple accept="image/*" className="form-control" onChange={handelimage} />
            {preview && 
            (<img src={preview}  alt="preview" width="100"/>)
            }
            <br/>
            <label className="form-label">Prix:</label>
            <Input placeholder="....  DH" onChange={setPrix}/>
            </div>
            <div className="text-center">
                <Link to="/Logement">
                <button type="submit" className="btn btn-primary w-50">Envoyer</button>
                </Link>
            </div>
        </div>
    </div>
}