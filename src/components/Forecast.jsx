import { ForecastBoxes } from "./ForecastBoxes";

export function Forecast({Data,forecast,forecastL,forecastError}){
    if(forecastL) return <h1>Fetching Forecast...</h1>
    if(forecastError) return <h1>{forecastError}</h1>
    let sliced = forecast.list
    let slice = sliced.slice(0,6)
    console.log(sliced)
    return <>
        <div className="upper">
            <div className="message">18 hours forecast</div>
            <ForecastBoxes Data={Data} forecast={slice}/>  
        </div>
    </>
}