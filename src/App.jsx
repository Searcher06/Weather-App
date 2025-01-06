import { Smallview } from "./components/Smallview";
import "../src/App.css";
import { useEffect, useState } from "react";
import "../src/weatherIcons/fontawesome-free-6.6.0-web/css/all.css"
import { Wideview } from "./components/Wideview";
import forecast from '../public/forcast.json';
export default function App() {
    let [searchedCity,setSearchedCity] = useState("");
    let [city,setCity] = useState("kano");
    let [Data,setData] = useState([]);
    let [loading,setLoading] = useState(true);
    let [error,setError] = useState(null)
    let base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54cb4436af4623404812d9c1bf43568e`
    let forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=54cb4436af4623404812d9c1bf43568e`
    // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54cb4436af4623404812d9c1bf43568e
    useEffect(()=>{
        fetch(base_url,{
            method:"GET"
        }).then((response)=>{
            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            return response.json()
        }).then((data)=>{
            setData(data);
            setLoading(false);
            console.log(data)
        }).catch((err)=>{
            setError(err.message);
            setLoading(false);
            console.log(err.message)
        })
    },[city,base_url])
    
    let [Forecast,setforecast] = useState([]);
    let [forecastL,setforecastL] = useState(true);
    let [forecastError,setforecastError] = useState(null)
    useEffect(()=>{
        fetch(forecast_url,{
            method:"GET"
        }).then((response)=>{
            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            return response.json()
        }).then((result)=>{
            setforecast(result);
            setforecastL(false)
        }).catch((err)=>{
            setforecastError(err.message);
            setforecastL(false)
            console.log("Failed due to " + err)
        })
    },[city,forecast_url])

    if(loading) return <div><h1>Fetching weather....</h1></div>
    if(error) return <div><h1>{error}</h1></div>
    return <div className="container">
        <Smallview Data={Data} forecast={forecast} 
        setSearchedCity={setSearchedCity} 
        searchedCity={searchedCity} city={city} setCity={setCity} />
        <Wideview Data={Data} forecast={Forecast} 
        forecastL={forecastL} forecastError={forecastError}/>
    </div>
}






// useEffect(()=>{
    //     fetch('http://localhost:3001/list',{
    //         method:"GET"
    //     }).then((response)=>{
    //         return response.json()
    //     }).then((data)=>console.log(data)).catch((err)=>{console.log("Failed due to:" + err)})
    // },[])

