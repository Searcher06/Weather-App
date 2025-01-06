export function HighlightsContainer({Data}){
    return <>
    <div className="contained">
        <div className="highlights-container">
            <div className="highlights">
                <p className="io">Wind Speed</p>
                <div>
                <p><b>{Math.floor(Number(Data.wind.speed))}</b>mph</p>
                <i className="fas fa-wind"></i>
                </div>
            </div>
        </div>
        <div className="highlights-container">
            <div className="highlights">
                <p className="io">Humidity</p>
                <div>
                <p><b>{Data.main.humidity}%</b></p>
                <i className="fas fa-tint"></i>
                </div>
            </div>
        </div>
        <div className="highlights-container">
            <div className="highlights">
                <p className="io">Pressure</p>
                <div>
                <p><b>{Data.main.pressure}</b>hPa</p>
                <i className="fas fa-tachometer-alt"></i>
                </div>
            </div>
        </div><div className="highlights-container">
            <div className="highlights">
                <p className="io">Visibility</p>
                <div>
                <p><b>{Number(Data.visibility) / 1000}</b>km</p>
                <i className="fas fa-eye"></i>
                </div>
            </div>
        </div>
    </div>    
    </>
}