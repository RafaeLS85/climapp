import "/node_modules/flag-icons/css/flag-icons.min.css";
import './SelectLanguage.css'
import { Select, Option } from "@material-tailwind/react";

export function SelectLanguage() {
  const languages = [
    {
      code: "en",
      name: "EN",
      country_code: "gb",
    },
    {
      code: "es",
      name: "ES",
      country_code: "es",
    },
  ];

//   const def_option = Select.selected = () => languages[0].code  

//   console.log(Select.selected)

  return (
    <div className="w-1">         
        <Select id="countries" label="Select Version" selected={() => 'en' }>  
          {languages.map( ({code, name, country_code}) => (
              <Option key={country_code} value={code} >
                <i className={`fi fi-${country_code}`}></i>  
                  {name}                
              </Option>
          ))}            
        </Select>     
    </div>
  );
}
