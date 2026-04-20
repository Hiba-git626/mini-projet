import { useEffect, useState } from "react"
import API from "../pages/api.jsx"

export function AnnooncesPopulaires() {
    const [annonces,setAnnonces]=useState([])
    const [loading,setLoading]=useState(true)
    const [erreur,setErreur]=useState(null)

    useEffect(()=>{
        API.get('annonce/annonces/populaires')
        .then(response=>{
            setAnnonces(response.data)
            setLoading(false)
        })
        .catch(err=>{
            setErreur("Erreur de chargement")
            setLoading(false)
        })
    })
    if (loading) 
        return <p>chargement ...</p>
    
    if (erreur)
        return <p>{erreur}</p>
    return (
        <div className="annonces-container">
            <h2>🔥 Annonces Populaires</h2>
            <div className="cards-grid">
                {annonces.map(annonce => (
                    <div className="card" key={annonce.id}>

                        {/* Image si elle existe */}
                        {annonce.image && (
                            <img src={annonce.image}  />
                        )}
                        <div className="card-body">
                            <h3>{annonce.titre}</h3>
                            <p className="description">{annonce.description}</p>

                            {annonce.prix && (
                                <p className="prix">{annonce.prix} MAD</p>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

    
    
