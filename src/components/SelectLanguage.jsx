import "/node_modules/flag-icons/css/flag-icons.min.css";
import './SelectLanguage.css'
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import i18next from 'i18next'
import { useEffect } from "react";

export function SelectLanguage() {

  const [opt, setOpt] = useState(() => JSON.parse(localStorage.getItem('language')) || 'en' )

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

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(opt))
  }, [opt])

//   const def_option = Select.selected = () => languages[0].code  

  // console.log(opt)

  const changeLang = (code) => {
    console.log(code)
    setOpt(code)
    // i18next.changeLanguage(code)
  }  

  return (
    <div className="w-1">    
    {JSON.stringify(opt)}     
        <Select id="lan" label="Select Language" onChange={changeLang} >  
          {languages.map( ({code, name, country_code}) => (
              <Option key={country_code} value={code} disabled={ code === opt } >
                <i className={`fi fi-${country_code}`}></i>  
                  {name}                
              </Option>
          ))}            
        </Select>     
    </div>
  );
}
