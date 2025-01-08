export function LowerContent({Data,loading,error}){
    return <>
        <div className="lower-content">
            {
                loading ? null : error ? null : <>
                <div className="childs">
                <p>Min</p>
                <p>{Math.floor(Number(Data.main.temp_min)-273)}&deg;C</p>
            </div>
            <div id="line"></div>
            <div className="childs">
                <p>Max</p>
                <p>{Math.floor(Number(Data.main.temp_max)-273)}&deg;C</p>
            </div></>
            }
        </div>
    </>
}

