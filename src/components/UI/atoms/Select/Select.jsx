import { filterApplicantsByHouse } from "../../../../redux/actionCreator";
import store from "../../../../redux/store";

const Select = ({value='', label, name, options=[]}) => {
    const handleChange = e => {
        store.dispatch(filterApplicantsByHouse(e.target.value))
    }
    
    return (
        <label htmlFor={name}>
            {label}
            <select name="" id="" defaultValue={value} onChange={handleChange} >
                <option value="">Seleccionar una casa</option>
                {
                    options.map(({val, content})=>(
                        <option key={val} value={val}>{content}</option>
                    ))
                }
            </select>
        </label>
    );
}
  
 
export default Select;