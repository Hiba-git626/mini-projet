export function Checkbox({checked,onChange,id}){
    return <div className="form-check">
        <input id={id} type="checkbox" className="form-check-input" checked={checked} onChange={(e)=>onChange(e.target.checked)}/>
        <label htmlFor={id} className="form-check-label">Acceptez les condition</label>
    </div>
}