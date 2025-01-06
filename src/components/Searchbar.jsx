export function Searchbar({setSearchedCity,searchedCity,city,setCity}){
    return <>
    <div className="searchbar">
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="search" placeholder="Search by city"  
            value={searchedCity} onChange={(e)=>{
                setSearchedCity(e.target.value)
            }}/>
            <button
            onClick={()=>{setCity(searchedCity)}}
            ><i className="fas fa-search"></i></button>
        </form>
    </div>
    </>
}