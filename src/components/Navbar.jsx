import { Link } from "react-router-dom";
export function Navbar(){
    return <>
   
    <Link to="/inscription">
        <button type="submit" className="btn btn-outline-primary w-70">Inscription</button>
    </Link>
    </>
}