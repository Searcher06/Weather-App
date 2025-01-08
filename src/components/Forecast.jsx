import { ForecastBoxes } from "./ForecastBoxes";

export function Forecast({Data,forecast,forecastL,forecastError,error,loading}){
    return <>
        <div className="upper">
            <div className="message">18 hours forecast</div>
            <ForecastBoxes Data={Data} forecast={forecast} error={error} loading={loading} />
        </div>
    </>
}