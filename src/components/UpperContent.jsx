import Condition from "../weatherIcons/photos/steve.svg";
export function UpperContent({Data,loading,error}){
    const getDayNameAndDate = (dt, timezoneOffset) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const localTime = new Date((dt + timezoneOffset) * 1000);
        const dayName = daysOfWeek[localTime.getUTCDay()];
        const dayOfMonth = localTime.getUTCDate();
        return `${dayName}, ${dayOfMonth}`;
      };
      let formattedDate;
      let icon;
      if(!loading || !error){
        const dt = Data.dt;
        const timezoneOffset = Data.timezone;
        formattedDate = getDayNameAndDate(dt, timezoneOffset);
    }else if(Data){
        formattedDate = getDayNameAndDate(dt, timezoneOffset);
    }
      
    return <>
   <div className="upper-content">
<div className="city">
    {/* <p>{Data.name},{Data.sys.country}</p> */}
    <p>
        {
            loading ? <>loading data....</> : error ? <>{error}</> : Data.name + "," + Data.sys.country
        }
    </p>
</div>
<div className="condition">
    {/* <p>{Data.weather[0].description}</p> */}
    <p>
        {
            loading ? null : error ? null : Data.weather[0].description
        }
    </p>
</div>
<div className="icon-temperature">
     {/* <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
     <p id="deg">{Math.floor(Number(Data.main.temp)-273)}&deg;C</p>
     <p id="day">{formattedDate}</p> */}
     {
        loading ? "Loading...":error ? error : <>
        <img src={`https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`} alt="" />
        <p id="deg">{Math.floor(Number(Data.main.temp)-273)}&deg;C</p>
        <p id="day">{formattedDate}</p> 
        </>
     }
</div>
</div>
    </>
}

