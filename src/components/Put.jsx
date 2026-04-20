import { useState } from "react"
export function Put({onChange,value,placeholder}){
    const [showpassword,setShowpassword]=useState(false)
    return <div>
        <input type={showpassword ? "text" : "password"} className="form-control" value={value} placeholder={placeholder}
         onChange={(e)=>onChange(e.target.value)} />
    </div>

}