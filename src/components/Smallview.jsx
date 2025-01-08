import Condition from "../weatherIcons/photos/Stubon.svg";
import { LowerContent } from "./LowerContent";
import { Searchbar } from "./Searchbar";
import { UpperContent } from "./UpperContent";

export function Smallview({Data,setSearchedCity,searchedCity,city,setCity,loading,error}){
    
    return <>
    <div className="small-view">
        <Searchbar Data={Data} 
        setSearchedCity={setSearchedCity} 
        searchedCity={searchedCity} 
        city={city} setCity={setCity} />
        <UpperContent Data={Data}  loading={loading} error={error}/>
        <LowerContent Data={Data}  loading={loading} error={error}/>
    </div>
    
    </>
}