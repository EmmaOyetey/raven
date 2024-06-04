import { ChangeEventHandler,} from "react";
import "./DropDownBox.scss";

type DropDownBoxProps = {
  label: string;
  searchTerm: string;
  items: string[];
  handleFilterBySupportArea: ChangeEventHandler<HTMLSelectElement>;
};

const DropDownBox = ({ label, searchTerm, items, handleFilterBySupportArea }: DropDownBoxProps) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="search-box">
        <div className = "search-box__byRole">
        <label htmlFor={label} className="search-box__label">{capitalizedLabel}</label>
        <select 
            id={label} 
            name={label}
            value={searchTerm} 
            onChange={handleFilterBySupportArea} 
            className="search-box__dropdown"
            >
            <option value = "" >Select an Area</option>
                {items.map((item : string, index : number) => (
                <option key={index} value={item}>
                    {item}
                    </option> 
          ))} */
        </select>
            
        </div>   
    </div>
  );
};

export default DropDownBox;