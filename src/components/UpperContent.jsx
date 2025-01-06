import Condition from "../weatherIcons/photos/steve.svg";
export function UpperContent({Data}){
    let icon = Data.weather[0].icon;
    const getDayNameAndDate = (dt, timezoneOffset) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const localTime = new Date((dt + timezoneOffset) * 1000);
        const dayName = daysOfWeek[localTime.getUTCDay()];
        const dayOfMonth = localTime.getUTCDate();
        return `${dayName}, ${dayOfMonth}`;
      };
      
      
      const dt = Data.dt;
      const timezoneOffset = Data.timezone;
      const formattedDate = getDayNameAndDate(dt, timezoneOffset);
      console.log(formattedDate);
    return <>
        <div className="upper-content">
            <div className="city">
                <p>{Data.name},{Data.sys.country}</p>
            </div>
            <div className="condition">
                <p>{Data.weather[0].description}</p>
            </div>
            <div className="icon-temperature">
                 <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                 <p id="deg">{Math.floor(Number(Data.main.temp)-273)}&deg;C</p>
                 <p id="day">{formattedDate}</p>
            </div>
    </div>
    </>
}

