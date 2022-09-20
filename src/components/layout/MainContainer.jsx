import { getBackroundImageByCode } from "../../helpers/getBackroundImage";

export default function MainContainer({children, data}){  
    return (     
        <div        
          className="flex flex-col h-screen justify-between"
            style={{
              backgroundImage: `url(${getBackroundImageByCode( data )})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: '100vh', 
              margin: '0px',
            }}
          >
         {children}
        </div>     
    );  
}