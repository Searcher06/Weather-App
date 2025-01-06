import Condition from "../weatherIcons/photos/Stubon.svg";
import { LowerContent } from "./LowerContent";
import { Searchbar } from "./Searchbar";
import { UpperContent } from "./UpperContent";

export function Smallview({Data,setSearchedCity,searchedCity,city,setCity}){
    return <>
    <div className="small-view">
        <Searchbar Data={Data} 
        setSearchedCity={setSearchedCity} 
        searchedCity={searchedCity} 
        city={city} setCity={setCity} />
        <UpperContent Data={Data} searchedCity={searchedCity}/>
        <LowerContent Data={Data} searchedCity={searchedCity}/>
    </div>
    
    </>
}