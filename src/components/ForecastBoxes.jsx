import steve from "../weatherIcons/photos/steve.svg";

export function ForecastBoxes({forecast}){
    return <>
        <div className="temperature-container">
          {forecast.map((element,index)=>{
            let date = new Date(element.dt_txt);
            let icon = element.weather[0].icon;
            date = date.toLocaleTimeString()
            return <div key={index} className="tem-boxes">
                <p id="side">
                    {date}
                </p>
                <div>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                </div>
                <div className="information">
                    <p>{element.main.humidity}%</p>
                    <p>{Math.floor(Number(element.main.temp_max) - 273)}
                        &deg;C
                    </p>
                </div>
            </div>
          })}
        </div>
    </>
}




{/* <div className="temperature-container">
<div className="tem-boxes">
    <p id="side">tomorrow</p>
    <div>
        <img src={steve} alt="" height={38}/>
    </div>
    <div className="information">
        <p>2%</p>
        <p>27&deg;C</p>
    </div>
</div>
<div className="tem-boxes">
    <p id="side">fri</p>
    <div>
        <img src={steve} alt="" height={38}/>
    </div>
    <div className="information">
        <p>2%</p>
        <p>27&deg;C</p>
    </div>
</div>
<div className="tem-boxes">
    <p id="side">sat</p>
    <div>
        <img src={steve} alt="" height={38}/>
    </div>
    <div className="information">
        <p>2%</p>
        <p>27&deg;C</p>
    </div>
</div>
<div className="tem-boxes">
    <p id="side">sun</p>
    <div>
        <img src={steve} alt="" height={38}/>
    </div>
    <div className="information">
        <p>2%</p>
        <p>27&deg;C</p>
    </div>
</div>  <div className="tem-boxes">
    <p id="side">mon</p>
    <div>
        <img src={steve} alt="" height={38}/>
    </div>
    <div className="information">
        <p>2%</p>
        <p>27&deg;C</p>
    </div>
</div> */}
