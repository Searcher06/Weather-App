import { Forecast } from "./Forecast";
import { TempHighlights } from "./TempHighlights";

export function Wideview({Data,forecast,forecastL,error,loading}){
    return <>
        <div className="wide-view">
            {
                forecastL ? null : error ? null : <>
                <Forecast Data={Data} forecast={forecast} 
            forcastError={error} forecastL={forecastL}/>
            <TempHighlights Data={Data} />
                </>
            }
        </div>
    </>
}