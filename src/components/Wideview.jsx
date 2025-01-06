import { Forecast } from "./Forecast";
import { TempHighlights } from "./TempHighlights";

export function Wideview({Data,forecast,forecastL,forecastError}){
    return <>
        <div className="wide-view">
            <Forecast Data={Data} forecast={forecast} 
            forcastError={forecastError} forecastL={forecastL}/>
            <TempHighlights Data={Data} />
        </div>
    </>
}